import { Component, OnInit } from '@angular/core';
import { CallapiService } from "src/app/service/callapi.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  DataDoctor = {
    "dr_id": null,
    "dr_article": null,
    "dr_name": null,
    "dr_sex": null,
    "dr_user": null,
    "dr_passwd": null,
    "dr_tell": null,
    "dr_address": null
  }

  DataPatient = {
    "p_id": null,
    "p_article": null,
    "p_name": null,
    "p_user": null,
    "p_passwd": null,
    "p_birthDate": null,
    "p_sex": null,
    "p_weight": null,
    "p_height": null,
    "p_tell": null,
    "p_address": null
  }

  DataNurse = {
    "nurse_id": null,
    "nurse_article": null,
    "nurse_name": null,
    "nurse_sex": null,
    "nurse_user": null,
    "nurse_passwd": null,
    "nurse_tell": null,
    "nurse_address": null
  }

  DataAdmin = {
    "admin_id": null,
    "admin_article": null,
    "admin_name": null,
    "admin_sex": null,
    "admin_user": null,
    "admin_passwd": null,
    "admin_tell": null,
    "admin_address": null
  }

  dataAdmin: any = {};
  dataDoctor: any;
  dataNurse: any;
  dataPatient: any;
  checkStatus: any;
  isValid: boolean;
  buttonStatus: any;

  constructor(public activate: ActivatedRoute, public callApi: CallapiService) {
    console.log(this.callApi.getid);
    this.checkStatus = this.callApi.getStatus;
    if (this.checkStatus == "1") {
      this.DataDoctor.dr_id = this.callApi.getid;
      this.checkStatus = 1;
      this.getProfileDoctorById();
    }
    else if (this.checkStatus == "admin") {
      this.DataAdmin.admin_id = this.callApi.getid;
      this.checkStatus = 4;
      this.getProfileAdminById();
    }
    else if (this.checkStatus == "2") {
      this.DataNurse.nurse_id = this.callApi.getid;
      this.checkStatus = 2;
      this.getProfileNurseById();
    }
    else if (this.checkStatus == "3") {
      this.DataPatient.p_id = this.callApi.getid;
      this.checkStatus = 3;
      this.getProfilePatientById();
    }
    this.buttonStatus = "1";
    this.isValid = true;
    console.log(this.checkStatus);

  }



  ngOnInit() {

  }

  change() {
    if (this.buttonStatus == "1") {
      this.isValid = false;
      this.buttonStatus = "2";

    } else if (this.buttonStatus == "2") {
      this.isValid = true;
      this.buttonStatus = "1";

    }
    console.log(this.isValid);
    console.log(this.buttonStatus);

  }

  getProfileDoctorById() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataDoctor));
    dataForm.append("Function_Name", "getProfileDoctorById");
    this.callApi.profile(dataForm).then((result) => {
      this.dataDoctor = result[0];
      console.log(this.dataDoctor);
    });
  }

  getProfileAdminById() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataAdmin));
    dataForm.append("Function_Name", "getProfileAdminById");
    this.callApi.profile(dataForm).then((result) => {
      this.dataAdmin = result[0];
      console.log(this.dataAdmin);
    });
  }

  getProfileNurseById() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataNurse));
    dataForm.append("Function_Name", "getProfileNurseById");
    this.callApi.profile(dataForm).then((result) => {
      this.dataNurse = result[0];
      console.log(this.dataNurse);
    });
  }

  getProfilePatientById() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataPatient));
    dataForm.append("Function_Name", "getProfilePatientById");
    this.callApi.profile(dataForm).then((result) => {
      this.dataPatient = result[0];
      console.log(this.dataPatient);
    });
  }

  editProfileDoctor() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.dataDoctor));
    dataForm.append("Function_Name", "updateProfileDoctor");
    this.callApi.profile(dataForm).then((result) => {
      console.log(result);
    });
  }

  editProfileNurse() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.dataNurse));
    dataForm.append("Function_Name", "updateProfileNurse");
    this.callApi.profile(dataForm).then((result) => {
      console.log(result);
    });
  }

  editProfilePatient() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.dataPatient));
    dataForm.append("Function_Name", "updateProfilePatient");
    this.callApi.profile(dataForm).then((result) => {
      console.log(result);
    });
  }

  editProfileAdmin() {
    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.dataAdmin));
    dataForm.append("Function_Name", "updateProfileAdmin");
    this.callApi.profile(dataForm).then((result) => {
      console.log(result);
    });
  }


}
