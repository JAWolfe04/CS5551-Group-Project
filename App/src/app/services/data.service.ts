import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Food } from '../interfaces/food';
import { Exercise } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(`${environment.APP_SERVER_ADDRESS}/register`, user);
  }

  getUserInfo(userID: string): Observable<User> {
    return this.http.get<User>(`${environment.APP_SERVER_ADDRESS}/getUserInfo/${userID}`);
  }

  getFoods(userID: string, date: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.APP_SERVER_ADDRESS}/getFoods/${userID}/${date}`);
  }

  addFood(food: Food) {
    return this.http.post(`${environment.APP_SERVER_ADDRESS}/addFood`, food);
  }

  removeFood(id: number) {
    return this.http.post(`${environment.APP_SERVER_ADDRESS}/removeFood`, { id });
  }

  getExercises(userID: string, date: string): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${environment.APP_SERVER_ADDRESS}/getExercises/${userID}/${date}`);
  }

  addExercise(exercise: Exercise) {
    return this.http.post(`${environment.APP_SERVER_ADDRESS}/addExercise`, exercise);
  }
}
