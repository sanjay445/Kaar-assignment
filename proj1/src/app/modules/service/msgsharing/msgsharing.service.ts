import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgsharingService {
  log:Boolean = false
  msgSubject = new Subject();
  constructor(private _http: HttpClient) { }

  sendValue = (data: any) => {
    this.msgSubject.next(data);
  };
  getValue = () => {
    return this.msgSubject.asObservable();
  };

  getUnivdetails(): Observable<any> {
    return this._http.get("http://universities.hipolabs.com/search?country=United+States");
  };
  getScrolldet(start: any, limit: any): Observable<any> {
    const url = '/api/' + start + '/' + limit + '';
    return this._http.get(url);
  }
  getBool=():any=> {
    this.log = true
  }
  getAuth=():any=> {
    return this.log;
  }
}
