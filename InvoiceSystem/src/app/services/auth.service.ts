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
  constructor(
    private firebaseAuth: AngularFireAuth,
    private angularFS: AngularFirestore,
    private firestore: AngularFirestore
  ) {
    this.collection = this.firestore.collection<Client>('Users');
  }
  private isAdminSubject = new Subject<boolean>();
  isAdmin$ = this.isAdminSubject.asObservable();

  setAdmin(isAdmin: boolean) {
    this.isAdminSubject.next(isAdmin);
  }
  signup(user: Client) {
    if (user.email && user.password) {
      return this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      
    }
    else {
      return Promise.reject("Email and password are required.");
    }
  }

  // old login
  // login(email: string, password: string) {
  //   this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
  //     (userCredential) => {
  //       const token = userCredential.user?.getIdToken();
  //       console.log(token);
  //       userCredential.user?.getIdToken().then((token: string) => {
  //         localStorage.setItem('authToken', token);
  //         //alert(localStorage.getItem('token'));
  //       });
  //     },
  //     (err) => {
  //       alert('Login Failed');
  //     }
  //   );
  // }

  logout() {
    // to be called
    localStorage.removeItem('user');
    console.log(localStorage.getItem('user'));
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });

    // this.firebaseAuth.authState.subscribe(user => {
    //   if (user) {
    //     // user is logged in, call signOut method
    //     this.firebaseAuth.signOut().then(() => {
    //       localStorage.removeItem('user');
    //     });
    //   } else {
    //     // user is not logged in
    //     console.log('User is not logged in.');
    //   }
    // });
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

  async login(email: string, password: string): Promise<any> {
    const user = this.getUser(email, password)?.subscribe((curUser: any) => {
      localStorage.setItem('user', JSON.stringify(curUser));
    });
    // todo check if there the email or password invalid
  }
  checkIfIsAdmin() {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        user.isAdmin ? this.setAdmin(true) : this.setAdmin(false);
      } catch (error) {
        console.log('Error parsing user JSON:', error);
      }
    } else {
      console.log('User string is null or empty.');
    }
  }
}
