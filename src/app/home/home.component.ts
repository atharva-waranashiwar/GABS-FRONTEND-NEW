import { Component, OnInit } from '@angular/core';
import { AuthServicveService } from '../auth-servicve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string="";// change username to userID

  constructor(private auth:AuthServicveService) { }

  ngOnInit(): void {
    this.auth.getUsername().subscribe(newusername => {
      this.username = newusername;
    });
    
  }

}
