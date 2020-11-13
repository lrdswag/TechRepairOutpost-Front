import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartsOfferedPage } from './parts-offered.page';

describe('PartsOfferedPage', () => {
  let component: PartsOfferedPage;
  let fixture: ComponentFixture<PartsOfferedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsOfferedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartsOfferedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
