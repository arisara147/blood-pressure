import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../models/doctor';
import { Subscription } from 'rxjs';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  doctor: Doctor[];
  sub: Subscription;
  getDoctor: any;

  constructor(
    private doctorService: DoctorService,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getDoctorList();
  }

  async getDoctorList() {

    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลดข้อมูล..'
    });

    this.sub = this.doctorService.getDoctor().subscribe(
      (doctor) => {
        this.doctor = doctor;
      },

      async (error) => {
        console.log(error);
        await loading.dismiss();
      },
      async () => {
        await loading.dismiss();
      },
    );
  }
  itemSelected(d: Doctor) {
    this.navCtrl.navigateForward(['/doctor', {
      id: d.dr_id,
      name: d.dr_name
    }]);
  }
  getItem(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.doctor = this.doctor.filter((doctor: Doctor) => {
        return (doctor.dr_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.getDoctor();
    }
  }

  selectDoctor(d: Doctor) {
    console.log(d);
    this.navCtrl.navigateForward(['/doctor-detail', {
      id: d.dr_id,
      name: d.dr_name
    }]);
  }


}
