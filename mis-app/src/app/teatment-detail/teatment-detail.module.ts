import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeatmentDetailPage } from './teatment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TeatmentDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeatmentDetailPage]
})
export class TeatmentDetailPageModule {}
