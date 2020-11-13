import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartsOfferedPageRoutingModule } from './parts-offered-routing.module';

import { PartsOfferedPage } from './parts-offered.page';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PartsOfferedPageRoutingModule,
        SharedModule
    ],
  declarations: [PartsOfferedPage]
})
export class PartsOfferedPageModule {}
