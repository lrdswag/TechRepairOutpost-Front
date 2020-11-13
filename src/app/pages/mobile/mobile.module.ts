import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilePageRoutingModule } from './mobile-routing.module';

import { MobilePage } from './mobile.page';
import {SharedModule} from '../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MobilePageRoutingModule,
        SharedModule
    ],
  declarations: [MobilePage]
})
export class MobilePageModule {}
