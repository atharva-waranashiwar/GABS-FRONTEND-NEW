import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calenderdetail',
  templateUrl: './calenderdetail.component.html',
  styleUrls: ['./calenderdetail.component.css']
})
export class CalenderdetailComponent implements OnInit {
  @Input()
  applist:Array<any>=[];
  constructor(private router:Router) { }
  
 

  ngOnInit(): void {
  }

}
