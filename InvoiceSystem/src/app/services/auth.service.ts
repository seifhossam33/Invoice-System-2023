import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Client } from '../interfaces/client.interface';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private collection: AngularFirestoreCollection<Client>;
  private isAdminSubject = new Subject<boolean>();
  isAdmin$ = this.isAdminSubject.asObservable();
  curUserType: string = '';
  constructor(
    private firebaseAuth: AngularFireAuth,
    private angularFS: AngularFirestore,
    private firestore: AngularFirestore
  ) {
    this.collection = this.firestore.collection<Client>('Users');
  }

  signup(user: Client) {
    if (user.email && user.password) {
      return this.firebaseAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } else {
      return Promise.reject('Email and password are required.');
    }
  }
  async login(email: string, password: string): Promise<boolean> {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      const user = this.getUserData(email, password)?.subscribe(
        (curUser: any) => {
          localStorage.setItem('user', JSON.stringify(curUser));
          curUser.isAdmin
            ? (this.curUserType = 'admin')
            : (this.curUserType = 'user');
        }
      );
      // await new Promise((resolve) => setTimeout(resolve, 100));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    // console.log(localStorage.getItem('user'));
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }

  addUser(user: Client) {
    user.confirmPassword = '';
    return this.angularFS.collection('/Users').add(user);
  }

  getUsers(): Observable<Client[]> {
    /*
    transforms the array of DocumentChangeAction objects returned by snapshotChanges()
    into an array of plain JavaScript objects with the document ID and data.
    Specifically, it calls the map() method on the actions array, which is the array of DocumentChangeAction objects, and for each DocumentChangeAction,
    it extracts the data and ID of the document using the payload property, and returns a new object with these values spread into it.

    snapshotChanges() method does not actually get called directly in your code. Instead, 
    it is called by the Firestore SDK internally whenever there is a change in the collection, 
    and the Observable returned by snapshotChanges() emits the new array of DocumentChangeAction objects to any subscribed observers.
     */
    return this.collection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getUserData(email: string, password: string): Observable<any> {
    return this.firestore
      .collection('Users', (ref) =>
        ref.where('email', '==', email).where('password', '==', password)
      )
      .valueChanges()
      .pipe(
        map((users) => {
          if (users.length === 0) {
            return of({ message: 'User not found' });
          }
          return users[0];
        }),
        catchError((error) => {
          return of({ message: 'Error fetching user data' });
        })
      );
  }

  async getCurrentUser(): Promise<any> {
    const user = localStorage.getItem('user');
    //  console.log('user', user);
    return user;
  }

  setAdmin(isAdmin: boolean) {
    this.isAdminSubject.next(isAdmin);
  }

  checkIfIsAdmin(): boolean {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        return user.isAdmin;
      } catch (error) {
        console.log('Error parsing user JSON:', error);
      }
    } else {
      console.log('User string is null or empty.');
    }
    return false;
  }
  checkIfUserLoggedIn() {
    const user = localStorage.getItem('user');
    console.log(user);
    return user != null;
  }
}
