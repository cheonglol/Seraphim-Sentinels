interface Dataset {
  label: string;
  data: number[];
  fill?: boolean;
  borderColor: string;
  pointRadius: number;
  pointBackgroundColor: string;
  pointHoverRadius: number;
  tension: number;
}

export interface LineChartData {
  labels: string[];
  datasets: Dataset[];
}
