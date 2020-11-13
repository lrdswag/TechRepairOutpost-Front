import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ListPageRoutingModule} from './list-routing.module';
import {ListPage} from './list.page';
import {InventoryService} from '../../../../services';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListPageRoutingModule,
        SharedModule
    ],
  declarations: [ListPage],
  providers: [InventoryService]
})
export class ListPageModule {
}
