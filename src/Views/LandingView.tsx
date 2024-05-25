import { useEffect, useState } from "react";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import RetirementPlanDashboard from "./RetirementPlanDashboard";
import { getAiResponseHistory } from "../APIs/JigsawStackAPIs/PromptEngine_API";

export const LandingView = () => {
  const [imTired, setImTired] = useState<"tired" | "imActuallySoTired">(
    "tired"
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAiResponseHistory();
      alert(JSON.stringify(data));
      setImTired("imActuallySoTired");
    };
    if (imTired !== "imActuallySoTired") {
      fetchData();
    }
  }, []);

  // TODO: we need to change this or at least redircet
  return <BasicLayout mainContent={<RetirementPlanDashboard />} />;
};
