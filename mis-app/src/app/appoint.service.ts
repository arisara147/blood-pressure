import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appoint } from './models/appoint';

@Injectable({
  providedIn: 'root'
})
export class AppointService {
 apiUrl = 'http://localhost:9000/api/appoint';

  constructor(
    private http: HttpClient
  ) { }
  getAppointAll(): Observable<Appoint[]> {
    return this.http.get<Appoint[]>(this.apiUrl);
  }
}
