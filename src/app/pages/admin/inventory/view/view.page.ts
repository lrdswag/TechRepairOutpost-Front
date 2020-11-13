import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InventoryService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';
import {Suppliers} from '../../../../interfaces/suppliers';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, OnChanges {

  inventory: Parts;
  suppliers: Suppliers[];

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadInventoryItem(id);
    this.loadSuppliersOfferingPart(id);
  }

  loadInventoryItem(id: string) {
    this.inventoryService.getInventoryById(id)
      .subscribe((data: Parts) => this.inventory = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadInventoryItem(this.inventory.id);
  }

  loadSuppliersOfferingPart(id: string) {
    this.inventoryService.getSuppliersOfferingPart(id)
        .subscribe((data: Suppliers[]) => this.suppliers = data);
  }

}
