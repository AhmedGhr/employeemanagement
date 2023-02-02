import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGaurdService } from './service/auth-guard.service';


const routes: Routes = [
  {path : 'admin', canActivate:[AuthGaurdService] ,component:EmployeeComponent},
  {path : '', component:LoginComponent},
  {path : 'profile', component:ProfileComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
