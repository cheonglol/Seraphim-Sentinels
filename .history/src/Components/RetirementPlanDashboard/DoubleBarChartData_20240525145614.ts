interface Dataset {
    label: string;
    backgroundColor: string;
    borderColor?: string;
    data: number[];
}

export interface DoubleBarChartData{
    labels: string[];
    datasets: Dataset[];
};