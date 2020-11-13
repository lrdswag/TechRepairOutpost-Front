import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CreatePageRoutingModule} from './create-routing.module';
import {CreatePage} from './create.page';
import {BookingsService, DevicesService, UsersService} from '../../../../services';
import {SharedModule} from '../../../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreatePageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  declarations: [CreatePage],
  providers: [BookingsService, UsersService, DevicesService]
})
export class CreatePageModule {
}
