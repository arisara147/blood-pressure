import { Component, OnInit } from '@angular/core';
//import { News } from 'src/app/models/news';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  //news: News[];
  sub: Subscription;
  getNews: any;

  constructor(
    private navCtrl: NavController,
    public callapi: CallapiService

  ) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getAllNews");
    this.callapi.bloodpressure(dataFrom).then((result) => {
      this.getNews = result;
      console.log(result);
      console.log(this.getNews);
    });
  }
}
