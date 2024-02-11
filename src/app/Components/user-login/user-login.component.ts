import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  isAuthenticated: boolean = false;
  constructor(private authService: UserAuthService){

  }
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isUserLogged;
  }

  login(){
    this.authService.login('username', 'password');
    this.isAuthenticated = true;
  }

  logout(){
    this.authService.logout();
    this.isAuthenticated = false;
  }

  
}
