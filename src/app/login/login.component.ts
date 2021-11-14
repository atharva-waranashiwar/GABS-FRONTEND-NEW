import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicveService } from '../auth-servicve.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ="guest";
  password: string ="guest" ;
  constructor(private router: Router, private auth:AuthServicveService) { }

  ngOnInit(): void {
  }

  login(){
    //logic to check for authentication
    this.goTohome();
    this.auth.setUsername(this.username);
  }
 goTohome(){
    this.router.navigate(['/home']);
  }
  register(){
    //register component open
    this.router.navigate(['/register']);
  }

}
