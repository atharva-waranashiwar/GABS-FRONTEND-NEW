import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { CalenderService } from '../calender.service';

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
  
 uname="abc";
 uid=1;
 

  onSubmit(data: any) {
    let ac:AppointmentCalendar = new AppointmentCalendar(this.uid,this.uname,data.type,data.location,data.desc,[]);
    this.gc.setCalender(ac);
  }

  constructor(private gc:CalenderService) { }

  ngOnInit(): void {
  }
  

}
