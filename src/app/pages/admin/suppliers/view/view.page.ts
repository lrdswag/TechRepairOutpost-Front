import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupplierService} from '../../../../services';
import {ActivatedRoute} from '@angular/router';
import {Suppliers} from '../../../../interfaces/suppliers';
import {Parts} from '../../../../interfaces/parts';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, OnChanges {

  supplier: Suppliers;
  parts: Parts[];

  constructor(
    private suppliersService: SupplierService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadSupplierById(id);
    this.loadSuppliersParts(id);
  }

  loadSupplierById(id: string) {
    this.suppliersService.getSupplierById(id)
      .subscribe((data: Suppliers) => this.supplier = data);
    this.loadSuppliersParts(id);
  }

  loadSuppliersParts(id: string) {
    this.suppliersService.getSuppliersParts(id)
        .subscribe((data: Parts[]) => this.parts = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadSupplierById(this.supplier.id);
    this.loadSuppliersParts(this.supplier.id);
  }
}
