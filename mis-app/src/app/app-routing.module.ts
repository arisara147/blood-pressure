import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'appoint', loadChildren: './appoint/appoint.module#AppointPageModule' },
  { path: 'blood-pressure', loadChildren: './home/blood-pressure/blood-pressure.module#BloodPressurePageModule' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorPageModule' },
  { path: 'doctor-detail', loadChildren: './doctor/doctor-detail/doctor-detail.module#DoctorDetailPageModule' },
  { path: 'consult', loadChildren: './home/consult/consult.module#ConsultPageModule' },
  { path: 'chat', loadChildren: './home/consult/chat/chat.module#ChatPageModule' },
  { path: 'report', loadChildren: './home/blood-pressure/report/report.module#ReportPageModule' },  { path: 'teatment', loadChildren: './teatment/teatment.module#TeatmentPageModule' },
  { path: 'appoint-detail', loadChildren: './appoint-detail/appoint-detail.module#AppointDetailPageModule' },
  { path: 'teatment-detail', loadChildren: './teatment-detail/teatment-detail.module#TeatmentDetailPageModule' },
  { path: 'patient-detail', loadChildren: './patient-detail/patient-detail.module#PatientDetailPageModule' },
  { path: 'patient-detail2', loadChildren: './patient-detail2/patient-detail2.module#PatientDetail2PageModule' },
  { path: 'appoint-edit', loadChildren: './appoint-edit/appoint-edit.module#AppointEditPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
