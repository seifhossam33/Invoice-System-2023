import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  isReadOnly: boolean = true;
  user: any;
  userData: any;
  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }
  constructor(
    private afAuth: AngularFireAuth,
    private authService: FirebaseService
  ) {}

  async ngOnInit() {
    this.user = await this.authService.getCurrentUser();
    console.log(this.user);
    if (this.user) {
      this.authService
        .getUserData(this.user.email)
        .subscribe((curUser: any) => {
          this.userData = curUser[0];
          //console.log(this.userData);
        });
    }
  }
  // todo fill user data when logged in
}
