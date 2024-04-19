"use strict";
exports.id = 3912;
exports.ids = [3912];
exports.modules = {

/***/ 63912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36663);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61681);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15071);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7283);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33156);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15553);
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53932);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return!e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_8__["default"]{initialize(){this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isSome */ .pC)(s)?s:(new _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;


/***/ })

};
;
//# sourceMappingURL=3912.render-page.js.map