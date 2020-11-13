import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XboxPage } from './xbox.page';

describe('XboxPage', () => {
  let component: XboxPage;
  let fixture: ComponentFixture<XboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
