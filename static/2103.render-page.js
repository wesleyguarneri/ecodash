"use strict";
exports.id = 2103;
exports.ids = [2103];
exports.modules = {

/***/ 43502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ o)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Queue.js
var Queue = __webpack_require__(58713);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/BufferObject.js
var BufferObject = __webpack_require__(78951);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var FramebufferObject = __webpack_require__(18567);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(6174);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(91907);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/builtins.js
var builtins = __webpack_require__(88338);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(43487);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var VertexArrayObject = __webpack_require__(29620);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js
var definitions = __webpack_require__(14266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js
var DisplayId = __webpack_require__(88013);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js + 1 modules
var Utils = __webpack_require__(15875);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js
var debug = __webpack_require__(37727);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const U=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),D=(0,debug/* createDebugLogger */.g)(debug/* DEBUG_ATTR_UPDATES */.J,U);class j{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,h=(0,Utils/* getPixelArrayCtor */.UK)(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new h((0,maybe/* unwrap */.Wg)(s))),this._resetRange()}destroy(){(0,maybe/* andThen */.Po)(this._texture,(t=>t.dispose()));for(const t in this._fbos)(0,maybe/* andThen */.Po)(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e,i){const s=(0,DisplayId/* getDisplayIdTexel */.jL)(t),r=(0,maybe/* unwrap */.Wg)(this.data),a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if((0,maybe/* isNone */.Wi)(this.data))return null;const i=(0,DisplayId/* getDisplayIdTexel */.jL)(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return (0,maybe/* unwrapOr */.Pt)(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if((0,maybe/* isNone */.Wi)(this._fbos[e])){const i={colorTarget:0,depthStencilTarget:0},s=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new FramebufferObject/* default */.Z(t,i,s)}return this._fbos[e]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!(0,has/* default */.Z)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(e,i){if(!this.locked){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=(0,maybe/* unwrap */.Wg)(this.data).buffer,a=this.getTexture(e),h=4,n=(i-i%this.size)/this.size,d=(s-s%this.size)/this.size,u=n,l=this.size,p=d,c=n*this.size*h,x=(l+p*this.size)*h-c,g=(0,Utils/* getPixelArrayCtor */.UK)(this.pixelType),_=new g(r,c*g.BYTES_PER_ELEMENT,x),f=this.size,b=p-u+1;if(b>this.size)return void U.error(new Error/* default */.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,u,f,b,_)}catch(s){}i()}}update(t){const{data:e,start:i,end:s}=t;if((0,maybe/* isSome */.pC)(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=(0,Utils/* getPixelArrayCtor */.UK)(this.pixelType);this.destroy(),this.data=new s((0,maybe/* unwrap */.Wg)(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new Texture/* default */.Z(t,this._textureDesc,(0,maybe/* unwrapOr */.Pt)(this.data,void 0));if((0,maybe/* isSome */.pC)(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,h=this.getFBO(t),o=(0,Utils/* getPixelBytes */.Yw)(r),n=new((0,Utils/* getPixelArrayCtor */.UK)(r))(new ArrayBuffer(i*s*o*this.texelSize)),d=t.getBoundFramebufferObject(),{x:u,y:l,width:p,height:c}=t.getViewport();t.bindFramebuffer(h),h.readPixels(0,0,i,s,a,r,n),e.updateData(0,0,0,2*i,s/2,n),t.setViewport(u,l,p,c),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class S{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:i,size:h}=t;if(this.shared=i,this.size=h,D("Initializing AttributeStoreView",t),(0,maybe/* isNone */.Wi)(this._data))this._data=(0,maybe/* mapMany */.Fd)(e,(t=>new j(t,h,i)));else for(let r=0;r<this._data.length;r++){const t=this._data[r],o=e[r];(0,maybe/* isSome */.pC)(o)&&((0,maybe/* isNone */.Wi)(t)?this._data[r]=new j(o,h,i):t.resize(o,h))}this._initialized=!0}destroy(){(0,maybe/* andThen */.Po)(this._data,(t=>(0,maybe/* mapMany */.Fd)(t,(t=>t.destroy())))),(0,maybe/* andThen */.Po)(this._defaultTexture,(t=>t.dispose()))}isEmpty(){const t=this._data;return (0,maybe/* isNone */.Wi)(t)}isUpdating(){const t=(0,maybe/* isSome */.pC)(this._pendingAttributeUpdate),i=t;return (0,has/* default */.Z)("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${i}\n  -> hasPendingUpdate ${t}`),i}getBlock(t){if((0,maybe/* isNone */.Wi)(this._data))return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,definitions/* ATTRIBUTE_DATA_VV */.aK,0,0)}getData(t,e,i,r){if(!this._data)return 0;const h=(0,maybe/* unwrap */.Wg)(this._data)[e];if((0,maybe/* isNone */.Wi)(h))return 0;const n=h.getData(t,i);return (0,maybe/* isSome */.pC)(n)?n:r}setData(t,e,i,s){const r=(0,maybe/* unwrap */.Wg)(this._data)[e];(0,maybe/* unwrap */.Wg)(r).setData(t,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void U.error(new Error/* default */.Z("mapview-webgl","Tried to update attribute data with a pending update"));const i=(0,promiseUtils/* createResolver */.hh)();return D("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:i},i.promise}update(){if(this._initialized&&(0,maybe/* isSome */.pC)(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,i=(0,maybe/* unwrap */.Wg)(this._data);for(let s=0;s<t.blocks.length;s++){const e=t.blocks[s],r=i[s];(0,maybe/* andThen */.Po)(r,(t=>(0,maybe/* andThen */.Po)(e,(e=>{D(`Updating block ${s}`,e),t.update(e)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){this.update();const i=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(i,definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_0 */.iJ),void(e&&(t.bindTexture(i,definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_1 */.nM),t.bindTexture(i,definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_2 */.Ij),t.bindTexture(i,definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_3 */.f2)));const s=(0,maybe/* unwrap */.Wg)(this._data);this._locked&&!this._forceNextUpload||((0,maybe/* forEachSome */.JR)(s,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture((0,maybe/* mapOr */.R2)(s[0],i,(e=>e.getTexture(t))),definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_0 */.iJ),e&&(t.bindTexture((0,maybe/* mapOr */.R2)(s[1],i,(e=>e.getTexture(t))),definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_1 */.nM),t.bindTexture((0,maybe/* mapOr */.R2)(s[2],i,(e=>e.getTexture(t))),definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_2 */.Ij),t.bindTexture((0,maybe/* mapOr */.R2)(s[3],i,(e=>e.getTexture(t))),definitions/* TEXTURE_BINDING_ATTRIBUTE_DATA_3 */.f2))}_getDefaultTexture(t){if((0,maybe/* isNone */.Wi)(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new Texture/* default */.Z(t,e,new Uint8Array(4))}return this._defaultTexture}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js
var TileContainer = __webpack_require__(70179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(95550);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(17321);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/lengthUtils.js
var lengthUtils = __webpack_require__(6923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/capabilities.js
var capabilities = __webpack_require__(35119);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLRendererInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}function p(e,t,i=0){if((0,maybe/* isNone */.Wi)(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);const{r:s,g:o,b:l,a:r}=t;e[i+0]=s*r/255,e[i+1]=o*r/255,e[i+2]=l*r/255,e[i+3]=r}class h{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(e){const s=this._vvSizeFieldStops;switch(s.type){case"static":return s;case"level-dependent":return (0,maybe/* unwrapOr */.Pt)(s.levels[e],(()=>{let t=1/0,a=0;for(const i in s.levels){const s=parseFloat(i),o=Math.abs(e-s);o<t&&(t=o,a=s)}if(t===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const o=2**((e-a)/2),l=(0,maybe/* unwrap */.Wg)(s.levels[a]),r=new Float32Array(l.values);return r[2]*=o,r[3]*=o,{sizes:(0,maybe/* unwrap */.Wg)(l.sizes),values:r}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,maybe/* isSome */.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){if(this._updateEffects(i),this._vvInfo=t,"dot-density"===e.type)this._updateDotDensityInfo(e)}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:(0,capabilities/* default */.Z)().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){(0,maybe/* isSome */.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,a;if((0,Utils/* isDefined */.$K)(e.minSize)&&(0,Utils/* isDefined */.$K)(e.maxSize))if((0,Utils/* isNumber */.hj)(e.minSize)&&(0,Utils/* isNumber */.hj)(e.maxSize))i=(0,screenUtils/* pt2px */.F2)(e.minSize),a=(0,screenUtils/* pt2px */.F2)(e.maxSize);else{const s=t.scale;i=(0,screenUtils/* pt2px */.F2)(c(s,e.minSize.stops)),a=(0,screenUtils/* pt2px */.F2)(c(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,a])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,screenUtils/* pt2px */.F2)(c(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,unitUtils/* getMetersPerUnitForSR */.c9)(t.spatialReference)/lengthUtils/* meterIn */.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const a=e.color;a&&(i.vvColorEnabled=!0,this.vvColorValues.set(a.values),this.vvColors.set(a.colors));const n=e.opacity;n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const u=e.rotation;u&&(i.vvRotationEnabled=!0,i.vvRotationType=u.type)}_updateDotDensityInfo(t){const i=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let s=0;s<definitions/* DOT_DENSITY_MAX_FIELDS */.$0;s++){const t=s>=i.length?new Color/* default */.Z([0,0,0,0]):i[s].color;p(this.ddColors,t,4*s)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;p(this.ddBackgroundColor,t.backgroundColor)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/FeatureContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends TileContainer/* default */.Z{constructor(e){super(e),this._rendererInfo=new h,this._materialItemsRequestQueue=new Queue/* default */.Z,this.attributeView=new S((()=>this.onAttributeStoreUpdate()))}destroy(){this.removeAllChildren(),this.children.forEach((e=>e.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()}async getMaterialItems(t,r){if(!t||0===t.length)return null;const s=(0,promiseUtils/* createResolver */.hh)();return this._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:r,resolver:s}){const{painter:i,pixelRatio:o}=e,n=t.map((e=>i.textureManager.rasterizeItem(e.symbol,o,e.glyphIds,r)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const r=e.map(((e,r)=>({id:t[r].id,mosaicItem:e})));s.resolve(r)}),s.reject)}}


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

/***/ 780:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40278);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1662);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19710);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55709);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55542);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14266);
/* harmony import */ var _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27954);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c{acquire(s){return{refCount:1,version:-1,labelMat2d:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__.c)(),tileMat3:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__.c)(),dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}release(s){}}class f extends _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_6__/* .TiledDisplayObject */ .I{constructor(s,t,r){super(s,t,r,_definitions_js__WEBPACK_IMPORTED_MODULE_5__/* .TILE_SIZE */ .I_,_definitions_js__WEBPACK_IMPORTED_MODULE_5__/* .TILE_SIZE */ .I_)}destroy(){super.destroy(),this._transforms&&f.TransformCache.release(this.key.hash)}setTransform(i,h){const m=h/(i.resolution*i.pixelRatio),c=this.transforms.tileMat3,[f,l]=i.toScreenNoRotation([0,0],[this.x,this.y]),u=this.width/this.rangeX*m,d=this.height/this.rangeY*m;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.s)(c,u,0,0,0,d,0,f,l,1),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.transforms.dvs,i.displayViewMat3,c);const p=this.transforms.labelMat2d,j=i.getScreenTransform(p,h),y=(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__.c)();(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__.t)(y,[this.x,this.y],j),(0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_0__.i)(p),(0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_0__.t)(p,p,y),(0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_0__.m)(p,i.viewMat2d,p)}_createTransforms(){return f.TransformCache.acquire(this.key.hash)}}f.TransformCache=new c;


/***/ }),

/***/ 18018:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61681);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=2147483647;class i{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/_.BYTES_PER_RECORD-e){const r=new _(new Int32Array(t,e*_.BYTES_PER_RECORD,s*_.ELEMENTS_PER_RECORD));return new i(r)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor();for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var t;const e=new i(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let s=e._head,r=e._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}delete(e){let s=this._head,r=null;for(;s;){if(s.delete(e))return s.isEmpty()&&((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(r)&&(r._link=s._link),s===this._head&&(this._head=s._link),s===this._cursor&&(this._cursor=s._link)),!0;r=s,s=s._link}return!1}}i.ELEMENTS_PER_RECORD=_definitions_js__WEBPACK_IMPORTED_MODULE_0__/* .DISPLAY_RECORD_INT_PER_ELEMENT */ .XJ,i.BYTES_PER_RECORD=i.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class _{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new _(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=r,++this._deletedCount;this.next()&&this.id===t;)this.id=r,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isNone */ .Wi)(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1;const s=this._index;return this._index=this._offsets.instance.get(t),this.id!==r||(this._index=s,!1)}get id(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*_.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*_.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/_.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===r;);return this._index<this.size()}peekId(){const t=(this._index+1)*_.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new _(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}_.ELEMENTS_PER_RECORD=_definitions_js__WEBPACK_IMPORTED_MODULE_0__/* .DISPLAY_RECORD_INT_PER_ELEMENT */ .XJ,_.BYTES_PER_RECORD=_.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;


/***/ })

};
;
//# sourceMappingURL=2103.render-page.js.map