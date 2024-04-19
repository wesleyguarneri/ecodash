"use strict";
exports.id = 7013;
exports.ids = [7013];
exports.modules = {

/***/ 57013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ C),
  "inferFieldType": () => (/* binding */ R),
  "inferFields": () => (/* binding */ V),
  "inferLocationInfo": () => (/* binding */ P)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/number.js
var number = __webpack_require__(94978);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection.js + 2 modules
var projection = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js
var json = __webpack_require__(61107);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(35925);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var webMercatorUtils = __webpack_require__(39536);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js
var OptimizedFeature = __webpack_require__(59958);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(15540);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js + 1 modules
var FeatureStore = __webpack_require__(4811);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var projectionSupport = __webpack_require__(66069);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js + 4 modules
var QueryEngine = __webpack_require__(61280);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/csv/csv.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e="\n",o=[","," ",";","|","\t"];function*c(n,t,e){let o=0;for(;o<=n.length;){const c=n.indexOf(t,o),i=n.substring(o,c>-1?c:void 0);o+=i.length+t.length,e&&!i.trim()||(yield i)}}function csv_i(n){const t=n.includes("\r\n")?"\r\n":e;return c(n,t,!0)}function r(n,t){return c(n,t,!1)}function f(n){const t=n.trim();let e=0,c="";for(const i of o){const n=t.split(i).length;n>e&&(e=n,c=i)}return""===c?null:c}function*l(o,c,i,f=(()=>Object.create(null))){let l="",u="",d=0,g=f(),x=0;n:for(const h of o){const o=r(h,i);for(const e of o)if(l+=u+e,u="",d+=s(e),d%2==0){if(d>0){const e=n.exec(l);if(!e){g=f(),x=0,l="",d=0;continue n}g[c[x]]=e[1].replace(t,'"'),x++}else g[c[x]]=l,x++;l="",d=0}else u=i;0===d?(yield g,g=f(),x=0):u=e}}function s(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(40400);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(28790);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js + 1 modules
var fieldUtils = __webpack_require__(17095);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const j=(0,clientSideDefaults/* createDrawingInfo */.bU)("esriGeometryPoint"),S=["csv"],q=[0,0];class v{constructor(e,t){this.x=e,this.y=t}}class C{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t={}){var i;this.loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(null==e||null==(i=e.parsingOptions)?void 0:i.spatialReference)]),r=D(n,e);this.locationInfo=r.locationInfo,this.delimiter=r.delimiter,this._queryEngine=this._createQueryEngine(r);const s=await this._createFeatures(n);if(this._queryEngine.featureStore.addMany(s),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;r.layerDefinition.timeInfo.timeExtent=[e,t]}return r}async applyEdits(){throw new Error/* default */.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var n;return this.loadOptions.customParameters=e,null==(n=this._snapshotTask)||n.abort(),this._snapshotTask=(0,promiseUtils/* createTask */.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,promiseUtils/* isAbortError */.D_)(e)||Logger/* default.getLogger */.Z.getLogger("esri.layers.CSVLayer").error(new Error/* default */.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(i){const{url:n,customParameters:r}=this.loadOptions;if(!n)throw new Error/* default */.Z("csv-layer:invalid-source","url not defined");const s=(0,urlUtils/* urlToObject */.mN)(n);return(await (0,request["default"])(s.path,{query:{...s.query,...r},responseType:"text",signal:i})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:n,timeInfo:r}=e.layerDefinition,s=new FeatureStore/* default */.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new QueryEngine/* default */.Z({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i}=this.locationInfo,{objectIdField:n,fieldsIndex:r,spatialReference:s}=this._queryEngine;let o=[];const a=[],m=r.fields.filter((e=>e.name!==n)).map((e=>e.name));let h=0;const g=csv_i(e);g.next();const F={};for(const l of r.fields)if("esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type){const e=(0,fieldUtils/* getFieldDefaultValue */.os)(l);void 0!==e&&(F[l.name]=e)}const N=l(g,m,this.delimiter,(0,clientSideDefaults/* createDefaultAttributesFunction */.Dm)(F,n));for(const l of N){const e=this._parseCoordinateValue(l[t]),s=this._parseCoordinateValue(l[i]);if(null!=s&&null!=e&&!isNaN(e)&&!isNaN(s)){l[t]=e,l[i]=s;for(const e in l)if(e!==t&&e!==i)if(r.isDateField(e)){const t=new Date(l[e]);l[e]=L(t,l[e])?t.getTime():null}else if(r.isNumericField(e)){const t=M(l[e]);isNaN(t)?l[e]=null:l[e]=t}l[n]=h,h++,o.push(new v(s,e)),a.push(l)}}if(!(0,spatialReferenceUtils/* equals */.fS)({wkid:4326},s))if((0,spatialReferenceUtils/* isWebMercator */.sS)(s))for(const l of o)[l.x,l.y]=(0,webMercatorUtils/* lngLatToXY */.hG)(l.x,l.y,q);else o=(0,projection/* projectMany */.oj)(json/* jsonAdapter */.N,o,SpatialReference/* default.WGS84 */.Z.WGS84,s,null);const b=[];for(let l=0;l<o.length;l++){const{x:e,y:t}=o[l],i=a[l];i[n]=l+1,b.push(new OptimizedFeature/* default */.ZP(new OptimizedGeometry/* default */.Z([],[e,t]),i,null,i[n]))}return b}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=M(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await (0,projectionSupport/* checkProjectionSupport */._W)(spatialReferenceUtils/* WGS84 */.Zn,e)}catch{throw new Error/* default */.Z("csv-layer:projection-not-supported","Projection not supported")}}}function D(e,i){const n=i.parsingOptions||{},r={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},s=csv_i(e);let o=s.next().value;if(!o)throw new Error/* default */.Z("csv-layer:empty-csv","CSV is empty",{csv:e});if(o=o.trim(),!n.delimiter){const e=f(o);if(!e)throw new Error/* default */.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");r.delimiter=e}const l=o.split(r.delimiter).filter((e=>!!e)),u=r.layerDefinition={name:(0,urlUtils/* getFilename */.vt)(i.url,S)||"csv",drawingInfo:j,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=P(l);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new Error/* default */.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");r.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const d=V(s,r.delimiter,l,r.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of d){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e}}}u.fields=d;if(!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(u.timeInfo){const e=new FieldsIndex/* default */.Z(u.fields),t=u.timeInfo;if(t.startTimeField){const i=e.get(t.startTimeField);i?(t.startTimeField=i.name,i.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){const i=e.get(t.endTimeField);i?(t.endTimeField=i.name,i.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){const i=e.get(t.trackIdField);t.trackIdField=i?i.name:null}t.startTimeField||t.endTimeField||(u.timeInfo=null)}return r}const O=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],k=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function P(e){const t=e.map((e=>e.toLowerCase()));return{longitudeFieldName:e[t.indexOf(k.find((e=>t.includes(e))))],latitudeFieldName:e[t.indexOf(O.find((e=>t.includes(e))))]}}function V(e,t,i,n){const r=[],s=l(e,i,t),o=[];for(const a of s){if(10===o.length)break;o.push(a)}for(const a of i)if(a===n.longitudeFieldName||a===n.latitudeFieldName)r.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const e=R(o.map((e=>e[a]))),t={name:a,type:null,alias:a};switch(e){case"integer":t.type="esriFieldTypeInteger";break;case"double":t.type="esriFieldTypeDouble";break;case"date":t.type="esriFieldTypeDate",t.length=36;break;default:t.type="esriFieldTypeString",t.length=255}r.push(t)}return r}function R(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=M(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){return L(new Date(e),e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const G=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,Q=Number.isNaN(new Date("technology 10").getTime());function L(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(!Q&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!G.test(e[n]),n++;i=!t}}return i}const M=function(){const e=(0,number/* _parseInfo */.lt)(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(n){const s=t.exec(n);if(e.factor=r,!s)return NaN;let o=s[1];if(!s[1]){if(!s[2])return NaN;o=s[2],e.factor*=-1}return o=o.replace(i,"").replace(e.decimal,"."),+o*e.factor}}();


/***/ }),

/***/ 40400:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* binding */ a),
/* harmony export */   "Dm": () => (/* binding */ n),
/* harmony export */   "Hq": () => (/* binding */ i),
/* harmony export */   "bU": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67134);
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10287);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86094);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPointSymbolJSON */ .I4:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolylineSymbolJSON */ .ET:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolygonSymbolJSON */ .lF}}}function n(s,e){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`}const r=new Function(t);return()=>new r}catch(r){return()=>({[e]:null,...s})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .d9)(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__/* .queryCapabilities */ .g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}


/***/ })

};
;
//# sourceMappingURL=7013.render-page.js.map