import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SupplierService} from '../../../../services';
import {Suppliers} from '../../../../interfaces/suppliers';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  supplier: Suppliers;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suppliersService: SupplierService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadSupplier(id);
  }

  loadSupplier(id: string) {
    this.suppliersService.getSupplierById(id)
      .subscribe((data: Suppliers) => this.supplier = data);
  }

  onDeleteSupplier(id: string) {
    this.suppliersService.deleteSupplier(id)
      .pipe(
        tap(_ => alert('Supplier Deleted!')),
        tap(_ => this.router.navigateByUrl('admin/suppliers/list'))
      ).subscribe((data: Suppliers) => this.supplier = data);
  }

}
