import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from 'src/app/service/callapi.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.page.html',
  styleUrls: ['./doctor-detail.page.scss'],
})
export class DoctorDetailPage implements OnInit {
  // id: number;
  // title: string;
  // details: any[];

  DataDoctorId={
    "dr_id": "",
  }

  dataDoctorId:any = {};
  isValid:true;

  constructor(
    private activate: ActivatedRoute,
    private doctorService: DoctorService,
    public callApi:CallapiService,
    public router:Router
    
  ) {
    this.DataDoctorId.dr_id = this.activate.snapshot.paramMap.get('_id');
    console.log(this.DataDoctorId.dr_id);
    this.getDataDoctorId();

  }

  ngOnInit() {

  }

  getDataDoctorId(){
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataDoctorId));
    dataForm.append("Function_Name", "getProfileDoctorById");
    this.callApi.profile(dataForm).then((result) => {
      this.dataDoctorId = result[0];
      console.log(this.dataDoctorId);
    });
  }

}
