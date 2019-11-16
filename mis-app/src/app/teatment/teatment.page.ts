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
    "t_id": null,
    "t_date": null,
    "t_descrip": null,
    "dr_id": null,
    "dr_name": null,
    "p_id": null,
    "p_name": null
  }
  getDoctor: any;
  getPatient: any;
  dataDoctor: any[] = [];
  dataPatient: any[] = [];

  constructor(
    private navCtrl: NavController,
    public callapi: CallapiService
    ) {}


  ngOnInit() {
  }
  goToTeatmentDetail() {
    this.navCtrl.navigateForward('/teatment-detail');
  }
}
