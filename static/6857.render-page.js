"use strict";
exports.id = 6857;
exports.ids = [6857];
exports.modules = {

/***/ 96857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36663);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66591);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61681);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15071);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13802);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33156);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40266);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80347);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68114);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57971);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)){async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(s=>s.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,s){const i=Array.from(this.graphicsViews(),(async s=>{const i=await s.hitTest(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(s);for(const s of i)!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate)}return i}));return(await Promise.all(i)).flat()}highlight(e){let t;if("number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isCollection */ .Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),!t.length)return f;for(const s of this.graphicsViews())s.addHighlight(t);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t)}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e)}attach(){const e=this.view,s=()=>this.requestUpdate(),i=this.layer.featureCollections;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of i){const i=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const r=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:s,container:i});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(t,"visible",(e=>r.container.visible=e)),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(r,"updating",(()=>this.notifyChange("updating")))],d)}}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this.layer.sublayers)&&this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.on)(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u)}detach(){this._destroyGraphicsViews(),this.handles.remove(u)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isNone */ .Wi)(this.layer.sublayers))return;const e=[],s=this.view,i=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const o=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({view:s,graphics:t.graphics,requestUpdateCallback:i,container:r});this.handles.add([t.on("graphic-update",o.graphicUpdateHandler),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(t,"visible",(e=>o.container.visible=e)),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o)}this._graphicsViews=e}};g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .j)("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;


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
//# sourceMappingURL=6857.render-page.js.map