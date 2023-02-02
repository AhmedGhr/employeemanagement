import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'selenium-webdriver';
import{Employee} from './employee';
import{HttpClient}from '@angular/common/http'
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees! : Employee[];
  public editEmployee! : Employee ;
  public deleteEmployee! : Employee ;
  public imgURL:any;
  public userFile! :File;
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  constructor(private employeeServive : EmployeeService ,private http :HttpClient){}
  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees():void{
    this.employeeServive.getEmployees().subscribe(
      (response :Employee[])=>
      {this.employees=response;},
      (error :HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }


  public onAddEmployee(addForm:NgForm):void{
    document.getElementById('add-employee-form')?.click();
    this.employeeServive.addEmployee(addForm.value).subscribe(
      (response:Employee)=>{
        console.log(response);
        this.getEmployees()
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );


  }

  public onUpdateEmployee(employee:Employee):void{
    this.employeeServive.updateEmployee(employee).subscribe(
      (response:Employee)=>{
        console.log(response);
        this.getEmployees()
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );


  }


  public onDeleteEmployee(employeeId:number):void{
    this.employeeServive.deleteEmployee(employeeId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getEmployees()
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );


  }

  public onSelectedFile(event:any){
     this.imgURL=event.target.files[0];
  }

  public onUpload():void{
    this.http.post('',this.imgURL)
  }

  public searchEmployees(key:string):void{
    const result : Employee[]=[];
    for(const employee of this.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1){

        result.push(employee);
      }
    }
    this.employees=result;
    if(result.length===0 || !key){
      this.getEmployees();
    }
  }


  public openAddModal(mode:string):void{
    const button = document.createElement('button');
  button.type='button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');
  const container =document.getElementById('main-container');
  
    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    container?.appendChild(button);
  button.click();
  }
public onOpenModal(employee:Employee, mode:string){
  const button = document.createElement('button');
  button.type='button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');
  const container =document.getElementById('main-container');
  
  
  if(mode === 'edit'){
    this.editEmployee=employee;
    button.setAttribute('data-target','#updateEmployeeModal');
  }
  
  if(mode === 'delete'){
    this.deleteEmployee =employee;
    button.setAttribute('data-target','#deleteEmployeeModal');
  }
  container?.appendChild(button);
  button.click();

}

}
