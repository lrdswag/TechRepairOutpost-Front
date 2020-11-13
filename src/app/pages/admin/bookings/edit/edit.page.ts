import {Component, OnInit} from '@angular/core';
import {Bookings} from '../../../../interfaces/bookings';
import {BookingsService, DevicesService} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {Devices} from '../../../../interfaces/devices';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  booking: Bookings;
  form: FormGroup;
  date = new Date();
  devices: Devices[];

  constructor(
    private bookingService: BookingsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private devicesService: DevicesService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      customer: ['', Validators.required],
      device: ['', Validators.required],
      dateOfAppointment: ['', Validators.required],
      bookingConfirmed: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookingService.getBookingById(id)
      .subscribe((data: Bookings) => this.booking = data);
    this.loadDevices();
  }

  loadDevices() {
    this.devicesService.getAllDevices()
        .subscribe((data: Devices[]) => this.devices = data);
  }

  onEditBooking(id: string) {
    if (this.form.valid) {
      if (this.form.dirty) {

        const fData = {...this.booking, ...this.form.value};
        this.bookingService.editBooking(fData)
          .pipe(
            tap(_ => this.router.navigateByUrl(`/admin/bookings/${_.id}/view`))
          )
          .subscribe((data: Bookings) => this.booking = data);
      }
    }
  }
}
