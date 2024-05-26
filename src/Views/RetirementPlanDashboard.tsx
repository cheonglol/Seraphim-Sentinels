import { Card } from "primereact/card";
import { DoubleBarChart } from "../Components/RetirementPlanDashboard/DoubleBarChart";
import { LineChart } from "../Components/RetirementPlanDashboard/LineChart";
import { LineChartData } from "../Components/RetirementPlanDashboard/LineChartData";
import { PolarAreaChart } from "../Components/RetirementPlanDashboard/PolarAreaChart";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import BottomNavigation from "../Components/Navigational/BottomNavigation";

const lineChartData: LineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#1d4ed8",
      pointRadius: 6,
      pointBackgroundColor: "#1d4ed8",
      pointHoverRadius: 10,
      tension: 0.4,
    },
  ],
};

const doubleBarChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Deposit",
      backgroundColor: "#047857", // Green
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "Withdraw",
      backgroundColor: "#b91c1c", //Red
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
};

const polarAreaChartData = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ["#1e3a8a", "#4c1d95", "#701a75", "#831843"],
      label: "My dataset",
    },
  ],
  labels: ["Entertainment", "Bills", "Investment", "Others"],
};

export const RetirementPlanDashboard = () => (
  <>
    <Card title="Balance">
      <LineChart lineChartData={lineChartData} />
    </Card>

    <Card title="Cash Flow">
      <DoubleBarChart doubleBarChartData={doubleBarChartData} />
    </Card>

    <Card title="Expense Report">
      <PolarAreaChart polarAreaChartData={polarAreaChartData} />
    </Card>

    <BottomNavigation />
  </>
);

export default RetirementPlanDashboard;
