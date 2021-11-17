import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

 
 

  onSubmit(data: any) {
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
