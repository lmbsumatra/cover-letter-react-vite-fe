import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const LandingPage = lazy(() => import("../pages/landing/Landing"));

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <LandingPage />
    }
]