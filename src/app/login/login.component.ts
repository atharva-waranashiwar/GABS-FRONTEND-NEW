import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicveService } from '../auth-servicve.service';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../user.service';
import { AppointmentEntity } from '../AppointmentEntity';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ="guest";
  password: string ="guest" ;
  constructor(private userService:UserService, private router: Router, private auth:AuthServicveService) { }

  ngOnInit(): void {

  }

  login(){
    //logic to check for authentication
    let date:Date = new Date();
    let ae:AppointmentEntity = new AppointmentEntity(1001,101,"aashay",date,true,0,"valen", "Sick");
    let ac:AppointmentCalendar = new AppointmentCalendar(101, "aashay","doctor","goa","bone",[ae]);


    let user :User= new User(1,"aashay","988123123", date, "a@a.com", true, [ae],[ac] );
    console.log(user.getUserName());
    
    this.userService.setUser(user);
    this.goTohome();
  }
 goTohome(){
    this.router.navigate(['/home']);
  }
  register(){
    //register component open
    this.router.navigate(['/register']);
  }

}
