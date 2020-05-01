import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ExerciseService } from '../../services/exercise.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Exercise } from '../../interfaces/exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.page.html',
  styleUrls: ['./add-exercise.page.scss'],
})
export class AddExercisePage implements OnInit {
  exercise: Exercise;

  constructor(private auth: AuthService, private exerciseService: ExerciseService,
              private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
  }

  addCalculatedExercise() {
    this.exerciseService.saveExercise(this.exercise);
  }

  calculateExercises(search: string) {
    const headers = {
      headers: new HttpHeaders({
        'x-app-id': '45876827',
        'x-app-key': '5e64cf8b4630c5929e1c40949be9290e',
        'Content-Type': 'application/json'
      })
    };

    this.dataService.getUserInfo(this.auth.getUser()).subscribe( user => {
      const timeDiff = Math.abs(Date.now() - new Date(user.dob).getTime());
      const body = {
        query: search,
        gender: user.gender === 'M' ? 'male' : 'female',
        weight_kg: user.weight / 2.205,
        height_cm: user.height * 2.54,
        age: Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)
      };
      this.http.post('https://trackapi.nutritionix.com/v2/natural/exercise', body, headers)
          .subscribe((result: any) => {
            this.exercise = {
              Name: result.exercises[0].name,
              Calories: result.exercises[0].nf_calories
            } as Exercise;
          });
    });
  }

  createExercise() {
    this.exerciseService.createExercise();
  }

  logout() {
    this.auth.logout();
  }
}
