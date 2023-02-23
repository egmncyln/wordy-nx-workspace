(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 884:
/***/ (() => {

throw new Error("Module parse failed: The keyword 'enum' is reserved (16:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| import { HttpMethods } from \"@wordy-nx-workspace/shared/data/communication\";\n| \n> enum PageTypes {\n|   Login,\n|   Signup,");

/***/ }),

/***/ 243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../libs/wordy-web/feature/src/lib/authentication/authentication.tsx
var authentication = __webpack_require__(884);
;// CONCATENATED MODULE: ../../libs/wordy-web/feature/src/index.ts


;// CONCATENATED MODULE: ./pages/index.tsx


const Index = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(authentication.Authentication, {});
};
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(243));
module.exports = __webpack_exports__;

})();