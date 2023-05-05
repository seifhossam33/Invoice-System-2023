import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/auth.service';
import { Client } from '../interfaces/client.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorMessage: string = '';
  constructor(private authService: FirebaseService, private router: Router) {}
  user!: Client;
  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      city: '',
      postalCode: '',
      isAdmin: false,
    };
  }

  onSubmit(form: NgForm) {
    let user: Client = form.value;
    if (user.email && user.password && this.authService) {
      this.authService
        .signup(user)
        .then((result) => {
          this.errorMessage = '';
          const userID = result.user?.uid;
          user.id = userID;
          this.authService.addUser(user);
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          this.errorMessage = err.message;
        });
    }
  }

  //   onSubmit(form : NgForm){
  //     let user : Client = form.value;
  //     if(user.email && user.password)
  //     this.authService.signup(user.email,user.password)
  //       .then(user => console.log())
  //     .catch(err => {
  //      this.errorMessage=err.message;
  //     })

  // }
}
