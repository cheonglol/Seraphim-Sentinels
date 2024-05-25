import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";

import { ErrorView } from "../Views/Common/ErrorView";
import GrowSavingsView from "../Views/GrowSavingsView";
import FinancialLiteratureView from '../Views/FinancialLiteratureView';
import RetirementPlanDashboard from "../Views/RetirementPlanDashboard";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/reasily",
        Component: RetirementPlanDashboard
    },
    {
        path: "/grow",
        Component: GrowSavingsView
    },
    {
        path: "/fin-lit",
        Component: () => FinancialLiteratureView({
            backgroundImageURL: "https://finecoffeecompany.com/wp-content/uploads/2023/09/Singapore-traditional-kopi.jpg",
            subImageURL: "https://em-content.zobj.net/source/apple/391/chart-increasing_1f4c8.png"
        })
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
