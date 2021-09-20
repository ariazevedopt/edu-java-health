import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    base = 'http://localhost:8080/doctors'

    constructor(private httpClient: HttpClient) { }

    getDoctors(): Observable<Doctor[]> {
        return this.httpClient.get<Doctor[]>(`${this.base}`);
    }

    getDoctor(id:string ): Observable<Doctor> {
        return this.httpClient.get<Doctor>(`${this.base}/${id}`);
    }


}
