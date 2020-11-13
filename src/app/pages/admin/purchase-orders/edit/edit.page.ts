import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService, PurchaseOrdersService, SupplierService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';
import {Orders} from '../../../../interfaces/orders';
import {Suppliers} from '../../../../interfaces/suppliers';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  suppliers: Suppliers[];
  inventoryItems: Parts[];
  purchaseOrder: Orders;
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
    const id = this.route.snapshot.paramMap.get('id');
    this.loadPurchaseOrderById(id);
    this.loadInventoryItems();
    this.loadSuppliers();
  }


  loadPurchaseOrderById(id: string) {
    this.orderService.getPurchaseOrderById(id)
      .subscribe((data: Orders) => this.purchaseOrder = data);
  }

  loadSuppliers() {
    this.suppliersService.loadAllSuppliers()
      .subscribe((data: Suppliers[]) => this.suppliers = data);
  }

  loadInventoryItems() {
    this.inventoryService.getAllInventory()
      .subscribe((data: Parts[]) => this.inventoryItems = data);
  }

  onEditPurchaseOrder() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.purchaseOrder, ...this.form.value};
        this.orderService.editPurchaseOrder(fData)
          .pipe(
            tap(_ => alert(`Purchase Order: ${_.id} Updated!`)),
            tap(_ => this.router.navigateByUrl(`/admin.purchase-orders/${_.id}/view`))
          ).subscribe((data: Orders) => this.purchaseOrder = data);
      }
    }
  }
}
