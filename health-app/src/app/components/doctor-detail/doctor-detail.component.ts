import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
    selector: 'app-doctor-detail',
    templateUrl: './doctor-detail.component.html',
    styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

    doctor = {} as Doctor;

    constructor(
        private doctorService: DoctorService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {

        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.doctorService.getDoctor(id).subscribe(d => {
                this.doctor = d;
            });

        }
    }

    submit(): void {
        console.log(this.doctor);
    }
}
