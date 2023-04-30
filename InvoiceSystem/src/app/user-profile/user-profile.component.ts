import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  isReadOnly: boolean = true;

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }
  // todo fill user data when logged in
}
