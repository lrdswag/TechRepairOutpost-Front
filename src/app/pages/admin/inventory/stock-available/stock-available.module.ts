import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockAvailablePageRoutingModule } from './stock-available-routing.module';

import { StockAvailablePage } from './stock-available.page';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StockAvailablePageRoutingModule,
        SharedModule
    ],
  declarations: [StockAvailablePage]
})
export class StockAvailablePageModule {}
