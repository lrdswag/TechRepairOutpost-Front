import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NintendoPageRoutingModule } from './nintendo-routing.module';

import { NintendoPage } from './nintendo.page';
import {SharedModule} from '../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NintendoPageRoutingModule,
        SharedModule
    ],
  declarations: [NintendoPage]
})
export class NintendoPageModule {}
