import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-my-food',
  templateUrl: './my-food.page.html',
  styleUrls: ['./my-food.page.scss'],
})
export class MyFoodPage implements OnInit {
  date: string = new Date().toISOString();
  items: any[] = [];

  constructor(private auth: AuthService, private dataService: DataService) {}

  ngOnInit() {
      this.dataService.getFoods(this.auth.getUser(), this.date.substring(0, 10)).subscribe(foods => {
          foods.forEach( food => {
              this.items.push({
                  name: food.Name,
                  id: food.Food_ID
              });
          });
      });
  }

  remove(id: number) {
    console.log('Remove item ' + id);
  }

  getInfo(id: number) {
    console.log('Display info ' + id);
  }

  logout() {
    this.auth.logout();
  }
}
