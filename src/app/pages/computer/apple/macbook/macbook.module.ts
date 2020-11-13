import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacbookPageRoutingModule } from './macbook-routing.module';

import { MacbookPage } from './macbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacbookPageRoutingModule
  ],
  declarations: [MacbookPage]
})
export class MacbookPageModule {}
