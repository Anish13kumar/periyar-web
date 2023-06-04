"use strict";
(() => {
var exports = {};
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 4296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Downloads),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const dd_list = [
    {
        value: "Ph.D",
        ref: "phd"
    },
    {
        value: "D.Sc / D.Litt",
        ref: "dsc-dlit"
    }
];
const dd_con_list = [
    [
        {
            value: "M.Phil & PhD. GUIDESHIP APPLICATION",
            link: "/downloads/phd/M.Phil & PhD. GUIDESHIP APPLICATION.docx"
        },
        {
            value: "PH.D DC PANEL FORM",
            link: "/downloads/phd/PH.D DC PANEL FORM.docx"
        },
        {
            value: "PH.D SYLLABUS FORMAT",
            link: "/downloads/phd/PH.D SYLLABUS FORMAT.docx"
        },
        {
            value: "PH.D DC MINUTES FORMAT",
            link: "/downloads/phd/PH.D DC MINUTES FORMAT.docx"
        },
        {
            value: "PROGRESS REPORT FORMAT",
            link: "/downloads/phd/PROGRESS REPORT FORMAT.docx"
        },
        {
            value: "PH.D NO DUES FORM",
            link: "/downloads/phd/PH.D NO DUES FORM.docx"
        },
        {
            value: "Certificate of Genuineness",
            link: "/downloads/phd/Certificate of Genuineness.docx"
        },
        {
            value: "Indian Examiner Bank Details for Claim",
            link: "/downloads/phd/Indian Examiner Bank Details for Claim.docx"
        },
        {
            value: "Foreign  Examiner Bank Account Details",
            link: "/downloads/phd/Foreign  Examiner Bank Account Details.docx"
        },
        {
            value: "Tamil Virtual Academy",
            link: "/downloads/phd/Tamil Virtual Academy.docx"
        },
        {
            value: "Bio-data for Examiner - Ph.D Thesis",
            link: "/downloads/phd/Bio-data for Examiner - Ph.D Thesis.docx"
        },
        {
            value: "Thesis Examiner Panel",
            link: "/downloads/phd/Thesis Examiner Panel.docx"
        },
        {
            value: "Thesis & Viva voce Claim Form - A5 Form",
            link: "/downloads/phd/Thesis & Viva voce Claim Form - A5 Form.docx"
        },
        {
            value: "Journal Verification Form",
            link: "/downloads/phd/Journal Verification Form.docx"
        }
    ],
    [
        {
            value: "D.Sc-D.Litt. - Application Form",
            link: "/downloads/dsc-dlit/D.Sc-D.Litt. - Application Form.docx"
        },
        {
            value: "D.Sc-D.Litt. - Thesis Submission Form",
            link: "/downloads/dsc-dlit/D.Sc-D.Litt. - Thesis Submission Form.docx"
        },
        {
            value: "D.Sc-D.Litt. - Panel Form",
            link: "/downloads/dsc-dlit/Panel Form.pdf"
        }
    ]
];
function Downloads(props) {
    const [sc, setsc] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [scv, setscv] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("phd");
    console.log(props.p, parseInt(props.i));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (props.i) {
            setsc(()=>parseInt(props.i));
        }
        if (props.p) {
            setscv(props.p);
        }
    }, [
        props
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "downloads",
        id: "download",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "download-list",
            children: dd_con_list[sc].map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "download-card",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/downloads/${scv}/${e.value}.pdf`,
                        target: "_blank",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: e.value
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: e.link,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: "/download-ic.gif",
                                            alt: "Download",
                                            height: "30",
                                            width: "30"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: "download"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }, e.value))
        })
    });
}
async function getServerSideProps(context) {
    return {
        props: context.query
    };
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675], () => (__webpack_exec__(4296)));
module.exports = __webpack_exports__;

})();