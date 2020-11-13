import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SupplierService} from '../../../../services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Suppliers} from '../../../../interfaces/suppliers';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  supplier: Suppliers;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private supplierService: SupplierService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      name: ['', Validators.required],
      contactPerson: ['']
    });
  }

  ngOnInit() {
  }

  onAddSupplier() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.supplier, ...this.form.value};

        this.supplierService.addSupplier(fData)
          .pipe(
            tap(_ => alert('Supplier Updated!')),
            tap(_ => this.router.navigateByUrl(`/admin/suppliers/${_.id}/view`))
          ).subscribe((data: Suppliers) => this.supplier = data);
      }
    }
  }
}
