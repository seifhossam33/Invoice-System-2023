import { Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
  isLoginPage: boolean = false;
  isSignUp: boolean = false;

  constructor(private router: Router){ }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.isLoginPage = (event.url ==='/login');
        this.isSignUp = (event.url ==='/signup');
      }
    });
  }

}
