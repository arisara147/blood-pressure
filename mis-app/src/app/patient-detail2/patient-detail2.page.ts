import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-patient-detail2',
  templateUrl: './patient-detail2.page.html',
  styleUrls: ['./patient-detail2.page.scss'],
})
export class PatientDetail2Page implements OnInit {

  DataPatientId ={
    "p_id":"",
  }

  dataPatientId:any = {};

  constructor(  private activate: ActivatedRoute,
    public callApi:CallapiService,
    public router:Router) {
      
    this.DataPatientId.p_id = this.activate.snapshot.paramMap.get('_id');
    console.log(this.DataPatientId.p_id);
    this.getDataPatientId();
   }

  ngOnInit() {
  }

  getDataPatientId(){
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataPatientId));
    dataForm.append("Function_Name", "getProfilePatientById");
    this.callApi.profile(dataForm).then((result) => {
      this.dataPatientId = result[0];
      console.log(this.dataPatientId);
    });
  }
}
