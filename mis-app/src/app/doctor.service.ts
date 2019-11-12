import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Doctor } from './models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl = 'http://localhost:9000/api/doctor';
  apiUrl2 = 'http://localhost:9000/api/doctor/:id';

  constructor(
    private http: HttpClient
  ) { }

  getDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  getDoctorDetail(id: number): Observable<any[]> {
    console.log(id);
    const param = { id: id.toString() };
    console.log(this.apiUrl2, { params: param });
    return this.http.get<any[]>(this.apiUrl2, { params: param });
  }

}
