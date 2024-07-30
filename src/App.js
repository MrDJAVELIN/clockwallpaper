import React from "react";
import { Clock } from "./Clock";
import "./main.css";

export const App = () => {
    return (
        <>
            <div className="clock-container">
                <Clock />
            </div>
        </>
    );
};
