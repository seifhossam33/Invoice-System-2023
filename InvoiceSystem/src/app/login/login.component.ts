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
  constructor(
    private authService: FirebaseService,
    private router: Router,
  ) {}
  visible = false;
  failedLogin = false;
  user = {
    email: '',
    password: '',
  };

  async onSubmit(form: NgForm) {
    let user: Client = form.value;
    if (user.email && user.password) {
      const success = await this.authService.login(user.email, user.password);
      if (success) {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
          this.router.navigate(['/userProfile']);
        }, 1000);
      } else {
        this.failedLogin = true;
        console.log('Invalid email or password');
      }
    }
  }
}
