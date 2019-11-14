import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appoint } from '../models/appoint';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.page.html',
  styleUrls: ['./appoint.page.scss'],
})
export class AppointPage implements OnInit {

  appoint: Appoint[];
  sub: Subscription;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToAppointDetail() {
    this.navCtrl.navigateForward('/appoint-detail');
  }

}
