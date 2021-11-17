import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppentrylistComponent } from './appentrylist/appentrylist.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CreateNewCalenderComponent } from './create-new-calender/create-new-calender.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCalenderComponent } from './my-calender/my-calender.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalenderdetailComponent } from './calenderdetail/calenderdetail.component';

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
    component:MyCalenderComponent,
    children:[
      {
        path:'calendardetails/:AcID',
        component:CalenderdetailComponent
      }
    ]
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
  },
  {
    path: '**',
    component:PagenotfoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
