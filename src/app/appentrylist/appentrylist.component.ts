import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appentrylist',
  templateUrl: './appentrylist.component.html',
  styleUrls: ['./appentrylist.component.css']
})
export class AppentrylistComponent implements OnInit {
  appeid:number=0;

  appEntryList:Array<any>=[];
  // appt=[{
  //   "_date":'22/8/1010',
  //   "_timeslot":2,
  //   "_appointeeid":3,
  //   "_description":"valen"
  // }];

  constructor(private ar:ActivatedRoute , private ss:ServerService) {
    this.ar.params.subscribe(newparams=>{
      this.appeid=parseInt(newparams['id']) ;
    })
   }
   
   

  ngOnInit(): void {
    this.ss.getAppointmentEntriesByOwner(this.appeid).subscribe(response=>{
      this.appEntryList=response;
    })
  }

}
