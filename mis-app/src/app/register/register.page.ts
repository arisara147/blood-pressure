import { Component, OnInit } from '@angular/core';
import { CallapiService } from "src/app/service/callapi.service";
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  DataDoctor={
    "dr_id": "",
    "dr_article": "",
    "dr_name": "",
    "dr_sex": "",
    "dr_user": "",
    "dr_passwd": "",
    "dr_tell": "",
    "dr_address": ""
  }

  DataPatient={
    "p_id": "",
    "p_article": "",
    "p_name": "",
    "p_user": "",
    "p_passwd": "",
    "p_birthDate": "",
    "p_sex": "",
    "p_weight": "",
    "p_height": "",
    "p_tell": "",
    "p_address": ""
  }

  DataNurse={
    "nurse_id": "",
    "nurse_article": "",
    "nurse_name": "",
    "nurse_sex": "",
    "nurse_user": "",
    "nurse_passwd": "",
    "nurse_tell": "",
    "nurse_address": ""
  }

  DataAdmin={
    "admin_id": "",
    "admin_article": "",
    "admin_name": "",
    "admin_sex": "",
    "admin_user": "",
    "admin_passwd": "",
    "admin_tell": "",
    "admin_address": ""
  }

 
  
  constructor(public callApi:CallapiService ,public alertController:AlertController) { }

  ngOnInit() {
  }
  async addDataDoctor() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'คุณต้องการเพิ่มข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          
        }, {
          text: 'ตกลง',
          handler: () => {

            console.log(this.DataDoctor);
            let dataFrom = new FormData();
            dataFrom.append("_Data", JSON.stringify(this.DataDoctor));
            dataFrom.append("Function_Name", "addDoctor");
            console.log(dataFrom);
            this.callApi.Doctor(dataFrom).then((res) => {
              console.log(res);
              
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async addDataAdmin() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'คุณต้องการเพิ่มข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          
        }, {
          text: 'ตกลง',
          handler: () => {

            console.log(this.DataAdmin);
            let dataFrom = new FormData();
            dataFrom.append("_Data", JSON.stringify(this.DataAdmin));
            dataFrom.append("Function_Name", "addAdmin");
            console.log(dataFrom);
            this.callApi.Admin(dataFrom).then((res) => {
              console.log(res);
              
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async addDataNurse() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'คุณต้องการเพิ่มข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          
        }, {
          text: 'ตกลง',
          handler: () => {

            console.log(this.DataNurse);
            let dataFrom = new FormData();
            dataFrom.append("_Data", JSON.stringify(this.DataNurse));
            dataFrom.append("Function_Name", "addNurse");
            console.log(dataFrom);
            this.callApi.Nurse(dataFrom).then((res) => {
              console.log(res);
              
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async addDataPatient() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'คุณต้องการเพิ่มข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          
        }, {
          text: 'ตกลง',
          handler: () => {

            console.log(this.DataPatient);
            let dataFrom = new FormData();
            dataFrom.append("_Data", JSON.stringify(this.DataPatient));
            dataFrom.append("Function_Name", "addPatient");
            console.log(dataFrom);
            this.callApi.Patient(dataFrom).then((res) => {
              console.log(res);
              
            });
          }
        }
      ]
    });

    await alert.present();
  }



}
