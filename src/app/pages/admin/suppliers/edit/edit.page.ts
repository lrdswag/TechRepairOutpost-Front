import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService, SupplierService} from '../../../../services';
import {Suppliers} from '../../../../interfaces/suppliers';
import {tap} from 'rxjs/operators';
import {Parts} from '../../../../interfaces/parts';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    supplier: Suppliers;
    form: FormGroup;
    parts: Parts[];

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private supplierService: SupplierService,
        private partsService: InventoryService
    ) {
        this.form = this.fb.group({
            id: [''],
            email: [''],
            contactNumber: [''],
            name: [''],
            contactPerson: [''],
            partsOffered: ['']
        });
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.loadSupplierById(id);
        this.loadParts();
    }

    loadSupplierById(id: string) {
        this.supplierService.getSupplierById(id)
            .subscribe((data: Suppliers) => this.supplier = data);
    }

    loadParts() {
        this.partsService.getAllInventory()
            .subscribe((data: Parts[]) => this.parts = data);
    }

    onEditSupplier() {
        if (this.form.valid) {
            const fData = {...this.supplier, ...this.form.value};

            this.supplierService.editSupplier(fData)
                .pipe(
                    tap(_ => alert('Supplier Updated!')),
                    tap(_ => this.router.navigateByUrl(`/admin/suppliers/${_.id}/view`))
                ).subscribe((data: Suppliers) => this.supplier = data);
        }
    }
}
