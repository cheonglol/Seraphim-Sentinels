import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingView } from "../Views/LandingView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingView,
  },
  ...ProtectedRoutes.map((route: RouteObject) => {
    return route;
  }),
]);
