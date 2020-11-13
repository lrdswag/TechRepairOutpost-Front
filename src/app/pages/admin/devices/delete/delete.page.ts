import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DevicesService} from '../../../../services';
import {Devices} from '../../../../interfaces/devices';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.page.html',
    styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

    device: Devices;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private devicesService: DevicesService
    ) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.loadDevice(id);
    }

    loadDevice(id: string) {
        this.devicesService.getDeviceById(id)
            .subscribe((data: Devices) => this.device = data);
    }
}
