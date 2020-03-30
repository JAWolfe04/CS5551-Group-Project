import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoveExercisePage } from './remove-exercise.page';

describe('RemoveExercisePage', () => {
  let component: RemoveExercisePage;
  let fixture: ComponentFixture<RemoveExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveExercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
