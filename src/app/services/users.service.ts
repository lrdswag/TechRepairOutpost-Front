import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {Repairs} from '../interfaces/repairs';
import {Bookings} from '../interfaces/bookings';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users.json`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log('Users Fetched Successfully!'))
    );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`Fetched User: ${id} Successfully!`))
    );
  }

  getUsersRepairs(id: string): Observable<Repairs[]> {
      return this.http.get<Repairs[]>(`${environment.apiUrl}/users/${id}/customers_repairs.json`,
          {headers: new HttpHeaders({
                  'Content-Type': 'application/json'
              })
          }).pipe(
              tap(_ => console.log('Fetched Users Repairs Successfully!'))
      );
  }

  getUsersBookings(id: string): Observable<Bookings[]> {
      return this.http.get<Bookings[]>(`${environment.apiUrl}/users/${id}/bookings_placeds.json`,
          {headers: new HttpHeaders({
                  'Content-Type': 'application/json'
              })
          }).pipe(
              tap(_ => console.log('Fetched Users Bookings Successfully!'))
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`,
      {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          contactNumber: user.contactNumber,
          password: user.password,
          roles: user.roles
      }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`User ${user.firstName} ${user.lastName} Added Successfully!`))
    );
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`,
      {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          contactNumber: user.contactNumber,
          password: user.password,
          roles: user.roles
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`User ${user.id} Updated Successfully!`))
    );
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/users/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`User: ${id} Deleted Successfully!`))
    );
  }
}
