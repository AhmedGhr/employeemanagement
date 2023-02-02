import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message! :number;
  email!:string;
  constructor() { }

  setMessage(message:number){
    this.message=message;
  }

  setEmail(email:string){
    this.email=email;
  }

  getEmail(){
    return this.email;
  }

  getMessage(){
    return this.message;
  }
}
