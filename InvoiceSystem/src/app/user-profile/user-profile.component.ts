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
    this.userData = JSON.parse(localStorage.getItem('user') || '');
    console.log(this.userData);
  }
  // todo fill user data when logged in
}
