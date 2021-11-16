import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AppointmentCalendar } from './AppointmentCalendar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  private _cdata = new ReplaySubject<AppointmentCalendar>();
  readonly user = this._cdata.asObservable();

  public getUser() {
    this.http.get('https://gorest.co.in/public/v1/users').subscribe(data=>{
      return data;
    })
  }

  public setCalender(cd: AppointmentCalendar) {
    const a={
      "acID": cd.getAcID(),
      "ownername": cd.getOwnerName(),
      "type": cd.getType(),
      "location": cd.getLocation(),
      "description": cd.getDescription(),
      "listAppointmentEntries":cd.getListAppointmentEntries()
    }
    //console.log(a);
    this._cdata.next(cd);
    this.http.post<any>('',a).subscribe(data => {
    //  console.log(data);
  });
    
  }

  constructor(private http:HttpClient) { }
}
