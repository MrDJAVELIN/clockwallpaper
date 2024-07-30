import React from "react";
import { Clock } from "./Clock";

export const App = () => {
    return (
        <>
            <div className="clock-container">
                <Clock />
            </div>
            <span className="dbd">
                developed by&nbsp;
                <a
                    href="https://djavelin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    djavelin_
                </a>
            </span>
        </>
    );
};
