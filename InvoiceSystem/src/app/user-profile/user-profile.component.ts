import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  isReadOnly: boolean = true;
  userData: any;
  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
     // console.log(this.userData);
    } else {
      this.userData = null;
    }
  }
}
