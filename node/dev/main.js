webpackJsonp([1],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_utils_utils__ = __webpack_require__(2);



const DOM = (() => {
    return {
        body: document.querySelector('body'),
    };
})();

function createButton() {
    let button = document.createElement('button');
    // webpack 1
    // button.onclick = e => {
    //     require.ensure([], function(require) {
    //         var module = require('./js/vendor/b.js');
    //         console.log(module.default);
    //     }, 'b');
    // };

    button.onclick   = e => {
        __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 9)).then(
            module => {
                console.log(module.default);
            });
    };
    button.innerHTML = '点击加载 b.js';
    return button;
}

let button = createButton();
DOM.body.appendChild(button);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appendDom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_Storage__ = __webpack_require__(4);



/* unused harmony default export */ var _unused_webpack_default_export = ({
    appendDom: __WEBPACK_IMPORTED_MODULE_0__appendDom__["a" /* default */],
    storage: new __WEBPACK_IMPORTED_MODULE_1__class_Storage__["a" /* default */](),
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let appendDom = (newDomHTML, targetDom) => {
    targetDom = document.querySelector(targetDom);
    targetDom.innerHTML += newDomHTML;
};

/* harmony default export */ __webpack_exports__["a"] = (appendDom);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Storage {
    constructor() {

    }

    getItem(key) {
        let data = localStorage.getItem(key);
        if (data) {
            if (!/^function(.|\n|\r)*\}$/.test(data)) {
                data = JSON.parse(data);
            } else {
                data = eval(data);
            }
            return data;
        }
        return false;
    }

    setItem(key, value) {
        let data;
        if (typeof value !== 'function') data = JSON.stringify(value);
        return localStorage.setItem(key, data);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Storage);



/***/ })
],[0]);
//# sourceMappingURL=main.js.map