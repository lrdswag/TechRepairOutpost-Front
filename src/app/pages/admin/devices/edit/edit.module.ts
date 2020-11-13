import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {EditPageRoutingModule} from './edit-routing.module';
import {EditPage} from './edit.page';
import {DevicesService} from '../../../../services';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [EditPage],
  providers: [DevicesService]
})
export class EditPageModule {
}
