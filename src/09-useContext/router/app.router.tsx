import { createBrowserRouter, Navigate } from "react-router"
import { AboutPage, LoginPage, ProfilePage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        // element: <ProfilePage />,
        element: <PrivateRoute element={<ProfilePage />} />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
