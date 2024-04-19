"use strict";
exports.id = 2670;
exports.ids = [2670];
exports.modules = {

/***/ 94672:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QM": () => (/* binding */ r),
/* harmony export */   "hy": () => (/* binding */ o),
/* harmony export */   "uI": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports calculateHeatmapIntensityInfo, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19431);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n.colorStops)r.addColorStop(Math.max(t,.001),`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function n(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:c}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=f(c,a);for(const{geometry:i,attributes:f}of t){const t=i.x-h,e=i.y-h,o=Math.max(0,t),a=Math.max(0,e),c=Math.min(r,i.y+h),g=Math.min(n,i.x+h),y=+m(f);for(let r=a;r<c;r++){const a=l[r-e];for(let e=o;e<g;e++){const o=l[e-t];s=u[r*n+e]+=a*o*y,s>d&&(d=s)}}}return{matrix:u.buffer,max:d}}function r(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:f}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=c(f,a),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-h,c=Math.round(o.y)-h,y=Math.max(0,f),M=Math.max(0,c),x=Math.min(r,Math.round(o.y)+h),b=Math.min(n,Math.round(o.x)+h);for(let t=M;t<x;t++){const e=l[t-c];for(let r=y;r<b;r++){const o=l[r-f];s=u[t*n+r]+=e*o*i,s>d&&(d=s)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,r,o,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(a(e,n,r,o,i))),t.putImageData(f,0,0)}function a(e,n,r,o,a){const i=new Uint32Array(e*e),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const e=f[l],n=Math.floor((e-o)*u);i[l]=c[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .uZ)(n,0,c.length-1)]}return i.buffer}function i(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function c(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}


/***/ }),

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

/***/ 15293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ n)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3f32.js
var mat3f32 = __webpack_require__(19710);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js
var Bitmap = __webpack_require__(86602);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js
var TiledDisplayObject = __webpack_require__(27954);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/BitmapTile.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends TiledDisplayObject/* TiledDisplayObject */.I{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new Bitmap/* Bitmap */.eY(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t)}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t)}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,mat3f32.c)(),tileMat3:(0,mat3f32.c)()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/brushes.js + 14 modules
var brushes = __webpack_require__(14351);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js
var TileContainer = __webpack_require__(70179);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends TileContainer/* default */.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds((0,aaBoundingRect/* create */.Ue)(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[brushes/* brushes.bitmap */.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:enums/* WGLDrawPhase.MAP */.jx.MAP});return[...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===enums/* WGLDrawPhase.MAP */.jx.MAP&&super.doRender(e)}}


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

/***/ 70179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export sortByLevel */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38716);
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10994);
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38448);
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22598);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLDrawPhase.DEBUG */ .jx.DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLDrawPhase.MAP */ .jx.MAP|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLDrawPhase.HIGHLIGHT */ .jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLDrawPhase.DEBUG */ .jx.DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}}


/***/ }),

/***/ 27954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1662);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51118);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87241);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__/* .DisplayObject */ .s{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.s)(h,a,0,0,0,l,0,o,n,1),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(this.transforms.dvs,i.displayViewMat3,h)}}


/***/ }),

/***/ 25970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36663);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53280);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__/* .HandleOwner */ .r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"layerView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"tileInfoView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"updating",null),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;


/***/ }),

/***/ 32670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(33156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js
var heatmapUtils = __webpack_require__(94672);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js + 1 modules
var BitmapTileContainer = __webpack_require__(15293);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js
var BaseTileRenderer = __webpack_require__(25970);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/HeatmapSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class HeatmapSource_i{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){(0,heatmapUtils/* drawHeatmap */.hy)(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends BaseTileRenderer/* default */.Z{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new BitmapTileContainer/* BitmapTileContainer */.s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:r}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=r,this._gradient=(0,heatmapUtils/* generateGradient */.uI)(e.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,o=t.bitmap.source||new HeatmapSource_i;o.intensities=i&&i.matrix||null,o.minPixelIntensity=r,o.maxPixelIntensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;


/***/ })

};
;
//# sourceMappingURL=2670.render-page.js.map