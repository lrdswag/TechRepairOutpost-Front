import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaptopPage } from './laptop.page';

describe('LaptopPage', () => {
  let component: LaptopPage;
  let fixture: ComponentFixture<LaptopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaptopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
