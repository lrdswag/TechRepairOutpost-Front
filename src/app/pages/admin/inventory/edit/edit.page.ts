import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DevicesService, InventoryService, SupplierService} from '../../../../services';
import {Devices} from '../../../../interfaces/devices';
import {Parts} from '../../../../interfaces/parts';
import {Suppliers} from '../../../../interfaces/suppliers';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  inventory: Parts;
  form: FormGroup;
  devices: Devices[];
  suppliers: Suppliers[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    private devicesService: DevicesService,
    private suppliersService: SupplierService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      qtyOnHand: ['', Validators.required],
      parLevel: ['', Validators.required],
      partDescription: ['', Validators.required],
      imgUrl: ['', Validators.required],
      salePrice: ['', Validators.required],
      partName: ['', Validators.required],
      devicesCompatibleWith: [['']],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadInventoryItem(id);
    this.loadDevices();
    this.loadSuppliers();
  }

  loadInventoryItem(id: string) {
    this.inventoryService.getInventoryById(id)
      .subscribe((data: Parts) => this.inventory = data);
  }

  loadDevices() {
    this.devicesService.getAllDevices()
      .subscribe((data: Devices[]) => this.devices = data);
  }

  loadSuppliers() {
    this.suppliersService.loadAllSuppliers()
      .subscribe((data: Suppliers[]) => this.suppliers = data);
  }

  onEditInventoryItem() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.inventory, ...this.form.value};

        this.inventoryService.editInventory(fData)
          .pipe(
            tap(_ => alert('Inventory Item Updated!')),
            tap(_ => this.router.navigateByUrl(`/admin/inventory/${_.id}/view`))
          ).subscribe((data: Parts) => this.inventory = data);
      }
    }
  }

}
