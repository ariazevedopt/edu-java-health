import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

    doctors: Doctor[] = []; // or doctors = [] as Doctor[]

    constructor(private doctorService: DoctorService, private router: Router) { }

    ngOnInit(): void {
        this.doctorService.getDoctors().subscribe(doctors => {
            this.doctors = doctors;
        });
    }

    goToDoctor(id: number) {
        this.router.navigate(['doctors', id]);
        console.log(id);
    }

}
