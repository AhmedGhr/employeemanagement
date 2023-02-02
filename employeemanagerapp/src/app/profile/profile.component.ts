import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { LoginComponent } from '../login/login.component';
import {SharedService} from '../shared/shared.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  
})
export class ProfileComponent implements OnInit {
  

  recievedId! :number;
  employee : any;
  emaail! : string;
  phone!:string;
  title!:string;
  name!:string;
  password!:string;
  imgURL!:string;
  entryHour!: string;
  outHour!:string;
  employeeCode!:string;
  
  

  constructor(private employeeService:EmployeeService , private shared:SharedService , private http :HttpClient ,
     private router:Router,private auth : AuthService) { }

  ngOnInit(): void {
    this.recievedId = this.shared.getMessage();
    this.employeeService.getOneEmployee(this.recievedId).subscribe((res:Employee)=>
    { 
      this.emaail=res.email
      this.phone=res.phone
      this.title=res.title
      this.name=res.name
      this.password=res.password
      this.entryHour=res.entryHour
      this.outHour=res.outHour
      this.employeeCode=res.employeeCode
      this.imgURL=res.imgURL;
    })
  }

   public onUpdateEmployee(employee:Employee):void{
    this.employeeService.updateEmployee(employee).subscribe(
      (response:Employee)=>{
        console.log(response);
       

      
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );


  }

  onEntry():void{
    const savebutton=document.getElementById("submit");
    let date = new Date().toLocaleString();
    this.entryHour = date.toString();
    console.log(this.entryHour)
    savebutton?.click();
    
  }
  onOut():void{
    const savebutton=document.getElementById("submit");
    let date = new Date().toLocaleString();
    

    this.outHour = date.toString();
    savebutton?.click();
    

  }

  public logout(){
    this.auth.logOut();
  }

}
