import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DoctorDetailComponent } from './components/doctor-detail/doctor-detail.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

const routes: Routes = [
    { path: 'doctors', component: DoctorListComponent },
    { path: 'doctors/:id', component: DoctorDetailComponent },
    { path: 'patients', component: PatientListComponent },
    { path: 'appointments', component: AppointmentListComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
