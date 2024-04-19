"use strict";
exports.id = 5423;
exports.ids = [5423,5831,9112];
exports.modules = {

/***/ 45423:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "populateOperationalLayers": () => (/* binding */ layersCreator_n)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(66591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(92557);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(53110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalItemUtils.js
var portalItemUtils = __webpack_require__(31370);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function featureCollectionUtils_r(e,t){return n(e,t,"notes","Map Notes")}function featureCollectionUtils_o(e,t){return n(e,t,"route","Route Layer")}async function n(r,o,n,i){if(!r.layerType||"ArcGISFeatureLayer"!==r.layerType)return!1;if(r.url)return!1;if(r.featureCollectionType&&r.featureCollectionType===n)return!0;if(r.itemId){const n=new PortalItem["default"]({id:r.itemId,portal:o});return await n.load(),"Feature Collection"===n.type&&(0,portalItemUtils/* hasTypeKeyword */._$)(n,i)}return!1}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalLayers.js
var portalLayers = __webpack_require__(55831);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(16603);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/layersCreator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function layersCreator_n(e,a,y){if(!a)return;const t=[];for(const r of a){const e=d(r,y);"GroupLayer"===r.layerType?t.push(G(e,r,y)):t.push(e)}const i=await (0,promiseUtils/* eachAlways */.as)(t);for(const r of i)!r.value||y.filter&&!y.filter(r.value)||e.add(r.value)}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"UnsupportedLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function d(e,r){return I(await T(e,r),e,r)}async function I(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&m(r)&&await M(y,r,a.context),await (0,styleUtils/* loadStyleRenderer */.y)(y,a.context),y}async function T(e,r){const o=r.context,n=g(o);let l=e.layerType||e.type;!l&&r&&r.defaultLayerType&&(l=r.defaultLayerType);const c=n[l];let s=c?lazyLayerLoader/* layerLookupMap */.T[c]:lazyLayerLoader/* layerLookupMap.UnknownLayer */.T.UnknownLayer;const p=o&&o.portal;if(f(e)){if(e.itemId){const r=new PortalItem["default"]({id:e.itemId,portal:p});await r.load();const t=(await (0,portalLayers.selectLayerClassPath)(r)).className||"UnknownLayer";s=lazyLayerLoader/* layerLookupMap */.T[t]}}else"ArcGISFeatureLayer"===l?await featureCollectionUtils_r(e,p)?s=lazyLayerLoader/* layerLookupMap.MapNotesLayer */.T.MapNotesLayer:await featureCollectionUtils_o(e,p)?s=lazyLayerLoader/* layerLookupMap.RouteLayer */.T.RouteLayer:m(e)&&(s=lazyLayerLoader/* layerLookupMap.GroupLayer */.T.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?s=lazyLayerLoader/* layerLookupMap.WMTSLayer */.T.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo.version&&(s=lazyLayerLoader/* layerLookupMap.UnsupportedLayer */.T.UnsupportedLayer);return s()}function m(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function f(e){return"Feature Collection"===e.type}function g(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l}else switch(e.layerContainerType){case"basemap":r=S;break;case"tables":r=u;break;default:r=p}return r}async function G(r,a,y){const t=new Collection/* default */.Z,i=layersCreator_n(t,Array.isArray(a.layers)?a.layers:[],y),L=await r;if(await i,"group"===L.type)return L.layers.addMany(t),L}async function M(e,r,y){const t=lazyLayerLoader/* layerLookupMap.FeatureLayer */.T.FeatureLayer,i=await t(),L=r.featureCollection,o=L.showLegend,n=L.layers.map(((a,t)=>{var L,n;const l=new i;l.read(a,y);const c={...y,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${t}`,visibility:null==(L=null==(n=r.visibleLayers)?void 0:n.includes(t))||L},c),null!=o&&l.read({showLegend:o},c),l}));e.layers.addMany(n)}


/***/ }),

/***/ 92557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/* import() */ 1968).then(__webpack_require__.bind(__webpack_require__, 31968))).default,BuildingSceneLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(5149), __webpack_require__.e(9871)]).then(__webpack_require__.bind(__webpack_require__, 59871))).default,CSVLayer:async()=>(await __webpack_require__.e(/* import() */ 9849).then(__webpack_require__.bind(__webpack_require__, 89849))).default,ElevationLayer:async()=>(await __webpack_require__.e(/* import() */ 5171).then(__webpack_require__.bind(__webpack_require__, 45171))).default,FeatureLayer:async()=>(await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 77567))).default,GroupLayer:async()=>(await __webpack_require__.e(/* import() */ 6753).then(__webpack_require__.bind(__webpack_require__, 56753))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/* import() */ 4417).then(__webpack_require__.bind(__webpack_require__, 84417))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(/* import() */ 1655).then(__webpack_require__.bind(__webpack_require__, 81655))).default,ImageryLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(1329), __webpack_require__.e(7594), __webpack_require__.e(6985), __webpack_require__.e(4698)]).then(__webpack_require__.bind(__webpack_require__, 34698))).default,ImageryTileLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(1329), __webpack_require__.e(8299), __webpack_require__.e(7594), __webpack_require__.e(6985), __webpack_require__.e(4283)]).then(__webpack_require__.bind(__webpack_require__, 54283))).default,IntegratedMeshLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(5149), __webpack_require__.e(4110)]).then(__webpack_require__.bind(__webpack_require__, 34110))).default,KMLLayer:async()=>(await __webpack_require__.e(/* import() */ 693).then(__webpack_require__.bind(__webpack_require__, 80693))).default,MapImageLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(7153), __webpack_require__.e(2045)]).then(__webpack_require__.bind(__webpack_require__, 69420))).default,MapNotesLayer:async()=>(await __webpack_require__.e(/* import() */ 849).then(__webpack_require__.bind(__webpack_require__, 50849))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(/* import() */ 3963).then(__webpack_require__.bind(__webpack_require__, 53963))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(/* import() */ 3206).then(__webpack_require__.bind(__webpack_require__, 81388))).default,PointCloudLayer:async()=>(await __webpack_require__.e(/* import() */ 3108).then(__webpack_require__.bind(__webpack_require__, 73108))).default,RouteLayer:async()=>(await __webpack_require__.e(/* import() */ 1500).then(__webpack_require__.bind(__webpack_require__, 71500))).default,SceneLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(5149), __webpack_require__.e(4366)]).then(__webpack_require__.bind(__webpack_require__, 74566))).default,StreamLayer:async()=>(await __webpack_require__.e(/* import() */ 5609).then(__webpack_require__.bind(__webpack_require__, 75609))).default,TileLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(7153), __webpack_require__.e(6889)]).then(__webpack_require__.bind(__webpack_require__, 75369))).default,UnknownLayer:async()=>(await __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(__webpack_require__, 40081))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/* import() */ 4864).then(__webpack_require__.bind(__webpack_require__, 74864))).default,VectorTileLayer:async()=>(await Promise.all(/* import() */[__webpack_require__.e(3043), __webpack_require__.e(5641)]).then(__webpack_require__.bind(__webpack_require__, 16749))).default,VoxelLayer:async()=>(await __webpack_require__.e(/* import() */ 1605).then(__webpack_require__.bind(__webpack_require__, 1605))).default,WebTileLayer:async()=>(await __webpack_require__.e(/* import() */ 9859).then(__webpack_require__.bind(__webpack_require__, 89859))).default,WFSLayer:async()=>(await __webpack_require__.e(/* import() */ 4420).then(__webpack_require__.bind(__webpack_require__, 84420))).default,WMSLayer:async()=>(await __webpack_require__.e(/* import() */ 1936).then(__webpack_require__.bind(__webpack_require__, 61936))).default,WMTSLayer:async()=>(await __webpack_require__.e(/* import() */ 9306).then(__webpack_require__.bind(__webpack_require__, 9306))).default};


/***/ }),

/***/ 84513:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3466);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26869);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .mN)(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDefault */ .Z.getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ 49112:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstLayerOrTableId": () => (/* binding */ f),
/* harmony export */   "getNumLayersAndTables": () => (/* binding */ h),
/* harmony export */   "load": () => (/* binding */ o),
/* harmony export */   "preprocessFSItemData": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92557);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26869);
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84513);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16603);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40371);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o(e,t){const r=e.instance.portalItem;return r&&r.id?(await r.load(t),s(e),i(e,t)):Promise.resolve()}function s(t){const r=t.instance.portalItem;if(-1===t.supportedTypes.indexOf(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}async function i(e,t){const r=e.instance,a=r.portalItem,{url:o,title:s}=a,i=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__/* .createForItem */ .m)(a);if("group"===r.type)return r.read({title:s},i),u(r,e);o&&r.read({url:o},i);const c=await y(e,t);return c&&r.read(c,i),r.resourceReferences={portalItem:a,paths:i.readResourcePaths},r.read({title:s},i),(0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .loadStyleRenderer */ .y)(r,i)}function u(r,n){let l;const a=r.portalItem.type;switch(a){case"Feature Service":case"Feature Collection":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__/* .layerLookupMap.FeatureLayer */ .T.FeatureLayer;break;case"Stream Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__/* .layerLookupMap.StreamLayer */ .T.StreamLayer;break;case"Scene Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__/* .layerLookupMap.SceneLayer */ .T.SceneLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("portal:unsupported-item-type-as-group",`The item type '${a}' is not supported as a 'IGroupLayer'`)}let o;return l().then((e=>(o=e,y(n)))).then((async e=>"Feature Service"===a?(e=await m(e,r.portalItem.url),p(r,o,e)):h(e)>0?p(r,o,e):c(r,o)))}function c(e,t){return e.portalItem.url?(0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__/* .requestArcGISServiceJSON */ .b)(e.portalItem.url).then((r=>{var n,l;function a(e){return{id:e.id,name:e.name}}r&&p(e,t,{layers:null==(n=r.layers)?void 0:n.map(a),tables:null==(l=r.tables)?void 0:l.map(a)})})):Promise.resolve()}function p(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=d(e,t,r,n);e.add(l)})),l.reverse().forEach((n=>{const l=d(e,t,r,n);e.tables.add(l)}))}function d(e,t,n,l){const a=new t({portalItem:e.portalItem.clone(),layerId:l.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getDefault */ .Z.getDefault()};a.read(l,t);const o=n.showLegend;null!=o&&a.read({showLegend:o},t)}return a}function y(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(I(r)){let t,n=!0;return e&&h(e)>0&&(null==r.layerId&&(r.layerId=f(e)),t=v(e,r.layerId),t&&(1===h(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function m(e,t){var r,n;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n=e)?void 0:n.tables)){const r=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__/* .requestArcGISServiceJSON */ .b)(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function v(e,t){const r=e.layers;if(r)for(let l=0;l<r.length;l++)if(r[l].id===t)return r[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}function h(e){var t,r,n,l;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}function I(e){return"stream"!==e.type&&"layerId"in e}


/***/ }),

/***/ 55831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromItem": () => (/* binding */ u),
/* harmony export */   "selectLayerClassPath": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92557);
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53110);
/* harmony import */ var _layersLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49112);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31370);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40371);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(e){return!e.portalItem||e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"]||(e={...e,portalItem:new _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.portalItem)}),l(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function l(e){return e.load().then(i).then(y)}function i(r){switch(r.type){case"Map Service":return m(r);case"Feature Service":return p(r);case"Feature Collection":return L(r);case"Scene Service":return f(r);case"Image Service":return d(r);case"Stream Service":return N();case"Vector Tile Service":return S();case"KML":return I();case"WFS":return h();case"WMTS":return v();case"WMS":return g();case"Feed":return w();default:return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type}))}}function y(e){return(0,_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__/* .layerLookupMap */ .T[e.className])().then((r=>({constructor:r,properties:e.properties})))}function m(e){return T(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function p(e){return M(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}function f(e){return M(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return{className:r[t]}}return (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_4__/* .requestArcGISServiceJSON */ .b)(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return!1===r?(0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_4__/* .requestArcGISServiceJSON */ .b)(e.url).then((e=>"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}async function L(e){await e.load();if((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .hasTypeKeyword */ ._$)(e,"Map Notes"))return{className:"MapNotesLayer"};if((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .hasTypeKeyword */ ._$)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__.getNumLayersAndTables)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),s=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};return"map"===(null==(a=(await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_4__/* .requestArcGISServiceJSON */ .b)(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function N(){return{className:"StreamLayer"}}function S(){return{className:"VectorTileLayer"}}function I(){return{className:"KMLLayer"}}function h(){return{className:"WFSLayer"}}function g(){return{className:"WMSLayer"}}function v(){return{className:"WMTSLayer"}}function w(){return{className:"StreamLayer"}}function T(e){return (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_4__/* .requestArcGISServiceJSON */ .b)(e.url).then((e=>e.tileInfo))}function M(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>{if("Feature Service"===e.type)return j(r=await (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__.preprocessFSItemData)(r,e.url));return (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__.getNumLayersAndTables)(r)>0?j(r):(0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_4__/* .requestArcGISServiceJSON */ .b)(e.url).then(j)}))}function j(e){return 1===(0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__.getNumLayersAndTables)(e)&&{id:(0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__.getFirstLayerOrTableId)(e)}}


/***/ }),

/***/ 40371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n){const{data:o}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n,{responseType:"json",query:{f:"json"}});return o}


/***/ })

};
;
//# sourceMappingURL=5423.render-page.js.map