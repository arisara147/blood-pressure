import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


let apiUrl = "http://localhost:80/blood-pressure-api/";

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(public http:HttpClient) { }

  bloodpressure(_obj){
    console.log(_obj);
    return new Promise((resolve, reject) =>{
      this.http.post(apiUrl + 'blood-pressure.php', _obj)
      .subscribe(res => {
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }
}
