import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  checkStatus :any;
  constructor(
    private navCtrl: NavController,
    public callApi:CallapiService
  ) {}

  goToConsult() {
    this.navCtrl.navigateForward('/consult');
  }

  goToBlood() {
    this.navCtrl.navigateForward('/blood-pressure');
  }
  goToTeatment() {
    this.navCtrl.navigateForward('/teatment');
  }

  doctorAndNusregotoreport(){
    this.checkStatus = this.callApi.getStatus;
    if(this.checkStatus == 1 || this.checkStatus == 2){
      this.navCtrl.navigateForward('/report');
    }else{
      this.navCtrl.navigateForward('/blood-pressure');

    }
  }

}
