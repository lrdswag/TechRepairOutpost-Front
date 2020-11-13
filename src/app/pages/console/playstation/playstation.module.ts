import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaystationPageRoutingModule } from './playstation-routing.module';

import { PlaystationPage } from './playstation.page';
import {SharedModule} from '../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlaystationPageRoutingModule,
        SharedModule
    ],
  declarations: [PlaystationPage]
})
export class PlaystationPageModule {}
