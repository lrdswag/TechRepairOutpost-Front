import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DevicesService} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {Devices} from '../../../../interfaces/devices';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  form: FormGroup;
  device: Devices;

  constructor(
    private fb: FormBuilder,
    private deviceService: DevicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      series: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.deviceService.getDeviceById(id).subscribe((data: Devices) => this.device = data);
  }

  onEditDevice() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.device, ...this.form.value};
        this.deviceService.editDevice(fData)
          .pipe(
            tap(_ => alert('Device Updated!')),
            tap(_ => this.router.navigateByUrl(`/admin/devices/${_.id}/view`))
          ).subscribe((data: Devices) => this.device = data);
      }
    }
  }
}
