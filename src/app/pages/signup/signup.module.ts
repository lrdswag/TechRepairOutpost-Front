import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SignupPage} from './signup';
import {SignupPageRoutingModule} from './signup-routing.module';
import {SharedModule} from '../../shared/header/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignupPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  declarations: [
    SignupPage,
  ]
})
export class SignUpModule {
}
