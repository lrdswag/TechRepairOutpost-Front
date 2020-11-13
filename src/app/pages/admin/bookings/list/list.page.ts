import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {BookingsService} from '../../../../services';
import {Bookings} from '../../../../interfaces/bookings';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

  bookings: Bookings[];

  constructor(private bookingsService: BookingsService) {
    this.loadBookings();
  }

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingsService.getAllBookings()
      .subscribe((data: Bookings[]) => this.bookings = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadBookings();
  }
}
