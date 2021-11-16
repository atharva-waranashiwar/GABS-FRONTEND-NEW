import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { CalenderService } from '../calender.service';

@Component({
  selector: 'app-my-calender',
  templateUrl: './my-calender.component.html',
  styleUrls: ['./my-calender.component.css']
})
export class MyCalenderComponent implements OnInit {

 
   
  

  constructor(private router:Router,private gc:CalenderService) { }
   
   
   cl:AppointmentCalendar[]=[];

   ce= [  
    {  
      "_acID": 1,  
      "_type": "MEDICAL",  
      "_location": "MARGAO",  
      
    },  
    {  
      "_acID": 2,  
      "_type": "BUSINESS",  
      "_location": "MAPUSA",  
    },  
    {  
      "_acID": 3,  
      "_type": "MEDICAL",  
      "_location": "VASCO",   
    },  
    {  
      "_acID": 4,  
      "_type": "MEDICAL",  
      "_location": "PANAJI",  
    }
  ]

   
   
  ngOnInit(): void {
    this.gc.getUser().subscribe(
      (response)=>{
        this.cl=response;
       
      }
    )
    
  }
  createCal(){
  
    this.router.navigate(['/createCal']);
    
  }
  viewApp(){
  
    this.router.navigate(['/']);
    
  }



}
