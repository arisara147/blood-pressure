import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BloodPressurePage } from './blood-pressure.page';

const routes: Routes = [
  {
    path: '',
    component: BloodPressurePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BloodPressurePage]
})
export class BloodPressurePageModule {}
