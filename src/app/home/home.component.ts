import { Component, OnInit } from '@angular/core';
import { AuthServicveService } from '../auth-servicve.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string="";// change username to userID

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user =>
      {
        console.log(this.username);
        console.log("imhere");
        
        this.username = user.getUserName();
      })
    
  }

}
