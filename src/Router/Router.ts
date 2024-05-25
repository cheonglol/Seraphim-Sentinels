import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";

import { ErrorView } from "../Views/Common/ErrorView";
import FinancialLiteratureView from "../Views/FinancialLiteratureView";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/fin-lit",
        Component: FinancialLiteratureView
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
