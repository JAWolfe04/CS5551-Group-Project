import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoveFoodPage } from './remove-food.page';

describe('RemoveFoodPage', () => {
  let component: RemoveFoodPage;
  let fixture: ComponentFixture<RemoveFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
