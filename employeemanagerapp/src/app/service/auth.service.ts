import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private shared:SharedService) { }

  authenticate(username:string, password:string) {
    if ((username === "admin@example.com" && password === "admin") || ( this.shared.getEmail()!='')) {
      sessionStorage.setItem('email', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}
