import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Parts} from '../interfaces/parts';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {Suppliers} from '../interfaces/suppliers';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    constructor(private http: HttpClient) {
    }

    getAllInventory(): Observable<Parts[]> {
        return this.http.get<Parts[]>(`${environment.apiUrl}/parts.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('parts Fetched Successfully!'))
        );
    }

    getSuppliersOfferingPart(id: string): Observable<Suppliers[]> {
        return this.http.get<Suppliers[]>(`${environment.apiUrl}/parts/${id}/suppliers.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Suppliers Offering Part Fetched Successfully!'))
        );
    }

    getInventoryById(id: string): Observable<Parts> {
        return this.http.get<Parts>(`${environment.apiUrl}/parts/${id}.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Inventory: ${id} Fetched Successfully!`))
        );
    }

    addInventory(parts: Parts): Observable<Parts> {
        return this.http.post<Parts>(`${environment.apiUrl}/parts`,
            {
                qtyOnHand: parts.qtyOnHand,
                parLevel: parts.parLevel,
                partName: parts.partName,
                partDescription: parts.partDescription,
                imgUrl: parts.imgUrl,
                salePrice: parts.salePrice,
                compatibleDevices: parts.compatibleDevices
            },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Inventory Added!'))
        );
    }

    editInventory(parts: Parts): Observable<Parts> {
        return this.http.put<Parts>(`${environment.apiUrl}/parts/${parts.id}`,
            {
                qtyOnHand: parts.qtyOnHand,
                parLevel: parts.parLevel,
                partName: parts.partName,
                partDescription: parts.partDescription,
                imgUrl: parts.imgUrl,
                salePrice: parts.salePrice,
                compatibleDevices: parts.compatibleDevices
            }, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Part: ${parts.id} Updated Successfully!`))
        );
    }

    deleteInventory(id: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/parts/${id}`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Part: ${id} Deleted Successfully!`))
        );
    }
}
