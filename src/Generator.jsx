import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./styles/main.css";

import { ExternalLink } from "lucide-react";

const Generator = () => {
    const [clock, setClock] = useState("code");

    const [color, setColor] = useState("#ffffff");
    const [font, setFont] = useState("Montserrat");
    const [weight, setWeight] = useState("600");
    const [size, setSize] = useState("30");
    const [bgColor, setBgColor] = useState("#121212");

    const [language, setLanguage] = useState("javascript");
    const [style, setStyle] = useState("monokaiSublime");

    return (
        <section className="generator">
            <div className="block container">
                <h1>Clock Generator</h1>
                <a
                    href={
                        clock === "classic"
                            ? `/?clock=${clock}&font=${font}&size=${size}&weight=${weight}&color=${color.slice(
                                  1
                              )}&bg=${bgColor.slice(1)}`
                            : `/?clock=${clock}&lang=${language}&style=${style}`
                    }
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="linkBox">
                        <ExternalLink />
                        {clock === "classic"
                            ? `/?clock=${clock}&font=${font}&size=${size}&weight=${weight}&color=${color.slice(
                                  1
                              )}&bg=${bgColor.slice(1)}`
                            : `/?clock=${clock}&lang=${language}&style=${style}`}
                    </div>
                </a>
            </div>
            <div className="line"></div>
            <div className="block container">
                <h2>Clock Type</h2>
                <div className="radios">
                    <div className="radio">
                        <h4>Code</h4>
                        <input
                            type="radio"
                            name="clock"
                            id=""
                            value="code"
                            onChange={(e) => {
                                setClock(e.target.value);
                            }}
                            defaultChecked
                        />
                    </div>
                    <div className="radio">
                        <h4>Classic</h4>
                        <input
                            type="radio"
                            name="clock"
                            id=""
                            value="classic"
                            onChange={(e) => {
                                setClock(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="line"></div>
            {clock === "code" ? (
                <>
                    <div className="block">
                        <h2>Language</h2>
                        <select
                            name="languages"
                            id=""
                            className="select"
                            value={language}
                            onChange={(e) => {
                                setLanguage(e.target.value);
                            }}
                        >
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">TypeScript</option>
                            <option value="python">Python</option>
                            <option value="cpp">C++</option>
                            <option value="csharp">C#</option>
                            <option value="java">Java</option>
                            <option value="rust">Rust</option>
                        </select>
                    </div>
                    <div className="line"></div>
                    <div className="block">
                        <h2>Theme</h2>
                        <select
                            name="languages"
                            id=""
                            className="select"
                            value={style}
                            onChange={(e) => {
                                setStyle(e.target.value);
                            }}
                        >
                            <option value="monokaiSublime">
                                monokaiSublime
                            </option>
                            <option value="monokai">monokai</option>
                            <option value="dracula">dracula</option>
                            <option value="dark">dark</option>
                            <option value="light">light</option>
                        </select>
                    </div>
                </>
            ) : (
                <>
                    <div className="block">
                        <h3>Font</h3>
                        <select
                            name="fonts"
                            id=""
                            className="select"
                            value={font}
                            onChange={(e) => {
                                setFont(e.target.value);
                            }}
                        >
                            <option value="Poppins">Poppins</option>
                            <option value="Monserrat">Monserrat</option>
                            <option value="Karla">Karla</option>
                            <option value="Sigmar">Sigmar</option>
                        </select>
                    </div>
                    <div className="line"></div>
                    <div className="block">
                        <h3>Font Size</h3>
                        <h4>{size}</h4>
                        <input
                            type="range"
                            min={10}
                            max={300}
                            step={1}
                            className="input_range"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div>
                    <div className="line"></div>
                    <div className="block">
                        <h3>Font Weight</h3>
                        <h4>{weight}</h4>
                        <input
                            type="range"
                            min={100}
                            max={1000}
                            step={100}
                            className="input_range"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="line"></div>

                    <div className="blockc">
                        <div className="bcolor">
                            <h3>Font Color</h3>
                            <input
                                type="color"
                                className="input_color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <div className="bcolor">
                            <h3>BG Color</h3>
                            <input
                                type="color"
                                className="input_color"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="line"></div>
                </>
            )}
        </section>
    );
};

export default Generator;
