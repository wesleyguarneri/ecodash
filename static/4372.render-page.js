"use strict";
exports.id = 4372;
exports.ids = [4372];
exports.modules = {

/***/ 14372:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36663);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66591);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80347);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68114);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57971);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_7__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)){initialize(){this.graphicsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e):null}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){var s;let t;return"number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isCollection */ .Z.isCollection(e)&&e.length>0&&(t=e.map((e=>e&&e.uid)).toArray()),t=null==(s=t)?void 0:s.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],n.prototype,"graphicsView",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;


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
//# sourceMappingURL=4372.render-page.js.map