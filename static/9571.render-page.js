"use strict";
exports.id = 9571;
exports.ids = [9571];
exports.modules = {

/***/ 24065:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36663);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53443);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53280);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61681);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51599);
/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93698);
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89280);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__/* .HandleOwnerMixin */ .p)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getLayerFloorFilterClause */ .ff)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isExportDynamic */ .FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getLayerFloorFilterClause */ .ff)(this.floors,r),i=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .isSome */ .pC)(s)?(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .combineFloorsDefinitionExpression */ .Hp)(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"floors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"layers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"layerDefs",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:Number})],c.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .combinedViewLayerTimeExtentProperty */ .qG)],c.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"version",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.layers.mixins.ExportImageParameters")],c);


/***/ }),

/***/ 93698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FN": () => (/* binding */ n),
/* harmony export */   "ac": () => (/* binding */ i),
/* harmony export */   "QV": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n,i){const o=n.flatten((({sublayers:e})=>e)).length;if(o!==e.length)return!0;return!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!r(e,n)}function n(e,n,i){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!r(e,n)}function r(e,n){if(!e||!e.length)return!0;const r=n.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const o=r.length;for(const{id:t}of e){for(;i<o&&r[i]!==t;)i++;if(i>=o)return!1}return!0}function i(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}


/***/ }),

/***/ 59468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


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

/***/ 79571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MapImageLayerView2D_y)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/GraphicsCollection.js
var GraphicsCollection = __webpack_require__(94449);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js
var BitmapContainer = __webpack_require__(12688);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js + 4 modules
var LayerView2D = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js + 21 modules
var GraphicsView2D = __webpack_require__(57971);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(33156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/graphics/BaseGraphicContainer.js + 1 modules
var BaseGraphicContainer = __webpack_require__(26204);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends BaseGraphicContainer/* default */.Z{renderChildren(r){if(r.drawPhase!==enums/* WGLDrawPhase.HIGHLIGHT */.jx.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};o=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const HighlightGraphicContainer_i=o;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js + 1 modules
var ExportStrategy = __webpack_require__(23134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/LayerView.js
var LayerView = __webpack_require__(26216);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js
var ExportImageParameters = __webpack_require__(24065);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js
var clickToleranceUtils = __webpack_require__(59468);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(30879);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/support/popupUtils.js
var popupUtils = __webpack_require__(59439);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/support/floorFilterUtils.js
var floorFilterUtils = __webpack_require__(89280);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=y=>{let d=class extends y{initialize(){this.exportImageParameters=new ExportImageParameters/* ExportImageParameters */.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new Error/* default */.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const i=this.get("view.scale"),p=[],m=async e=>{const r=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const r=(0,popupUtils/* getFetchPopupTemplate */.V)(e,{...s,defaultPopupTemplateEnabled:!1});(0,maybe/* isSome */.pC)(r)&&p.unshift({sublayer:e,popupTemplate:r})}},y=a.sublayers.toArray().reverse().map(m);await Promise.all(y);const d=p.map((async({sublayer:r,popupTemplate:o})=>{await r.load().catch((()=>{}));const a=r.createQuery(),i=(0,maybe/* isSome */.pC)(s)?s.event:null,p=(0,clickToleranceUtils/* calculateTolerance */.k)({renderer:r.renderer,event:i}),m=this.createFetchPopupFeaturesQueryGeometry(e,p);if(a.geometry=m,a.outFields=await (0,popupUtils/* getRequiredFields */.e)(r,o),"map-image"===this.layer.type&&"floors"in this.view){var c,y;const e=null==(c=this.view)||null==(y=c.floors)?void 0:y.clone(),o=(0,floorFilterUtils/* getLayerFloorFilterClause */.ff)(e,r);(0,maybe/* isSome */.pC)(o)&&(a.where=a.where?`(${a.where}) AND (${o})`:o)}const d=await this._loadArcadeModules(o);d&&d.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=m.width/p);return(await r.queryFeatures(a)).features}));return(await (0,promiseUtils/* eachAlways */.as)(d)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return (0,arcadeOnDemand/* loadArcade */.LC)()}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],d.prototype,"exportImageParameters",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],d.prototype,"exportImageVersion",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],d.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],d.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* combinedViewLayerTimeExtentProperty */.qG)],d.prototype,"timeExtent",void 0),d=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.MapImageLayerView")],d),d};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var RefreshableLayerView = __webpack_require__(55068);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/support/drapedUtils.js
var drapedUtils = __webpack_require__(99621);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(y((0,RefreshableLayerView/* RefreshableLayerView */.y)((0,LayerView2D/* LayerView2DMixin */.y)(LayerView/* default */.Z)))){constructor(){super(...arguments),this._highlightGraphics=new GraphicsCollection/* GraphicsCollection */.J}update(e){this.strategy.update(e).catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||u.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new BitmapContainer/* BitmapContainer */.c,this.container.addChild(this._bitmapContainer);const a=new GraphicsView2D/* default */.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new HighlightGraphicContainer_i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new ExportStrategy/* default */.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return (0,drapedUtils/* createQueryGeometry */.K)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"strategy",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"updating",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.MapImageLayerView2D")],f);const MapImageLayerView2D_y=f;


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


/***/ }),

/***/ 59439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ d),
/* harmony export */   "e": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61681);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17095);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getFeatureEditFields */ .CH)(t):[],r=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .fixFields */ .Q0)(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(l)&&l.defaultPopupTemplateEnabled&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ }),

/***/ 99621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export intersectsDrapedGeometry */
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17321);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91772);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(o)&&!o.equals(a.spatialReference)?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .c9)(o)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .c9)(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if(t(o))return!1;return a(o,n(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;


/***/ }),

/***/ 89280:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": () => (/* binding */ l),
/* harmony export */   "cx": () => (/* binding */ o),
/* harmony export */   "ff": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){var n;const l=o.layer;if("floorInfo"in l&&null!=(n=l.floorInfo)&&n.floorField&&"floors"in o.view){return r(o.view.floors,l.floorInfo.floorField)}return null}function n(o,n){var l;return"floorInfo"in n&&null!=(l=n.floorInfo)&&l.floorField?r(o,n.floorInfo.floorField):null}function l(o,n){const{definitionExpression:l}=n;return o?l?`(${l}) AND (${o})`:o:l}function r(o,n){if(null==o||!o.length)return null;const l=o.filter((o=>""!==o)).map((o=>`'${o}'`));return l.push("''"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}


/***/ })

};
;
//# sourceMappingURL=9571.render-page.js.map