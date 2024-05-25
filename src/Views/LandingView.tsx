import { BasicLayout } from "../Layouts/Base/BasicLayout";
import RetirementPlanDashboard from "./RetirementPlanDashboard";

export const LandingView = () => {
  // TODO: we need to change this or at least redircet
  return <BasicLayout mainContent={<RetirementPlanDashboard />} />;
};
