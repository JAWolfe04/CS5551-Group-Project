import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../interfaces/food';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { RemoveFoodPage } from '../remove-food/remove-food.page';

@Component({
  selector: 'app-my-food',
  templateUrl: './my-food.page.html',
  styleUrls: ['./my-food.page.scss'],
})
export class MyFoodPage implements OnInit {
  date: string = new Date().toISOString();
  foods: Food[] = [];

  constructor(private foodService: FoodService, private auth: AuthService,
              private modalController: ModalController) {}

  ngOnInit() {
      this.foodService.currentFoods.subscribe(foods => this.foods = foods);
      this.foodService.getFoods(this.date);
  }

  async remove(food: Food) {
      const modal = await this.modalController.create({
          component: RemoveFoodPage,
          componentProps: {
              foodName: food.Name,
              foodID: food.Food_ID,
              date: this.date
          }
      });
      await modal.present();
  }

  getInfo(food: Food) {
    console.log('Display info ');
  }

  addFood() {
      this.foodService.date = this.date;
      this.foodService.addFood();
  }

  changedDate() {
      this.foodService.getFoods(this.date);
   }

  logout() {
    this.auth.logout();
  }
}
