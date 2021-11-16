import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicveService } from '../auth-servicve.service';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../user.service';
import { AppointmentEntity } from '../AppointmentEntity';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { User } from '../User';
import { PortService } from '../port.service';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ="guest";
  password: string ="guest" ;
  constructor(private userService:UserService, private router: Router, private portNumber:PortService, private serverComm:ServerService) { }

  ngOnInit(): void {

  }

  login(){


    //logic to check for authentication
    

    //obtain user object
    this.serverComm.getUser(this.username).subscribe(user=>{
        let listAppointmentEntries : AppointmentEntity[] = [];
        if (user.appointmentEntries.length!=0)
        {
          for(let i = 0; i<user.appointmentEntries.length; i++)
          {
            
            let date:Date = new Date(user.appointmentEntries[i].date);
            listAppointmentEntries.push(new AppointmentEntity(user.appointmentEntries[i].aeID,
              user.appointmentEntries[i].appointmentCalendarID,user.appointmentEntries[i].ownerid, date, 
              user.appointmentEntries[i].isApproved, user.appointmentEntries[i].timeSlot, 
              user.appointmentEntries[i].apointeeid, user.appointmentEntries[i].description));

          }
        }
        let listAppointmentCalendars : AppointmentCalendar[] = [];
        if(user.appointmentCalendars.length != 0)
        {
          for(let i = 0; i<user.appointmentCalendars.length; i++)
          {
            let listAppEntries : AppointmentEntity[] = [];
            if (user.appointmentCalendars[i].appointmentEntries.length != 0)
            {
              for(let j = 0; i<user.appointmentCalendars[i].appointmentEntries.length; j++)
              {
                let date:Date = new Date(user.appointmentCalendars[i].appointmentEntries[j].date);
                listAppEntries.push(new AppointmentEntity(user.appointmentCalendars[i].appointmentEntries[j].aeID,
                user.appointmentCalendars[i].appointmentEntries[j].appointmentCalendarID,user.appointmentCalendars[i].appointmentEntries[j].ownerid, date, 
                user.appointmentCalendars[i].appointmentEntries[j].isApproved, user.appointmentCalendars[i].appointmentEntries[j].timeSlot, 
                user.appointmentCalendars[i].appointmentEntries[j].apointeeid, user.appointmentCalendars[i].appointmentEntries[j].description));
              }
              listAppointmentCalendars.push(new AppointmentCalendar(user.appointmentCalendars[i].acID, user.appointmentCalendars[i].ownername, user.appointmentCalendars[i].type, user.appointmentCalendars[i].location, user.appointmentCalendars[i].description, listAppEntries));
            }
          }
        }
        
        let userObject : User = new User(user.userID, user.userName, user.mobileNumber, 
            new Date(user.DoB), user.email, user.isAdmin, listAppointmentEntries, listAppointmentCalendars);
        this.userService.setUser(userObject);
        
    })
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
