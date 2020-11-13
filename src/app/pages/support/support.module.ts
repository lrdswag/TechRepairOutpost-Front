import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPage } from './support';
import { SupportPageRoutingModule } from './support-routing.module';
import {SharedModule} from '../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SupportPageRoutingModule,
        SharedModule
    ],
  declarations: [
    SupportPage,
  ]
})
export class SupportModule { }
