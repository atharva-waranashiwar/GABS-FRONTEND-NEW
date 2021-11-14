import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CreateNewCalenderComponent } from './create-new-calender/create-new-calender.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCalenderComponent } from './my-calender/my-calender.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { //default
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'myCal',
    component:MyCalenderComponent
  },
  {
    path:'bookApp',
    component:BookAppointmentComponent
  },
  {
    path: 'createCal',
    component:CreateNewCalenderComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
