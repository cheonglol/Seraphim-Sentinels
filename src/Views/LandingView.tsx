import { Card } from "primereact/card";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import RetirementPlanDashboard from "./RetirementPlanDashboard";

// TODO: move each post as its own component under `src\Components\blog` so i dont make this fucking landing page SO LONG TO READ wtf

export const LandingView = () => {
  return (
    <BasicLayout
      mainContent={
        <div className="grid grid-cols-1 sm:grid-cols-0 gap-4 max-w-[90vw] m-auto">
          <Card
            title="Getting Started"
            subTitle="Using `Prime React` as UI Lib"
          >
            <RetirementPlanDashboard />
          </Card>
        </div>
      }
    />
  );
};
