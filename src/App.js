import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Clock } from "./Clock";
import "./main.css";
import InfoPage from "./InfoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="clock-container">
                <Clock />
            </div>
        ),
    },
    {
        path: "/docs",
        element: <InfoPage />,
    },
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
