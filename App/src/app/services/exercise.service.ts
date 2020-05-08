import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exercise } from '../interfaces/exercise';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises = new BehaviorSubject<Exercise[]>([]);
  currentExercises = this.exercises.asObservable();
  private exerciseCal = new BehaviorSubject<number>(0);
  currentExerciseCal = this.exerciseCal.asObservable();
  date: string;

  constructor(private router: Router, private dataService: DataService, private auth: AuthService) { }

  addExercise() {
    this.router.navigateByUrl('/tabs/add-exercise');
  }

  removeExercise(id: number, date: string) {
      const promise = new Promise((resolve) => {
          this.dataService.removeExercise(id).subscribe(data => {
              this.dataService.getExercises(this.auth.getUser(), date.substring(0, 10))
                  .subscribe(exercises => {
                      this.exercises.next(exercises);
                      this.saveCalories(exercises);
                      resolve();
                  });
          });
      });
      return promise;
  }

  saveCalories(exercises) {
      let calories = 0;
      exercises.forEach((exercise: Exercise) => calories += exercise.Calories);
      this.exerciseCal.next(calories);
  }

  saveExercise(exercise: Exercise) {
    exercise.Date_Exercise = this.date;
    exercise.UserId = this.auth.getUser();
    this.dataService.addExercise(exercise)
        .subscribe(data => {
          this.dataService.getExercises(this.auth.getUser(), this.date.substring(0, 10))
              .subscribe(exercises => {
                this.exercises.next(exercises);
                this.saveCalories(exercises);
                this.router.navigateByUrl('/tabs/exercise');
              });
        });
  }

  getExercises(date: string) {
    this.dataService.getExercises(this.auth.getUser(), date.substring(0, 10))
        .subscribe(exercises => {
            this.exercises.next(exercises);
            this.saveCalories(exercises);
        });
  }

  createExercise() {
    this.router.navigateByUrl('/tabs/create-exercise');
  }
}
