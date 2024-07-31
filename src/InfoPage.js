const InfoPage = () => {
    return (
        <>
            <h3
                style={{
                    color: "#fff",
                    fontFamily: "Consolas Menlo Monaco Courier New, monospace",
                }}
            >
                https://js-clock-wallpaper.vercel.app/<b>?lang=javascript</b>&
                <b>style=monokaiSublime</b>
            </h3>
            <div className="infoblock">
                <label>List of supported languages</label>
                <ul>
                    <li>
                        <i>(default)</i> Javascript{" "}
                        <a href="/?lang=javascript" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        Python{" "}
                        <a href="/?lang=python" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        CSharp{" "}
                        <a href="/?lang=csharp" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        C++{" "}
                        <a href="/?lang=cpp" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        Rust{" "}
                        <a href="/?lang=rust" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        TypeScript{" "}
                        <a href="/?lang=typescript" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        Java{" "}
                        <a href="/?lang=java" target="_blank">
                            click to view
                        </a>
                    </li>
                </ul>
                <label>List of supported themes/styles</label>
                <ul>
                    <li>
                        <i>(default)</i> monokaiSublime{" "}
                        <a href="/?style=monokaiSublime" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        monokai{" "}
                        <a href="/?style=monokai" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        dracula{" "}
                        <a href="/?style=dracula" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        dark{" "}
                        <a href="/?style=dark" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        light{" "}
                        <a href="/?style=light" target="_blank">
                            click to view
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default InfoPage;
