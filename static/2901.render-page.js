"use strict";
exports.id = 2901;
exports.ids = [2901];
exports.modules = {

/***/ 62901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBoundingBoxCache": () => (/* binding */ a),
/* harmony export */   "computeIconLayerResourceSize": () => (/* binding */ l),
/* harmony export */   "computeLayerResourceSize": () => (/* binding */ y),
/* harmony export */   "computeLayerSize": () => (/* binding */ f),
/* harmony export */   "computeObjectLayerResourceSize": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70375);
/* harmony import */ var _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77234);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61681);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37116);
/* harmony import */ var _symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19049);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=m();function m(){return new _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(50)}function a(){c=m()}function y(e,o){if("icon"===e.type)return l(e,o);if("object"===e.type)return b(e,o);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,o){if(e.resource.href)return h(e.resource.href).then((e=>[e.width,e.height]));if(e.resource.primitive)return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__/* .isSome */ .pC)(o)?[o,o]:[256,256];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function p(e,r){return l(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function h(r){return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,{responseType:"image"}).then((e=>e.data))}function b(e,r){return w(e,r).then((e=>(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .size */ .dp)(e)))}async function d(e,r){const o=await b(e,r);return (0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_4__/* .objectSymbolLayerSizeWithResourceSize */ .$K)(o,e)}async function w(e,o){if(!e.isPrimitive){const r=e.resource.href,o=c.get(r);if(void 0!==o)return Promise.resolve(o);const t=await Promise.all(/* import() */[__webpack_require__.e(6224), __webpack_require__.e(7312), __webpack_require__.e(734), __webpack_require__.e(7705)]).then(__webpack_require__.bind(__webpack_require__, 47705)),n=await t.fetch(r,{disableTextures:!0});return c.put(r,n.referenceBoundingBox),n.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .Ue)((0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_4__/* .objectSymbolLayerPrimitiveBoundingBox */ .Uz)(e.resource.primitive)),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__/* .isSome */ .pC)(o)))for(let r=0;r<n.length;r++)n[r]*=o;return n?Promise.resolve(n):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("symbol:invalid-resource","The symbol does not have a valid resource"))}


/***/ })

};
;
//# sourceMappingURL=2901.render-page.js.map