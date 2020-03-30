import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../interfaces/exercise';
import { AuthService } from '../../services/auth.service';
import { ExerciseService } from '../../services/exercise.service';
import { ModalController } from '@ionic/angular';
import {RemoveExercisePage} from "../remove-exercise/remove-exercise.page";

@Component({
  selector: 'app-my-exercise',
  templateUrl: './my-exercise.page.html',
  styleUrls: ['./my-exercise.page.scss'],
})
export class MyExercisePage implements OnInit {
  date: string = new Date().toISOString();
  exercises: Exercise[] = [];

  constructor(private auth: AuthService, private exerciseService: ExerciseService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.exerciseService.currentExercises.subscribe( exercises => this.exercises = exercises);
    this.exerciseService.getExercises(this.date);
  }

  addExercise() {
    this.exerciseService.date = this.date;
    this.exerciseService.addExercise();
  }

  async removeExercise(exercise: Exercise) {
    const modal = await this.modalController.create({
      component: RemoveExercisePage,
      componentProps: {
        exerciseID: exercise.Exercise_ID,
        exerciseName: exercise.Name,
        date: this.date
      }
    });
    await modal.present();
  }

  changedDate() {
    this.exerciseService.getExercises(this.date);
  }

  logout() {
    this.auth.logout();
  }
}
