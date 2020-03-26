import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  registerUser(user: User) {
    return this.http.post(`${environment.APP_SERVER_ADDRESS}/register`, user);
  }

  getFoods(userID: string, date: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.APP_SERVER_ADDRESS}/getFoods/${userID}/${date}`);
  }
}
