import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookingsService, DevicesService, UsersService} from '../../../../services';
import {User} from '../../../../interfaces/user';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Bookings} from '../../../../interfaces/bookings';
import {Devices} from '../../../../interfaces/devices';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  booking: Bookings;
  form: FormGroup;
  users: User[];
  devices: Devices[];
  date = new Date();

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingsService,
    private router: Router,
    private usersService: UsersService,
    private devicesService: DevicesService
  ) {
    this.form = this.fb.group({
      dateBookingMade: [this.date],
      customer: ['', Validators.required],
      device: ['', Validators.required],
      dateOfAppointment: ['', Validators.required],
      bookingConfirmed: ['', Validators.required],
      relatedRepair: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.devicesService.getAllDevices()
      .subscribe((data: Devices[]) => this.devices = data);

    this.usersService.getAllUsers()
      .subscribe((data: User[]) => this.users = data);
  }

  onCreateBooking() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.booking, ...this.form.value};

        this.bookingService.addBooking(fData)
          .pipe(
            tap(_ => alert('Booking Created!')),
            tap(_ => this.router.navigateByUrl(`/admin/bookings/${_.id}/view`))
          ).subscribe((data: Bookings) => this.booking = data);
      }
    }
  }

}
