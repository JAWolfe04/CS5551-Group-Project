import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ExercisePage } from './exercise.page';

describe('ExercisePage', () => {
  let component: ExercisePage;
  let fixture: ComponentFixture<ExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisePage],
      imports: [IonicModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
