import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";
import { socmedHandleLoader } from "./RouteLoaders/socmedHandleLoader";
import { SocmedReferredView } from "../Views/SocmedReferredView";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
    },
    {
        path: "/socmed-handle",
        Component: SocmedReferredView,
        loader: socmedHandleLoader,
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
