import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


let apiUrl = "http://localhost:80/blood-pressure-api/";

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public getStatus: any = null;
  public nameDoctor:any = null;
  public getid: any = null;
  public user = null;
  public pwd = null;
  constructor(public http: HttpClient) { }

  bloodpressure(_obj) {
    console.log(_obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'blood-pressure.php', _obj)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  Doctor(_obj) {
    console.log(_obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'doctor.php', _obj)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  Admin(_obj) {
    console.log(_obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'admin.php', _obj)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  Nurse(_obj) {
    console.log(_obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'nurse.php', _obj)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  Patient(_obj) {
    console.log(_obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'patient.php', _obj)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  checklogin(_obj) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'check_login.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  profile(_obj) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'profile.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  news(_obj) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'news.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  appoint(_obj) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'appoint.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  treatment(_obj) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'treatment.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
