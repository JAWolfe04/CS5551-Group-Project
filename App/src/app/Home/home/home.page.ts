import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { Food } from '../../interfaces/food';
import { Exercise } from '../../interfaces/exercise';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'], })

export class HomePage implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  date: string = new Date().toISOString();
  foodCalories = 0;
  exerciseCalories = 0;
  baseCalories: number;
  netCalories: number;
  pctCalories: number;
  public pieChartLabels: Label[] = [['Food', 'cal'], ['Exercise', 'cal'], 'Overall'];
  public pieChartData: SingleDataSet = [0, 0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private auth: AuthService, private router: Router, private dataService: DataService) {
   monkeyPatchChartJsTooltip();
   monkeyPatchChartJsLegend();
}

  ngOnInit() {
    const userID = this.auth.getUser();
    this.dataService.getUserInfo(userID).subscribe((userData: User) => {
      this.dataService.getFoods(userID, this.date.substring(0, 10)).subscribe((foodData: Food[]) => {
        this.dataService.getExercises(userID, this.date.substring(0, 10)).subscribe((exerciseData: Exercise[]) => {
          this.baseCalories = userData[0].Gender === 'M' ? 2500 : 2000;
          foodData.forEach(food => this.foodCalories += food.Calories);
          exerciseData.forEach(exercise => this.exerciseCalories += exercise.Calories);
          this.netCalories = this.foodCalories - this.exerciseCalories - this.baseCalories;
          this.pieChartData = [this.foodCalories, this.exerciseCalories, Math.min(this.netCalories, 0)];
          this.pctCalories = Math.ceil((1 - ((this.netCalories * -1) / this.baseCalories)) * 100);
        });
      });
    });
  }
  profile() { this.router.navigateByUrl('/tabs/profile'); }
  logout() { this.auth.logout(); }
}
