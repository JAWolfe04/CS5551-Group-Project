import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../interfaces/exercise';
import { AuthService } from '../../services/auth.service';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-my-exercise',
  templateUrl: './my-exercise.page.html',
  styleUrls: ['./my-exercise.page.scss'],
})
export class MyExercisePage implements OnInit {
  date: string = new Date().toISOString();
  exercises: Exercise[] = [];

  constructor(private auth: AuthService, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.currentExercises.subscribe( exercises => this.exercises = exercises);
    this.exerciseService.getExercises(this.date);
  }

  addExercise() {
    this.exerciseService.date = this.date;
    this.exerciseService.addExercise();
  }

  removeExercise(exercise: Exercise) {
  }

  changedDate() {
    this.exerciseService.getExercises(this.date);
  }

  logout() {
    this.auth.logout();
  }
}
