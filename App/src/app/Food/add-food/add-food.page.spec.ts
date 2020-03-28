import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFoodPage } from './add-food.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('AddFoodPage', () => {
  let component: AddFoodPage;
  let fixture: ComponentFixture<AddFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodPage ],
      imports: [RouterTestingModule, IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
