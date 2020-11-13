import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repairs} from '../interfaces/repairs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RepairsService {

    constructor(private http: HttpClient) {
    }

    getAllRepairs(): Observable<Repairs[]> {
        return this.http.get<Repairs[]>(`${environment.apiUrl}/repairs.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Repairs Fetched Successfully!'))
        );
    }

    getRepairById(id: string): Observable<Repairs> {
        return this.http.get<Repairs>(`${environment.apiUrl}/repairs/${id}.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Repair: ${id} Fetched Successfully!`))
        );
    }


    addRepair(repair: Repairs): Observable<Repairs> {
        return this.http.post<Repairs>(`${environment.apiUrl}/repairs`,
            {
                dateReceived: repair.dateReceived,
                repairNotes: repair.repairNotes,
                repaired: repair.repaired,
                dateCompleted: repair.dateCompleted,
                waitingForParts: repair.waitingForParts,
                customer: repair.customer,
                relatedBooking: repair.relatedBooking,
                partsUsed: repair.partsUsed
            }, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Repair Created Successfully!`))
        );
    }

    editRepair(repair: Repairs): Observable<Repairs> {
        return this.http.put<Repairs>(`${environment.apiUrl}/repairs/${repair.id}`,
            {
                dateReceived: repair.dateReceived,
                repairNotes: repair.repairNotes,
                repaired: repair.repaired,
                dateCompleted: repair.dateCompleted,
                waitingForParts: repair.waitingForParts,
                customer: repair.customer,
                relatedBooking: repair.relatedBooking,
                partsUsed: repair.partsUsed
            }, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Repair Updated Successfully!`))
        );
    }

    deleteRepair(id: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/repairs/${id}`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Repair: ${id} Deleted Successfully!`))
        );
    }
}

