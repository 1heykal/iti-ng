import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  login(username: string, password:string){
    // Call login api, and get access token
    let token = '123456789';
    localStorage.setItem('token', token)
  }

  logout(){
    localStorage.removeItem('token');
  }

  get isUserLogged(){
    return localStorage.getItem('token') != null;
  }

  register(){

  }
}
