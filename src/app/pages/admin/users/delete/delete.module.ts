import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePageRoutingModule } from './delete-routing.module';

import { DeletePage } from './delete.page';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DeletePageRoutingModule,
        SharedModule
    ],
  declarations: [DeletePage]
})
export class DeletePageModule {}
