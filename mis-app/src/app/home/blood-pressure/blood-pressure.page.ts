import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Bloodpressure } from 'src/app/models/blood-pressure';
import { Subscription } from 'rxjs';
import { BloodPressureService } from 'src/app/blood-pressure.service';
import { FormsModule } from '@angular/forms';
import { CallapiService } from 'src/app/service/callapi.service';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.page.html',
  styleUrls: ['./blood-pressure.page.scss'],
})
export class BloodPressurePage implements OnInit {
  bloodpressure: Bloodpressure[];
  bloodpressures: Bloodpressure;
  sub: Subscription;
  DataBloodPressure = {
    "rep_id": null,
    "rep_date": null,
    "rep_time": null,
    "p_id": null,
    "sys": null,
    "dia": null,
    "pr": null,
    "rep_status": null,
    "rep_note": null
  }
  date: any;
  time: any;
  hour: any = new Date().getHours().toString();
  minus: any = new Date().getMinutes().toString();
  dd: any = new Date().getDate().toString();
  mm: any = new Date().getMonth().toString();
  yyyy: any = new Date().getFullYear().toString();
  load:any;

  constructor(
    private bloodpressreService: BloodPressureService,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    public callapi: CallapiService
  ) { }

  ngOnInit() {
    // this.getBloodPressure();

  }
  // async getBloodPressure() {

  //   this.sub = this.bloodpressreService.getBloodPressure().subscribe(
  //     (bloodpressure) => {
  //       this.bloodpressure = bloodpressure;
  //     },
  //   );
  // }

  // async insert(form: any) {
  //   const sys = form.sys;
  //   const dia = form.dia;
  //   const pr = form.pr;

  //   console.log(sys);
  //   console.log(dia);
  //   console.log(pr);
  //   this.bloodpressreService.insert(sys, dia, pr).subscribe(
  //     async (bloodpressures: Bloodpressure) => {
  //       this.bloodpressures = bloodpressures;
  //     }
  //   );
  // }

  goToReport() {
    this.navCtrl.navigateForward('/report');
  }

  addDataBlood() {
    this.date = this.dd + "/" + this.mm + "/" + this.yyyy;
    console.log(this.date);
    this.time = this.hour + ":" + this.minus;
    this.DataBloodPressure.p_id = "test";
    this.DataBloodPressure.rep_id = 0;
    this.DataBloodPressure.rep_date = this.date;
    this.DataBloodPressure.rep_time = this.time;
    console.log(this.DataBloodPressure);
    if (this.DataBloodPressure.sys >= 160 && this.DataBloodPressure.dia >= 100) {
      this.DataBloodPressure.rep_status = "ระดับอันตราย";
      this.DataBloodPressure.rep_note = "พบแพทย์โดยด่วน";
    } else if (this.DataBloodPressure.sys >= 140 && this.DataBloodPressure.dia >= 90) {
      this.DataBloodPressure.rep_status = "สูงมาก";
      this.DataBloodPressure.rep_note = "พบแพทย์";
    } else if (this.DataBloodPressure.sys >= 121 && this.DataBloodPressure.dia >= 80) {
      this.DataBloodPressure.rep_status = "ค่อนข้างสูง";
      this.DataBloodPressure.rep_note = "ปรึกษาแพทย์";
    } else if (this.DataBloodPressure.sys <= 120 && this.DataBloodPressure.dia <= 79) {
      this.DataBloodPressure.rep_status = "ปกติ";
      this.DataBloodPressure.rep_note = "ตรวจเช็คความดันโลหิตสม่ำเสมอ";
    }
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.DataBloodPressure));
    dataFrom.append("Function_Name", "addBloodPressure");
    console.log(dataFrom);
    this.callapi.bloodpressure(dataFrom).then((it) => {
      console.log("suscess");
    });
  }
    
  

}
