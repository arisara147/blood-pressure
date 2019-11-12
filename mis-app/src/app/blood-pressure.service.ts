import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloodpressure } from './models/blood-pressure';
import { reject } from 'q';

let apiUrl2 = "http://127.0.0.1/bookapi/";

@Injectable({
  providedIn: 'root'
})
export class BloodPressureService {
  apiUrl = 'http://localhost:9000/api/report';

  constructor(
    private http: HttpClient
  ) { }

  getBloodPressure(): Observable<Bloodpressure[]> {
    return this.http.get<Bloodpressure[]>(this.apiUrl);
  }
  insert(sys: string, dia: string, pr: string ): Observable<Bloodpressure> {
    const header = { 'Cotent-Type': 'application/json' };

    const body = {
      // tslint:disable-next-line: object-literal-key-quotes
      'sys': sys,
      // tslint:disable-next-line: object-literal-key-quotes
      'dia': dia,
      // tslint:disable-next-line: object-literal-key-quotes
      'pr': pr
    };
    return this.http.post<Bloodpressure>(this.apiUrl, body, { headers: header });
  }

}
