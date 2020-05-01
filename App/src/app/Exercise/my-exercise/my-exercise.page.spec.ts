import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyExercisePage } from './my-exercise.page';

describe('MyExercisePage', () => {
  let component: MyExercisePage;
  let fixture: ComponentFixture<MyExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
