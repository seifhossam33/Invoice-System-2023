import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/auth.service';
import { Client } from '../interfaces/client.interface';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: FirebaseService,
    private router: Router,
    private toast: ToastService
  ) {}

  user = {
    email: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    let user: Client = form.value;
    if (user.email && user.password) {
      this.authService
        .login(user.email, user.password)
        .then(() => {
          // Login successful, navigate to the user profile page
          this.router.navigate(['/userProfile']);
        })
        .catch((error) => {
          // Login failed, display an error message or handle the error in some other way
          console.log("there is an error", error);
        });
    }
  }
}
