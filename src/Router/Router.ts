import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";

import { ErrorView } from "../Views/Common/ErrorView";
import GrowSavingsView from "../Views/GrowSavingsView";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/grow",
        Component: GrowSavingsView
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
