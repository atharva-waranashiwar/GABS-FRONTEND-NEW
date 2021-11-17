import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-calenders',
  templateUrl: './searched-calenders.component.html',
  styleUrls: ['./searched-calenders.component.css']
})
export class SearchedCalendersComponent implements OnInit {
  @Input()
  applist:Array<any>=[];
  constructor(private router:Router) { }
  ngOnInit(): void {
  }

}
