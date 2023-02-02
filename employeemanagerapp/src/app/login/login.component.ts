import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Employee } from '../employee';
import{EmployeeService } from '../employee/employee.service'
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:boolean=false;
  id!:number;
  email:string='';
  

  constructor(private employeeService:EmployeeService , private router : Router ,private shared :SharedService) { }

  ngOnInit(): void {
    
  }



  

  login(loginForm:NgForm):void{
    
    this.employeeService.login(loginForm.value).subscribe((res : Employee)=>{
      console.log(res.id);
      this.id=res.id;
      this.shared.setMessage(res.id)
     
      
     if(res.email==="admin@example.com" && res.password==="admin" ){
      sessionStorage.setItem('email', res.email)
        this.router.navigate(['/admin']);
      }

      else{
        sessionStorage.setItem('email',res.email);
        this.shared.setEmail(res.email);
        this.router.navigate(['/profile'] );
      }

      

      

    },err=>{alert("Invalid username or password , please try again")
  loginForm.reset()
  }
    )

  }

}
