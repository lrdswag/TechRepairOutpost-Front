import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {InventoryService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

  inventories: Parts[];

  constructor(
    private inventoryService: InventoryService
  ) {
    this.loadInventoryItems();
  }

  ngOnInit() {
    this.loadInventoryItems();
  }

  loadInventoryItems() {
    this.inventoryService.getAllInventory()
      .subscribe((data: Parts[]) => this.inventories = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadInventoryItems();
  }

}
