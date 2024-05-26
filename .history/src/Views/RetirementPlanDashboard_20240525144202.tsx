import React from "react";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import { Card } from "primereact/card";
import { LineChart } from "../Components/RetirementPlanDashboard/LineChart";
import { LineChartData } from "../Components/RetirementPlanDashboard/LineChartData";
import DoubleBarChart from "../Components/RetirementPlanDashboard/DoubleBarChart";

  const lineChartData: LineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#1d4ed8",
        tension: 0.4,
      },
    ],
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'green',
            borderColor: 'white',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: documentStyle.getPropertyValue('--pink-500'),
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

export const RetirementPlanDashboard = () => {
  return (
    <BasicLayout
      mainContent={
        <>
          <Card title="balance">
            <LineChart lineChartData={lineChartData}/>
          </Card>
          
          <Card title="cash flow">
            <DoubleBarChart doubleBarChartData={}/>
          </Card>
          <Card title="expense report"></Card>
        </>
      }
    />
  );
};

export default RetirementPlanDashboard;
