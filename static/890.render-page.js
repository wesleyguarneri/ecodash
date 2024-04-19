"use strict";
exports.id = 890;
exports.ids = [890];
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

/***/ 31361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ p)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 3 modules
var Accessor = __webpack_require__(53443);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/dataUtils.js
var dataUtils = __webpack_require__(88243);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/BrushFlow.js
var BrushFlow = __webpack_require__(87808);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js + 2 modules
var WGLContainer = __webpack_require__(10994);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends WGLContainer/* default */.Z{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[BrushFlow/* default */.Z],target:()=>this.children,drawPhase:enums/* WGLDrawPhase.MAP */.jx.MAP});return[...super.prepareRenderPasses(s),t]}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(19431);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules
var Point = __webpack_require__(53446);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const FlowDisplayData_t=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class s{constructor(e,t,s,a){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=s,this.pixelRatio=a}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t}}prepareForRendering(e,s,a){if("loaded"!==this.state.name)return void FlowDisplayData_t.error("Only loaded resources can be attached.");const i=this.state.resources;i.prepareForRendering(e,s,a),this.state={name:"attached",resources:i}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){if(!this.flowStyle.areResourcesCompatible(e.flowStyle))return!1;return!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(1662);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3f32.js
var mat3f32 = __webpack_require__(19710);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js
var DisplayObject = __webpack_require__(51118);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m extends DisplayObject/* DisplayObject */.s{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){(0,maybe/* isSome */.pC)(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(s){const{displayData:n}=this;if((0,maybe/* isNone */.Wi)(n))return;const l=n.extent.xmin,m=n.extent.ymax,p=[0,0];s.toScreen(p,[l,m]);const c=(n.extent.xmax-n.extent.xmin)/n.size[0]/s.resolution,d=(0,mathUtils/* deg2rad */.Vl)(s.rotation),{dvs:x}=this.transforms;(0,mat3.b)(x),(0,mat3.c)(x,x,[-1,1,0]),(0,mat3.d)(x,x,[2/(s.size[0]*s.pixelRatio),-2/(s.size[1]*s.pixelRatio),1]),(0,mat3.c)(x,x,[p[0],p[1],0]),(0,mat3.r)(x,x,d),(0,mat3.d)(x,x,[c*s.pixelRatio,c*s.pixelRatio,1])}_createTransforms(){return{dvs:(0,mat3f32.c)()}}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=1.15,h=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.engine.flow.FlowStrategy");let f=class extends Accessor/* default */.Z{constructor(t){super(t),this._flowDisplayObject=new m,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if((0,maybe/* isNone */.Wi)(o))return void this._clear();const{extent:e,rotation:i,resolution:l,pixelRatio:n}=t.state,p=g(e,i);p.expand(y);const m=[Math.round((p.xmax-p.xmin)/l),Math.round((p.ymax-p.ymin)/l)],d=new s(o,p,m,n);if((0,maybe/* isSome */.pC)(this._loading)){if(this._loading.update(d))return;this._loading.destroy(),this._loading=null}!(0,maybe/* isNone */.Wi)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{(0,promiseUtils/* isAbortError */.D_)(t)||(h.error("A resource failed to load.",t),this._loading=null)})),this._loading=d)}_clear(){this._flowDisplayObject.clear(),(0,maybe/* isSome */.pC)(this._loading)&&(this._loading.destroy(),this._loading=null)}};(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"_loading",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"flowContainer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"updating",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.engine.flow.FlowStrategy")],f);const u=f;function g(t,o){const e=new Point/* default */.Z({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),r=t.xmax-t.xmin,s=t.ymax-t.ymin,a=Math.abs(Math.cos((0,mathUtils/* deg2rad */.Vl)(o))),l=Math.abs(Math.sin((0,mathUtils/* deg2rad */.Vl)(o))),n=a*r+l*s,c=l*r+a*s,m=new Extent/* default */.Z({xmin:e.x-n/2,ymin:e.y-c/2,xmax:e.x+n/2,ymax:e.y+c/2,spatialReference:t.spatialReference});return m.centerAt(e),m}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(95550);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/animatedFlowRendererUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function animatedFlowRendererUtils_n(n){const i=(0,screenUtils/* pt2px */.F2)(n.lineWidth),o=2*i,t=Math.round((0,screenUtils/* pt2px */.F2)(n.lineLength)/o)+1,l=i,r=10,d=n.lineColor.toRgba(),s=[d[0]/255,d[1]/255,d[2]/255,d[3]],{lineSpeed:h,fadeDuration:a,density:g}=n;return{lineRenderWidth:i,segmentLength:o,verticesPerLine:t,lineCollisionWidth:l,lineSpacing:r,lineColor:s,lineSpeed:h,fadeDuration:a,density:g,smoothing:(0,screenUtils/* pt2px */.F2)(n.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/BufferObject.js
var BufferObject = __webpack_require__(78951);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var FramebufferObject = __webpack_require__(18567);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(6174);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/enums.js
var webgl_enums = __webpack_require__(91907);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/builtins.js
var builtins = __webpack_require__(88338);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(43487);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var VertexArrayObject = __webpack_require__(29620);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/FlowGLResources.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class FlowGLResources_r{constructor(e,t){this._vertexData=e,this._indexData=t}prepareForRendering(r,s,i){const a=BufferObject/* default.createVertex */.Z.createVertex(r,35044,this._vertexData),o=BufferObject/* default.createIndex */.Z.createIndex(r,35044,this._indexData),x=new VertexArrayObject/* default */.Z(r,s,i,{geometry:a},o);this.vertexBuffer=a,this.indexBuffer=o,this.vertexArray=x,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(e,t,n){this._loadImagery=e,this._createStreamlinesMesh=t,this._rendererSettings=animatedFlowRendererUtils_n(n)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let r=!0;return r=r&&e._loadImagery===this._loadImagery,r=r&&e._createStreamlinesMesh===this._createStreamlinesMesh,r=r&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,r=r&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,r=r&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,r=r&&e._rendererSettings.density===this._rendererSettings.density,r=r&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,r=r&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,r=r&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,r=r&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,r=r&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,r=r&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,r&&this._rendererSettings.mergeLines&&(r=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),!!r}async loadResources(r,n){const{extent:i,size:s}=r;(0,promiseUtils/* throwIfAborted */.k_)(n);const d=await this._loadImagery(i,s[0],s[1],n),{vertexData:g,indexData:h}=await this._createStreamlinesMesh(this._rendererSettings,d,n);return new FlowGLResources_r(g,h)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/AnimatedFlowView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends Accessor/* default */.Z{constructor(){super(...arguments),this._loadImagery=(e,t,r,s)=>(0,dataUtils/* loadImagery */.KK)(this.layer,e,t,r,s),this._createStreamlinesMesh=(e,t,r)=>this.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:r}),this.container=null,this.layer=null,this.type="rasterAnimatedFlow",this.redrawOrRefetch=async()=>{this._rendererChanged()}}get updating(){return!this._strategy||this._strategy.updating}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}install(e){this.container=new t,e.addChild(this.container),this._strategy=new u({flowContainer:this.container}),this._rendererChanged()}uninstall(){this._strategy.destroy(),this.container.removeAllChildren(),this.container.remove()}moveEnd(){}async doRefresh(){}attach(){}_rendererChanged(){if("animated-flow"!==this.layer.renderer.type)return;const e=new n(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer);this.container.flowStyle=e,this.layerView.requestUpdate()}};(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"_strategy",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"layerView",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"updating",null),l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.engine.flow.AnimatedFlowView2D")],l);const p=l;


/***/ }),

/***/ 90890:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ d)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/watchUtils.js
var watchUtils = __webpack_require__(15071);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/flow/AnimatedFlowView2D.js + 7 modules
var AnimatedFlowView2D = __webpack_require__(31361);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js + 4 modules
var LayerView2D = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(80085);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 3 modules
var Accessor = __webpack_require__(53443);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js
var rasterProjectionHelper = __webpack_require__(18486);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js
var vectorFieldUtils = __webpack_require__(7928);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/GraphicsCollection.js
var GraphicsCollection = __webpack_require__(94449);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/Container.js
var Container = __webpack_require__(10530);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js
var GraphicContainer = __webpack_require__(68114);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js + 21 modules
var GraphicsView2D = __webpack_require__(57971);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let _=class extends Accessor/* default */.Z{constructor(){super(...arguments),this.attached=!1,this.container=new Container/* Container */.W,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},this.type="Graphics",this._graphics=new GraphicsCollection/* GraphicsCollection */.J,this._updateGraphics=(0,promiseUtils/* debounce */.Ds)((async(e,t)=>{if(!e.stationary)return;const r=e.state,i=new Extent/* default */.Z({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const c="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,p=await this._projectFullExtentPromise,{extent:h,resolution:m,width:d,height:y}=(0,vectorFieldUtils/* snapImageToSymbolTile */.BH)(i,s,o,c,p),g=await this.layer.fetchImage(h,d,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,r=x.sizeVariables[0];!(0,maybe/* isSome */.pC)(t)||r.minDataValue&&r.maxDataValue||(r.minDataValue=t.statistics[0].minValue,r.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:h,pixelBlock:t};const i=h.clone().normalize(),s={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:i,tileResolution:m,time:JSON.stringify(this.timeExtent||""),isOceanStyle:"flow-to"===x.flowRepresentation,isOceanographic:"ocean-current-kn"===x.style||"ocean-current-m"===x.style},o=this._canReuseVectorFieldData(s)?this._dataParameters.extents:[],n=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,o);if(o.length){const e=this._graphics.items.filter((e=>(0,maybe/* isSome */.pC)(e.geometry)&&o.some((t=>t.intersects(e.geometry)))&&!i.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n)}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=s}}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||f.error(e)}))}hitTest(e){return new Graphic/* default */.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this._graphicsView=new GraphicsView2D/* default */.Z({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new GraphicContainer/* default */.Z(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await (0,rasterProjectionHelper/* projectExtent */.tB)(this.layer.fullExtent,e)}catch(t){try{const t=(await (0,request["default"])(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?Extent/* default.fromJSON */.Z.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,s=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e))))),a=this._dataParameters.isOceanStyle===e.isOceanStyle,o=this._dataParameters.isOceanographic===e.isOceanographic;return t&&r&&i&&s&&a&&o}};(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"attached",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"updateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"updating",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({graphics:"Graphics"})],_.prototype,"type",void 0),_=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],_);const w=_;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js
var pixelUtils = __webpack_require__(31329);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js
var BitmapContainer = __webpack_require__(12688);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js
var ImageryBitmapSource = __webpack_require__(7349);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js + 1 modules
var ExportStrategy = __webpack_require__(23134);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let y=class extends Accessor/* default */.Z{constructor(){super(...arguments),this.attached=!1,this.container=new Container/* Container */.W,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||u.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e){return new Graphic/* default */.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new BitmapContainer/* BitmapContainer */.c,this.strategy=new ExportStrategy/* default */.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=(0,pixelUtils/* mosaicPixelData */.Kh)(r,t);return (0,maybe/* isSome */.pC)(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new ImageryBitmapSource/* default */.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"attached",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"strategy",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"updateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"updating",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({imagery:"Imagery"})],y.prototype,"type",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.imagery.ImageryView2D")],y);const g=y;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules
var Point = __webpack_require__(53446);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/support/popupUtils.js
var popupUtils = __webpack_require__(59439);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/ImageryLayerView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const ImageryLayerView_u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new Error/* default */.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=(0,popupUtils/* getFetchPopupTemplate */.V)(s,o);if(!i||!(0,maybe/* isSome */.pC)(u))throw new Error/* default */.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new Query/* default */.Z;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new Point/* default */.Z(l,l,this.view.spatialReference):new Point/* default */.Z(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:(0,maybe/* isSome */.pC)(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],m.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],m.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* combinedViewLayerTimeExtentProperty */.qG)],m.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],m.prototype,"view",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.ImageryLayerView")],m),m};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/LayerView.js
var LayerView = __webpack_require__(26216);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var RefreshableLayerView = __webpack_require__(55068);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(ImageryLayerView_u((0,RefreshableLayerView/* RefreshableLayerView */.y)((0,LayerView2D/* LayerView2DMixin */.y)(LayerView/* default */.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add([(0,watchUtils/* init */.S1)(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0),(0,watchUtils/* init */.S1)(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e)}),!0)])}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?"hitTest"in this.subview?[this.subview.hitTest(e)]:[]:null}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([(0,watchUtils/* init */.S1)(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{"timeExtent"in this.subview&&(this.subview.timeExtent=this.timeExtent),this.requestUpdate()})),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()})),(0,watchUtils/* watch */.YP)(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.updating}_setSubView(){var e,t;let i="Imagery";"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(i="Graphics");var s,r;("animated-flow"===(null==(t=this.layer.renderer)?void 0:t.type)&&(i="Flow"),this.subview&&this.subview.type===i)||(null==(s=this.subview)||s.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===i?new g({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"Graphics"===i?new w({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new AnimatedFlowView2D/* default */.Z({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect);this.requestUpdate()}};(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"pixelData",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],p.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"subview",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.ImageryLayerView2D")],p);const d=p;


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


/***/ })

};
;
//# sourceMappingURL=890.render-page.js.map