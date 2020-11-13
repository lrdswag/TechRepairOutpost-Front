import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PurchaseOrdersService} from '../../../../services';
import {Orders} from '../../../../interfaces/orders';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

  orders: Orders[];

  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
  ) {
  }

  ngOnInit() {
    this.loadPurchaseOrders();
  }

  loadPurchaseOrders() {
    this.purchaseOrdersService.getAllPurchaseOrders()
      .subscribe((data: Orders[]) => this.orders = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadPurchaseOrders();
  }
}
