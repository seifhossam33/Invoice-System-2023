import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  ngOnInit(): void{    
  }
  userIcon: string = "/assets/userIcon.jpg";
  logoutIcon: string = "/assets/out.png";
  // todo take from parent userType and set conditions
  userType = 'admin';

}
