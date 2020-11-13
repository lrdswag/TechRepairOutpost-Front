import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bookings} from '../interfaces/bookings';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookings: Bookings[];

  constructor(
    private http: HttpClient
  ) {
  }

  getAllBookings(): Observable<Bookings[]> {
    return this.http.get<Bookings[]>(`${environment.apiUrl}/bookings.json`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log('Bookings Fetched Successfully!'))
    );
  }

  getBookingById(id: string): Observable<Bookings> {
    return this.http.get<Bookings>(`${environment.apiUrl}/bookings/${id}.json`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`Booking ${id} Fetched Successfully!`))
    );
  }

  addBooking(booking: Bookings): Observable<Bookings> {
    return this.http.post<Bookings>(`${environment.apiUrl}/bookings`,
      {
          dateBookingMade: booking.dateBookingMade,
          customer: booking.customer,
          dateOfAppointment: booking.dateBookingMade,
          device: booking.device,
          relatedRepair: booking.relatedRepair
      },
      {headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
        tap(_ => console.log(`Booking: ${booking.id}`))
    );
  }

  editBooking(booking: Bookings): Observable<Bookings> {
    return this.http.put<Bookings>(`${environment.apiUrl}/bookings/${booking.id}`,
      {
          dateBookingMade: booking.dateBookingMade,
          customer: booking.customer,
          dateOfAppointment: booking.dateBookingMade,
          device: booking.device,
          relatedRepair: booking.relatedRepair
      },
      {headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`Booking: ${booking.id}`))
    );
  }

  getUsersBookings(id: string): Observable<Bookings[]> {
    return this.http.get<Bookings[]>(`${environment.apiUrl}/users/${id}/bookings.json`,
      {headers: new HttpHeaders({
          'Content-Type': 'application/json'
          })
      }).pipe(
        tap(_ => console.log('Users Bookings Fetched'))
    );
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/bookings/${id}`,
      {headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
        tap(_ => console.log(`Booking: ${id} Deleted Successfully!`))
    );
  }
}
