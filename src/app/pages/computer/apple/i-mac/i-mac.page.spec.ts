import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IMacPage } from './i-mac.page';

describe('IMacPage', () => {
  let component: IMacPage;
  let fixture: ComponentFixture<IMacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMacPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IMacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
