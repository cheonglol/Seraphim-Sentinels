import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";

import { ErrorView } from "../Views/Common/ErrorView";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/games"
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
