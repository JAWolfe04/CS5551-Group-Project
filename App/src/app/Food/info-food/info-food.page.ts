import {Component, Input, OnInit} from '@angular/core';
import { Food } from '../../interfaces/food';
import { FoodService } from '../../services/food.service';
import { AuthService } from '../../services/auth.service';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {
  food: Food;

  constructor(private auth: AuthService, private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.currentFood.subscribe(food => this.food = food);
  }

  saveFood() {
    this.foodService.saveFood(this.food);
  }

  logout() {
    this.auth.logout();
  }
}
