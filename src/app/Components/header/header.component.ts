import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogged: boolean = false;
  constructor(private authService: UserAuthService) {
    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit(): void {
    this.authService.isUserLoggedSubject().subscribe(val => this.isUserLogged = val);
  }



}
