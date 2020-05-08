import {Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { FoodService } from '../../services/food.service';
import { ExerciseService } from '../../services/exercise.service';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'], })

export class HomePage implements OnInit  {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  date: string = new Date().toISOString();
  private foodCalories = new BehaviorSubject<number>(0);
  currentFoodCalories = this.foodCalories.asObservable();
  private exerciseCalories = new BehaviorSubject<number>(0);
  currentExerciseCalories = this.exerciseCalories.asObservable();
  baseCalories: number;
  public pieChartLabels: Label[] = [['Food', 'cal'], ['Exercise', 'cal'], 'Overall'];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private auth: AuthService, private router: Router, private dataService: DataService,
              private foodService: FoodService, private exerciseService: ExerciseService) {
}

  ngOnInit() {
    this.foodService.currentFoodCal.subscribe(foodCal => this.foodCalories.next(foodCal));
    this.foodService.getFoods(this.date);

    this.exerciseService.currentExerciseCal.subscribe( exerciseCal => this.exerciseCalories.next(exerciseCal));
    this.exerciseService.getExercises(this.date);

    this.dataService.getUserInfo(this.auth.getUser()).subscribe((userData: User) => {
      this.baseCalories = userData[0].Gender === 'M' ? 2500 : 2000;
      monkeyPatchChartJsTooltip();
      monkeyPatchChartJsLegend();
      this.pieChartData = [this.foodCalories.getValue(), this.exerciseCalories.getValue(), Math.min(this.calNetCal(), 0)];
    });
  }

  ionViewDidEnter() {
    this.pieChartData = [this.foodCalories.getValue(), this.exerciseCalories.getValue(), Math.min(this.calNetCal(), 0)];
  }

  profile() { this.router.navigateByUrl('/tabs/profile'); }
  logout() { this.auth.logout(); }

  calNetCal(): number {
    return this.foodCalories.getValue() - this.exerciseCalories.getValue() - this.baseCalories;
  }

  calPct(): number {
    return Math.ceil((1 - ((this.calNetCal() * -1) / this.baseCalories)) * 100);
  }
}
