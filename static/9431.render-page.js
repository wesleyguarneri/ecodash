"use strict";
exports.id = 9431;
exports.ids = [9431];
exports.modules = {

/***/ 79431:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36663);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44584);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61681);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7283);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33156);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80347);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68114);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57971);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let h=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_7__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)){constructor(){super(...arguments),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,s){if(!this.graphicsViews.length)return null;return(await Promise.all(this.graphicsViews.map((s=>s.hitTest(e))))).flat().filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e)}attach(){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isNone */ .Wi)(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;


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
//# sourceMappingURL=9431.render-page.js.map