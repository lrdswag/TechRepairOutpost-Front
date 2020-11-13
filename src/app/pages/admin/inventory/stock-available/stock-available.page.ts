import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';

@Component({
    selector: 'app-stock-available',
    templateUrl: './stock-available.page.html',
    styleUrls: ['./stock-available.page.scss'],
})
export class StockAvailablePage implements OnInit {

    parts: Parts[];

    constructor(
        private partsService: InventoryService
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
