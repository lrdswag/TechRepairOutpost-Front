import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {InventoryPageRoutingModule} from './inventory-routing.module';
import {InventoryPage} from './inventory.page';
import {InventoryService} from '../../../services/inventory.service';
import {SharedModule} from '../../../shared/header/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryPageRoutingModule,
    SharedModule
  ],
  declarations: [InventoryPage],
  providers: [InventoryService]
})
export class InventoryPageModule {
}
