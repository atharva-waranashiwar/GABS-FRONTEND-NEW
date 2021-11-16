import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-calender',
  templateUrl: './my-calender.component.html',
  styleUrls: ['./my-calender.component.css']
})
export class MyCalenderComponent implements OnInit {

 
   
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createCal(){
    this.router.navigate(['/createCal'])
  }



}
