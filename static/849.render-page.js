"use strict";
exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 50849:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ B)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(80085);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols.js + 2 modules
var symbols = __webpack_require__(95156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(66591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(86745);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(96863);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection.js + 2 modules
var projection = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js + 2 modules
var normalizeUtils = __webpack_require__(56247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(35925);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/FeatureLayer.js + 24 modules
var FeatureLayer = __webpack_require__(77567);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/support/OwningCollection.js
var OwningCollection = __webpack_require__(4637);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(27668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/GraphicsCollection.js
var GraphicsCollection = __webpack_require__(94449);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 2 modules
var ElevationInfo = __webpack_require__(35957);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/GraphicsLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends((0,BlendLayer/* BlendLayer */.h)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)(Layer/* default */.Z))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new GraphicsCollection/* GraphicsCollection */.J,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r)}removeMany(r){this.graphics.removeMany(r)}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r)}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:ElevationInfo/* default */.Z})],n.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)((0,OwningCollection/* owningCollectionProperty */.z)(GraphicsCollection/* GraphicsCollection */.J,"graphics"))],n.prototype,"graphics",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],n.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],n.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],n.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],n.prototype,"internal",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.GraphicsLayer")],n);const h=n;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/objectIdUtils.js
var objectIdUtils = __webpack_require__(93711);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(12512);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(43411);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(15498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(1759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(27624);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/MapNotesLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function F(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new Field/* default */.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),_=new Field/* default */.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let P=class extends h{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],P.prototype,"sublayers",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],P.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],P.prototype,"visibilityMode",void 0),P=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],P);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new SimpleFillSymbol/* default */.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new SimpleLineSymbol/* default */.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new SimpleMarkerSymbol/* default */.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new SimpleMarkerSymbol/* default */.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new TextSymbol/* default */.Z).toJSON()}];let z=class extends((0,BlendLayer/* BlendLayer */.h)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(Layer/* default */.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=SpatialReference/* default.WGS84 */.Z.WGS84,this.sublayers=new Collection/* default */.Z(k.map((e=>new P({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!F(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,o){if(!F(t))return null;const i=t.layers.map((e=>{const t=new FeatureLayer["default"];return t.read(e,o),t}));return new Collection/* default */.Z({items:i})}readLegacyfeatureCollectionJSON(e,t){return F(t)?(0,lang/* clone */.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every((e=>!e.layerDefinition.extent)))return new Extent/* default */.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:SpatialReference/* default.WGS84 */.Z.WGS84});const r=SpatialReference/* default.fromJSON */.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?Extent/* default.fromJSON */.Z.fromJSON(r).union(e):e}),new Extent/* default */.Z({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?SpatialReference/* default.fromJSON */.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):SpatialReference/* default.WGS84 */.Z.WGS84}readSublayers(e,o,i){if(F(o))return null;const l=[];for(let r=0;r<o.layers.length;r++){var a;const{layerDefinition:e,featureSet:i}=o.layers[r],n=null!=(a=e.geometryType)?a:i.geometryType,s=k.find((t=>{var r,o,i;return n===t.geometryTypeJSON&&(null==(r=e.drawingInfo)||null==(o=r.renderer)||null==(i=o.symbol)?void 0:i.type)===t.identifyingSymbol.type}));if(s){const r=new P({id:s.layerId,title:e.name,layer:this,graphics:i.features.map((({geometry:e,symbol:r,attributes:o,popupInfo:i})=>Graphic/* default.fromJSON */.Z.fromJSON({attributes:o,geometry:e,symbol:r,popupTemplate:i})))});l.push(r)}}return new Collection/* default */.Z(l)}writeSublayers(e,t,r,i){const{minScale:n,maxScale:p}=this;if((0,maybe/* isNone */.Wi)(e))return;const y=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing){var m;if(y)null==i||null==(m=i.messages)||m.push(new Error/* default */.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"));return}const u=[];let c=this.spatialReference.toJSON();e:for(const o of e)for(const e of o.graphics)if((0,maybe/* isSome */.pC)(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const o of k){const t=e.find((e=>o.layerId===e.id));this._writeMapNoteSublayer(u,t,o,n,p,c,i)}(0,object/* setDeepValue */.RB)("featureCollection.layers",u,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,lang/* clone */.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,maybe/* isNone */.Wi)(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if((0,maybe/* isSome */.pC)(r.geometry)){const o=r.geometry;e?(0,spatialReferenceUtils/* equals */.fS)(o.spatialReference,e)||((0,projection/* canProjectWithoutEngine */.Up)(o.spatialReference,e)||(0,projection/* isLoaded */.kR)()||await (0,projection/* load */.zD)(),r.geometry=(0,projection/* project */.iV)(o,e)):e=o.spatialReference,t.push(r)}const r=await (0,normalizeUtils/* normalizeCentralMeridian */.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return (0,maybe/* isNone */.Wi)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,a,n,s){const p=[];if(!(0,maybe/* isNone */.Wi)(t)){for(const e of t.graphics)this._writeMapNote(p,e,r.geometryType,s);this._normalizeObjectIds(p,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,lang/* clone */.d9)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[G.toJSON(),_.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if((0,maybe/* isNone */.Wi)(t))return;const{geometry:i,symbol:n,popupTemplate:s}=t;if((0,maybe/* isNone */.Wi)(i))return;var y,m;if(i.type!==r)return void(null==o||null==(y=o.messages)||y.push(new Warning/* default */.Z("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if((0,maybe/* isNone */.Wi)(n))return void(null==o||null==(m=o.messages)||m.push(new Warning/* default */.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const u={attributes:{...t.attributes},geometry:i.toJSON(),symbol:n.toJSON()};(0,maybe/* isSome */.pC)(s)&&(u.popupInfo=s.toJSON()),e.push(u)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,objectIdUtils/* findLastObjectIdFromFeatures */.S)(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"featureCollections",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!1}})],z.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-map","portal-item"],"fullExtent",["layers"])],z.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"multipointLayer",null),(0,tslib_es6._)([(0,property/* property */.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"pointLayer",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"polygonLayer",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"polylineLayer",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference/* default */.Z})],z.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),(0,tslib_es6._)([(0,writer/* writer */.c)("web-map","sublayers")],z.prototype,"writeSublayers",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],z.prototype,"textLayer",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],z.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.MapNotesLayer")],z);const B=z;


/***/ }),

/***/ 93711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ n),
/* harmony export */   "X": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=1;function n(t,n){let o=0;for(const r of n){var e;const n=null==(e=r.attributes)?void 0:e[t];"number"==typeof n&&isFinite(n)&&(o=Math.max(o,n))}return o}


/***/ })

};
;
//# sourceMappingURL=849.render-page.js.map