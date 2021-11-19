import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {
  BookEntryForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    location: new FormControl(''),
    desc: new FormControl('')
  });
  timeslot:number;
 
 

  onSubmit(data: any) {
    
    
  }
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((newparams)=>{
        this.timeslot=parseInt(newparams["timeslot"]);
        console.log("im here");
        
        console.log(this.timeslot);
        
      })
  }

  ngOnInit(): void {
  }

}
