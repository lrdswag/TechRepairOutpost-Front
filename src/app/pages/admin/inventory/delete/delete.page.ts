import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService} from '../../../../services';
import {Parts} from '../../../../interfaces/parts';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  inventory: Parts;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadInventoryItem(id);
  }

  loadInventoryItem(id: string) {
    this.inventoryService.getInventoryById(id)
      .subscribe((data: Parts) => this.inventory = data);
  }

  onDeleteInventoryItem(id: string) {
    this.inventoryService.deleteInventory(id)
      .pipe(
        tap(_ => alert('Inventory Item Deleted!')),
        tap(_ => this.router.navigateByUrl(`/admin/inventory/list`))
      ).subscribe((data: Parts) => this.inventory = data);
  }

}
