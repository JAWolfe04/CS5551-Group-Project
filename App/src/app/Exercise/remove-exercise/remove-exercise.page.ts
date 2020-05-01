import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-remove-exercise',
  templateUrl: './remove-exercise.page.html',
  styleUrls: ['./remove-exercise.page.scss'],
})
export class RemoveExercisePage implements OnInit {
  exerciseID: number;
  exerciseName: string;
  date: string;

  constructor(private navParams: NavParams, private modalController: ModalController,
              private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseName = this.navParams.get('exerciseName');
    this.exerciseID = this.navParams.get('exerciseID');
    this.date = this.navParams.get('date');
  }

  acceptRemoval() {
    this.exerciseService.removeExercise(this.exerciseID, this.date)
        .then(() => this.modalController.dismiss());
  }

  cancelRemoval() {
    this.modalController.dismiss();
  }
}
