import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallapiService } from './service/callapi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าหลัก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'รายชื่อ',
      url: '/doctor',
      icon: 'medkit'
    },
    {
      title: 'บัญชีผู้ใช้',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'ข่าวสาร',
      url: '/news',
      icon: 'paper'
    },
    {
      title: 'ตารางนัดหมาย',
      url: '/appoint',
      icon: 'calendar'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    
    this.initializeApp();

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
