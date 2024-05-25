import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { PolarAreaChartData } from "./PolarAreaChartData";

interface Props {
  polarAreaChartData: PolarAreaChartData;
}

export const PolarAreaChart = ({ polarAreaChartData }: Props) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(polarAreaChartData);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center">
      <Chart
        type="polarArea"
        data={chartData}
        options={chartOptions}
        style={{ position: "relative", width: "40%" }}
      />
    </div>
  );
};
