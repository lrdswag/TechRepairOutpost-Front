import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Devices} from '../interfaces/devices';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) {
  }

  getAllDevices(): Observable<Devices[]> {
    return this.http.get<Devices[]>(`${environment.apiUrl}/devices.json`,
      {
          params: new HttpParams()
              .set('order[brand]', 'asc')
              .set('order[model]', 'asc'),
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log('Devices Fetched Successfully!'))
    );
  }

  getDeviceById(id: string): Observable<Devices> {
    return this.http.get<Devices>(`${environment.apiUrl}/devices/${id}.json`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`Device: ${id} Fetched Successfully!`))
    );
  }

  addDevice(device: Devices): Observable<Devices> {
    return this.http.post<Devices>(`${environment.apiUrl}/devices`,
      {
          brand: device.brand,
          model: device.model,
          series: device.series,
      }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log('Device Added Successfully!'))
    );
  }

  editDevice(device: Devices): Observable<Devices> {
    return this.http.put<Devices>(`${environment.apiUrl}/devices/${device.id}`,
      {
          brand: device.brand,
          model: device.model,
          series: device.series,
      }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`Device: ${device.id} Updated Successfully!`))
    );
  }

  deleteDevice(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/devices/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
      tap(_ => console.log(`Device ${id} Deleted Successfully!`))
    );
  }
}
