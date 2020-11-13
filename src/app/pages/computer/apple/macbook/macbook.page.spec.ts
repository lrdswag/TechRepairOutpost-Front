import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MacbookPage } from './macbook.page';

describe('MacbookPage', () => {
  let component: MacbookPage;
  let fixture: ComponentFixture<MacbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MacbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
