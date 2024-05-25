interface Dataset {
  label: string;
  data: number[];
  fill?: boolean;
  borderColor: string;
  tension: number;
}

export interface LineChartData {
  labels: string[];
  datasets: Dataset[];
}
