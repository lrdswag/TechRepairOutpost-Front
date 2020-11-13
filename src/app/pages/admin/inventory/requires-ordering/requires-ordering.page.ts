import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';

@Component({
    selector: 'app-requires-ordering',
    templateUrl: './requires-ordering.page.html',
    styleUrls: ['./requires-ordering.page.scss'],
})
export class RequiresOrderingPage implements OnInit {

    parts: Parts[];

    constructor(
        private partsService: InventoryService,
    ) {
    }

    ngOnInit() {
        this.loadParts();
    }

    loadParts() {
        this.partsService.getAllInventory()
            .subscribe((data: Parts[]) => this.parts = data);
    }
}
