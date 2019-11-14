import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-teatment',
  templateUrl: './teatment.page.html',
  styleUrls: ['./teatment.page.scss'],
})
export class TeatmentPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToTeatmentDetail() {
    this.navCtrl.navigateForward('/teatment-detail');
  }
}
