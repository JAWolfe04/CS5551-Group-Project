import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutinePage } from './routine.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('RoutinePage', () => {
  let component: RoutinePage;
  let fixture: ComponentFixture<RoutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinePage ],
      imports: [IonicModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
