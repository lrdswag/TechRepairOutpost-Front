import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SupplierService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';
import {Suppliers} from '../../../../interfaces/suppliers';

@Component({
  selector: 'app-parts-offered',
  templateUrl: './parts-offered.page.html',
  styleUrls: ['./parts-offered.page.scss'],
})
export class PartsOfferedPage implements OnInit {

  parts: Parts[];
  supplier: Suppliers;

  constructor(
      private route: ActivatedRoute,
      private suppliersService: SupplierService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.suppliersService.getSuppliersParts(id)
        .subscribe((data: Parts[]) => this.parts = data);
    this.loadSupplier(id);
  }

  loadSupplier(id: string) {
    this.suppliersService.getSupplierById(id)
        .subscribe((data: Suppliers) => this.supplier = data);
  }

}
