import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  SingleDataSet,
} from 'ng2-charts';
import { ICharts } from 'src/app/models/charts/charts.interface';
import { IAccount } from 'src/app/models/user/account.interface';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.scss'],
})
export class DataInfoComponent implements OnInit {
  charts: ICharts;
  accounts: IAccount[];

  constructor(private statsService: StatsService, private router: Router) {}

  ngOnInit(): void {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.initValues();
  }

  async initValues() {
    let dataSet: ChartDataSets[] = [];
    let res = await this.statsService.getAccounts().toPromise();
    this.accounts = res.accounts
    // console.log(this.accounts)

    res.barChart.forEach((elem: any) => {
      if (+elem.value > 0) {
        dataSet.push({ data: [+elem.value], label: elem.name });
      }
    });

    this.charts = {
      options: { responsive: true },
      labels: ['Estados'],
      type: 'bar',
      legend: true,
      plugins: [],
      dataSet,
    };
  }

  navigateTo(idAccount: string) {
    this.router.navigate([`/console/account/transactions/${idAccount}`])
  }
}
