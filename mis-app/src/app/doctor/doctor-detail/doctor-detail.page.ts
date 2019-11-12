import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.page.html',
  styleUrls: ['./doctor-detail.page.scss'],
})
export class DoctorDetailPage implements OnInit {
  id: number;
  title: string;
  details: any[];

  constructor(
    private route: ActivatedRoute, private doctorService: DoctorService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
  }

  ngOnInit() {
    this.doctorService.getDoctorDetail(this.id).subscribe(
      (details) => {
        this.details = details;
        console.log(details);
      }
    );
  }

}
