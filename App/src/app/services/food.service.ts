import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../interfaces/food';
import { Router } from '@angular/router';
import {DataService} from './data.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods = new BehaviorSubject<Food[]>([]);
  currentFoods = this.foods.asObservable();
  private food = new BehaviorSubject<Food>(null);
  currentFood = this.food.asObservable();
  private foodCal = new BehaviorSubject<number>(0);
  currentFoodCal = this.foodCal.asObservable();
  date: string;

  constructor(private router: Router, private dataService: DataService, private auth: AuthService) { }

  addFood() {
    this.router.navigateByUrl('/tabs/add-food');
  }

  getFoodInfo(food: Food) {
    this.food.next(food);
    this.router.navigateByUrl('/tabs/info-food');
  }

  saveFood(food: Food) {
    food.UserId = this.auth.getUser();
    food.Date_Enter = this.date.substring(0, 10);
    this.dataService.addFood(food).subscribe(data =>
        this.dataService.getFoods(this.auth.getUser(), this.date.substring(0, 10))
            .subscribe(foods => {
              this.foods.next(foods);
              this.saveCalories(foods);
              this.router.navigateByUrl('/tabs/food');
            }));
  }

  getFoods(date: string) {
    this.dataService.getFoods(this.auth.getUser(), date.substring(0, 10))
        .subscribe(foods => {
          this.foods.next(foods);
          this.saveCalories(foods);
        });
  }

  saveCalories(foods) {
    let calories = 0;
    foods.forEach((food: Food) => calories += food.Calories);
    this.foodCal.next(calories);
  }

  imageSearch() {
    this.router.navigateByUrl('/tabs/image-upload');
  }

  removeFood(id: number, date: string) {
    const promise = new Promise((resolve) => {
      this.dataService.removeFood(id).subscribe(data => {
            this.dataService.getFoods(this.auth.getUser(), date.substring(0, 10))
                .subscribe(foods => {
                      this.foods.next(foods);
                      this.saveCalories(foods);
                      resolve();
                });
      });
    });
    return promise;
  }
}
