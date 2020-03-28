import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-remove-food',
  templateUrl: './remove-food.page.html',
  styleUrls: ['./remove-food.page.scss'],
})
export class RemoveFoodPage implements OnInit {
  foodID: number;
  date: string;
  foodName: string;

  constructor(private navParams: NavParams, private modalController: ModalController,
              private foodService: FoodService) { }

  ngOnInit() {
    this.foodName = this.navParams.get('foodName');
    this.foodID = this.navParams.get('foodID');
    this.date = this.navParams.get('date');
  }

  acceptRemoval() {
    this.foodService.removeFood(this.foodID, this.date)
        .then(() => this.modalController.dismiss());
  }

  cancelRemoval() {
    this.modalController.dismiss();
  }
}
