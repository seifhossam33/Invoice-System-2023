import { Injectable } from '@angular/core';
import {AngularFireAuth } from'@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth) { }

  signup(email :string,password :string){
   return this.firebaseAuth.createUserWithEmailAndPassword(email,password);
  }
}
