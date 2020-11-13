import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Injectable,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
    CalendarDateFormatter,
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTitleFormatter,
    CalendarView
} from 'angular-calendar';
import {TitleFormatProvider} from './title-format.provider';
import {Bookings} from '../../../../interfaces/bookings';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {map, takeUntil} from 'rxjs/operators';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {
    addDays,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    startOfDay,
    startOfMonth
} from 'date-fns';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {CustomDateFormatProvider} from './custom-date.provider';


@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: CalendarEventTitleFormatter,
            useClass: TitleFormatProvider
        },
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatProvider
        }
    ],
})
export class CalendarPage implements OnInit, OnDestroy {
    view: CalendarView = CalendarView.Month;
    viewDate: Date = new Date();
    clickedDate: Date;
    activeDayIsOpen: boolean;
    daysInWeek = 7;
    events$: Observable<CalendarEvent<{ booking: Bookings }>[]>;
    actions: CalendarEventAction[] = [];
    private destroy$ = new Subject();

    constructor(
        private http: HttpClient,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
        private cd: ChangeDetectorRef,
        @Inject(DOCUMENT) private document
    ) {
    }

    changeDay(date: Date) {
        this.viewDate = date;
        this.view = CalendarView.Day;
    }

    ngOnInit(): void {
        this.fetchEvents();
        const CALENDAR_RESPONSIVE = {
            small: {
                breakpoint: '(max-width: 576px)',
                daysInWeek: 5,
            },
            medium: {
                breakpoint: '(max-width: 768px)',
                daysInWeek: 5,
            },
            large: {
                breakpoint: '(max-width: 960px)',
                daysInWeek: 7,
            },
        };
        this.breakpointObserver
            .observe(
                Object.values(CALENDAR_RESPONSIVE).map(({breakpoint}) => breakpoint)
            )
            .pipe(takeUntil(this.destroy$))
            .subscribe((state: BreakpointState) => {
                const foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(
                    ({breakpoint}) => !!state.breakpoints[breakpoint]
                );
                if (foundBreakpoint) {
                    this.daysInWeek = foundBreakpoint.daysInWeek;
                } else {
                    this.daysInWeek = 7;
                }
                this.cd.markForCheck();
            });

    }

    public fetchEvents(): void {
        const getStart: any = {
            month: startOfMonth,
            week: addDays,
            day: startOfDay,
        }[this.view];

        const getEnd: any = {
            month: endOfMonth,
            week: endOfWeek,
            day: endOfDay,
        }[this.view];
        const params = new HttpParams()
            .set('start[after]', format(getStart(this.viewDate), 'yyyy-MM-dd HH:mm:ss')
            )
            .set('end[before]', format(getEnd(this.viewDate), 'yyyy-MM-dd HH:mm:ss')
            );
        this.events$ = this.http.get(`${environment.apiUrl}/bookings.json`, {
            params, headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(
            map((results: Bookings[]) => {
                return results.map((booking: Bookings) => {
                    return {
                        id: booking.id,
                        title: booking.customer.firstName + '<br />' + booking.customer.lastName,
                        start: new Date(booking.dateOfAppointment),
                        end: new Date(booking.dateOfAppointment),
                        allDay: false,
                        meta: {
                            booking,
                        },
                    };
                });
            })
        );
    }

    dayClicked({
                   date,
                   events,
               }: {
        date: Date;
        events: CalendarEvent<{ booking: Bookings }>[];
    }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventClicked(event: CalendarEvent<{ booking: Bookings }>): void {
        const id = event.meta.booking.id;
        this.router.navigateByUrl(`/admin/bookings/${id}/view`);
    }

    ngOnDestroy() {
        this.destroy$.next();
    }
}
