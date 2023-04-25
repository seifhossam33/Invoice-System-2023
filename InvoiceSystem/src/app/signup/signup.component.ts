import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FirebaseService}  from 'src/app/services/auth.service'
import { User } from '../interfaces/user.interface';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  errorMessage :string = '';
  constructor( private authService : FirebaseService){}
  user = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    country:'',
    city:'',
    postalCode:''
    


  };

  onSubmit(form : NgForm){
    let user : User = form.value;
    if(user.email && user.password)
       this.authService.signup(user);
     }

}