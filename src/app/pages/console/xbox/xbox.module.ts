import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XboxPageRoutingModule } from './xbox-routing.module';

import { XboxPage } from './xbox.page';
import {SharedModule} from '../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        XboxPageRoutingModule,
        SharedModule
    ],
  declarations: [XboxPage]
})
export class XboxPageModule {}
