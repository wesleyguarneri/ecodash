"use strict";
exports.id = 9112;
exports.ids = [9112];
exports.modules = {

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
//# sourceMappingURL=9112.render-page.js.map