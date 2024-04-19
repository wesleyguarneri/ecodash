"use strict";
exports.id = 2738;
exports.ids = [2738];
exports.modules = {

/***/ 42738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36663);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80020);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66591);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15071);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13802);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33156);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40266);
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50172);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72506);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51211);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80347);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68114);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57971);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_12__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.graphicsViews.reverse().map((r=>r.hitTest(e)));return(await Promise.all(s)).flat().filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t,layerDefinition:o}of e){const e=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(t),l=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(e.features),c=o.drawingInfo,m=i?_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON(i):null,y=(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .i)(c.renderer),g=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container)}})),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({symbol:e})})),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({symbol:e})})),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({symbol:e})}))],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .j)("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;


/***/ }),

/***/ 68114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38716);
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26204);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.MAP */ .jx.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.HIGHLIGHT */ .jx.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}


/***/ })

};
;
//# sourceMappingURL=2738.render-page.js.map