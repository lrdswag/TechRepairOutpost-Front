import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Suppliers} from '../../../interfaces/suppliers';
import {SupplierService} from '../../../services';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit, OnChanges {

  suppliers: Suppliers[];

  constructor(private suppliersService: SupplierService) {
    this.loadSuppliers();
  }

  ngOnInit() {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.suppliersService.loadAllSuppliers()
        .subscribe((data: Suppliers[]) => this.suppliers = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadSuppliers();
  }

}
