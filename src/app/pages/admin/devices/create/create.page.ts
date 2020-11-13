import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DevicesService} from '../../../../services';
import {Router} from '@angular/router';
import {Devices} from '../../../../interfaces/devices';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  form: FormGroup;
  device: Devices;

  constructor(
    private fb: FormBuilder,
    private deviceService: DevicesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      series: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onAddDevice() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.device, ...this.form.value};

        this.deviceService.addDevice(fData)
          .pipe(
            tap(_ => alert('Device Created!')),
            tap(_ => this.router.navigateByUrl(`/admin/devices/${_.id}/view`))
          ).subscribe((data: Devices) => this.device = data);
      }
    }
  }
}
