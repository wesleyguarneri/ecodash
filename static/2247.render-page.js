"use strict";
exports.id = 2247;
exports.ids = [2247];
exports.modules = {

/***/ 92247:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61681);
/* harmony import */ var _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44924);
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34780);
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11931);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31329);
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18486);
/* harmony import */ var _rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7928);
/* harmony import */ var _rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78586);
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32498);
/* harmony import */ var _views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88243);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91772);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{convertVectorFieldData(e){const o=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON(e.pixelBlock),s=(0,_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertVectorFieldData */ .KC)(o,e.type);return Promise.resolve((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .isSome */ .pC)(s)&&s.toJSON())}async decode(r){const e=await (0,_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_2__/* .decode */ .Jx)(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON(e.pixelBlock),e.extent=e.extent?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"].fromJSON */ .Z.fromJSON(e.extent):null;const o=this.symbolizer.symbolize(e);return Promise.resolve((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .isSome */ .pC)(o)&&o.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=_renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].fromJSON */ .Z.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms)}stretch(e){const o=this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .isSome */ .pC)(o)&&o.toJSON())}estimateStatisticsHistograms(r){const e=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .estimateStatisticsHistograms */ .Hv)(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .split */ .Vl)(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON())})),Promise.resolve(e)}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(r):null)),o=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .mosaic */ .us)(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo});if(!r.coefs)return o&&o.toJSON();const s=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .approximateTransform */ .Uk)(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}async createStreamlinesMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),width:r.flowData.width,height:r.flowData.height},{vertexData:o,indexData:s}=await (0,_views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createStreamlinesMesh */ .z_)(r.rendererSettings,t,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:s.buffer},transferList:[o.buffer,s.buffer]}}async getProjectionOffsetGrid(r){const t=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"].fromJSON */ .Z.fromJSON(r.projectedExtent),o=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"].fromJSON */ .Z.fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationStemps&&(s=new _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({steps:r.datumTransformationStemps})),(0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .requirePE */ .Mk)(t.spatialReference,o.spatialReference,s)&&await (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .load */ .zD)();const i=r.rasterTransform?(0,_rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .readTransform */ .c)(r.rasterTransform):null;return (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .getProjectionOffsetGrid */ .Qp)({...r,projectedExtent:t,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}


/***/ }),

/***/ 12646:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36663);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49004);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONSupport */ .wq{get affectsPixelSize(){return!1}forwardTransform(r){return r}inverseTransform(r){return r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],t.prototype,"affectsPixelSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],t.prototype,"spatialReference",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],t);const a=t;


/***/ }),

/***/ 2066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36663);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79438);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12646);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(r){return"point"===(r=r.clone()).type?(r.x>180+this.tolerance&&(r.x-=360),r):(r.xmin>=180-this.tolerance?(r.xmax-=360,r.xmin-=360):r.xmax>180+this.tolerance&&(r.xmin=-180,r.xmax=180),r)}inverseTransform(r){return"point"===(r=r.clone()).type?(r.x<-this.tolerance&&(r.x+=360),r):(r.xmin<-this.tolerance&&(r.xmin+=360,r.xmax+=360),r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__/* .enumeration */ .J)({GCSShiftXform:"gcs-shift"})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)()],a.prototype,"tolerance",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],a);const c=a;


/***/ }),

/***/ 35952:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36663);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79438);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34248);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39835);
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12646);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53446);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91772);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(e,r,o){const{x:t,y:s}=r;if(o<2){return{x:e[0]+t*e[2]+s*e[4],y:e[1]+t*e[3]+s*e[5]}}if(2===o){const r=t*t,o=s*s,n=t*s;return{x:e[0]+t*e[2]+s*e[4]+r*e[6]+n*e[8]+o*e[10],y:e[1]+t*e[3]+s*e[5]+r*e[7]+n*e[9]+o*e[11]}}const n=t*t,i=s*s,f=t*s,l=n*t,p=n*s,a=t*i,c=s*i;return{x:e[0]+t*e[2]+s*e[4]+n*e[6]+f*e[8]+i*e[10]+l*e[12]+p*e[14]+a*e[16]+c*e[18],y:e[1]+t*e[3]+s*e[5]+n*e[7]+f*e[9]+i*e[11]+l*e[13]+p*e[15]+a*e[17]+c*e[19]}}function a(e,r,o){const{xmin:t,ymin:s,xmax:n,ymax:i,spatialReference:f}=r;let a=[];if(o<2)a.push({x:t,y:i}),a.push({x:n,y:i}),a.push({x:t,y:s}),a.push({x:n,y:s});else{let e=10;for(let r=0;r<e;r++)a.push({x:t,y:s+(i-s)*r/(e-1)}),a.push({x:n,y:s+(i-s)*r/(e-1)});e=8;for(let r=1;r<=e;r++)a.push({x:t+(n-t)*r/e,y:s}),a.push({x:t+(n-t)*r/e,y:i})}a=a.map((r=>p(e,r,o)));const c=a.map((e=>e.x)),u=a.map((e=>e.y));return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,u),ymax:Math.max.apply(null,u),spatialReference:f})}function c(e){const[r,o,t,s,n,i]=e,f=t*i-n*s,l=n*s-t*i;return[(n*o-r*i)/f,(t*o-r*s)/l,i/f,s/l,-n/f,-t/l]}let u=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,r){const{coeffX:o,coeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeForwardCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.coeffX=t,r.coeffY=s}get inverseCoefficients(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=c(r)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,r){const{inverseCoeffX:o,inverseCoeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeInverseCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.inverseCoeffX=t,r.inverseCoeffY=s}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const r=p(this.forwardCoefficients,e,this.polynomialOrder);return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const r=p(this.inverseCoefficients,e,this.polynomialOrder);return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.inverseCoefficients,e,this.polynomialOrder)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],u.prototype,"polynomialOrder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],u.prototype,"forwardCoefficients",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__/* .reader */ .r)("forwardCoefficients",["coeffX","coeffY"])],u.prototype,"readForwardCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .c)("forwardCoefficients")],u.prototype,"writeForwardCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],u.prototype,"inverseCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__/* .reader */ .r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],u.prototype,"readInverseCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .c)("inverseCoefficients")],u.prototype,"writeInverseCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],u.prototype,"affectsPixelSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__/* .enumeration */ .J)({PolynomialXform:"polynomial"})],u.prototype,"type",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.support.rasterTransforms.PolynomialTransform")],u);const m=u;


/***/ }),

/***/ 78586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ utils_e),
  "c": () => (/* binding */ f)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterTransforms/GCSShiftTransform.js
var GCSShiftTransform = __webpack_require__(2066);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterTransforms/BaseRasterTransform.js
var BaseRasterTransform = __webpack_require__(12646);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends BaseRasterTransform/* default */.Z{constructor(){super(...arguments),this.type="identity"}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({IdentityXform:"identity"})],e.prototype,"type",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.rasterTransforms.IdentityTransform")],e);const p=e;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js
var PolynomialTransform = __webpack_require__(35952);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={GCSShiftXform:GCSShiftTransform/* default */.Z,IdentityXform:p,PolynomialXform:PolynomialTransform/* default */.Z},i=Object.keys(t);function utils_e(n){const o=null==n?void 0:n.type;return!n||i.includes(o)}function f(n){if(!(null==n?void 0:n.type))return null;const o=t[null==n?void 0:n.type];if(o){const r=new o;return r.read(n),r}return null}


/***/ })

};
;
//# sourceMappingURL=2247.render-page.js.map