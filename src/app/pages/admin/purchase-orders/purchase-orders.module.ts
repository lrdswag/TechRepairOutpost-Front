import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PurchaseOrdersPageRoutingModule} from './purchase-orders-routing.module';
import {PurchaseOrdersPage} from './purchase-orders.page';
import {SharedModule} from '../../../shared/header/shared.module';
import {DevicesService, InventoryService, PurchaseOrdersService} from '../../../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrdersPageRoutingModule,
    SharedModule
  ],
  declarations: [PurchaseOrdersPage],
  providers: [InventoryService, DevicesService, PurchaseOrdersService]
})
export class PurchaseOrdersPageModule {
}
