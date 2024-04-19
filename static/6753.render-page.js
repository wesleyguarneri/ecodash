"use strict";
exports.id = 6753;
exports.ids = [6753];
exports.modules = {

/***/ 56753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(36663);
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63592);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61681);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15842);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95620);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39835);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76136);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27668);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43330);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18241);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95874);
/* harmony import */ var _support_LayersMixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9008);
/* harmony import */ var _support_TablesMixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98234);
/* harmony import */ var _webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40000);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_10__/* .BlendLayer */ .h)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_13__/* .ScaleRangeLayer */ .M)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_11__/* .OperationalLayer */ .q)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_12__/* .PortalLayer */ .I)((0,_support_TablesMixin_js__WEBPACK_IMPORTED_MODULE_15__/* .TablesMixin */ .Q)((0,_support_LayersMixin_js__WEBPACK_IMPORTED_MODULE_14__/* .LayersMixin */ .K)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiOriginJSONMixin */ .R)(_Layer_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,s,r){const o=[];if(!i)return o;i.forEach((i=>{const e=(0,_webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getLayerJSON */ .Nw)(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__/* .isSome */ .pC)(e)&&e.layerType&&o.push(e)})),e.layers=o}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_0__/* .loadAll */ .GZ)(this,(i=>{i(this.layers)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getProperties */ .vw)(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],m.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .c)("layers")],m.prototype,"_writeLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],m.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_18__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.GroupLayer")],m);const u=m;


/***/ })

};
;
//# sourceMappingURL=6753.render-page.js.map