import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/auth.service';
import { Client } from '../interfaces/client.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: FirebaseService, private router: Router) {}

  user = {
    email: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    let user: Client = form.value;
    if (user.email && user.password)
      this.authService.login(user.email, user.password);
      this.router.navigate(['/container']);
  }
}
