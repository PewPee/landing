exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 7987:
/***/ ((module) => {

// Exports
module.exports = {
	"footerWrapper": "footer_footerWrapper__MjO12",
	"footer": "footer_footer__OT4Wn",
	"footerMobile": "footer_footerMobile__TpcVI",
	"footerColumn": "footer_footerColumn___kRbJ",
	"footerColumnLogo": "footer_footerColumnLogo__Zw64p",
	"copyright": "footer_copyright__heq_T"
};


/***/ }),

/***/ 5909:
/***/ ((module) => {

// Exports
module.exports = {
	"navWrapper": "navigationbar_navWrapper__xrbKJ",
	"nav": "navigationbar_nav__hZJEr",
	"navLinks": "navigationbar_navLinks__AC6nH"
};


/***/ }),

/***/ 2123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/navigationbar.module.css
var navigationbar_module = __webpack_require__(5909);
var navigationbar_module_default = /*#__PURE__*/__webpack_require__.n(navigationbar_module);
;// CONCATENATED MODULE: ./public/img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.63de4860.svg","height":32,"width":111});
;// CONCATENATED MODULE: ./components/navigationbar.tsx





function NavigationBar() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (navigationbar_module_default()).navWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `container ${(navigationbar_module_default()).nav}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: logo,
                            width: 111,
                            height: 32,
                            alt: "PewPee logo",
                            draggable: "false"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (navigationbar_module_default()).navLinks,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://twitter.com/PewPeeMusic",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Twitter"
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./components/footer.module.css
var footer_module = __webpack_require__(7987);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer.tsx





function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footerWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `container ${(footer_module_default()).footer}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footerColumn + " " + (footer_module_default()).footerColumnLogo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: logo,
                                width: 142,
                                height: 41,
                                alt: "PewPee logo",
                                draggable: "false"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (footer_module_default()).copyright,
                                href: "https://t.me/taiakindaniel",
                                rel: "nofollow noreferrer",
                                target: "_blank",
                                children: "\xa9 Daniel Taiakin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footerColumn,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "About"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "FAQ"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Blog"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Jobs"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footerColumn,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Apps"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://apps.apple.com/us/app/pewpee/id1483338834",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "iPhone/iPad"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/en/login",
                                            children: "Web"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footerColumn,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Legal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/privacy",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/privacy",
                                                children: "Privacy Policy"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/terms",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/terms",
                                                children: "Terms of Use"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footerColumn,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Social"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://t.me/pewpee_music",
                                            rel: "nofollow noreferrer",
                                            target: "_blank",
                                            children: "Telegram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://twitter.com/PewPeeMusic",
                                            rel: "nofollow noreferrer",
                                            target: "_blank",
                                            children: "Twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.instagram.com/pewpee.music",
                                            rel: "nofollow noreferrer",
                                            target: "_blank",
                                            children: "Instagram"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).footerMobile,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (footer_module_default()).footerColumn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://apps.apple.com/us/app/pewpee/id1483338834",
                                rel: "noreferrer",
                                target: "_blank",
                                children: "Download"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (footer_module_default()).footerColumn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/en/login",
                                children: "Web"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (footer_module_default()).footerColumn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://twitter.com/PewPeeMusic",
                                rel: "nofollow noreferrer",
                                target: "_blank",
                                children: "Twitter"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layout.tsx



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "main-wrapper",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};


/***/ })

};
;