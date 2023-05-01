import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
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
