import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppointmentEntity } from '../AppointmentEntity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string="";// change username to userID
  appEntryList:Array<AppointmentEntity>=[];
  userID:number=0;

  constructor(private userService:UserService) {
    this.userService.getUser().subscribe(user=>{ 
             
      this.userID = user.getuserID();
      this.appEntryList = user.getListMyBookedAppointmentEntries();    
     })
   }

  ngOnInit(): void {
    
  }

}
