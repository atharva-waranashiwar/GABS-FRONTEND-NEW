import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyCalenderComponent } from './my-calender/my-calender.component';
import { FormsModule } from '@angular/forms';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CreateNewCalenderComponent } from './create-new-calender/create-new-calender.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UserService } from './user.service';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
