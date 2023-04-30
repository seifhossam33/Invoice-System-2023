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
  userType: 'user' | 'admin' = 'user';
  // todo take from parent userType and set conditions
  ngOnInit() {
    this.authService.checkIfIsAdmin();
    this.authService.isAdmin$.subscribe((isAdmin) => {
      console.log(isAdmin);
      this.userType = isAdmin ? 'admin' : 'user';
    });
  }
  applyLogout() {
    this.authService.logout();
  }
}
