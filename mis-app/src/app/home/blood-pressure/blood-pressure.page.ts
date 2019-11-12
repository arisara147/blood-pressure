import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Bloodpressure } from 'src/app/models/blood-pressure';
import { Subscription } from 'rxjs';
import { BloodPressureService } from 'src/app/blood-pressure.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.page.html',
  styleUrls: ['./blood-pressure.page.scss'],
})
export class BloodPressurePage implements OnInit {
  bloodpressure: Bloodpressure[];
  bloodpressures: Bloodpressure;
  sub: Subscription;

  constructor(
    private bloodpressreService: BloodPressureService,
    private loadingController: LoadingController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getBloodPressure();

  }
  async getBloodPressure() {

    this.sub = this.bloodpressreService.getBloodPressure().subscribe(
      (bloodpressure) => {
        this.bloodpressure = bloodpressure;
      },
    );
  }

  async insert(form: any) {
    const sys = form.sys;
    const dia = form.dia;
    const pr = form.pr;

    console.log(sys);
    console.log(dia);
    console.log(pr);
    this.bloodpressreService.insert(sys, dia, pr).subscribe(
      async (bloodpressures: Bloodpressure) => {
        this.bloodpressures = bloodpressures;
      }
    );
  }

  goToReport() {
    this.navCtrl.navigateForward('/report');
  }

}
