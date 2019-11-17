import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dataTreatment = {
    "dr_id": null,
    "dr_name": null,
    "p_id": null,
    "p_name": null,
    "t_id": null,
    "t_date": null,
    "t_descrip": null
  }

  getDoctor: any;
  getPatient: any;
  dataDoctor: any[] = [];
  dataPatient: any[] = [];
  listTreatmentPatient: any;
  isReadonly: boolean;
  checkStatus: any;
  getdata = {
    "getid": null
  };

  constructor(
    private navCtrl: NavController, public callapi: CallapiService) {
    this.checkDoctor();
   }

    ngOnInit() {
      this.checkDoctor();
    }

    goToTreatmentDetail() {
      this.navCtrl.navigateForward('/teatment-detail');
    }

    goToBlood() {
      this.navCtrl.navigateForward('/blood-pressure');
    }
    goToTeatment() {
      this.navCtrl.navigateForward('/teatment');
    }

    checkDoctor() {
      if (this.callapi.getStatus == "1") {
        this.checkStatus = 1;
        this.dataTreatment.dr_name = this.callapi.nameDoctor;
        this.isReadonly = true;
      }
      if (this.callapi.getStatus == "2") {
        this.checkStatus = 2;
        
      }
      if (this.callapi.getStatus == "3") {
        this.checkStatus = 3;
      }
    }

  }
