import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {DevicesService} from '../../../../services';
import {Devices} from '../../../../interfaces/devices';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

  devices: Devices[];

  constructor(private deviceService: DevicesService) {
  }

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices() {
    this.deviceService.getAllDevices()
      .subscribe((data: Devices[]) => this.devices = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadDevices();
  }
}
