"use strict";
exports.id = 1691;
exports.ids = [1691];
exports.modules = {

/***/ 1691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61681);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78668);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35925);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12065);
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4811);
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66069);
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61280);
/* harmony import */ var _geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61957);
/* harmony import */ var _support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24366);
/* harmony import */ var _ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48662);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28790);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await (0,_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getFeature */ .Bm)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await (0,_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__/* .validateGeoJSON */ .O3)(s),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .k_)(e);const i=(0,_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__/* .createOptimizedFeatures */ .lG)(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .equals */ .fS)(this._queryEngine.spatialReference,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .WGS84 */ .Zn))for(const a of i)(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(a.geometry)&&(a.geometry=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .convertFromGeometry */ .GH)((0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_6__/* .project */ .iV)((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .convertToGeometry */ .di)(a.geometry,this._queryEngine.geometryType,!1,!1),_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .WGS84 */ .Zn,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};(0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .mixAttributes */ .O0)(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++)}return i}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h,customParameters:l}=e;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z(o),await this._checkProjection(n),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .k_)(t),this._queryEngine=new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:n,timeInfo:null,featureStore:new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .unwrap */ .Wg)(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s;return this._customParameters=r,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createTask */ .vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(r=>{this._queryEngine.featureStore.clear(),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isAbortError */ .D_)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.layers.WFSLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_6__/* .checkProjectionSupport */ ._W)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .WGS84 */ .Zn,t)}catch{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("unsupported-projection","Projection not supported",{spatialReference:t})}}}


/***/ }),

/***/ 61957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lG": () => (/* binding */ L),
/* harmony export */   "q9": () => (/* binding */ i),
/* harmony export */   "my": () => (/* binding */ T),
/* harmony export */   "O3": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59958);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15540);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17095);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function i(e){return r[e]}function*s(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*u(e,o={}){const{geometryType:r,objectIdField:s}=o;for(const u of e){var c;const{geometry:e,properties:l,id:f}=u;if(e&&i(e.type)!==r)continue;const a=l||{};let y=null!=(c=a[s])?c:null;s&&null!=f&&!a[s]&&(a[s]=y=f);const p=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP(e?d(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,e,o):null,a,null,y);yield p}}function l(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){return!y(e)}function a(e){return y(e)}function y(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function p(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":return g(e,t,n);case"MultiLineString":return m(e,t,n);case"MultiPoint":return h(e,t,n);case"MultiPolygon":return w(e,t,n);case"Point":return P(e,t,n);case"Polygon":return b(e,t,n)}}function g(e,t,n){return F(e,t.coordinates,n),e}function m(e,t,n){for(const o of t.coordinates)F(e,o,n);return e}function h(e,t,n){return F(e,t.coordinates,n),e}function w(e,t,n){for(const o of t.coordinates){j(e,o[0],n);for(let t=1;t<o.length;t++)S(e,o[t],n)}return e}function P(e,t,n){return M(e,t.coordinates,n),e}function b(e,t,n){const o=t.coordinates;j(e,o[0],n);for(let r=1;r<o.length;r++)S(e,o[r],n);return e}function j(e,t,n){const o=p(t);f(o)?G(e,o,n):F(e,o,n)}function S(e,t,n){const o=p(t);a(o)?G(e,o,n):F(e,o,n)}function F(e,t,n){for(const o of t)M(e,o,n);e.lengths.push(t.length)}function G(e,t,n){for(let o=t.length-1;o>=0;o--)M(e,t[o],n);e.lengths.push(t.length)}function M(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function O(t){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e,t={}){const n=[],r=new Set,u=new Set;let f,a=!1,y=null,p=!1,{geometryType:d=null}=t,g=!1;for(const o of s(e)){const{geometry:e,properties:t,id:s}=o;if(!e||(d||(d=i(e.type)),i(e.type)===d)){if(!a){a=l(c(e))}if(p||(p=null!=s,p&&(f=typeof s,y=Object.keys(t).filter((e=>t[e]===s)))),p&&null!=s&&(y.length>1?y=y.filter((e=>t[e]===s)):1===y.length&&(y=t[y[0]]===s?y:[])),!g&&t){let e=!0;for(const o in t){if(r.has(o))continue;const i=t[o];if(null==i){e=!1,u.add(o);continue}const s=k(i);"unknown"!==s?(u.delete(o),r.add(o),n.push({name:o,alias:o,type:s})):u.add(o)}g=e}}}const m=y&&1===y.length&&y[0]||null;if(m)for(const i of n)if(i.name===m&&(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumericField */ .H7)(i)){i.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:a,objectIdFieldName:m,objectIdFieldType:f,unknownFields:Array.from(u)}}function L(e,t){return Array.from(u(s(e),t))}


/***/ }),

/***/ 24366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "av": () => (/* binding */ u),
/* harmony export */   "d1": () => (/* binding */ c),
/* harmony export */   "b": () => (/* binding */ y),
/* harmony export */   "O0": () => (/* binding */ d),
/* harmony export */   "og": () => (/* binding */ h)
/* harmony export */ });
/* unused harmony export loadGeometryEngine */
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35925);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17095);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new a(e)}const f=new Set;function d(e,t,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFieldValue */ .Qc)(a,d);if(e)return u((0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .validationErrorToString */ .vP)(e,a,d));t[a.name]=d}}for(const n of e.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(e,n){let i=n;return"string"==typeof n&&(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumericField */ .H7)(e)?i=parseFloat(n):null!=n&&(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isStringField */ .qN)(e)&&"string"!=typeof n&&(i=String(n)),(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .sanitizeNullFieldValue */ .Pz)(i)}let p;function h(t,n){if(!t||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isValid */ .JY)(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function g(){return p||(p=await Promise.all(/* import() */[__webpack_require__.e(9067), __webpack_require__.e(8923)]).then(__webpack_require__.bind(__webpack_require__, 8923)),p)}async function y(t,n){!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isValid */ .JY)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g()}


/***/ }),

/***/ 48662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M8": () => (/* binding */ v),
  "ft": () => (/* binding */ W),
  "FU": () => (/* binding */ D),
  "Bm": () => (/* binding */ K),
  "be": () => (/* binding */ X),
  "eB": () => (/* binding */ z)
});

// UNUSED EXPORTS: describeFeatureType, getFeatureCount, getFeatureTypeInfo, parseDescribeFeatureTypeResponse, parseGetCapabilitiesResponse

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/iteratorUtils.js
var iteratorUtils = __webpack_require__(99118);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection.js + 2 modules
var projection = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(35925);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(59659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js
var geojson = __webpack_require__(61957);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/ogc/dateUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function dateUtils_n(n){var s;return null!=(s=t(n))?s:dateUtils_e(n)}function dateUtils_e(n){const e=new Date(n).getTime();return Number.isNaN(e)?null:e}function t(n){var e,t,u,r;const o=s.exec(n);if(!o)return null;const l=o.groups,f=+l.year,i=+l.month-1,d=+l.day,a=+(null!=(e=l.hours)?e:"0"),c=+(null!=(t=l.minutes)?t:"0"),m=+(null!=(u=l.seconds)?u:"0");if(a>23)return null;if(c>59)return null;if(m>59)return null;const g=null!=(r=l.ms)?r:"0",T=g?+g.padEnd(3,"0").substring(0,3):0;let N;if(l.isUTC)N=Date.UTC(f,i,d,a,c,m,T);else if(l.offsetSign){const n=+l.offsetHours,e=+l.offsetMinutes;N=6e4*("+"===l.offsetSign?-1:1)*(60*n+e)+Date.UTC(f,i,d,a,c,m,T)}else N=new Date(f,i,d,a,c,m,T).getTime();return Number.isNaN(N)?null:N}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/ogc/xmlUtils.js
var xmlUtils = __webpack_require__(94477);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(12512);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/ogc/wfsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const S="xlink:href",x="2.0.0",v="__esri_wfs_id__",C="wfs-layer:getWFSLayerTypeInfo-error",E="wfs-layer:empty-service",N="wfs-layer:feature-type-not-found",P="wfs-layer:geojson-not-supported",R="wfs-layer:kvp-encoding-not-supported",j="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",G="wfs-layer:unknown-field-type",k="wfs-layer:unsupported-spatial-reference",U="wfs-layer:unsupported-wfs-version";async function D(t,r){const n=I((await (0,request["default"])(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:x,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data);return $(t,n),n}function I(e){const t=te(e);ne(t),ae(t);const r=t.firstElementChild,a=(0,iteratorUtils/* cache */.Fs)(M(r));return{operations:L(r),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const O=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function L(e){let r=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,xmlUtils/* visitXML */.h)(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(S)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;O.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{r="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!r)throw new Error/* default */.Z(R,"WFS service doesn't support key/value pair (KVP) encoding");if((0,maybe/* isNone */.Wi)(n.GetFeature.outputFormat))throw new Error/* default */.Z(P,"WFS service doesn't support GeoJSON output format");return n}function $(e,t){(0,urlUtils/* isHTTPSProtocol */.$U)(e)&&((0,urlUtils/* hasSameOrigin */.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,urlUtils/* toHTTPS */.hO)(t.operations.DescribeFeatureType.url)),(0,urlUtils/* hasSameOrigin */.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,urlUtils/* toHTTPS */.hO)(t.operations.GetFeature.url)))}function M(e){return (0,xmlUtils/* iterateXML */.H)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),n=e=>{var t,n;const a=parseInt(null==(t=e.textContent.match(/(?<wkid>\d+$)/i))||null==(n=t.groups)?void 0:n.wkid,10);Number.isNaN(a)||r.add(a)};return (0,xmlUtils/* visitXML */.h)(e,{Name:e=>{const{name:r,prefix:n}=re(e.textContent);t.typeName=`${n}:${r}`,t.name=r,t.namespacePrefix=n,t.namespaceUri=e.lookupNamespaceURI(n)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=V(e)},DefaultSRS:n,DefaultCRS:n,OtherSRS:n,OtherCRS:n}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...r),t}}})}function V(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:spatialReferenceUtils/* WGS84 */.Zn}}function W(e,t,n){return (0,iteratorUtils/* find */.sE)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function X(e,t,r,n={}){var a;const{featureType:o,extent:i}=await Y(e,t,r,n),{fields:s,geometryType:u,swapXY:l,objectIdField:p,geometryField:c}=await q(e,o.typeName,n);return{url:e.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:s,geometryField:c,geometryType:u,objectIdField:p,spatialReference:null!=(a=n.spatialReference)?a:SpatialReference/* default.WGS84 */.Z.WGS84,extent:i,swapXY:l,wfsCapabilities:e,customParameters:n.customParameters}}async function Y(e,r,n,o={}){const{spatialReference:i=SpatialReference/* default.WGS84 */.Z.WGS84}=o,s=e.readFeatureTypes(),u=r?W(s,r,n):s.next().value;if((0,maybe/* isNone */.Wi)(u))throw r?new Error/* default */.Z(N,`The type '${r}' could not be found in the service`):new Error/* default */.Z(E,"The service is empty");let l=new Extent/* default */.Z({...u.extent,spatialReference:i});if(!(0,spatialReferenceUtils/* equals */.fS)(i,spatialReferenceUtils/* WGS84 */.Zn))try{await (0,projection/* initializeProjection */.iQ)(spatialReferenceUtils/* WGS84 */.Zn,i,void 0,o),l=(0,projection/* project */.iV)(l,spatialReferenceUtils/* WGS84 */.Zn)}catch{throw new Error/* default */.Z(k,"Projection not supported")}return{extent:l,spatialReference:i,featureType:u}}async function q(e,r,n={}){const[o,s]=await (0,promiseUtils/* eachAlways */.as)([J(e.operations.DescribeFeatureType.url,r,n),_(e,r,n)]);if(o.error||s.error)throw new Error/* default */.Z(C,`An error occurred while getting info about the feature type '${r}'`,{error:o.error||s.error});const{fields:u,errors:l}=o.value,p=o.value.geometryType||s.value.geometryType,c=s.value.swapXY;if((0,maybe/* isNone */.Wi)(p))throw new Error/* default */.Z(A,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:p,fields:u,errors:l});return{...z(u),geometryType:p,swapXY:c}}function z(e){var t;const r=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new Field/* default */.Z({name:v,type:"oid",alias:v}),e.unshift(n)),{geometryField:null!=(t=null==r?void 0:r.name)?t:null,objectIdField:n.name,fields:e}}async function _(t,r,n={}){var a;let o,i=!1;const[s,u]=await Promise.all([K(t.operations.GetFeature.url,r,t.operations.GetFeature.outputFormat,{...n,count:1}),(0,request["default"])(t.operations.GetFeature.url,{responseType:"text",query:Z(r,void 0,{...n,count:1}),signal:null==n?void 0:n.signal})]),l="FeatureCollection"===s.type&&(null==(a=s.features[0])?void 0:a.geometry);if(l){let e;switch(o=typeUtils/* featureGeometryTypeKebabDictionary.fromJSON */.Mk.fromJSON((0,geojson/* getGeometryType */.q9)(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(i=!0)}}return{geometryType:o,swapXY:i}}async function J(t,r,n){return Q(r,(await (0,request["default"])(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:x,TYPENAME:r,...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data)}function Q(e,n){const{name:a}=re(e),i=te(n);ae(i);const s=(0,iteratorUtils/* find */.sE)((0,xmlUtils/* iterateXML */.H)(i.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:re(e.getAttribute("type")).name})}),(({name:e})=>e===a));if((0,maybe/* isSome */.pC)(s)){const e=(0,iteratorUtils/* find */.sE)((0,xmlUtils/* iterateXML */.H)(i.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===s.typeName));if((0,maybe/* isSome */.pC)(e))return B(e)}throw new Error/* default */.Z(N,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(i)})}const H=new Set(["objectid","fid"]);function B(e){var r,n;const a=[],o=[];let i;const s=(0,xmlUtils/* iterateXML */.H)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const u of s){const s=u.getAttribute("name");if(!s)continue;let l,p;if(u.hasAttribute("type")?l=re(u.getAttribute("type")).name:(0,xmlUtils/* visitXML */.h)(u,{simpleType:{restriction:e=>(l=re(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value")}})}}),!l)continue;const c="true"===u.getAttribute("nillable");let m=!1;switch(l.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o.push(new Field/* default */.Z({name:s,alias:s,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":o.push(new Field/* default */.Z({name:s,alias:s,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o.push(new Field/* default */.Z({name:s,alias:s,type:"string",nullable:c,length:null!=(r=p)?r:255}));break;case"datetime":case"date":o.push(new Field/* default */.Z({name:s,alias:s,type:"date",nullable:c,length:null!=(n=p)?n:36}));break;case"pointpropertytype":i="point",m=!0;break;case"multipointpropertytype":i="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,a.push(new Error/* default */.Z(A,`geometry type '${l}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:a.push(new Error/* default */.Z(G,`Unknown field type '${l}'`,{type:(new XMLSerializer).serializeToString(e)}))}m&&o.push(new Field/* default */.Z({name:s,alias:s,type:"geometry",nullable:c}))}for(const t of o)if("integer"===t.type&&!t.nullable&&H.has(t.name.toLowerCase())){t.type="oid";break}return{geometryType:i,fields:o,errors:a}}async function K(r,n,a,o){let{data:i}=await (0,request["default"])(r,{responseType:"text",query:Z(n,a,o),signal:null==o?void 0:o.signal});i=i.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var s;if(null!=o&&null!=(s=o.dateFields)&&s.length){const e=new Set(o.dateFields);return JSON.parse(i,((t,r)=>e.has(t)?dateUtils_n(r):r))}return JSON.parse(i)}catch(u){throw new Error/* default */.Z(j,"Error while parsing the response",{response:i,error:u})}}function Z(e,t,r){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==r?void 0:r.startIndex,COUNT:null==r?void 0:r.count,...null==r?void 0:r.customParameters}}async function ee(t,r,n){const a=te((await e(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:r,RESULTTYPE:"hits",...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data);ae(a);const o=Number.parseFloat(a.firstElementChild.getAttribute("numberMatched"));return Number.isNaN(o)?0:o}function te(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){const[t,r]=e.split(":");return{prefix:r?t:"",name:null!=r?r:t}}function ne(e){const r=e.firstElementChild.getAttribute("version");if(r&&r!==x)throw new Error/* default */.Z(U,`Unsupported WFS version ${r}. Supported version: ${x}`)}function ae(e){let r,n;if((0,xmlUtils/* visitXML */.h)(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),r)throw new Error/* default */.Z(`wfs-layer:${r}`,n)}


/***/ }),

/***/ 94477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ n),
/* harmony export */   "h": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(n,c){for(const e of n.children)if(e.localName in c){const n=c[e.localName];if("function"==typeof n){const c=n(e);c&&o(e,c)}else o(e,n)}}function*n(o,c){for(const e of o.children)if(e.localName in c){const o=c[e.localName];"function"==typeof o?yield o(e):yield*n(e,o)}}


/***/ })

};
;
//# sourceMappingURL=1691.render-page.js.map