import { Card } from "primereact/card";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import RetirementPlanDashboard from "./RetirementPlanDashboard";

// TODO: move each post as its own component under `src\Components\blog` so i dont make this fucking landing page SO LONG TO READ wtf

export const LandingView = () => {
  return <BasicLayout mainContent={<RetirementPlanDashboard />} />;
};
