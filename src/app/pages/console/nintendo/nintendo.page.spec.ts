import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NintendoPage } from './nintendo.page';

describe('NintendoPage', () => {
  let component: NintendoPage;
  let fixture: ComponentFixture<NintendoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NintendoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NintendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
