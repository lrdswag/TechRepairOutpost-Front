import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockAvailablePage } from './stock-available.page';

describe('StockAvailablePage', () => {
  let component: StockAvailablePage;
  let fixture: ComponentFixture<StockAvailablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAvailablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockAvailablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
