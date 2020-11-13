import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Suppliers} from '../interfaces/suppliers';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {SupplierParts} from '../interfaces/supplier-parts';
import {Orders} from '../interfaces/orders';
import {Parts} from '../interfaces/parts';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    constructor(private http: HttpClient) {
    }

    loadAllSuppliers(): Observable<Suppliers[]> {
        return this.http.get<Suppliers[]>(`${environment.apiUrl}/suppliers.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Suppliers Fetched Successfully!'))
        );
    }

    getSupplierById(id: string): Observable<Suppliers> {
        return this.http.get<Suppliers>(`${environment.apiUrl}/suppliers/${id}.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Supplier: ${id} Fetched Successfully!`))
        );
    }

    getSuppliersParts(id: string): Observable<Parts[]> {
        return this.http.get<Parts[]>(`${environment.apiUrl}/suppliers/${id}/parts_offereds.json`,
            {headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                }), params: new HttpParams()
                    .set('order[partName]', 'asc')
            }).pipe(
                tap(_ => console.log('Suppliers Parts Fetched Successfully!'))
        );
    }

    getSuppliersOrders(id: string): Observable<Orders[]> {
        return this.http.get<Orders[]>(`${environment.apiUrl}/suppliers/${id}/purchase_orders.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Fetched Suppliers Purchase Orders Successfully!'))
        );
    }

    addSupplier(supplier: Suppliers): Observable<Suppliers> {
        return this.http.post<Suppliers>(`${environment.apiUrl}/suppliers`,
            {
                name: supplier.name,
                contactNumber: supplier.contactNumber,
                email: supplier.email,
                contactPerson: supplier.contactPerson,
                partsOffered: supplier.partsOffered
            },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('New Supplier Created Successfully!'))
        );
    }

    editSupplier(supplier: Suppliers): Observable<Suppliers> {
        return this.http.put<Suppliers>(`${environment.apiUrl}/suppliers/${supplier.id}`,
            {
                id: supplier.id,
                name: supplier.name,
                contactNumber: supplier.contactNumber,
                email: supplier.email,
                contactPerson: supplier.contactPerson,
                partsOffered: supplier.partsOffered
            },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Supplier: ${supplier.id} Updated Successfully!`))
        );
    }

    deleteSupplier(id: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/suppliers/${id}`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Supplier ${id} Deleted Successfully!`))
        );
    }
}
