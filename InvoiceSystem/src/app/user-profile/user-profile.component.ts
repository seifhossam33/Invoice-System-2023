import { Component } from '@angular/core';

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
  async ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
      console.log(this.userData);
    } else {
      this.userData = null;
    }
  }
  // todo fill user data when logged in
}
