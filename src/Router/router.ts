import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";
import { socmedHandleLoader } from "./RouteLoaders/socmedHandleLoader";
import { SocmedReferredView } from "../Views/SocmedReferredView";
import { ErrorView } from "../Views/ErrorView";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    // External handle
    {
        path: "/socmed-handle",
        Component: SocmedReferredView,
        loader: socmedHandleLoader,
    },
    {
        path: "/games"
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
