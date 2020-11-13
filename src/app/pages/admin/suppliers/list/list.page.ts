import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupplierService} from '../../../../services';
import {Suppliers} from '../../../../interfaces/suppliers';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

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
