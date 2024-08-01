import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    a11yLight,
    dark,
    dracula,
    monokai,
    monokaiSublime,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocation } from "react-router-dom";

const getCodeByLang = (lang, time) => {
    switch (lang) {
        case "python":
            return `
time = {
    "hour": ${time.getHours()},
    "minute": ${time.getMinutes()},
    "second": ${time.getSeconds()},
    "day": ${time.getDate()},
    "month": ${time.getMonth() + 1},
    "year": ${time.getFullYear()}
}`;
        case "csharp":
            return `
var time = new Dictionary<string, int> {
    { "hour", ${time.getHours()} },
    { "minute", ${time.getMinutes()} },
    { "second", ${time.getSeconds()} },
    { "day", ${time.getDate()} },
    { "month", ${time.getMonth() + 1} },
    { "year", ${time.getFullYear()} }
};`;
        case "cpp":
            return `
#include <map>
#include <string>

std::map<std::string, int> time = {
    { "hour", ${time.getHours()} },
    { "minute", ${time.getMinutes()} },
    { "second", ${time.getSeconds()} },
    { "day", ${time.getDate()} },
    { "month", ${time.getMonth() + 1} },
    { "year", ${time.getFullYear()} }
};`;
        case "java":
            return `
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> time = new HashMap<>();
        time.put("hour", ${time.getHours()});
        time.put("minute", ${time.getMinutes()});
        time.put("second", ${time.getSeconds()});
        time.put("day", ${time.getDate()});
        time.put("month", ${time.getMonth() + 1});
        time.put("year", ${time.getFullYear()});
    }
}`;
        case "typescript":
            return `
const time: { [key: string]: number } = {
    hour: ${time.getHours()},
    minute: ${time.getMinutes()},
    second: ${time.getSeconds()},
    day: ${time.getDate()},
    month: ${time.getMonth() + 1},
    year: ${time.getFullYear()}
};`;
        case "rust":
            return `
use std::collections::HashMap;

fn main() {
    let mut time = HashMap::new();
    time.insert("hour", ${time.getHours()});
    time.insert("minute", ${time.getMinutes()});
    time.insert("second", ${time.getSeconds()});
    time.insert("day", ${time.getDate()});
    time.insert("month", ${time.getMonth() + 1});
    time.insert("year", ${time.getFullYear()});
}`;
        default:
            return `
let time = {
    "hour": ${time.getHours()},
    "minute": ${time.getMinutes()},
    "second": ${time.getSeconds()},
    "day": ${time.getDate()},
    "month": ${time.getMonth() + 1},
    "year": ${time.getFullYear()}
};`;
    }
};

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const language = params.get("lang") || "javascript";
    const style = params.get("style") || "monokaiSublime";

    const theme = (style) => {
        switch (style) {
            case "monokai":
                document.body.style.backgroundColor = "#272822";
                return monokai;
            case "dracula":
                document.body.style.backgroundColor = "#282a36";
                return dracula;
            case "dark":
                document.body.style.backgroundColor = "#444444";
                return dark;
            case "light":
                document.body.style.backgroundColor = "#fefefe";
                return a11yLight;
            default:
                document.body.style.backgroundColor = "#23241f";
                return monokaiSublime;
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const codeTime = getCodeByLang(language, time);

    return (
        <div className="clock">
            <SyntaxHighlighter language={language} style={theme(style)}>
                {codeTime}
            </SyntaxHighlighter>
        </div>
    );
};
