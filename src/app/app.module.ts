import { Router, RouterModule, Routes } from '@angular/router';
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

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UserService } from './user.service';
import { PortService } from './port.service';
import { ServerService } from './server.service';
import { CalenderdetailComponent } from './calenderdetail/calenderdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppentrybycalenderComponent } from './appentrybycalender/appentrybycalender.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { LogoutComponent } from './logout/logout.component';


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
    PagenotfoundComponent,
    AppentrybycalenderComponent,
    BookentryComponent,
    PagenotfoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [UserService, PortService, ServerService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
