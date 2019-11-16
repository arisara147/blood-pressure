import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallapiService } from 'src/app/service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  DataAdminLogin = {
    "admin_user": "",
    "admin_passwd": ""
  }

  DataDoctorLogin = {
    "dr_user": "",
    "dr_passwd": ""
  }

  DataPatientLogin = {
    "p_user": "",
    "p_passwd": ""
  }

  DataNurseLogin = {
    "nurse_user": "",
    "nurse_passwd": ""
  }

  DataLoginLog = {
    "login_username": null,
    "login_password": null,
    "login_name": null,
    "login_type": null
  }

  username: any;
  password: any;
  dataAdmin: any;
  dataDoctor: any;
  dataNurse: any;
  dataPatient: any;
  constructor(
    public navCtrl: NavController,
    public callApi: CallapiService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  login() {
    this.DataAdminLogin.admin_user = this.username;
    this.DataAdminLogin.admin_passwd = this.password;
    this.DataDoctorLogin.dr_user = this.username;
    this.DataDoctorLogin.dr_passwd = this.password;
    this.DataNurseLogin.nurse_user = this.username;
    this.DataNurseLogin.nurse_passwd = this.password;
    this.DataPatientLogin.p_user = this.username;
    this.DataPatientLogin.p_passwd = this.password;

    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataAdminLogin));
    dataForm.append("Function_Name", "checkloginadmin");
    this.callApi.checklogin(dataForm).then((it) => {
      console.log(it);
      this.dataAdmin = it[0];
      console.log(this.dataAdmin);

      if (this.dataAdmin.admin_user == this.username && this.dataAdmin.admin_passwd == this.password) {
        this.callApi.user = this.dataAdmin.admin_user;
        this.callApi.pwd = this.dataAdmin.admin_passwd;
        this.callApi.getStatus = "admin";
        this.callApi.getid = this.dataAdmin.admin_id;
        this.loginLog(this.callApi.user, this.callApi.pwd, this.dataAdmin.admin_name, this.callApi.getStatus);
        this.router.navigate(['/home']);
      } else {
        console.log("bye");

      }
    });

    let dataForm2 = new FormData();
    dataForm2.append("_Data", JSON.stringify(this.DataDoctorLogin));
    dataForm2.append("Function_Name", "checklogindoctor");
    this.callApi.checklogin(dataForm2).then((it) => {
      console.log(it);
      this.dataDoctor = it[0];
      console.log(this.dataDoctor);

      if (this.dataDoctor.dr_user == this.username && this.dataDoctor.dr_passwd == this.password) {
        this.callApi.user = this.dataDoctor.dr_user;
        this.callApi.pwd = this.dataDoctor.dr_passwd;
        this.callApi.getStatus = "1";
        this.callApi.getid = this.dataDoctor.dr_id;
        this.loginLog(this.callApi.user, this.callApi.pwd, this.dataDoctor.dr_name, this.callApi.getStatus);
        this.router.navigate(['/doctor']);
      } else {
        console.log("bye");

      }
    });

    let dataForm3 = new FormData();
    dataForm3.append("_Data", JSON.stringify(this.DataNurseLogin));
    dataForm3.append("Function_Name", "checkloginnurse");
    this.callApi.checklogin(dataForm3).then((it) => {
      console.log(it);
      this.dataNurse = it[0];
      console.log(this.dataNurse);

      if (this.dataNurse.nurse_user == this.username && this.dataNurse.nurse_passwd == this.password) {
        this.callApi.user = this.dataNurse.nurse_user;
        this.callApi.pwd = this.dataNurse.nurse_passwd;
        this.callApi.getid = this.dataNurse.nurse_id;
        this.callApi.getStatus = "2";
        this.loginLog(this.callApi.user, this.callApi.pwd, this.dataNurse.nurse_name, this.callApi.getStatus);
        this.router.navigate(['/appoint']);
      } else {
        console.log("bye");

      }
    });

    let dataForm4 = new FormData();
    dataForm4.append("_Data", JSON.stringify(this.DataPatientLogin));
    dataForm4.append("Function_Name", "checkloginpatient");
    this.callApi.checklogin(dataForm4).then((it) => {
      console.log(it);
      this.dataPatient = it[0];
      console.log(this.dataPatient);

      if (this.dataPatient.p_user == this.username && this.dataPatient.p_passwd == this.password) {
        this.callApi.user = this.dataPatient.p_user;
        this.callApi.pwd = this.dataPatient.p_passwd;
        this.callApi.getid = this.dataPatient.p_id;
        this.callApi.getStatus = "3";
        this.loginLog(this.callApi.user, this.callApi.pwd, this.dataPatient._name, this.callApi.getStatus);
        this.router.navigate(['/home']);
      } else {
        console.log("bye");

      }
    });

  }

  loginLog(username, password, name, type) {
    this.DataLoginLog.login_name = name;
    this.DataLoginLog.login_password = password;
    this.DataLoginLog.login_username = username;
    this.DataLoginLog.login_type = type;
    console.log(this.DataLoginLog);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.DataLoginLog));
    dataFrom.append("Function_Name", "AddloginLog");
    console.log(dataFrom);
    this.callApi.checklogin(dataFrom).then((res) => {
      console.log(res);

    });
  }

}
