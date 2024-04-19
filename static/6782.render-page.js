"use strict";
exports.id = 6782;
exports.ids = [6782];
exports.modules = {

/***/ 86602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eY": () => (/* binding */ g)
/* harmony export */ });
/* unused harmony exports isImageSource, rasterize */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61681);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1662);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19710);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55542);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51118);
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7349);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43487);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return t&&"render"in t}function l(t){return t&&!("render"in t)}function x(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function _(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(t,s)}class g extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_3__/* .DisplayObject */ .s{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}setTransform(t){const n=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.transforms.dvs),[o,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(o,a)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(c/2,l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.r)(n,n,-x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(-c/2,-l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.j)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(c,l)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(this.transforms.dvs,t.displayViewMat3,n)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(e){var i;if(!this.stage)return null==(i=this._texture)||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=_(e,this.sourceWidth,this.sourceHeight):this._texture=_(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),c(s))if(s instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z){const e=s.getRenderedRasterPixels();this._texture.setData((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(x(s));else l(s)&&this._texture.setData(s);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ }),

/***/ 12688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14351);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38716);
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10994);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_0__/* .brushes.bitmap */ .U.bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLDrawPhase.MAP */ .jx.MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ 7349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(i))return;const l=this.filter({pixelBlock:i});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}


/***/ }),

/***/ 6782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36663);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12688);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80347);
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23134);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26216);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55068);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__/* .RefreshableLayerView */ .y)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z))){update(t){this.strategy.update(t).catch((t=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .D_)(t)||h.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_7__/* .BitmapContainer */ .c,this.container.addChild(this._bitmapContainer),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"strategy",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"updating",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;


/***/ }),

/***/ 23134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ S)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 3 modules
var Accessor = __webpack_require__(53443);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(35925);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(81590);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/viewStateUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function o(t,n,o){const{resolution:r,size:u}=o;return t[0]=r*(Math.round(n[0]/r)+u[0]%2*.5),t[1]=r*(Math.round(n[1]/r)+u[1]%2*.5),t}function viewStateUtils_r(t,o){const r=n(o.rotation),u=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),[s,c]=o.size;return t[0]=Math.round(c*a+s*u),t[1]=Math.round(c*u+s*a),t}function u(t,n,o,r){const[u,a]=n,[s,c]=r,i=.5*o;return t[0]=u-i*s,t[1]=a-i*c,t[2]=u+i*s,t[3]=a+i*c,t}function a(t,n){const[o,r,u,a]=t,[s,c,i,e]=n;return!(o>i||u<s||r>e||a<c)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js
var Bitmap = __webpack_require__(86602);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileInfoView.js + 2 modules
var TileInfoView = __webpack_require__(64970);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileKey.js
var TileKey = __webpack_require__(87241);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const ExportStrategy_u=(0,aaBoundingRect/* create */.Ue)(),g=[0,0],f=new TileKey/* default */.Z(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let y=class extends Accessor/* default */.Z{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=(0,promiseUtils/* debounce */.Ds)((async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,o=(0,spatialReferenceUtils/* getInfo */.C5)(i.spatialReference),r=this.hidpi?t.pixelRatio:1,s=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];s?(g[0]=i.worldScreenWidth,g[1]=i.size[1]):this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):viewStateUtils_r(g,i);const a=Math.floor(g[0]*r)>this.imageMaxWidth||Math.floor(g[1]*r)>this.imageMaxHeight,n=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),l=!this.imageNormalizationSupported&&n,d=!a&&!l,h=this.imageRotationSupported?i.rotation:0;if(d){const t=s?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,g,t,i.resolution,h,r,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);l&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,h,r,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,o,r,s){const a=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:o,pixelRatio:r,signal:s}),p=new Bitmap/* Bitmap */.eY(a,"additive");return p.x=t.xmin,p.y=t.ymax,p.resolution=t.width/e,p.rotation=o,p.pixelRatio=r,p}async _singleExport(t,e,i,o,r,a,p){u(ExportStrategy_u,i,o,e);const n=new Extent/* default */.Z(ExportStrategy_u[0],ExportStrategy_u[1],ExportStrategy_u[2],ExportStrategy_u[3],t.spatialReference);return[await this._export(n,e[0],e[1],r,a,p)]}_tiledExport(t,e,i,o,r){const a=TileInfo/* default.create */.Z.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),p=new TileInfoView/* default */.Z(a),m=p.getTileCoverage(t);if(!m)return null;const l=[];return m.forEach(((a,n,m,d)=>{f.set(a,n,m,d),p.getTileBounds(ExportStrategy_u,f);const h=new Extent/* default */.Z(ExportStrategy_u[0],ExportStrategy_u[1],ExportStrategy_u[2],ExportStrategy_u[3],t.spatialReference);l.push(this._export(h,e,e,i,o,r))})),Promise.all(l)}};(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"_imagePromise",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"bitmaps",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"fetchSource",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"hidpi",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"imageMaxWidth",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"imageMaxHeight",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"imageRotationSupported",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"imageNormalizationSupported",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"requestUpdate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"updating",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.support.ExportStrategy")],y);const S=y;


/***/ }),

/***/ 55068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ i)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36663);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15071);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.on)(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .D_)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],c.prototype,"layer",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.mixins.RefreshableLayerView")],c),c};


/***/ })

};
;
//# sourceMappingURL=6782.render-page.js.map