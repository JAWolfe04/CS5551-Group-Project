import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss']
})
export class FoodPage {

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
