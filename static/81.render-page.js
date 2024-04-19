"use strict";
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 40081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36663);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15842);
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17262);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76136);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18241);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_9__/* .PortalLayer */ .I)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiOriginJSONMixin */ .R)(_Layer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{(0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_2__/* .schedule */ .Os)((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";r&&(s+=" "+r),e(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("layer:unknown-layer-type",s,{layerType:r}))}))})))}read(r,o){super.read({resourceInfo:r},o)}write(){return null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({readOnly:!0})],a.prototype,"resourceInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.UnknownLayer")],a);const c=a;


/***/ })

};
;
//# sourceMappingURL=81.render-page.js.map