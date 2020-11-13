import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMacPageRoutingModule } from './i-mac-routing.module';

import { IMacPage } from './i-mac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IMacPageRoutingModule
  ],
  declarations: [IMacPage]
})
export class IMacPageModule {}
