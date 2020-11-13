import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InventoryService, PurchaseOrdersService, SupplierService} from '../../../../services';
import {Suppliers} from '../../../../interfaces/suppliers';
import {Orders} from '../../../../interfaces/orders';
import {Parts} from '../../../../interfaces/parts';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  suppliers: Suppliers[];
  inventoryItems: Parts[];
  purchaseOrder: Orders;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private suppliersService: SupplierService,
    private inventoryService: InventoryService,
    private orderService: PurchaseOrdersService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      dateOrdered: ['', Validators.required],
      PartsOrdered: [[], Validators.required],
      Supplier: ['', Validators.required],
      QuantityOrdered: ['', Validators.required],
      InvoicePaid: ['', Validators.required],
      ItemsDelivered: ['', Validators.required],
      DateDelivered: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadInventoryItems();
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.suppliersService.loadAllSuppliers()
      .subscribe((data: Suppliers[]) => this.suppliers = data);
  }

  loadInventoryItems() {
    this.inventoryService.getAllInventory()
      .subscribe((data: Parts[]) => this.inventoryItems = data);
  }

  onAddPurchaseOrder() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.purchaseOrder, ...this.form.value};
        this.orderService.addPurchaseOrder(fData)
          .pipe(
            tap(_ => alert(`Purchase Order Created!`)),
            tap(_ => this.router.navigateByUrl(`/admin.purchase-orders/${_.id}/view`))
          ).subscribe((data: Orders) => this.purchaseOrder = data);
      }
    }
  }

}
