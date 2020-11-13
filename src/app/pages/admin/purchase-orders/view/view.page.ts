import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PurchaseOrdersService} from '../../../../services';
import {Orders} from '../../../../interfaces/orders';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, OnChanges {

  orders: Orders;

  constructor(
    private route: ActivatedRoute,
    private ordersService: PurchaseOrdersService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadPurchaseOrderById(id);
  }

  loadPurchaseOrderById(id: string) {
    this.ordersService.getPurchaseOrderById(id)
      .subscribe((data: Orders) => this.orders = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadPurchaseOrderById(this.orders.id);
  }

}
