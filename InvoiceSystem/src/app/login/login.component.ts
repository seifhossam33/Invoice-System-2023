import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/auth.service';
import { Client } from '../interfaces/client.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: FirebaseService,
    private router: Router,
    private toast: ToastrService
  ) {}

  user = {
    email: '',
    password: '',
  };

 async onSubmit(form: NgForm) {
    let user: Client = form.value;
    if (user.email && user.password) {
      const success = await this.authService.login(user.email, user.password)
      if (success) {
        this.router.navigate(['/userProfile']);
        this.toast.success("Login Success")
      } else {
        this.toast.error("Login Failed");
      }
    }
  }

}