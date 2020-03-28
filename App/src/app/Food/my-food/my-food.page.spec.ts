import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoodPage } from './my-food.page';
import {RouterTestingModule} from '@angular/router/testing';
import {IonicModule} from '@ionic/angular';

describe('MyFoodPage', () => {
  let component: MyFoodPage;
  let fixture: ComponentFixture<MyFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFoodPage ],
      imports: [RouterTestingModule, IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
