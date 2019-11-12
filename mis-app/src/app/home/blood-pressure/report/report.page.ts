import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/report.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Report } from 'src/app/models/report';
import { async } from 'q';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  report: Report[];
  sub: Subscription;
  getReport: any;

  constructor(
    private reportService: ReportService,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getReportList();
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
}
