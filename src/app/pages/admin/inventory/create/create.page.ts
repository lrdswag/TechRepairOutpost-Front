import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DevicesService, InventoryService, SupplierService} from '../../../../services';
import {Devices} from '../../../../interfaces/devices';
import {Parts} from '../../../../interfaces/parts';
import {Suppliers} from '../../../../interfaces/suppliers';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  form: FormGroup;
  inventory: Parts;
  devices: Devices[];
  suppliers: Suppliers[];

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService,
    private inventoryService: InventoryService,
    private deviceService: DevicesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      qtyOnHand: ['', Validators.required],
      parLevel: [''],
      partName: ['', Validators.required],
      partDescription: [''],
      imgUrl: [''],
      salePrice: ['', Validators.required],
      compatibleDevices: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.deviceService.getAllDevices()
      .subscribe((data: Devices[]) => this.devices = data);
    this.supplierService.loadAllSuppliers()
      .subscribe((data: Suppliers[]) => this.suppliers = data);
  }

  onAddCreateInventory() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.inventory, ...this.form.value};

        this.inventoryService.addInventory(fData)
          .pipe(
            tap(_ => alert('New Inventory Item Added!')),
            tap(_ => this.router.navigateByUrl(`/admin/inventory/${_.id}/view`))
          ).subscribe((data: Parts) => this.inventory = data);
      }
    }
  }

}
