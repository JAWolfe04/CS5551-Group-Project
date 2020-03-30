import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateExercisePage } from './create-exercise.page';

describe('CreateExercisePage', () => {
  let component: CreateExercisePage;
  let fixture: ComponentFixture<CreateExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
