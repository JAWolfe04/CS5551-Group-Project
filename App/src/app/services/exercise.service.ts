import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exercise } from '../interfaces/exercise';
import { Router } from '@angular/router';
import {DataService} from "./data.service";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises = new BehaviorSubject<Exercise[]>([]);
  currentExercises = this.exercises.asObservable();
  date: string;

  constructor(private router: Router, private dataService: DataService, private auth: AuthService) { }

  addExercise() {
    this.router.navigateByUrl('/tabs/add-exercise');
  }

  saveExercise() {}

  getExercises(date: string) {
    this.dataService.getExercises(this.auth.getUser(), date.substring(0, 10))
        .subscribe(exercises => this.exercises.next(exercises));
  }

  createExercise() {}
}
