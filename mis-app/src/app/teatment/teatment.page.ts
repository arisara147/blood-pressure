import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Treatment } from '../models/treatment';
import { CallapiService } from '../service/callapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teatment',
  templateUrl: './teatment.page.html',
  styleUrls: ['./teatment.page.scss'],
})
export class TeatmentPage implements OnInit {

  treatment: Treatment[];
  sub: Subscription;
  dataTreatment = {
    "dr_id": null,
    "dr_name": null,
    "p_id": null,
    "p_name": null,
    "t_id": null,
    "t_date": null,
    "t_descrip": null
  }

  getDoctor: any;
  getPatient: any;
  dataDoctor: any[] = [];
  dataPatient: any[] = [];
  listTreatmentPatient: any;
  isReadonly: boolean;
  checkStatus: any;
  getdata = {
    "getid": null
  };

  constructor(private navCtrl: NavController, public callapi: CallapiService) {
    this.getalldoctor();
    this.getallpatient();
    this.checkDoctor();
  }

  ngOnInit() {
    this.getalldoctor();
    this.getallpatient();
    this.checkDoctor();
  }
  ionViewDidEnter() {
    this.getalldoctor();
    this.getallpatient();
    this.checkDoctor();
  }
  goToTeatmentDetail() {
    this.navCtrl.navigateForward('/teatment-detail');
  }
  AddTreatment() {
    this.splitDate(this.dataTreatment.t_date);
    var drid = this.dataDoctor.find(it => it.dr_name == this.dataTreatment.dr_name);
    console.log(drid.dr_id);
    this.dataTreatment.dr_id = drid.dr_id;
    var pid = this.dataPatient.find(it => it.p_name == this.dataTreatment.p_name);
    console.log(pid.p_id);
    this.dataTreatment.p_id = pid.p_id;
    console.log(this.dataTreatment);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.dataTreatment));
    dataFrom.append("Function_Name", "addTreatment");
    console.log(dataFrom);
    this.callapi.treatment(dataFrom).then((it) => {
      console.log("Ok add data treatment");
    });
  }

  getalldoctor() {
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

  getallpatient() {
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

  splitDate(date) {
    var getdate: string;
    getdate = date;
    var spDate = getdate.split("T", 1);
    this.dataTreatment.t_date = spDate[0].toString();
  }

  checkDoctor() {
    if (this.callapi.getStatus == "1") {
      this.checkStatus = 1;
      this.dataTreatment.dr_name = this.callapi.nameDoctor;
      this.isReadonly = true;
    }
    if (this.callapi.getStatus == "3") {
      this.checkStatus = 2;
      this.getTreatmentBypid();
    }
  }
  getTreatmentBypid() {
    this.getdata.getid = this.callapi.getid;
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.getdata));
    dataFrom.append("Function_Name", "getTreatmentPatientById");
    console.log(dataFrom);
    this.callapi.treatment(dataFrom).then((id) => {
      this.listTreatmentPatient = it;
      console.log(this.listTreatmentPatient);
    });
  }
}
