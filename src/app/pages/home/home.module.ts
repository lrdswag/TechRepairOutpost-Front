import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomePage} from './home';
import {SharedModule} from '../../shared/header/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
