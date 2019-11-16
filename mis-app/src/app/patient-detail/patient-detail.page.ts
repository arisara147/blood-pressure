import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.page.html',
  styleUrls: ['./patient-detail.page.scss'],
})
export class PatientDetailPage implements OnInit {
  listDoctor: any;
  listPateint: any;

  checkStatus: any;
  nurseStatus: any;

  constructor(public callApi: CallapiService,public router:Router) { }

  ngOnInit() {
    this.getPateintAll();
    this.getDoctorAll();
  }

  getPateintAll() {
    this.checkStatus = this.callApi.getStatus;
    console.log(this.checkStatus);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallPatient");
    this.callApi.Patient(dataFrom).then((result) => {
      this.listPateint = result;
      console.log(this.listPateint);
    });
  }

  getDoctorAll() {
    this.checkStatus = this.callApi.getStatus;
    console.log(this.checkStatus);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallDoctor");
    this.callApi.Doctor(dataFrom).then((result) => {
      this.listDoctor = result;
      console.log(this.listDoctor);
    });
  }

  
  detailPatient(id) {
    this.router.navigate(['/patient-detail2', { _id: id }]);
  }
}
