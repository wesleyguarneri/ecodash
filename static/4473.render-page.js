"use strict";
exports.id = 4473;
exports.ids = [4473];
exports.modules = {

/***/ 14473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36663);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61681);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51211);
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53932);
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67437);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isNone */ .Wi)(e)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isNone */ .Wi)(t))return null;const s={};return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isSome */ .pC)(t)&&(s.geometry=t.toJSON()),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isSome */ .pC)(e)&&(s.where=e),s}let p=class extends _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return{remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=(0,_support_util_js__WEBPACK_IMPORTED_MODULE_8__/* .toJSONGeometryType */ .oq)(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],p.prototype,"errorString",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({readOnly:!0})],p.prototype,"connectionError",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],p.prototype,"connectionStatus",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;


/***/ })

};
;
//# sourceMappingURL=4473.render-page.js.map