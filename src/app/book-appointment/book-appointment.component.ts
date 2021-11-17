import { CalenderlistService } from './../calenderlist.service';
import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { PortService } from '../port.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  search : string ="";
  searchby:string="username"
  searchedCalenders:Array<any>=[];
  constructor(private userService:UserService, private router: Router, private portNumber:PortService, private serverComm:ServerService) { }

  ngOnInit(): void {
    
  }
  searchfn(){
    this.serverComm.getAppointmentCalendarBySearch(this.search,this.searchby).subscribe(calenders=>{
      this.searchedCalenders=calenders;
    })
  }

}
