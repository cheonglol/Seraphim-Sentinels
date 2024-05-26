import React from "react";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import { Card } from "primereact/card";
import { LineChart } from "../Components/RetirementPlanDashboard/LineChart";
import { LineChartData } from "../Components/RetirementPlanDashboard/LineChartData";

    const data: LineChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "--blue-500",
          tension: 0.4,
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: "--pink-500",
          tension: 0.4,
        },
      ],
    };

export const RetirementPlanDashboard = () => {
  return (
    <BasicLayout
      mainContent={
        <>
          <Card title="balance">
            <LineChart lineChartData={data}/>
          </Card>
          
          <Card title="cash flow"></Card>
          <Card title="expense report"></Card>
        </>
      }
    />
  );
};

export default RetirementPlanDashboard;
