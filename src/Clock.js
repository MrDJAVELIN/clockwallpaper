import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const code = `let time = {
        "hour": ${time.getHours()},
        "minute": ${time.getMinutes()},
        "second": ${time.getSeconds()},
        "day": ${time.getDate()},
        "month": ${time.getMonth() + 1},
        "year": ${time.getFullYear()}
    }`;

    return (
        <div className="clock">
            <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
