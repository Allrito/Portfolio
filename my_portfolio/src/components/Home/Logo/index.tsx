import { useEffect, useRef, useState } from "react";
import "./index.scss";
import LogoS from "../../../assets/images/logoA.png";
import { gsap } from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";

const Logo = () => {
    const bgRef = useRef(null);
    const outlineLogoRef = useRef(null);
    const solidLogoRef = useRef(null);
    const [renderSVG, setRenderSVG] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        setRenderSVG(true);
    }, []);

    useEffect(() => {
        if (renderSVG) {
            gsap.timeline()
                .to(bgRef.current, {
                    duration: 1,
                    opacity: 1,
                })
                .from(outlineLogoRef.current, {
                    drawSVG: 0,
                    duration: 12,
                });

            gsap.fromTo(
                solidLogoRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    delay: 4,
                    duration: 4,
                }
            );
        }
    }, [renderSVG]);

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                ref={solidLogoRef}
                src={LogoS}
                className="solid-logo"
                alt="A"
            />
            {renderSVG && (
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt"
                height="300.000000pt"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    className="svg-container"
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="M1207 2959 c-52 -12 -135 -56 -145 -76 -11 -20 -78 -260 -150 -528 l-48 -180 -129 -6 c-106 -4 -144 -10 -205 -32 -239 -87 -413 -289 -479 -557 -57 -232 -30 -448 82 -664 43 -81 70 -117 154 -204 l102 -105 -66 -131 c-70 -140 -157 -288 -204 -348 -33 -40 -31 -42 38 -63 225 -68 408 -23 568 139 48 49 99 114 127 162 l48 81 89 6 c115 8 308 49 441 94 118 40 311 129 414 191 37 23 73 42 80 42 25 0 235 -280 356 -475 87 -139 155 -211 236 -251 116 -57 261 -32 342 60 l30 35 -13 58 c-51 216 -171 483 -320 713 -30 45 -56 106 -84 197 l-42 133 50 62 c124 159 269 413 359 629 41 98 132 370 132 392 0 7 -25 -35 -56 -93 -67 -126 -198 -324 -288 -437 -77 -95 -267 -296 -273 -289 -3 2 -40 109 -83 238 -115 346 -224 627 -307 793 -130 259 -249 372 -432 411 -72 15 -264 17 -324 3z m281 -39 c190 -31 300 -125 420 -358 98 -191 201 -451 327 -829 37 -111 75 -212 85 -223 34 -40 58 -27 180 97 64 65 153 167 199 226 46 60 85 106 88 103 8 -8 -109 -245 -174 -353 -31 -52 -87 -137 -125 -189 -106 -147 -102 -128 -59 -276 31 -105 50 -147 111 -250 119 -197 203 -371 253 -526 26 -78 47 -153 47 -165 0 -32 -33 -65 -94 -93 -143 -67 -295 15 -426 231 -122 202 -328 472 -376 494 -26 11 -34 9 -104 -29 -319 -173 -583 -263 -845 -286 -44 -4 -92 -13 -106 -20 -14 -7 -43 -41 -64 -76 -52 -86 -66 -103 -138 -176 -76 -77 -173 -128 -267 -141 -66 -9 -188 1 -236 19 l-26 10 19 30 c126 201 243 425 243 466 0 19 -24 51 -94 122 -135 140 -186 229 -238 409 -32 110 -31 321 0 438 35 128 101 251 182 338 86 92 156 139 263 179 69 25 101 31 201 36 160 7 162 8 211 197 54 207 123 454 140 500 17 47 54 73 130 91 63 15 190 17 273 4z"
                    />
                </g>
            </svg>
            )}
        </div>
    );
};

export default Logo;
