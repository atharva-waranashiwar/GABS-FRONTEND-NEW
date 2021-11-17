import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyCalenderComponent } from './my-calender/my-calender.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CreateNewCalenderComponent } from './create-new-calender/create-new-calender.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import {RouterModule,Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UserService } from './user.service';
import { PortService } from './port.service';
import { ServerService } from './server.service';
import { CalenderdetailComponent } from './calenderdetail/calenderdetail.component';
import { AppentrylistComponent } from './appentrylist/appentrylist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppentrybycalenderComponent } from './appentrybycalender/appentrybycalender.component';
import { SearchedCalendersComponent } from './searched-calenders/searched-calenders.component';
import { BookentryComponent } from './bookentry/bookentry.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    MyCalenderComponent,
    BookAppointmentComponent,
    CreateNewCalenderComponent,
    LoginComponent,
    RegisterComponent,
    CalenderdetailComponent,
    AppentrylistComponent,
    PagenotfoundComponent,
    AppentrybycalenderComponent,
    SearchedCalendersComponent,
    BookentryComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, PortService, ServerService,HttpClient,RouterModule,ActivatedRoute, Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
