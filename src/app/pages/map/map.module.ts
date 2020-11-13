import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MapPage } from './map';
import { MapPageRoutingModule } from './map-routing.module';
import {SharedModule} from '../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        MapPageRoutingModule,
        SharedModule
    ],
  declarations: [
    MapPage,
  ]
})
export class MapModule { }
