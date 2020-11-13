import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopPageRoutingModule } from './laptop-routing.module';

import { LaptopPage } from './laptop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptopPageRoutingModule
  ],
  declarations: [LaptopPage]
})
export class LaptopPageModule {}
