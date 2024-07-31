const InfoPage = () => {
    return (
        <>
            <h3
                style={{
                    color: "#fff",
                    fontFamily: "Consolas Menlo Monaco Courier New, monospace",
                }}
            >
                <a href="https://js-clock-wallpaper.vercel.app/?lang=javascript&style=monokaiSublime">
                    https://js-clock-wallpaper.vercel.app/
                    <b>?lang=javascript</b>&<b>style=monokaiSublime</b>
                </a>
            </h3>
            <div className="infoblock">
                <label>List of supported languages:</label>
                <ul id="lang">
                    <li>
                        Javascript{" "}
                        <a
                            href="/?lang=javascript&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        Python{" "}
                        <a
                            href="/?lang=python&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        CSharp{" "}
                        <a
                            href="/?lang=csharp&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        C++{" "}
                        <a
                            href="/?lang=cpp&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        Rust{" "}
                        <a
                            href="/?lang=rust&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        TypeScript{" "}
                        <a
                            href="/?lang=typescript&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        Java{" "}
                        <a
                            href="/?lang=java&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                </ul>
                <label>List of supported themes/styles:</label>
                <ul id="themes">
                    <li>
                        monokaiSublime{" "}
                        <a
                            href="/?lang=javascript&style=monokaiSublime"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        monokai{" "}
                        <a
                            href="/?lang=javascript&style=monokai"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        dracula{" "}
                        <a
                            href="/?lang=javascript&style=dracula"
                            target="_blank"
                        >
                            click to view
                        </a>
                    </li>
                    <li>
                        dark{" "}
                        <a href="/?lang=javascript&style=dark" target="_blank">
                            click to view
                        </a>
                    </li>
                    <li>
                        light{" "}
                        <a href="/?lang=javascript&style=light" target="_blank">
                            click to view
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default InfoPage;
