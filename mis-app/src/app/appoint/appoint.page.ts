import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appoint } from '../models/appoint';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.page.html',
  styleUrls: ['./appoint.page.scss'],
})
export class AppointPage implements OnInit {

  appoint: Appoint[];
  sub: Subscription;
  dataAppoint = {
    "dr_id":null,
    "dr_name":null,
    "p_id":null,
    "p_name":null,
    "app_date":null,
    "app_time":null,
    "app_id":null,
    "app_detail":null
  }
  getDoctor:any;
  getPatient:any;
  dataDoctor:any[] = [];
  dataPatient:any[] = [];

  constructor(private navCtrl: NavController,public callapi: CallapiService) {
      this.getalldoctor();
      this.getallpatient();
   }

  ngOnInit() {
    this.getalldoctor();
    this.getallpatient();
  }
  goToAppointDetail() {
    this.navCtrl.navigateForward('/appoint-detail');
  }

  Addappoint(){
    this.splitDateTime(this.dataAppoint.app_date,this.dataAppoint.app_time);
    var drid = this.dataDoctor.find(it => it.dr_name == this.dataAppoint.dr_name);
    console.log(drid.dr_id);
    this.dataAppoint.dr_id = drid.dr_id;
    var pid = this.dataPatient.find(it => it.p_name == this.dataAppoint.p_name);
    console.log(pid.p_id);
    this.dataAppoint.p_id = pid.p_id;
    console.log(this.dataAppoint);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.dataAppoint));
    dataFrom.append("Function_Name", "addAppoit");
    console.log(dataFrom);
    this.callapi.appoint(dataFrom).then((it) => {
      console.log("Ok add data appoint");
      
    });
  }

  getalldoctor(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallDoctor");
    console.log(dataFrom);
    this.callapi.Doctor(dataFrom).then((it) => {
      this.getDoctor = it;
      for (const key in this.getDoctor) {
          this.dataDoctor[key] = this.getDoctor[key]
      }
      console.log(this.getDoctor);
      console.log(this.dataDoctor);
      
    });
  }

  getallpatient(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallPatient");
    console.log(dataFrom);
    this.callapi.Patient(dataFrom).then((it) => {
      this.getPatient = it;
      for (const key in this.getPatient) {
        this.dataPatient[key] = this.getPatient[key]
    }
      console.log(this.getPatient);
      console.log(this.dataPatient);
      
    });
  }

  splitDateTime(date,time){
    var getdate:string;
    getdate = date;
    var spDate = getdate.split("T", 1);
    this.dataAppoint.app_date = spDate[0].toString();
    var gettime:string;
    gettime = time;
    var srTime = gettime.split("T", 2);
    this.dataAppoint.app_time = srTime[1];
    srTime = srTime[1].split(":",2);
    this.dataAppoint.app_time = srTime[0].toString() + ":" + srTime[1].toString();
  }



}
