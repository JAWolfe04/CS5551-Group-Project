import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Exercise } from '../../interfaces/exercise';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.page.html',
  styleUrls: ['./create-exercise.page.scss'],
})
export class CreateExercisePage implements OnInit {

  constructor(private auth: AuthService, private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  saveExercise(form) {
    const exercise = {
      Name: form.value.name,
      Calories: form.value.calories
    } as Exercise;

    this.exerciseService.saveExercise(exercise);
  }

  logout() {
    this.auth.logout();
  }
}
