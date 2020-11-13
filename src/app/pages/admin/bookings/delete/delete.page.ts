import { Component, OnInit } from '@angular/core';
import {Bookings} from '../../../../interfaces/bookings';
import {BookingsService} from '../../../../services';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {


  booking: Bookings;

  constructor(
    private bookingService: BookingsService,
    private route: ActivatedRoute,
    ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookingService.getBookingById(id)
      .subscribe((data: Bookings) => this.booking = data);
  }

  onDeleteBooking(id: string) {
    this.bookingService.deleteBooking(id)
      .pipe(
        tap(_ => alert('Booking Deleted!'))
      )
      .subscribe((data: Bookings) => this.booking = data);
  }
}
