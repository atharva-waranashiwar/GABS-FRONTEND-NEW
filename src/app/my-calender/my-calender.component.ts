import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-calender',
  templateUrl: './my-calender.component.html',
  styleUrls: ['./my-calender.component.css']
})
export class MyCalenderComponent implements OnInit {

 
   
  

  constructor(private router:Router,private ss:ServerService,private us:UserService) { }
   
   
   appCalenderList:Array<any>=[];

  
   uid=0;
 
 u_obj=this.us.getUser().subscribe(value=>{
   this.uid=value['_userID'];
  
 });
 

 

   
   
  ngOnInit(): void {
     this.ss.getAppointmentCalendar(this.uid).subscribe(
      (response)=>{
        this.appCalenderList=response;
       
      }
    )
    
  }
  createCal(){
  
    this.router.navigate(['/createCal']);
    
  }
  



}
