"use strict";
exports.id = 5859;
exports.ids = [5859];
exports.modules = {

/***/ 12348:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const e of this._buffer)if((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(e)&&s(e))return e;return null}clear(s){let e=this.dequeue();for(;(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(e);)s&&s(e),e=this.dequeue()}}


/***/ }),

/***/ 20592:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hN": () => (/* binding */ I),
  "P0": () => (/* binding */ P),
  "cW": () => (/* binding */ v)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/contains.js
var contains = __webpack_require__(27127);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/intersectsBase.js
var intersectsBase = __webpack_require__(68668);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/intersects.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function intersects_n(n){return"mesh"===n?intersectsBase/* extentIntersectsExtent */.h_:(0,intersectsBase/* getFeatureExtentIntersector */.IY)(n)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(53736);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(35925);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/contains.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function contains_r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f)}return f}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(12065);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(15540);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var projectionSupport = __webpack_require__(66069);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/utils.js
var utils = __webpack_require__(34398);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return!0===S.spatialRelationship[e]}function g(e){return!0===S.queryGeometry[(0,jsonUtils/* getJsonType */.Ji)(e)]}function j(e){return!0===S.layerGeometry[e]}function h(){return Promise.all(/* import() */[__webpack_require__.e(9067), __webpack_require__.e(8923)]).then(__webpack_require__.bind(__webpack_require__, 8923))}function v(e,n,l,y,c){if((0,jsonUtils/* isPolygon */.oU)(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,featureConversionUtils/* convertFromPolygon */.Uy)(new OptimizedGeometry/* default */.Z,n,!1,!1);return Promise.resolve((r=>t(e,!1,!1,r)))}if((0,jsonUtils/* isPolygon */.oU)(n)&&"esriGeometryMultipoint"===l){const r=(0,featureConversionUtils/* convertFromPolygon */.Uy)(new OptimizedGeometry/* default */.Z,n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>contains_r(r,!1,!1,e,y,c)))}if((0,jsonUtils/* isExtent */.YX)(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,contains/* extentContainsPoint */.aV)(n,(0,utils/* getGeometry */.Op)(l,y,c,e))));if((0,jsonUtils/* isExtent */.YX)(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,contains/* extentContainsMultipoint */.lQ)(n,(0,utils/* getGeometry */.Op)(l,y,c,e))));if((0,jsonUtils/* isExtent */.YX)(n)&&"esriSpatialRelIntersects"===e){const e=intersects_n(l);return Promise.resolve((r=>e(n,(0,utils/* getGeometry */.Op)(l,y,c,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t((0,utils/* getGeometry */.Op)(l,y,c,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new Error/* default */.Z(c,"Unsupported query spatial relationship",{query:r});if((0,spatialReferenceUtils/* isValid */.JY)(o.spatialReference)&&(0,spatialReferenceUtils/* isValid */.JY)(i)){if(!g(o))throw new Error/* default */.Z(c,"Unsupported query geometry type",{query:r});if(!j(t))throw new Error/* default */.Z(c,"Unsupported layer geometry type",{query:r});if(r.outSR)return (0,projectionSupport/* checkProjectionSupport */._W)(r.geometry&&r.geometry.spatialReference,r.outSR)}}}function I(e){if((0,jsonUtils/* isExtent */.YX)(e))return!0;if((0,jsonUtils/* isPolygon */.oU)(e)){for(const r of e.rings){if(5!==r.length)return!1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1}return!0}return!1}


/***/ }),

/***/ 53316:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ t),
/* harmony export */   "y": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o))}));else{const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u))}))}return{start:r,end:i}}function n(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e(r,i,o,s,a):u(r,i||o,s,a)}function e(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return(null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return()=>!1}


/***/ }),

/***/ 34398:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vF": () => (/* binding */ U),
/* harmony export */   "S2": () => (/* binding */ z),
/* harmony export */   "Op": () => (/* binding */ J),
/* harmony export */   "Up": () => (/* binding */ P),
/* harmony export */   "j6": () => (/* binding */ Z),
/* harmony export */   "EG": () => (/* binding */ O)
/* harmony export */ });
/* unused harmony exports getCentroid, normalizeFilter */
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25709);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61681);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17321);
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50842);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53736);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56247);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35925);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12065);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15540);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66069);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const j=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),U=Object.freeze({}),M=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,F=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,G=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,N={esriGeometryPoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToPoint */ .fQ,esriGeometryPolyline:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToPolyline */ .J6,esriGeometryPolygon:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToPolygon */ .eG,esriGeometryMultipoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToMultipoint */ .Iv};function O(e,r,i,o=e.hasZ,n=e.hasM){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isNone */ .Wi)(r))return null;const s=e.hasZ&&o,l=e.hasM&&n;if(i){const t=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .quantizeOptimizedGeometry */ .Nh)(G,r,e.hasZ,e.hasM,"esriGeometryPoint",i,o,n);return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToPoint */ .fQ)(t,s,l)}return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToPoint */ .fQ)(r,s,l)}function _(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=c(new d,t.geometry,e.hasZ,e.hasM)),O(e,t.centroid,r)):null}function J(e,i,o,n,s,l,a=i,m=o){const c=i&&a,f=o&&m,g=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isSome */ .pC)(n)?"coords"in n?n:n.geometry:null;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isNone */ .Wi)(g))return null;if(s){let t=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .generalizeOptimizedGeometry */ .zj)(F,g,i,o,e,s,a,m);return l&&(t=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .quantizeOptimizedGeometry */ .Nh)(G,t,c,f,e,l)),N[e](t,c,f)}if(l){const t=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .quantizeOptimizedGeometry */ .Nh)(G,g,i,o,e,l,a,m);return N[e](t,c,f)}return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .removeZMValues */ .hY)(M,g,i,o,a,m),N[e](M,c,f)}async function P(e,t,r){const{outFields:i,orderByFields:o,groupByFieldsForStatistics:n,outStatistics:s}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(o)for(let l=0;l<o.length;l++)o[l]=o[l].trim();if(n)for(let l=0;l<n.length;l++)n[l]=n[l].trim();if(s)for(let l=0;l<s.length;l++)s[l].onStatisticField&&(s[l].onStatisticField=s[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),Z(e,t,r)}async function v(e,t,r){return Z(e,t,r)}async function Z(e,r,i){if(!e)return null;let{where:l}=e;if(e.where=l=l&&l.trim(),(!l||/^1 *= *1$/.test(l)||r&&r===l)&&(e.where=null),!e.geometry)return e;let a=await b(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;a=(0,_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getGeometryExtent */ .aO)(a),a.spatialReference=t}e.geometry=a,await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .checkProjectionSupport */ ._W)(a.spatialReference,i);const m=(await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeCentralMeridian */ .aX)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .fromJSON */ .im)(a)))[0];if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isNone */ .Wi)(m))throw U;const c=m.toJSON(),u=await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .project */ .iV)(c,c.spatialReference,i);if(!u)throw U;return u.spatialReference=i,e.geometry=u,e}async function b(e){const{geometry:t,distance:r,units:o}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,s=o?j.fromJSON(o):(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUnitString */ .qE)(n),c=n&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isGeographic */ .sT)(n)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isWebMercator */ .sS)(n))?t:await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .checkProjectionSupport */ ._W)(n,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .WGS84 */ .Zn).then((()=>(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .project */ .iV)(t,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .WGS84 */ .Zn)));return(await x())(c.spatialReference,c,r,s)}async function x(){return(await Promise.all(/* import() */[__webpack_require__.e(9067), __webpack_require__.e(8923)]).then(__webpack_require__.bind(__webpack_require__, 8923))).geodesicBuffer}function z(e){return e&&B in e?JSON.parse(JSON.stringify(e,E)):e}const B="_geVersion",E=(e,t)=>e!==B?t:void 0;


/***/ }),

/***/ 52689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ l),
/* harmony export */   "k": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12348);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31355);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39994);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61681);
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39947);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37116);
/* harmony import */ var _Store2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40709);
/* harmony import */ var _support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54465);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function h(t,e){return t<<16|e}function c(t){return(4294901760&t)>>>16}function I(t){return 65535&t}const u={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class l extends _Store2D_js__WEBPACK_IMPORTED_MODULE_4__/* .Store2D */ .J{constructor(s,a,r){super(s,a),this.featureAdapter=u,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(50),this._index=(0,_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_2__.r)(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this._storage=a,this.mode=r}get storage(){return this._storage}get storeStatistics(){let t=0,e=0,s=0;return this.forEach((a=>{const r=a.readGeometry();r&&(e+=r.isPoint?1:r.lengths.reduce(((t,e)=>t+e),0),s+=r.isPoint?1:r.lengths.length,t+=1)})),{featureCount:t,vertexCount:e,ringCount:s}}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(t,e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__/* .isNone */ .Wi)(e.addOrUpdate))return e;if(e.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const s=e.addOrUpdate.getCursor();for(;s.next();){const e=s.getDisplayId();this.setComputedAttributes(this._storage,s,e,t.scale)}return e}this._featureSetsByInstance.set(e.addOrUpdate.instance,e.addOrUpdate);const a=e.addOrUpdate.getCursor();for(;a.next();)this._insertFeature(a,t.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),e}search(t){this._rebuildIndex();const e=t.id,s=this._indexSearchCache.find((t=>t.tileId===e));if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__/* .isSome */ .pC)(s))return s.readers;const r=new Map,n=this._searchIndex(t.bounds),i=[];for(const a of n){const t=this._storage.getInstanceId(a),e=c(t),s=I(t);r.has(e)||r.set(e,[]);r.get(e).push(s)}return r.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);i.push(_support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_5__/* .FeatureSetReaderIndirect.from */ .t.from(s,t))})),this._indexSearchCache.enqueue({tileId:e,readers:i}),i}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){var a;const t=h(e.instance,e.getIndex()),r=e.getObjectId(),n=null!=(a=this._objectIdToDisplayId.get(r))?a:this._storage.createDisplayId();e.setDisplayId(n),s.setInstanceId(n,t),this._objectIdToDisplayId.set(r,n)}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),a=I(s),r=c(s),n=this._featureSetsByInstance.get(r);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),n.removeAtIndex(a),n.isEmpty&&this._featureSetsByInstance.delete(r),this._spatialIndexInvalid=!0}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a)}))}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=c(s),r=I(s),n=this._getFeatureSet(a);n.setIndex(r),t(n)}))}forEachInBounds(t,e){const s=this._searchIndex(t);for(const a of s){const t=this.lookupFeatureByDisplayId(a,this._storage);e((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__/* .unwrap */ .Wg)(t))}}forEachBounds(t,e,s){this._rebuildIndex();const a=[0,0,0,0];for(const r of t){if(!r.readGeometry())continue;const t=r.getDisplayId();a[0]=this._storage.getXMin(t),a[1]=this._storage.getYMin(t),a[2]=this._storage.getXMax(t),a[3]=this._storage.getYMax(t),e((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .fromRect */ .JR)(s,a))}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s&&s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r))})),this.events.emit("changed")}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s)}))}lookupObjectId(t,e){const a=this.lookupFeatureByDisplayId(t,e);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__/* .isNone */ .Wi)(a)?null:a.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=c(e),a=I(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}_insertFeature(t,e){const s=this._storage,a=t.getObjectId(),r=h(t.instance,t.getIndex());s.getInstanceId(t.getDisplayId());let n=this._objectIdToDisplayId.get(a);n||(n=s.createDisplayId(),this._objectIdToDisplayId.set(a,n),this._spatialIndexInvalid=!0),t.setDisplayId(n),s.setInstanceId(n,r),this.setComputedAttributes(s,t,n,e)}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e)}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(t){const e=c(t),s=I(t),a=this._getFeatureSet(e);if(!a)return null;const r=a.getCursor();return r.setIndex(s),r}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}


/***/ }),

/***/ 40709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ o)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(27281);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(30879);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,a,t){r.referencesGeometry();const n=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n})}catch(o){return Logger/* default.getLogger */.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/Store2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=__webpack_require__.e(/* import() */ 3667).then(__webpack_require__.bind(__webpack_require__, 13667));class o{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:s.getBitset(s.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(a,r){const c=(0,diffUtils/* diff */.Hg)(this._schema,r);if(this._schema=r,!r||(0,maybe/* isNone */.Wi)(c)||!(0,diffUtils/* hasDiff */.uD)(c,"attributes"))return;(0,has/* default */.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",c),this._bitsets.computed.clear(),a.targets[r.name]=!0;const o=r.attributes,n=[],d=[];for(const e in o){const s=o[e];switch(s.type){case"field":break;case"expression":n.push(this._createArcadeComputedField(s));break;case"label-expression":n.push(this._createLabelArcadeComputedField(s));break;case"statistic":d.push(s)}}this._computedFields=await Promise.all(n),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=d}setComputedAttributes(e,s,t,i){const a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(t)){a.set(t);for(const a of this._computedFields){const r=this._evaluateField(s,a,i);switch(a.resultType){case"numeric":e.setComputedNumericAtIndex(t,a.fieldIndex,r);break;case"string":e.setComputedStringAtIndex(t,a.fieldIndex,r)}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex;return{...e,expression:await (0,arcadeOnDemand/* createRendererExpression */.Yi)(e.valueExpression,s,t)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex,{createLabelFunction:i}=await c,a=await i(e.label,t,s);return{...e,builder:a}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:i}=s;return r(i,e,{$view:{scale:t}})}}}}


/***/ }),

/***/ 45859:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ y)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/boundsUtils.js
var boundsUtils = __webpack_require__(79880);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js + 2 modules
var spatialQuerySupport = __webpack_require__(20592);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/timeSupport.js
var timeSupport = __webpack_require__(53316);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/utils.js
var utils = __webpack_require__(34398);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/FeatureStore2D.js
var FeatureStore2D = __webpack_require__(52689);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await __webpack_require__.e(/* import() */ 3362).then(__webpack_require__.bind(__webpack_require__, 3362));try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new Error/* default */.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r)}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,p=2;class y{constructor(t){this._geometryBounds=(0,aaBoundingRect/* create */.Ue)(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0)}))}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|p:0)})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return Query/* default.fromJSON */.Z.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await (0,utils/* normalizeQueryLike */.j6)(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await (0,spatialQuerySupport/* getSpatialQueryOperator */.cW)(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,boundsUtils/* getBoundsXY */.$P)(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,timeSupport/* getTimeOperator */.y)(this._serviceInfo.timeInfo,e.timeExtent,FeatureStore2D/* featureAdapter */.k);else{const i=new Error/* default */.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(i)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return!(0,maybe/* isSome */.pC)(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i))})),t}}


/***/ }),

/***/ 54465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98416);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetReader */ .s{constructor(r,t){super(_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetReader.createInstance */ .s.createInstance()),this._currentIndex=-1,this._reader=r,this._indices=t}static from(e,t){return new r(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,r){return this._reader.setComputedNumericAtIndex(r,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,r){return this._reader.setComputedStringAtIndex(0,r)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,r){this._reader.setComputedNumericAtIndex(e,r)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,r){return this._reader.setComputedStringAtIndex(e,r)}transform(e,r,t,d){const a=this.copy();return a._reader=this._reader.transform(e,r,t,d),a}readAttribute(e,r=!1){return this._reader.readAttribute(e,r)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,r){return this._reader.setField(e,r)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,r){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}


/***/ })

};
;
//# sourceMappingURL=5859.render-page.js.map