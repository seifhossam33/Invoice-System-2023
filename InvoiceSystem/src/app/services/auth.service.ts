import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore} from'@angular/fire/compat/firestore'
import { Client } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth: AngularFireAuth , private angularFS : AngularFirestore   ) { }

  signup(user:Client) {
    if(user.email && user.password){
    this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const userID = userCredential.user?.uid;
        user.id=userID;
        this.addUser(user);
        alert("Registration Successful")
      }, err => {
        alert("Registration Failed");
      })
    }
  }


  login(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      const token = userCredential.user?.getIdToken();
      
      userCredential.user?.getIdToken().then((token: string) => {
        localStorage.setItem("token", token);
        alert(localStorage.getItem("token"));
      });
    }, err => {
      alert("Login Failed");

    })
  }
  logout(){
  this.firebaseAuth.signOut().then(()=>{
    localStorage.removeItem("token");
    
  })
  }
  addUser(user:Client){
    user.confirmPassword='';
    return this.angularFS.collection('/Users').add(user);

  }

  getUsers(){
    
  }
}
