import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { LoadingController, NavController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  // doctor: Doctor[];
  // sub: Subscription;
  // getDoctor: any;

  listDoctor: any;
  listPateint: any;

  checkStatus: any;
  nurseStatus: any;

  constructor(
    private doctorService: DoctorService,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    public callApi: CallapiService,
    public router: Router,

  ) { }


  ngOnInit() {
    // this.getDoctorList();
    this.getDoctorAll();
    this.getPateintAll();
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


  detailDoctor(id) {
    this.router.navigate(['/doctor-detail', { _id: id }]);
  }

  detailPateint(id) {
    this.router.navigate(['/patient-detail2', { _id: id }]);
  }


  // async getDoctorList() {

  //   const loading = await this.loadingController.create({
  //     spinner: 'bubbles',
  //     message: 'กำลังโหลดข้อมูล..'
  //   });

  //   this.sub = this.doctorService.getDoctor().subscribe(
  //     (doctor) => {
  //       this.doctor = doctor;
  //     },

  //     async (error) => {
  //       console.log(error);
  //       await loading.dismiss();
  //     },
  //     async () => {
  //       await loading.dismiss();
  //     },
  //   );
  // }
  // itemSelected(d: Doctor) {
  //   this.navCtrl.navigateForward(['/doctor', {
  //     id: d.dr_id,
  //     name: d.dr_name
  //   }]);
  // }
  // getItem(ev: any) {
  //   const val = ev.target.value;
  //   if (val && val.trim() !== '') {
  //     this.doctor = this.doctor.filter((doctor: Doctor) => {
  //       return (doctor.dr_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     });
  //   } else {
  //     this.getDoctor();
  //   }
  // }

  // selectDoctor(d: Doctor) {
  //   console.log(d);
  //   this.navCtrl.navigateForward(['/doctor-detail', {
  //     id: d.dr_id,
  //     name: d.dr_name
  //   }]);
  // }


}
