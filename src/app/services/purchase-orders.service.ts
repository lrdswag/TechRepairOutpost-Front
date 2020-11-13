import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Orders} from '../interfaces/orders';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PartsOrdered} from '../interfaces/parts-ordered';

@Injectable({
    providedIn: 'root'
})
export class PurchaseOrdersService {

    constructor(private http: HttpClient) {
    }

    getAllPurchaseOrders(): Observable<Orders[]> {
        return this.http.get<Orders[]>(`${environment.apiUrl}/orders.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Purchase Orders Fetched Successfully!'))
        );
    }

    getPendingDeliveryPurchaseOrders(): Observable<Orders[]> {
        return this.http.get<Orders[]>(`${environment.apiUrl}/orders.json`,
            {
                params: new HttpParams()
                    .set('ItemsDelivered', 'false')
                    .set('order[dateOrdered]', 'asc'),
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Pending Delivery Orders Fetched Successfully!'))
        );
    }

    getPurchaseOrderDetails(id: string): Observable<PartsOrdered[]> {
        return this.http.get<PartsOrdered[]>(`${environment.apiUrl}/orders/${id}/parts_ordereds.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Purchase Order Details Fetched Successfully!'))
        );
    }

    getPurchaseOrderById(id: string): Observable<Orders> {
        return this.http.get<Orders>(`${environment.apiUrl}/orders/${id}.json`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Purchase Order: ${id} Fetched Successfully!`))
        );
    }

    addPurchaseOrder(order: Orders): Observable<Orders> {
        return this.http.post<Orders>(`${environment.apiUrl}/orders`,
            {
                dateOfOrder: order.dateOfOrder,
                isDelivered: order.isDelivered,
                supplier: order.supplier,
                purchaseOrderDetails: order.purchaseOrderDetails
            }, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Purchase Order Created Successfully!'))
        );
    }

    editPurchaseOrder(order: Orders): Observable<Orders> {
        return this.http.put<Orders>(`${environment.apiUrl}/orders/${order.id}`,
            {
                dateOfOrder: order.dateOfOrder,
                isDelivered: order.isDelivered,
                supplier: order.supplier,
                purchaseOrderDetails: order.purchaseOrderDetails
            }, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log('Purchase Order Created Successfully!'))
        );
    }

    deletePurchaseOrder(id: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/orders/${id}`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(_ => console.log(`Purchase Order: ${id} Deleted Successfully!`))
        );
    }
}
