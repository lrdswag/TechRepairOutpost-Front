import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequiresOrderingPageRoutingModule } from './requires-ordering-routing.module';

import { RequiresOrderingPage } from './requires-ordering.page';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RequiresOrderingPageRoutingModule,
        SharedModule
    ],
  declarations: [RequiresOrderingPage]
})
export class RequiresOrderingPageModule {}
