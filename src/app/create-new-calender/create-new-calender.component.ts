import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { ServerService } from '../server.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-new-calender',
  templateUrl: './create-new-calender.component.html',
  styleUrls: ['./create-new-calender.component.css']
})
export class CreateNewCalenderComponent implements OnInit {
  profileForm = new FormGroup({
    cid: new FormControl(''),
    type: new FormControl(''),
    location: new FormControl(''),
    desc: new FormControl('')
  });

  citys = [
    "MARGAO",
    "MAPUSA",
    "VASCO",
    "PANJIM"
  ]
  selected = "----"
 uid=0;
 uname="";
 u_obj=this.us.getUser().subscribe(value=>{
   this.uid=value['_userID'];
   this.uname=value['_userName'];
 });
 
 

  onSubmit(data: any) {
    this.ss.addAppointmentCalendar(data.cid,this.uid,data.type,data.location,data.desc);
    
  }

  constructor(private ss:ServerService, private us:UserService) { }

  ngOnInit(): void {

  }
  

}
