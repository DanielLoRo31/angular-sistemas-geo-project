import { Component, OnInit } from '@angular/core';
import {
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import { LatLngLiteral } from 'ngx-google-places-autocomplete/objects/latLng';
import { ICharts } from 'src/app/models/charts/charts.interface';
import { ITransaction } from 'src/app/models/transactions/transactions.interface';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  charts: ICharts;
  transactions: ITransaction[];
  polygonPaths: LatLngLiteral[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.initValues();
  }

  async initValues() {
    let res = await this.statsService.getTransaction().toPromise();

    
    this.transactions = res.txns;

    this.transactions.forEach(txn => {
      this.setCoordsPolygon(txn.lon, txn.lat)
    });

    this.charts = {
      options: { responsive: true },
      type: 'pie',
      labels: res.pieChartInfo.pieChartLabels,
      legend: true,
      plugins: [],
      singleData: res.pieChartInfo.pieChartData,
    };
  }

  setCoordsPolygon(lng: number, lat: number) {
    this.polygonPaths.push({ lat, lng });
    // console.log(this.polygonPaths)
  }
}
