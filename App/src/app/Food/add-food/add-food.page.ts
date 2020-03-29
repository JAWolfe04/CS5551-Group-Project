import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Food } from '../../interfaces/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {
  foodTracker = 0;
  resultCount = 20;
  foods: Food[] = [];
  searchInput: string;

  constructor(private auth: AuthService, private http: HttpClient, private foodService: FoodService) { }

  ngOnInit() {
  }

  saveFood(food: Food) {
    this.foodService.saveFood(food);
  }

  getInfo(food: Food) {
    this.foodService.getFoodInfo(food);
  }

  searchFoods(search: string) {
    this.foodTracker = 0;
    this.foods.length = 0;
    this.searchInput = search;
    this.getManualResults();
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.getManualResults();

      infiniteScroll.target.complete();
    }, 500);
  }

  getManualResults() {
    const base = 'https://api.nutritionix.com/v1_1/search/';
    const food = this.searchInput + '?fields=*';
    const range = '&results=' + this.foodTracker + ':' + (this.foodTracker + this.resultCount);
    const appID = '&appId=45876827';
    const apiKey = '&appKey=5e64cf8b4630c5929e1c40949be9290e';
    this.http.get(base + food + range + appID + apiKey).subscribe((result: any) => {
      const maxResult = result.total_hits < this.resultCount + this.foodTracker
          ? result.total_hits : this.resultCount + this.foodTracker;
      for (let i = 0; i < maxResult; ++i) {
        const field = result.hits[i].fields;
        this.foods.push({
          Name: field.item_name,
          BrandName: field.brand_name,
          ServingQuantity: field.nf_serving_size_qty,
          Units: field.nf_serving_size_unit,
          Calories: field.nf_calories,
          TotalFat: field.nf_total_fat,
          SaturatedFat: field.nf_saturated_fat,
          Cholesterol: field.nf_cholesterol,
          Sodium: field.nf_sodium,
          Carbohydrates: field.nf_total_carbohydrate,
          Fiber: field.nf_dietary_fiber,
          Sugar: field.nf_sugars,
          Protein: field.nf_protein,
        });
        ++this.foodTracker;
      }
    });
  }

  logout() {
    this.auth.logout();
  }
}
