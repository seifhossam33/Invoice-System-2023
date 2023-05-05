import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public authService: FirebaseService) {}
  userIcon: string = '/assets/userIcon.jpg';
  logoutIcon: string = '/assets/out.png';
  isAdmin!: boolean;
  userType: 'admin' | 'user' = 'admin';
  // todo take from parent userType and set conditions
  ngOnInit() {
    this.isAdmin = this.authService.checkIfIsAdmin();

    this.userType = this.isAdmin ? 'admin' : 'user';
  }
  applyLogout() {
    this.authService.logout();
  }
}
