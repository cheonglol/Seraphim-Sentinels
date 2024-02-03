import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";

import { ReferredFromInstagram } from "../Components/ExternallyReferred/ReferredFromInstagram";
import { ErrorView } from "../Views/ErrorView";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    // External handle
    {
        path: "/ext-ref",
        Component: ReferredFromInstagram,
        // loader: ExternalReferredLoader,
    },
    {
        path: "/games"
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
