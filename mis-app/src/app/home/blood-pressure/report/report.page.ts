import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/report.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Report } from 'src/app/models/report';
import { CallapiService } from 'src/app/service/callapi.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  report: Report[];
  sub: Subscription;
  getReport: any;

  listData: any[] = [];

  constructor(
    private reportService: ReportService,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    public callapi: CallapiService
  ) { }

  ngOnInit() {
    this.getAllReport();
  }

  async  getReportList() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลด..'
    });
    this.sub = this.reportService.getReport().subscribe(
      (report) => {
        this.report = report;
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

  getAllReport() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getAllBloodPressure");
    this.callapi.bloodpressure(dataFrom).then((result) => {
      this.getReport = result;
      for (const key in this.getReport) {
        this.listData[key] = this.getReport[key];
      }

      this.listData.sort((a, b) => (b.rep_id) - (a.rep_id));
      console.log(result);
      console.log(this.getReport);
    });
  }
}
