import "./index.scss";
import LogoS from "../../../assets/images/logoA.png";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

const Logo = () => {

    const bgRef = useRef<HTMLDivElement>(null);
    const outlineLogoRef = useRef<HTMLElement>(null);
    const solidLogoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
        .timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20
            })
        
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
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} src={LogoS} className="solid-logo" alt="A" />
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
                        d="M1207 2959 c-52 -12 -135 -56 -145 -76 -11 -20 -78 -260 -150 -528
l-48 -180 -129 -6 c-106 -4 -144 -10 -205 -32 -239 -87 -413 -289 -479 -557
-57 -232 -30 -448 82 -664 43 -81 70 -117 154 -204 l102 -105 -66 -131 c-70
-140 -157 -288 -204 -348 -33 -40 -31 -42 38 -63 225 -68 408 -23 568 139 48
49 99 114 127 162 l48 81 89 6 c115 8 308 49 441 94 118 40 311 129 414 191
37 23 73 42 80 42 25 0 235 -280 356 -475 87 -139 155 -211 236 -251 116 -57
261 -32 342 60 l30 35 -13 58 c-51 216 -171 483 -320 713 -30 45 -56 106 -84
197 l-42 133 50 62 c124 159 269 413 359 629 41 98 132 370 132 392 0 7 -25
-35 -56 -93 -67 -126 -198 -324 -288 -437 -77 -95 -267 -296 -273 -289 -3 2
-40 109 -83 238 -115 346 -224 627 -307 793 -130 259 -249 372 -432 411 -72
15 -264 17 -324 3z m281 -39 c190 -31 300 -125 420 -358 98 -191 201 -451 327
-829 37 -111 75 -212 85 -223 34 -40 58 -27 180 97 64 65 153 167 199 226 46
60 85 106 88 103 8 -8 -109 -245 -174 -353 -31 -52 -87 -137 -125 -189 -106
-147 -102 -128 -59 -276 31 -105 50 -147 111 -250 119 -197 203 -371 253 -526
26 -78 47 -153 47 -165 0 -32 -33 -65 -94 -93 -143 -67 -295 15 -426 231 -122
202 -328 472 -376 494 -26 11 -34 9 -104 -29 -319 -173 -583 -263 -845 -286
-44 -4 -92 -13 -106 -20 -14 -7 -43 -41 -64 -76 -52 -86 -66 -103 -138 -176
-76 -77 -173 -128 -267 -141 -66 -9 -188 1 -236 19 l-26 10 19 30 c126 201
243 425 243 466 0 19 -24 51 -94 122 -135 140 -186 229 -238 409 -32 110 -31
321 0 438 35 128 101 251 182 338 86 92 156 139 263 179 69 25 101 31 201 36
160 7 162 8 211 197 54 207 123 454 140 500 17 47 54 73 130 91 63 15 190 17
273 4z"
                    />
                    <path
                        d="M1495 2486 c-19 -29 -123 -370 -132 -433 -7 -55 10 -81 82 -122 31
-17 108 -65 172 -106 125 -80 157 -90 174 -51 9 19 6 43 -16 117 -56 197 -176
548 -198 580 -29 43 -60 49 -82 15z m90 -128 c60 -170 187 -579 182 -584 -2
-2 -25 12 -52 32 -26 21 -107 73 -179 116 -72 44 -135 83 -139 87 -6 6 100
393 128 470 8 21 12 13 60 -121z"
                    />
                    <path
                        d="M613 1575 c-45 -19 -108 -85 -140 -147 -24 -47 -28 -64 -28 -143 0
-75 4 -97 24 -135 74 -142 117 -121 180 89 22 73 50 173 63 221 22 87 22 89 4
109 -22 24 -57 26 -103 6z m61 -107 c-36 -132 -104 -360 -113 -376 -6 -10 -14
-3 -31 25 -74 125 -66 258 22 358 40 46 98 84 130 85 15 0 14 -9 -8 -92z"
                    />
                    <path
                        d="M1183 1418 c-23 -25 -154 -432 -155 -482 -2 -46 34 -69 96 -61 170
22 477 111 527 152 44 37 38 61 -33 129 -104 98 -278 233 -345 268 -43 22 -66
20 -90 -6z m131 -68 c87 -59 284 -218 320 -259 25 -27 19 -33 -72 -65 -154
-55 -483 -128 -500 -111 -3 3 27 110 67 237 39 128 71 239 71 246 0 23 26 12
114 -48z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Logo;
