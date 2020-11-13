import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaystationPage } from './playstation.page';

describe('PlaystationPage', () => {
  let component: PlaystationPage;
  let fixture: ComponentFixture<PlaystationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaystationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
