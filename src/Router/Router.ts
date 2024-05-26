import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";

import { ErrorView } from "../Views/Common/ErrorView";
import GrowSavingsView from "../Views/GrowSavingsView";
import FinancialLiteratureView from '../Views/FinancialLiteratureView';
// import { LandingView } from "../Views/LandingView";
import RetirementPlanDashboard from "../Views/RetirementPlanDashboard";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RetirementPlanDashboard,
        // Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/grow",
        Component: GrowSavingsView
    },
    {
        path: "/fin-lit",
        Component: () => { return FinancialLiteratureView() as JSX.Element; }
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
