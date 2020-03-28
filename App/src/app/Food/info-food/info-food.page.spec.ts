import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoFoodPage } from './info-food.page';

describe('InfoFoodPage', () => {
  let component: InfoFoodPage;
  let fixture: ComponentFixture<InfoFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
