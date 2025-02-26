import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Clock } from "./Clock";
import "./styles/main.css";
import Generator from "./Generator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Clock />,
    },
    {
        path: "/generator",
        element: <Generator />,
    },
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
