import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequiresOrderingPage } from './requires-ordering.page';

describe('RequiresOrderingPage', () => {
  let component: RequiresOrderingPage;
  let fixture: ComponentFixture<RequiresOrderingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiresOrderingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequiresOrderingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
