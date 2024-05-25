interface Dataset {
    data: number[];
    backgroundColor: string[];
    label: string;
  }
  
 export interface PolarAreaChartData {
    datasets: Dataset[];
    labels: string[];
  }