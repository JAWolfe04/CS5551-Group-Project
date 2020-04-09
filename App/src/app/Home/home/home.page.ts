import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'], })

export class HomePage implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Food', 'cal'], ['Exercise', 'cal'], 'Overall'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private auth: AuthService, private router: Router) { 
   monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
}

  ngOnInit() {}
  profile() { this.router.navigateByUrl('/tabs/profile'); }
  logout() { this.auth.logout(); }
}
