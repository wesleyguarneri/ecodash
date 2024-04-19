"use strict";
exports.id = 5171;
exports.ids = [5171];
exports.modules = {

/***/ 45171:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ x)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(64307);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js
var ArcGISCachedService = __webpack_require__(89993);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(87232);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(23148);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 4 modules
var workers = __webpack_require__(47109);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/workers/WorkerHandle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=Logger/* default.getLogger */.Z.getLogger("esri.core.workers.WorkerHandle");class n{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=(0,workers/* open */.bA)(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)))}on(r,i){const o={removed:!1,eventName:r,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),(0,handleUtils/* makeHandle */.kB)((()=>{o.removed=!0,(0,arrayUtils/* remove */.Od)(this._listeners,o),this._thread&&(0,maybe/* isSome */.pC)(o.threadHandle)&&o.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>((0,promiseUtils/* throwIfAborted */.k_)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/LercDecoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends n{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(o.forEach(((e,r)=>{e===this&&o.delete(r)})),this.destroy())}}const o=new Map;function LercDecoder_n(t=null){let n=o.get((0,maybe/* unwrap */.Wg)(t));return n||((0,maybe/* isSome */.pC)(t)?(n=new s((e=>t.schedule(e))),o.set(t,n)):(n=new s,o.set(null,n))),++n.ref,n}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/ElevationLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=Logger/* default.getLogger */.Z.getLogger("esri.layers.ElevationLayer");let T=class extends((0,ArcGISCachedService/* ArcGISCachedService */.Z)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(Layer/* default */.Z)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=LercDecoder_n()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=(0,maybe/* releaseMaybe */.RY)(this._lercDecoder)}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=(0,maybe/* isSome */.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new Error/* default */.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(promiseUtils/* throwIfAbortError */.r9).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=(0,maybe/* isSome */.pC)((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>(0,request["default"])(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=(0,urlUtils/* objectToQuery */.B7)({...this.parsedUrl.query,blankTile:!o&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/* import() */ 6646).then(__webpack_require__.bind(__webpack_require__, 86646));(0,promiseUtils/* throwIfAborted */.k_)(r);return(new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/* import() */ 6646).then(__webpack_require__.bind(__webpack_require__, 86646));(0,promiseUtils/* throwIfAborted */.k_)(r);return(new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await (0,request["default"])(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{source:"copyrightText"}}})],T.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:HeightModelInfo/* default */.Z})],T.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],T.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"minScale",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"maxScale",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],T.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],T.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],T.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* url */.HQ)],T.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],T.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("version",["currentVersion"])],T.prototype,"readVersion",null),T=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.ElevationLayer")],T),T.prototype.fetchTile.__isDefault__=!0;const x=T;


/***/ }),

/***/ 89993:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36663);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34248);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58269);
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52953);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14685);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_8__/* .TilemapCache */ .y({layer:this}):null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__/* .reader */ .r)("service","minScale")],l.prototype,"readMinScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__/* .reader */ .r)("service","maxScale")],l.prototype,"readMaxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z})],l.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({readOnly:!0})],l.prototype,"supportsBlankTile",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)(_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_7__/* .serviceTileInfoProperty */ .h)],l.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"tilemapCache",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__/* .reader */ .r)("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"version",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.layers.mixins.ArcGISCachedService")],l),l};


/***/ }),

/***/ 52953:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ T)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 3 modules
var Accessor = __webpack_require__(53443);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/HandleOwner.js
var HandleOwner = __webpack_require__(53280);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/LRUCache.js
var LRUCache = __webpack_require__(55854);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(17135);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(17262);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/watchUtils.js
var watchUtils = __webpack_require__(15071);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(69236);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/Tilemap.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Tilemap_l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let s=0;s<t.length;s++){const i=s%8;t[s]?(l=!1,n[r]|=1<<i):a=!1,7===i&&++r}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(a,o){const r=a.service.request||request["default"],{row:s,col:h,width:c,height:m}=a,d={query:{f:"json"}};return o=o?{...d,...o}:d,r(n(a),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:h,width:c,height:m},valid:!0,data:(0,arrayUtils/* constant */.a9)(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new Error/* default */.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s,left:h,width:c,height:m}});return Tilemap_l.fromJSON(t)}))}static fromJSON(t){Tilemap_l.validateJSON(t);const i=new Tilemap_l;return i.location=Object.freeze((0,lang/* clone */.d9)(t.location)),i._updateFromData(t.data),Object.freeze(i)}static validateJSON(t){if(!t||!t.location)throw new Error/* default */.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new Error/* default */.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new Error/* default */.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new Error/* default */.Z("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new Error/* default */.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function Tilemap_o(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else{const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}const e=t.service.query;return e&&(i=`${i}?${e}`),i}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/TilemapCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var g;const w=Logger/* default.getLogger */.Z.getLogger("esri.layers.support.TilemapCache");let T=g=class extends((0,HandleOwner/* HandleOwnerMixin */.p)(Accessor/* default */.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=request["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new LRUCache/* default */.Z(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),(0,watchUtils/* init */.S1)(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(w.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l){if(!this._availableLevels[e])return Promise.reject(new Error/* default */.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,s);if(a)return Promise.resolve(a);const o=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,promiseUtils/* onAbort */.fu)(o,(()=>t((0,promiseUtils/* createAbortError */.zE)())));const i=Tilemap_o(s);let r=this._pendingTilemapRequests[i];if(!r){r=Tilemap_l.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof Tilemap_l){const s=l.getAvailability(t,i);return"unavailable"===s?Promise.reject(new Error/* default */.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):s}if((0,promiseUtils/* isAbortError */.D_)(l))throw l;return"unknown"})):Promise.reject(new Error/* default */.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const a=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,promiseUtils/* isAbortError */.D_)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,s){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this.handles.has(a))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let n=!1;const c={remove(){n||(n=!0,o.abort())}};if(this.handles.add(c,a),await (0,scheduling/* waitTicks */.MU)(10,o.signal).catch((()=>{})),n||(n=!0,this.handles.remove(a)),(0,promiseUtils/* isAborted */.Hc)(o))return;const p={id:e,level:t,row:i,col:r},u={...l,signal:o.signal},f=this.layer.tileInfo;for(let h=0;g._prefetches.length<g._maxPrefetch&&f.upsampleTile(p);++h){const e=this.fetchAvailability(p.level,p.row,p.col,u);g._prefetches.push(e);const t=()=>{g._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:r}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,urlUtils/* objectToQuery */.B7)({...t.query,...r,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=Tilemap_o(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};T._maxPrefetch=4,T._prefetches=new PooledArray/* default */.Z({initialSize:g._maxPrefetch}),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0,type:Number})],T.prototype,"levels",void 0),(0,tslib_es6._)([(0,cast/* cast */.p)("levels")],T.prototype,"castLevels",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Number})],T.prototype,"size",null),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0,type:Number})],T.prototype,"cacheByteSize",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],T.prototype,"request",void 0),T=g=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.TilemapCache")],T);


/***/ }),

/***/ 58269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ n),
/* harmony export */   "h": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81590);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={type:_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON(r):_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON(r)}


/***/ })

};
;
//# sourceMappingURL=5171.render-page.js.map