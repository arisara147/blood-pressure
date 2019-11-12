import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { Doctor } from '../../models/doctor';
import { Subscription } from 'rxjs';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage implements OnInit {

  doctor: Doctor[];
  sub: Subscription;

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


  selectDoctor(d: Doctor) {
    console.log(d);
    this.navCtrl.navigateForward(['/chat', {
      id: d.dr_id,
      name: d.dr_name
    }]);
  }


}
