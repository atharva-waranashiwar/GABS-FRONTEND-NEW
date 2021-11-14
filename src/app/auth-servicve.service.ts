import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicveService {
  private subject = new Subject <string> ();
  constructor() { }

  setUsername(username:string){ // called by login comp
    this.subject.next(username);

  }
  getUsername():Observable<string>{
    return this.subject.asObservable();
  }
} 
