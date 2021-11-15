import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalenderlistService {

  constructor(private http:HttpClient) { }

  getCalenders(searchText:string,searchCriteria:string):Observable<any>{
    return this.http.get('/book')
  }
}
