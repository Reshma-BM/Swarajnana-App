module.exports = [
"[project]/app/raga-explorer/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RagaExplorationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function RagaExplorationPage() {
    const audioRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const ragas = [
        {
            id: 1,
            name: "Raga Bhairav",
            mood: "Calm & Spiritual",
            time: "Morning",
            audio: "/sounds/bhairav.mp3"
        },
        {
            id: 2,
            name: "Raga Yaman",
            mood: "Peaceful & Romantic",
            time: "Evening",
            audio: "/sounds/yaman.mp3"
        },
        {
            id: 3,
            name: "Raga Darbari",
            mood: "Majesty & Grandeur",
            time: "Night",
            audio: "/sounds/darbari.mp3"
        }
    ];
    const playAudio = (id)=>{
        const audio = audioRefs.current[id];
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            setTimeout(()=>audio.pause(), 5000); // stop after 5 seconds
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-between px-10 text-white relative",
        style: {
            backgroundImage: "url('/images/logo.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#2a004f]/85 to-[#1b0033]/85 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/app/raga-explorer/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    ...Array(15)
                ].map((_, i)=>{
                    const icons = [
                        "🎵",
                        "🎶",
                        "🎼",
                        "🎷",
                        "🎻",
                        "🎹"
                    ];
                    const icon = icons[Math.floor(Math.random() * icons.length)];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute text-white/30 text-3xl",
                        initial: {
                            x: Math.random() * (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1000),
                            y: (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 800) + 50,
                            rotate: 0
                        },
                        animate: {
                            y: -50,
                            rotate: 360
                        },
                        transition: {
                            duration: Math.random() * 12 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 6,
                            ease: "easeInOut"
                        },
                        style: {
                            left: `${Math.random() * 100}%`
                        },
                        children: icon
                    }, i, false, {
                        fileName: "[project]/app/raga-explorer/page.jsx",
                        lineNumber: 60,
                        columnNumber: 7
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/raga-explorer/page.jsx",
                lineNumber: 55,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-extrabold mb-4 bg-gradient-to-r from-ragaGold to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]",
                        children: "Journey Through Ragas"
                    }, void 0, false, {
                        fileName: "[project]/app/raga-explorer/page.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-300",
                        children: "Feel the emotion, science, and spirit of Indian classical music."
                    }, void 0, false, {
                        fileName: "[project]/app/raga-explorer/page.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 w-1/4 overflow-hidden pointer-events-none",
                        children: [
                            ...Array(20)
                        ].map((_, i)=>{
                            const icons = [
                                "🎵",
                                "🎶",
                                "🎼",
                                "🎷",
                                "🎻",
                                "🎹"
                            ];
                            const icon = icons[Math.floor(Math.random() * icons.length)];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute text-white/30 text-3xl",
                                initial: {
                                    x: Math.random() * 100,
                                    y: Math.random() * window.innerHeight,
                                    rotate: Math.random() * 360
                                },
                                animate: {
                                    y: -100,
                                    rotate: 360
                                },
                                transition: {
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                style: {
                                    left: `${Math.random() * 80}px`
                                },
                                children: icon
                            }, i, false, {
                                fileName: "[project]/app/raga-explorer/page.jsx",
                                lineNumber: 111,
                                columnNumber: 7
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/raga-explorer/page.jsx",
                        lineNumber: 106,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/raga-explorer/page.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col space-y-6 w-full max-w-md",
                children: ragas.map((raga)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.02
                        },
                        className: "p-6 rounded-xl bg-white/15 border border-white/10   backdrop-blur-md shadow-lg transition duration-300 text-left   h-40 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold mb-1 text-pink-100",
                                        children: raga.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/raga-explorer/page.jsx",
                                        lineNumber: 151,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-200 italic text-sm",
                                        children: raga.mood
                                    }, void 0, false, {
                                        fileName: "[project]/app/raga-explorer/page.jsx",
                                        lineNumber: 154,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-300",
                                        children: [
                                            "Best time: ",
                                            raga.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/raga-explorer/page.jsx",
                                        lineNumber: 155,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/raga-explorer/page.jsx",
                                lineNumber: 150,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>playAudio(raga.id),
                                        className: "px-3 py-1.5 rounded-lg bg-pink-400/30 hover:bg-pink-400/50    text-white text-xs font-medium transition",
                                        children: "🎧 Listen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/raga-explorer/page.jsx",
                                        lineNumber: 160,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1.5 rounded-lg bg-blue-400/30 hover:bg-blue-400/50    text-white text-xs font-medium transition",
                                        onClick: ()=>alert(`Visualizing ${raga.name}... (Coming soon 🎵)`),
                                        children: "✨ Visualize"
                                    }, void 0, false, {
                                        fileName: "[project]/app/raga-explorer/page.jsx",
                                        lineNumber: 167,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/raga-explorer/page.jsx",
                                lineNumber: 159,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                ref: (el)=>audioRefs.current[raga.id] = el,
                                src: raga.audio
                            }, void 0, false, {
                                fileName: "[project]/app/raga-explorer/page.jsx",
                                lineNumber: 178,
                                columnNumber: 7
                            }, this)
                        ]
                    }, raga.id, true, {
                        fileName: "[project]/app/raga-explorer/page.jsx",
                        lineNumber: 143,
                        columnNumber: 5
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/raga-explorer/page.jsx",
                lineNumber: 141,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/raga-explorer/page.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_raga-explorer_page_jsx_b7987e30._.js.map