"use strict";
exports.id = 3714;
exports.ids = [3714];
exports.modules = {

/***/ 53714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r;function s(s,a){let n=a.responseType;n?"array-buffer"!==n&&"blob"!==n&&"json"!==n&&"native"!==n&&"native-request-init"!==n&&"text"!==n&&(n="text"):n="json",a.responseType=n;const o=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .unwrap */ .Wg)(a.signal);return delete a.signal,globalThis.invokeStaticMessage("request",{url:s,options:a},{signal:o}).then((async t=>{let i,l,u,c,b;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==n&&"text"!==n&&"blob"!==n||(i=new Blob([t.data]),"json"!==n&&"text"!==n||(r||(r=new FileReaderSync),c=r.readAsText(i),"json"!==n)))){try{l=JSON.parse(c||null)}catch(f){const t={...f,url:s,requestOptions:a};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("request:server",f.message,t)}if(l.error){const t={...l.error,url:s,requestOptions:a};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("request:server",l.error.message,t)}}}else"native"===n&&(t.data.signal=o,u=await fetch(t.data.url,t.data));switch(n){case"blob":b=i;break;case"json":b=l;break;case"native":b=u;break;case"text":b=c;break;default:b=t.data}return{data:b,requestOptions:a,ssl:t.ssl,url:s}}))}


/***/ })

};
;
//# sourceMappingURL=3714.render-page.js.map