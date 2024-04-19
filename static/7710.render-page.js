"use strict";
exports.id = 7710;
exports.ids = [7710];
exports.modules = {

/***/ 57989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pJ": () => (/* binding */ a),
/* harmony export */   "XO": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export isTelemetryDevEnvironment */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ 77710:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSymbolFromStyle": () => (/* binding */ h),
/* harmony export */   "resolveWebStyleSymbol": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95156);
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57989);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70375);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3466);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26869);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16641);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47308);
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85068);
/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38453);
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3032);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .fetchStyle */ .n2)(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getDefault */ .Z.getDefault(),url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .mN)(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)((0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .symbolUrlFromStyleItem */ .v9)(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isDevEnvironment */ .XO)()&&(w=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .adjustStaticAGOUrl */ .pJ)(w),P=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .adjustStaticAGOUrl */ .pJ)(P));const D={portal:g.portal,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .mN)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .Yd)(w)),origin:"portal-item"};return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .requestJSON */ .EJ)(w,j).then((e=>{const r="cimRef"===h?(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .makeCIMSymbolRef */ .KV)(e.data):e.data,o=(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .fromJSON */ .i)(r,D);if(o&&(0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .isSymbol3D */ .dU)(o)){if(P){const t=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(P,U);o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({url:t})}else S&&(o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({portal:g.portal,styleName:y.styleName,name:c}))}return o}))}function j(t,e,r){const o=_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .Style2DUrlTemplate.replace */ .wm.replace(/\{SymbolName\}/gi,t.name);return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .requestJSON */ .EJ)(o,r).then((t=>{const r=(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .makeCIMSymbolRef */ .KV)(t.data);return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .fromJSON */ .i)(r,{portal:e.portal,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .mN)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .Yd)(o)),origin:"portal-item"})}))}


/***/ })

};
;
//# sourceMappingURL=7710.render-page.js.map