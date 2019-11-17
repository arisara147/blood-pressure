import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoint-detail',
  templateUrl: './appoint-detail.page.html',
  styleUrls: ['./appoint-detail.page.scss'],
})
export class AppointDetailPage implements OnInit {

  getdata: any;
  listData: any[] = [];
  sortdata: any[] = [];
  appoint = {
    "app_id": null
  };

  constructor(public callapi: CallapiService, public router: Router) {
    this.getAllAppoint();
  }

  ngOnInit() {
    this.getAllAppoint();
  }

  ionViewDidEnter() {
    this.getAllAppoint();
  }

  getAllAppoint() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getAppointAll");
    console.log(dataFrom);
    this.callapi.appoint(dataFrom).then((it) => {
      this.getdata = it;
      for (const key in this.getdata) {
        this.listData[key] = this.getdata[key]
      }
      console.log(this.listData);
      this.listData.sort((a, b) => (b.app_id) - (a.app_id));

    });
  }

  cencalAppoint(id) {
    this.appoint.app_id = id;
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.appoint));
    dataFrom.append("Function_Name", "deleteAppoint");
    console.log(dataFrom);
    this.callapi.appoint(dataFrom).then((it) => {
      console.log("OK delete");
      this.getAllAppoint();
    });
  }

  goEditappoint(id) {
    this.router.navigate(['/appoint-edit', { _id: id }]);
    console.log("aaa");

  }


}
