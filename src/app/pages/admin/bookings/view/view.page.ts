import {Component, OnInit} from '@angular/core';
import {BookingsService} from '../../../../services';
import {ActivatedRoute} from '@angular/router';
import {Bookings} from '../../../../interfaces/bookings';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  booking: Bookings;

  constructor(private bookingService: BookingsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookingService.getBookingById(id)
      .subscribe((data: Bookings) => this.booking = data);
  }

}
