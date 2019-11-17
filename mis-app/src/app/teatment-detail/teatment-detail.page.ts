import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-teatment-detail',
  templateUrl: './teatment-detail.page.html',
  styleUrls: ['./teatment-detail.page.scss'],
})
export class TeatmentDetailPage implements OnInit {

  checkStatus: any;
  getpid = {
    "p_id": null
  };
  getdata: any;
  listData: any[] = [];
  listData2: any[] = [];

  constructor(public callapi: CallapiService) {
    this.checkstatus();
  }

  ngOnInit() {
    this.checkstatus();
  }

  checkstatus() {
    this.checkStatus = this.callapi.getStatus;
    if (this.checkStatus == "3") {
      this.getpid.p_id = this.callapi.getid;
      this.checkStatus = 3;
      this.getTreatmentById();
      // ทำงาน getBypid จาก Teatment
    } else {
      // ทำงาน getAll จาก Teatment
      this.callapi.getStatus == "2";
      this.checkStatus = 2;
      this.allTreatment();
    }
  }
  getTreatmentById() {
    console.log(this.getpid);
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.getpid));
    dataForm.append("Function_Name", "getTreatmentPatientById");
    this.callapi.treatment(dataForm).then((result) => {
      this.getdata = result;
      for (const key in this.getdata) {
        this.listData2[key] = this.getdata[key];
      }
      this.listData2.sort((a ,b) => (b.t_id) - (a.t_id));
      console.log(result);
    });
  }

  allTreatment() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(""));
    dataForm.append("Function_Name", "getallTreatment");
    this.callapi.treatment(dataForm).then((result) => {
      this.getdata = result;
      for (const key in this.getdata) {
        this.listData[key] = this.getdata[key];
      }
      this.listData.sort((a ,b) => (b.t_id) - (a.t_id));
      console.log(this.listData);
    });
  }
}
