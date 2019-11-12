import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Report } from './models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  apiUrl = 'http://localhost:9000/api/report';
  apiUrl2 = 'http://localhost:9000/api/report/:id';

  constructor(
    private http: HttpClient
  ) { }

  getReport(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }

}
