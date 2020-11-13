import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DevicesService} from '../../../../services';
import {Devices} from '../../../../interfaces/devices';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  device: Devices;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DevicesService,
  ) {
  }
 async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.loadDevice(id);
  }

  async loadDevice(id: string) {
    this.deviceService.getDeviceById(id).subscribe((data: Devices) => this.device = data);
  }
}
