"use strict";
exports.id = 6889;
exports.ids = [6889];
exports.modules = {

/***/ 75369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(36663);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70375);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53280);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(61681);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15842);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78668);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3466);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69236);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34248);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40266);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39835);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76136);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91223);
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89993);
/* harmony import */ var _mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81432);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87232);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27668);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(63989);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43330);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(18241);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(12478);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(95874);
/* harmony import */ var _mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(80002);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20692);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51599);
/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(23875);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14685);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_19__/* .BlendLayer */ .h)((0,_mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_25__/* .SublayersOwner */ .x)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__/* .ScaleRangeLayer */ .M)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__/* .OperationalLayer */ .q)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__/* .PortalLayer */ .I)((0,_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_16__/* .ArcGISCachedService */ .Z)((0,_mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_17__/* .ArcGISMapService */ .O)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__/* .ArcGISService */ .Y)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .MultiOriginJSONMixin */ .R)((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__/* .HandleOwnerMixin */ .p)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_23__/* .RefreshableLayer */ .Q)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_15__/* .APIKeyMixin */ .V)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_20__/* .CustomParametersMixin */ .N)(_Layer_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_30__/* .isSome */ .pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .throwIfAbortError */ .r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"].fromJSON */ .Z.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r)}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .urlToObject */ .mN)(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .objectToQuery */ .B7)({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return`${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("tile-layer:undefined-url","layer's url is not defined");const a=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_26__/* .parse */ .Qc)(this.parsedUrl.path);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_30__/* .isSome */ .pC)(a)&&"ImageServer"===a.serverType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_26__/* .isHostedAgolService */ .M8)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_26__/* .isArcGISUrl */ .B5)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .makeAbsolute */ .hF)("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({readOnly:!0})],M.prototype,"attributionDataUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:Boolean})],M.prototype,"resampling",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],M.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z})],M.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__/* .reader */ .r)("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({readOnly:!0})],M.prototype,"sublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__/* .writer */ .c)("sublayers",{layers:{type:[_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z]}})],M.prototype,"writeSublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],M.prototype,"tileServers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_10__/* .cast */ .p)("tileServers")],M.prototype,"castTileServers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__/* .url */ .HQ)],M.prototype,"url",void 0),M=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_31__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__/* .subclass */ .j)("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;


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
//# sourceMappingURL=6889.render-page.js.map