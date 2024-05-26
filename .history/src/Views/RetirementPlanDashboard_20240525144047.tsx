import React from "react";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import { Card } from "primereact/card";
import { LineChart } from "../Components/RetirementPlanDashboard/LineChart";
import { LineChartData } from "../Components/RetirementPlanDashboard/LineChartData";
import DoubleBarChart from "../Components/RetirementPlanDashboard/DoubleBarChart";

  const data: LineChartData = {
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

export const RetirementPlanDashboard = () => {
  return (
    <BasicLayout
      mainContent={
        <>
          <Card title="balance">
            <LineChart lineChartData={data}/>
          </Card>
          
          <Card title="cash flow">
            <DoubleBarChart />
          </Card>
          <Card title="expense report"></Card>
        </>
      }
    />
  );
};

export default RetirementPlanDashboard;
