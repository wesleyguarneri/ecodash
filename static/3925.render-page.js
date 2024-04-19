"use strict";
exports.id = 3925;
exports.ids = [3925];
exports.modules = {

/***/ 45389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OE": () => (/* binding */ h),
  "Gc": () => (/* binding */ d),
  "Qg": () => (/* binding */ m),
  "Rq": () => (/* binding */ i),
  "gX": () => (/* binding */ x),
  "z2": () => (/* binding */ s),
  "ET": () => (/* binding */ u),
  "Vx": () => (/* binding */ g)
});

// UNUSED EXPORTS: deleteRaster

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e)}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r=null){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this.trim(),this.updateTimer()}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r)}updateMaxSize(t){this._size=t,this.trim()}empty(){this._cachedBlocks.clear(),this.clearTimer()}getCurrentSize(){return this._cachedBlocks.size}updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this.clearTimer()}),this._interval)}trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0])}clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js
var rasterProjectionHelper = __webpack_require__(18486);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules
var Point = __webpack_require__(53446);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new Map,a=new t;function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function s(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(c.has(e)){const t=c.get(e);return t.push(n),t.length-1}return c.set(e,[n]),0}function u(e,t){if(c.has(e)){const n=c.get(e);n[t]=null,n.some((e=>null!=e))||c.delete(e)}}function f(e){c.delete(e)}function h(e,t,n){if(!c.has(e))return null==t?a.decreaseRefCount(e,n):0;const o=c.get(e);if(null==o[t])return a.decreaseRefCount(e,n);const r=o[t].cache;if(r.has(n)){const e=r.get(n);if(e.refCount--,0===e.refCount){r.delete(n);for(let e=0;e<o.length;e++)o[e]&&o[e].cache.has(n)&&o[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function m(e,t,n){if(!c.has(e))return null==t?a.getBlock(e,n):null;const o=c.get(e);if(null==o[t]){for(let e=0;e<o.length;e++)if(o[e]&&o[e].cache.has(n)){const t=o[e].cache.get(n);return t.refCount++,t.block}return a.getBlock(e,n)}const r=o[t].cache;if(r.has(n)){const e=r.get(n);return e.refCount++,e.block}for(let l=0;l<o.length;l++)if(l!==t&&o[l]&&o[l]&&o[l].cache.has(n)){const e=o[l].cache.get(n);return e.refCount++,r.set(n,e),e.block}return null}function x(e,t,n,o,r=null){if(!c.has(e))return void(null==t&&a.putBlock(e,n,o,r));const l=c.get(e);if(null==l[t])return void a.putBlock(e,n,o,r);const i={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:r};o.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),l[t].cache.set(n,i)}function d(e,t,n){if(!c.has(e))return void(null==t&&a.deleteBlock(e,n));const o=c.get(e);null!=o[t]?o[t].cache.delete(n):a.deleteBlock(e,n)}function y(e,t){if(!c.has(e))return null;const n=c.get(e);return null==n[t]?null:n[t]}function g(t,c,a,i,s,u,f=null){const h=y(t,c),m=h.extent,{cache:x,rasterInfo:d}=h;if(m&&m.xmin===a.xmin&&m.xmax===a.xmax&&m.ymin===a.ymin&&m.ymax===a.ymax)return;const g=a.clone().normalize(),{spatialReference:p,transform:k}=d,M=new Set;for(let y=0;y<g.length;y++){const t=g[y];if(t.xmax-t.xmin<=i||t.ymax-t.ymin<=i)continue;let c=(0,rasterProjectionHelper/* projectExtent */.tB)(t,p,f);(0,maybe/* isSome */.pC)(k)&&(c=k.inverseTransform(c));const a=new Point/* default */.Z({x:i,y:i,spatialReference:t.spatialReference});if(null==s&&!(s=(0,rasterProjectionHelper/* projectResolution */.VO)(a,p,t,f)))return;const{pyramidLevel:h,pyramidResolution:m,excessiveReading:x}=(0,rasterProjectionHelper/* snapPyramid */.kr)(s,d,u||"closest");if(x)return;const{storageInfo:R}=d,{origin:C}=R,j={x:Math.max(0,Math.floor((c.xmin-C.x)/m.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/m.y))},v=Math.ceil((c.xmax-c.xmin)/m.x-.1),B=Math.ceil((c.ymax-c.ymin)/m.y-.1),b=h>0?R.pyramidBlockWidth:R.blockWidth,w=h>0?R.pyramidBlockHeight:R.blockHeight,$=1,I=Math.max(0,Math.floor(j.x/b)-$),H=Math.max(0,Math.floor(j.y/w)-$),E=Math.floor((j.x+v-1)/b)+$,P=Math.floor((j.y+B-1)/w)+$;for(let e=H;e<=P;e++)for(let t=I;t<=E;t++)M.add(`${h}/${e}/${t}`)}x.forEach(((e,t)=>{if(!M.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),h.extent={xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax}}


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

/***/ 13925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ y)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(80085);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/viewpointUtils.js
var viewpointUtils = __webpack_require__(69050);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/brushes.js + 14 modules
var brushes = __webpack_require__(14351);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3f32.js
var mat3f32 = __webpack_require__(19710);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/RasterBitmap.js
var RasterBitmap = __webpack_require__(52740);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js
var TiledDisplayObject = __webpack_require__(27954);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/RasterTile.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends TiledDisplayObject/* TiledDisplayObject */.I{constructor(t,e,i,r,a,n=null){super(t,e,i,r,a),this.bitmap=new RasterBitmap/* RasterBitmap */.br(n,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:(0,mat3f32.c)(),tileMat3:(0,mat3f32.c)()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js
var TileContainer = __webpack_require__(70179);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/RasterTileContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends TileContainer/* default */.Z{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const s=this._getTileBounds(e),[r,t]=this._tileInfoView.tileInfo.size;return new i(e,s[0],s[3],r,t)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (tile)",brushes:[brushes/* brushes.raster */.U.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:enums/* WGLDrawPhase.MAP */.jx.MAP});return[...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===enums/* WGLDrawPhase.MAP */.jx.MAP&&super.doRender(e)}_getTileBounds(r){const i=this._tileInfoView.getTileBounds((0,aaBoundingRect/* create */.Ue)(),r);if(this.isCustomTilingScheme&&r.world){const{tileInfo:e}=this._tileInfoView,t=(0,viewpointUtils/* getWorldWidth */.ut)(e.spatialReference);if(t){const{resolution:s}=e.lodAt(r.level),o=t/s%e.size[0],n=o?(e.size[0]-o)*s:0;i[0]-=n*r.world,i[2]-=n*r.world}}return i}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/HandleOwner.js
var HandleOwner = __webpack_require__(53280);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules
var Point = __webpack_require__(53446);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/PixelBlock.js
var PixelBlock = __webpack_require__(34780);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(81590);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js + 1 modules
var RawBlockCache = __webpack_require__(45389);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js
var pixelUtils = __webpack_require__(31329);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js
var rasterProjectionHelper = __webpack_require__(18486);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/PagedTileQueue.js
var PagedTileQueue = __webpack_require__(48899);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileInfoView.js + 2 modules
var TileInfoView = __webpack_require__(64970);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileKey.js
var TileKey = __webpack_require__(87241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileQueue.js
var TileQueue = __webpack_require__(17224);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileStrategy.js + 1 modules
var TileStrategy = __webpack_require__(23656);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/capabilities.js
var capabilities = __webpack_require__(35119);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/imagery/BaseImageryTileSubView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=[0,0],R=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let T=class extends HandleOwner/* HandleOwner */.r{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.container=null,this.layer=null,this.redrawOrRefetch=(0,promiseUtils/* debounce */.Ds)(((e,t)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():e?this.doRefresh():this._redrawImage(t)))}get useWebGLForProcessing(){var e;return null==(e=this._get("useWebGLForProcessing"))||e}set useWebGLForProcessing(e){this._set("useWebGLForProcessing",e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this.container.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new TileStrategy/* default */.Z({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.layerView.requestUpdate()}}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var l;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:Extent/* default.fromJSON */.Z.fromJSON(t);(0,RawBlockCache/* update */.Vx)(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(l=this.previousLOD)?void 0:l.level)!==r.level&&(this.previousLOD=r,null==this._symbolizerParams||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate()})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.layerView.requestUpdate()}get updating(){return this._fetchQueue.length>0||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){(0,capabilities/* default */.Z)().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new TileInfoView/* default */.Z(this.layerView.tileInfo,this.layerView.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new TileQueue/* default */.Z({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this._fetchTile1(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new TileStrategy/* default */.Z({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry()}acquireTile(e){const t=this.container.createTile(e);return this._enqueueTileFetch(t),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.layerView.requestUpdate()})),this.layerView.requestUpdate()}uninstall(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,this.notifyChange("updating"),(0,RawBlockCache/* unregister */.ET)(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this._tileInfoView.tileInfo.size.join(",");if(t&&(0,maybe/* isSome */.pC)(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this._tileInfoView.tileInfo.size;const[i,r]=e,l=new PixelBlock/* default */.Z({width:i,height:r,pixels:[new Uint8Array(i*r)],mask:new Uint8Array(i*r),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=l),l}_fetchTile1(e,t){const i=!(0,maybe/* isNone */.Wi)(t)&&t.signal,s=this.canUseWebGLForProcessing(),a={allowPartialFill:!0,datumTransformation:this.layerView.datumTransformation,interpolation:s?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:s,signal:(0,maybe/* unwrap */.Wg)(i),srcResolution:this._srcResolutions[e.level],timeExtent:this.layerView.timeExtent,tileInfo:this.layerView.tileInfo};return this.fetchTile(e,a)}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.layerView.view.spatialReference,t=new Point/* default */.Z({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=(0,rasterProjectionHelper/* computeProjectedScales */.vF)(this.layer.rasterInfo,e),l=TileInfo/* default.create */.Z.create({spatialReference:e,size:512,scales:i});(0===l.origin.x||l.origin.x>t.x)&&(l.origin=t),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",l),this._srcResolutions=null!=s?s:[]}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return(t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);this.notifyChange("updating");const{bandIds:s}=this.layer;let r=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(i){(0,promiseUtils/* isAbortError */.D_)(i)&&R.error(i)}this._globalUpdateRequested=!1}!this.canUseWebGLForProcessing()&&"rasterVF"!==this.type||this.layerView.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const l=this._tileInfoView.getTileCoords(v,e.key),a=this._tileInfoView.getTileResolution(e.key);await this.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:r,bandIds:s,coords:l,resolution:a}),e.once("attach",(()=>this.layerView.requestUpdate())),this.container.addChild(e)}catch(i){(0,promiseUtils/* isAbortError */.D_)(i)||R.error(i)}this.layerView.requestUpdate()}}async _redrawImage(e){if(0===this.container.children.length)return;await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.container.children.map((async e=>this.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await (0,promiseUtils/* eachAlways */.as)(t),this.container.requestRender()}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:(0,pixelUtils/* extractBands */.qF)(i.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),l=null!=i&&i.multidimensionalInfo?s.getSliceIndex(r):null,a=(0,RawBlockCache/* getRasterId */.Rq)(t,l);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&(0,RawBlockCache/* unregister */.ET)(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=(0,RawBlockCache/* register */.z2)(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),t=this._srcResolutions[e.level];(0,RawBlockCache/* update */.Vx)(a,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,t,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=a}}async doRefresh(){await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset(),this.notifyChange("updating");const e=[];this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await (0,promiseUtils/* eachAlways */.as)(e)}};(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"_globalUpdateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"layerView",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"useWebGLForProcessing",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"useProgressiveUpdate",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"updating",null),T=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],T);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/util.js
var util = __webpack_require__(67437);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryTileView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let ImageryTileView2D_n=class extends T{constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster"}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&(0,util/* canUseMajorityInterpolationOnDataSource */.JV)(this.layer))}fetchTile(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)}async updateTileSource(e,t){const{bandIds:s}=this.layer,i=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:l,symbolizerParams:n,globalSymbolizerParams:a,suspended:c,coords:p,resolution:u}=t,{bitmap:d}=e;if([d.x,d.y]=p,d.resolution=u,l&&(0,maybe/* isSome */.pC)(l)&&(0,maybe/* isSome */.pC)(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};if(d.rawPixelData=e,o)d.source=l.pixelBlock,d.isRendereredSource=!1;else{const r=await this.layer.applyRenderer(e,"stretch"===(null==a?void 0:a.type)?a:null);d.source=r,d.isRendereredSource=!0}d.symbolizerParameters=o?n:null,o?d.transformGrid||(d.transformGrid=l.transformGrid):d.transformGrid=null}else{const e=this.createEmptyTilePixelBlock();d.source=e,d.symbolizerParameters=o?n:null,d.transformGrid=null}d.bandIds=o?s:null,d.width=this._tileInfoView.tileInfo.size[0],d.height=this._tileInfoView.tileInfo.size[1],d.interpolation=i,d.suspended=c,d.invalidateTexture()}async updateTileSymbolizerParameters(e,t){const{local:s,global:i}=t,{bandIds:o}=this.layer,l=this._getLayerInterpolation(),n=this.canUseWebGLForProcessing(),{bitmap:a}=e,{rawPixelData:c}=a;!n&&(0,maybe/* isSome */.pC)(c)?(a.source=await this.layer.applyRenderer(c,"stretch"===(null==i?void 0:i.type)?i:null),a.isRendereredSource=!0):(a.isRendereredSource&&(0,maybe/* isSome */.pC)(c)&&(a.source=c.pixelBlock),a.isRendereredSource=!1),a.symbolizerParameters=n?i||s:null,a.bandIds=n?o:null,a.interpolation=l,a.suspended=!1}install(e){this.container=new n(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,e.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this.container.remove(),super.uninstall()}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{interpolation:r}=this.layer,{renderer:t}=this.layer;return"raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===r||"cubic"===r?"bilinear":"nearest":r}};(0,tslib_es6._)([(0,property/* property */.Cb)()],ImageryTileView2D_n.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],ImageryTileView2D_n.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],ImageryTileView2D_n.prototype,"type",void 0),ImageryTileView2D_n=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.imagery.ImageryTileView2D")],ImageryTileView2D_n);const a=ImageryTileView2D_n;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js
var vectorFieldUtils = __webpack_require__(7928);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(1662);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js
var DisplayObject = __webpack_require__(51118);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js + 1 modules
var Utils = __webpack_require__(15875);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/RasterVFDisplayObject.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c extends DisplayObject/* DisplayObject */.s{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.rawPixelData=null,this.width=null,this.source=e}destroy(){var t,a;(0,maybe/* isSome */.pC)(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){var t,a;!this._vaoInvalidated&&(0,maybe/* isSome */.pC)(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,(0,maybe/* isSome */.pC)(this.source)&&!(0,maybe/* isSome */.pC)(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=(0,vectorFieldUtils/* createVFMesh */.wF)(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:s}}break;case"simple_scalar":{const e=(0,vectorFieldUtils/* createVFMeshScalar */.K)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a}}break;case"wind_speed":{const e=(0,vectorFieldUtils/* createVFMesh */.wF)(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,e),i=(0,vectorFieldUtils/* createVFMeshScalar */.K)(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:r,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:(0,mat3f32.c)()}}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:a,indexData:s}=t,o=BufferObject/* default.createVertex */.Z.createVertex(e,35044,new Float32Array(a)),c=BufferObject/* default.createIndex */.Z.createIndex(e,35044,new Uint32Array(s)),n=(0,Utils/* createProgramDescriptor */.cM)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:5126,normalized:!1},{location:1,name:"a_offset",count:2,type:5126,normalized:!1},{location:2,name:"a_vv",count:2,type:5126,normalized:!1}]});return{vao:new VertexArrayObject/* default */.Z(e,n.attributes,n.bufferLayouts,{geometry:o},c),elementCount:s.length}}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/RasterVFTile.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class RasterVFTile_r extends TiledDisplayObject/* TiledDisplayObject */.I{constructor(t,s,e,i,r,o=null){super(t,s,e,i,r),this.tileData=new c(o),this.tileData.coordScale=[i,r],this.tileData.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null}set stencilRef(t){this.tileData.stencilRef=t}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{dvs:(0,mat3f32.c)(),tileMat3:(0,mat3f32.c)()}}setTransform(e,a){super.setTransform(e,a);const i=a/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[o,l]=this.tileData.offset,h=[this.x+o*a,this.y-l*a],[n,f]=e.toScreenNoRotation([0,0],h),{symbolTileSize:m}=this.tileData.symbolizerParameters,c=Math.round((this.width-this.tileData.offset[0])/m)*m,D=Math.round((this.height-this.tileData.offset[1])/m)*m,d=c/this.rangeX*i,u=D/this.rangeY*i;(0,mat3.s)(r,d,0,0,0,u,0,n,f,1),(0,mat3.m)(this.transforms.dvs,e.displayViewMat3,r),this.tileData.transforms.dvs=this.transforms.dvs}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/raster/BrushVectorField.js
var BrushVectorField = __webpack_require__(21186);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/RasterVFTileContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends TileContainer/* default */.Z{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(r){const t=this._tileInfoView.getTileBounds((0,aaBoundingRect/* create */.Ue)(),r),[i,o]=this._tileInfoView.tileInfo.size;return new RasterVFTile_r(r,t[0],t[3],i,o)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (vf tile)",brushes:[BrushVectorField/* default */.Z],target:()=>this.children.map((e=>e.tileData)),drawPhase:enums/* WGLDrawPhase.MAP */.jx.MAP});return[...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===enums/* WGLDrawPhase.MAP */.jx.MAP&&this.symbolTypes.forEach((s=>{e.renderPass=s,super.doRender(e)}))}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/imagery/VectorFieldTileView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let VectorFieldTileView2D_a=class extends T{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF"}canUseWebGLForProcessing(){return!1}async fetchTile(e,t){const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===this.layer.rasterInfo.dataType&&null!=i&&i.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,i){const r=i.symbolizerParams,{tileData:s}=e;s.key=e.key,s.width=this._tileInfoView.tileInfo.size[0],s.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:o}=r,{source:l}=i;if(s.offset=this._getTileSymbolOffset(s.key,o),(0,maybe/* isSome */.pC)(l)&&(0,maybe/* isSome */.pC)(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};s.rawPixelData=e,s.source=this._sampleVectorFieldData(l.pixelBlock,r,s.offset),s.symbolizerParameters=r}else{const e=[Math.round((this._tileInfoView.tileInfo[0]-s.offset[0])/o),Math.round((this._tileInfoView.tileInfo[1]-s.offset[1])/o)],t=this.createEmptyTilePixelBlock(e);s.source=t,s.symbolizerParameters=r}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,i){var r;const s=i.local,{symbolTileSize:o}=s,{tileData:l}=e;l.offset=this._getTileSymbolOffset(l.key,o);const a=l.symbolizerParameters.symbolTileSize;return l.symbolizerParameters=s,(0,maybe/* isSome */.pC)(null==(r=l.rawPixelData)?void 0:r.pixelBlock)&&a!==o&&(l.source=this._sampleVectorFieldData(l.rawPixelData.pixelBlock,l.symbolizerParameters,l.offset)),Promise.resolve(null)}install(e){this.container=new o(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=this.layer.watch("renderer",(e=>this._updateSymbolType(e))),e.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this._handle.remove(),this._handle=null,this.container.remove(),super.uninstall()}_getTileSymbolOffset(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,r=e.row*this._tileInfoView.tileInfo.size[1]%t;return[i>t/2?t-i:-i,r>t/2?t-r:-r]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:r}=t;return (0,vectorFieldUtils/* sampleVectorField */.nb)(e,"vector-uv",r,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])}};(0,tslib_es6._)([(0,property/* property */.Cb)()],VectorFieldTileView2D_a.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],VectorFieldTileView2D_a.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],VectorFieldTileView2D_a.prototype,"type",void 0),VectorFieldTileView2D_a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.imagery.VectorFieldTileView2D")],VectorFieldTileView2D_a);const VectorFieldTileView2D_n=VectorFieldTileView2D_a;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/support/popupUtils.js
var popupUtils = __webpack_require__(59439);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)return Promise.reject(new Error/* default */.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:a}=s,n=(0,popupUtils/* getFetchPopupTemplate */.V)(s,o);if(!a||!(0,maybe/* isSome */.pC)(n))throw new Error/* default */.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const l=[],{value:u,magdirValue:m}=await s.identify(e,{timeExtent:this.timeExtent});let f="";if(u&&u.length){var c,h;f="imagery-tile"===s.type&&s.hasStandardTime()&&null!=u[0]?u.map((e=>s.getStandardTimeValue(e))).join(", "):u.join(", ");const e={ObjectId:0},r="Raster.ServicePixelValue";e[r]=this._formatAttributeValue(f,r);const i=null==(c=s.rasterInfo)||null==(h=c.attributeTable)?void 0:h.features;if(i&&i.length>0){const t=i.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===f}));if(t.length>0){const r=t[0];if(r)for(const t in r.attributes)if(r.attributes.hasOwnProperty(t)){const i=this._rasterFieldPrefix+t;e[i]=this._formatAttributeValue(r.attributes[t],i)}}}const o=s.rasterInfo.dataType;"vector-magdir"!==o&&"vector-uv"!==o||(e["Raster.Magnitude"]=null==m?void 0:m[0],e["Raster.Direction"]=null==m?void 0:m[1]);const a=new Graphic/* default */.Z(this.fullExtent.clone(),null,e);a.layer=s,a.sourceLayer=a.layer,l.push(a)}return l}updateFullExtent(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference))return Promise.reject(new Error/* default */.Z("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));if((0,maybe/* isNone */.Wi)(this.layer.fullExtent))return Promise.reject(new Error/* default */.Z("layerview:extent-missing","The layer doesn't provide a full extent.",{layer:this.layer}));const t=(0,rasterProjectionHelper/* getDefaultDatumTransformationForDataset */._D)(this.layer.fullExtent,this.view.spatialReference,!1),i=(0,rasterProjectionHelper/* projectExtent */.tB)(this.layer.fullExtent,this.view.spatialReference,t);return null==i?Promise.reject(new Error/* default */.Z("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})):(this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=(0,rasterProjectionHelper/* getDefaultDatumTransformationForDataset */._D)(this.layer.fullExtent,this.view.spatialReference,!0)),Promise.resolve())}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* combinedViewLayerTimeExtentProperty */.qG)],f.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],f.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],f.prototype,"hasTilingEffects",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.ImageryTileLayerView")],f),f};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/LayerView.js
var LayerView = __webpack_require__(26216);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var RefreshableLayerView = __webpack_require__(55068);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/ImageryTileLayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const ImageryTileLayerView2D_v=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let b=class extends(m((0,RefreshableLayerView/* RefreshableLayerView */.y)((0,LayerView2D/* LayerView2DMixin */.y)(LayerView/* default */.Z)))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(e){this._useWebGLForProcessing=e,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=e)}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(e){this._useProgressiveUpdate=e,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=e)}update(e){this.subview.update(e),this.notifyChange("updating")}isUpdating(){return!this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([(0,watchUtils/* watch */.YP)(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],((e,s,r)=>{const t="multidimensionalDefinition"===r,o="interpolation"===r&&("majority"===e||"majority"===s)&&(0,util/* canUseMajorityInterpolationOnDataSource */.JV)(this.layer),a="renderer"===r&&s.type!==e.type;a&&this._updateSubview();const n=t||o||a;this.subview.redrawOrRefetch(n).catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||ImageryTileLayerView2D_v.error(e)})),this.notifyChange("updating")})),(0,watchUtils/* init */.S1)(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0),(0,watchUtils/* init */.S1)(this,["layer.effect"],(e=>{this.subview&&(this.subview.container.effect=e)}),!0),(0,watchUtils/* init */.S1)(this,"timeExtent",(()=>{this.subview.redrawOrRefetch(!0).catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||ImageryTileLayerView2D_v.error(e)}))}))],"attach")}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this.subview.uninstall()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.subview.moveEnd()}async hitTest(e,r){return[new Graphic/* default */.Z({attributes:{},geometry:e.clone()})]}doRefresh(){return this.subview.doRefresh()}_updateSubview(){const e="vector-field"===this.layer.renderer.type?"rasterVF":"animated-flow"===this.layer.renderer.type?"rasterAnimatedFlow":"raster";if(this.subview){if(this.subview.type===e)return;this.subview.uninstall()}const{layer:s}=this;let r;r="rasterVF"===e?new VectorFieldTileView2D_n({layer:s,layerView:this}):"rasterAnimatedFlow"===e?new AnimatedFlowView2D/* default */.Z({layer:s,layerView:this}):new a({layer:s,layerView:this}),"useWebGLForProcessing"in r&&(r.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in r&&(r.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in r&&(r.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),r.attach(),r.install(this.container),r.container.blendMode=s.blendMode,r.container.effect=s.effect,this.subview=r,this.requestUpdate()}};(0,tslib_es6._)([(0,property/* property */.Cb)()],b.prototype,"subview",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],b.prototype,"useWebGLForProcessing",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],b.prototype,"useProgressiveUpdate",null),b=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.ImageryTileLayerView2D")],b);const y=b;


/***/ }),

/***/ 67437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JV": () => (/* binding */ r),
/* harmony export */   "oq": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export analyzeRings */
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25709);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],r=[];let l=0,i=0;for(const s of t){const t=i;let u=s[0][0],c=s[0][1];n[i++]=u,n[i++]=c;let p=0;for(let o=1;o<s.length;++o){const t=u,e=c;u=s[o][0],c=s[o][1],p+=c*t-u*e,n[i++]=u,n[i++]=c}o(p/2),p>0?(t-l>0&&(e(l,t,n,r),l=t),r.length=0):p<0&&t-l>0?r.push(.5*(t-l)):i=t}i-l>0&&e(l,i,n,r)}function r(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:r}=t.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===r||"s8"===r)}


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
//# sourceMappingURL=3925.render-page.js.map