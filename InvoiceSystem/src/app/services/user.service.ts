import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { CollectionReference, addDoc, setDoc } from 'firebase/firestore';



import {User} from '../interfaces/user.interface'
export class UserService {
 
  constructor( private fs : Firestore) { }

  addNewUser(id:string,firstName:string,lastName:string,email:string,password:string,country:string,
    city:string,postalCode:string){
      const user: User = { id, firstName, lastName, email, password, country, city, postalCode };

       //setDoc(doc(db,"Users",id),user);
    }
}
