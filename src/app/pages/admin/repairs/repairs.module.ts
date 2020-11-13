import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairsPageRoutingModule } from './repairs-routing.module';

import { RepairsPage } from './repairs.page';
import {SharedModule} from '../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RepairsPageRoutingModule,
        SharedModule
    ],
  declarations: [RepairsPage]
})
export class RepairsPageModule {}
