import {Component, OnInit} from '@angular/core';
import {PurchaseOrdersService} from '../../../../services';
import {Orders} from '../../../../interfaces/orders';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  order: Orders;

  constructor(
    private orderService: PurchaseOrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  loadPurchaseOrder(id: string) {
    this.orderService.getPurchaseOrderById(id)
      .subscribe((data: Orders) => this.order = data);
  }

  onDeletePurchaseOrder(id: string) {
    this.orderService.deletePurchaseOrder(id)
      .pipe(
        tap(_ => alert(`Purchase Order: ${id} Deleted!`)),
        tap(_ => this.router.navigateByUrl(`/admin/purchase-orders/list`))
      ).subscribe((data: Orders) => this.order = data);
  }
}
