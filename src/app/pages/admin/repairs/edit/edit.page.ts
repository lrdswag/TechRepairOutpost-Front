import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DevicesService, InventoryService, RepairsService, UsersService} from '../../../../services';
import {Devices} from '../../../../interfaces/devices';
import {User} from '../../../../interfaces/user';
import {Parts} from '../../../../interfaces/parts';
import {Repairs} from '../../../../interfaces/repairs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  form: FormGroup;
  devices: Devices[];
  customers: User[];
  parts: Parts[];
  repair: Repairs;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private repairService: RepairsService,
    private customersService: UsersService,
    private deviceService: DevicesService,
    private inventoryService: InventoryService,
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      dateRepairReceived: ['', Validators.required],
      customer: ['', Validators.required],
      deviceInForRepair: ['', Validators.required],
      partsUsed: [''],
      repairType: ['', Validators.required],
      warrantyRepair: ['', Validators.required],
      byDropOff: ['', Validators.required],
      byAppointment: ['', Validators.required],
      repairNotes: [''],
      dateDeviceCompleted: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadRepairForEdit(id);

    this.loadCustomers();
    this.loadInventory();
  }

  loadRepairForEdit(id: string) {
    this.repairService.getRepairById(id)
      .subscribe((data: Repairs) => this.repair = data);
  }

  loadCustomers() {
    this.customersService.getAllUsers()
      .subscribe((data: User[]) => this.customers = data);
  }

  loadInventory() {
    this.inventoryService.getAllInventory()
      .subscribe((data: Parts[]) => this.parts = data);
  }

  onEditRepair() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.repair, ...this.form.value};

        this.repairService.editRepair(fData)
          .pipe(
            tap(_ => alert('Repair Updated!')),
            tap(_ => this.router.navigateByUrl(`/admin/repairs/${_.id}/view`))
          ).subscribe((data: Repairs) => this.repair = data);
      }
    }
  }
}
