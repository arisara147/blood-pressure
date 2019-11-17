import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appoint-edit',
  templateUrl: './appoint-edit.page.html',
  styleUrls: ['./appoint-edit.page.scss'],
})
export class AppointEditPage implements OnInit {

  getId = {
    "app_id": null
  };
  getdata: any;
  date:any;
  time:any;

  constructor(public callapi: CallapiService, public actived: ActivatedRoute, public router: Router) {
    this.getId.app_id = this.actived.snapshot.paramMap.get('_id');
    console.log(this.getId);
    this.getappointByappid();
  }

  ngOnInit() {
    this.getappointByappid();
  }

  getappointByappid(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.getId));
    dataFrom.append("Function_Name", "getAppointByAppId");
    console.log(dataFrom);
    this.callapi.appoint(dataFrom).then((it) => {
      this.getdata = it[0];
      console.log(this.getdata);
      
    });
  }

  editAppoint(){
    this.splitdate(this.getdata.app_date,this.getdata.app_time);  
    console.log(this.getdata);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.getdata));
    dataFrom.append("Function_Name", "updateAppoint");
    console.log(dataFrom);
    this.callapi.appoint(dataFrom).then((it) => {
      console.log("Ok Update");
    });
  }

  splitdate(date,time){
    var getdate:string;
    getdate = date;
    var spDate = getdate.split("T", 1);
    this.getdata.app_date = spDate[0].toString();
    var gettime:string;
    gettime = time;
    var srTime = gettime.split("T", 2);
    this.getdata.app_time = srTime[1];
    srTime = srTime[1].split(":",2);
    this.getdata.app_time = srTime[0].toString() + ":" + srTime[1].toString();
  }



}
