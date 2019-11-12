import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppointService } from '../appoint.service';
import { Appoint } from '../models/appoint';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.page.html',
  styleUrls: ['./appoint.page.scss'],
})
export class AppointPage implements OnInit {

  appoint: Appoint[];
  sub: Subscription;

  constructor(
    private appointService: AppointService
  ) { }

  ngOnInit() {
    this.sub = this.appointService.getAppointAll().subscribe(
      (appoint) => {
        this.appoint = appoint;
      }
    );
  }

}
