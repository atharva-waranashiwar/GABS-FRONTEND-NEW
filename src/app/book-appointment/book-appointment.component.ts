import { CalenderlistService } from './../calenderlist.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  search : string ="";
  searchby:string="username"
  searchedCalenders:Array<any>=[];
  constructor(private calenderlist:CalenderlistService) { }

  ngOnInit(): void {
  }
  searchfn(){
    
  }

}
