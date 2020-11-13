import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplePage } from './apple.page';

describe('ApplePage', () => {
  let component: ApplePage;
  let fixture: ComponentFixture<ApplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
