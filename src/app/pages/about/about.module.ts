import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AboutPage} from './about';
import {AboutPageRoutingModule} from './about-routing.module';
import {SharedModule} from '../../shared/header/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    SharedModule
  ],
  declarations: [AboutPage],
  bootstrap: [AboutPage],
})
export class AboutModule {
}
