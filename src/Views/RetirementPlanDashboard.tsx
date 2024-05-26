import { Card } from "primereact/card";
import { DoubleBarChart } from "../Components/RetirementPlanDashboard/DoubleBarChart";
import { LineChart } from "../Components/RetirementPlanDashboard/LineChart";
import { LineChartData } from "../Components/RetirementPlanDashboard/LineChartData";
import { PolarAreaChart } from "../Components/RetirementPlanDashboard/PolarAreaChart";

const lineChartData: LineChartData = {
  labels: [
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ],
  datasets: [
    {
      label: "Main Account",
      data: [200, 288.32, 578.32, 510.89, 56, 55, 40, 10, 10],
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
  <div className="p-4 bg-gray-700 flex-row">
    <Card className="shadow-md mb-5" title="Balance">
      <LineChart lineChartData={lineChartData} />
    </Card>

    <Card className="shadow-md mb-5" title="Cash Flow">
      <DoubleBarChart doubleBarChartData={doubleBarChartData} />
    </Card>

    <Card className="shadow-md mb-5" title="Expense Report">
      <PolarAreaChart polarAreaChartData={polarAreaChartData} />
    </Card>
  </div>
);

export default RetirementPlanDashboard;
