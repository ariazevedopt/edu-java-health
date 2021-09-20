import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { DoctorDetailComponent } from './components/doctor-detail/doctor-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        DoctorListComponent,
        PatientListComponent,
        AppointmentListComponent,
        DoctorDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
