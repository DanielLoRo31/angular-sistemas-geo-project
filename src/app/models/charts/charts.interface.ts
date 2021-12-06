import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label, SingleDataSet } from "ng2-charts";

export interface ICharts {
  options?: ChartOptions,
  labels?: Label[],
  type?: ChartType,
  legend?: boolean,
  plugins?: [],
  dataSet?: ChartDataSets[]
  singleData?: SingleDataSet
}
