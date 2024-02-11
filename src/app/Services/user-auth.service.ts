import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject : BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false)
   }

  login(username: string, password:string){
    // Call login api, and get access token
    let token = '123456789';
    localStorage.setItem('token', token);
    this.isLoggedSubject.next(true);

  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(){
    return localStorage.getItem('token') != null;
  }

  register(){

  }

  isUserLoggedSubject(){
    return this.isLoggedSubject.asObservable();
  }

  
}
