import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {IonicModule} from '@ionic/angular';
import {CalendarPageRoutingModule} from './calendar-routing.module';

import {CalendarPage} from './calendar.page';
import {SharedModule} from '../../../../shared/header/shared.module';
import {CalendarToolbarComponent} from './calendar-toolbar/calendar-toolbar';
import {CustomDateFormatProvider} from './custom-date.provider';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalendarPageRoutingModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
        SharedModule
    ],
    declarations: [CalendarPage, CalendarToolbarComponent],
    providers: [
        CustomDateFormatProvider
    ]
})
export class CalendarPageModule {
}
