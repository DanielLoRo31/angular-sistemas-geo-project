import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import {
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import { ICharts } from 'src/app/models/charts/charts.interface';
import { ITransaction } from 'src/app/models/transactions/transactions.interface';
import { IAccount } from 'src/app/models/user/account.interface';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss'],
})
export class AccountTransactionsComponent implements OnInit {
  charts: ICharts;
  account: IAccount;
  transactions: ITransaction[];
  id: string;
  coordenates: { lng: number; lat: number } = { lng: 0, lat: 0 };

  constructor(
    private statsService: StatsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params.id;
      this.initValues();
    });
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  async initValues() {
    let dataSet: ChartDataSets[] = [];

    let res = await this.statsService
      .getAccountsTransaction(this.id)
      .toPromise();
    dataSet = res.chartData;

    this.account = res.account;
    this.transactions = res.txns;

    this.charts = {
      options: { responsive: true },
      type: 'line',
      legend: true,
      plugins: [],
      dataSet,
    };
  }

  changeCoords(lng: number, lat: number) {
    this.coordenates = {lng, lat}
  }
}
