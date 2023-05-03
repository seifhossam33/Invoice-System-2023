import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Client } from '../interfaces/client.interface';
import { Observable, Subject, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private collection: AngularFirestoreCollection<Client>;
  private isAdminSubject = new Subject<boolean>();
  isAdmin$ = this.isAdminSubject.asObservable();
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

      const user = this.getUser(email, password)?.subscribe((curUser: any) => {
        localStorage.setItem('user', JSON.stringify(curUser));
      });
      // Todo need to find another way
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Check if there the email or password invalid
      alert('Login Success');
      return true;
    } catch (error) {
      alert('Login Failed');
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    console.log(localStorage.getItem('user'));
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }

  addUser(user: Client) {
    user.confirmPassword = '';
    return this.angularFS.collection('/Users').add(user);
  }

  getUsers(): Observable<Client[]> {
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

  getUser(email: string, password: string): Observable<any> {
    if (!email || !password) {
      return of({ message: 'Invalid email or password' });
    }

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
    console.log('user', user);
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
}
