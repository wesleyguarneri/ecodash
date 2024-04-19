"use strict";
exports.id = 4420;
exports.ids = [4420];
exports.modules = {

/***/ 84420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ k)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(80020);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(86004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(45510);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 2 modules
var DotDensityRenderer = __webpack_require__(66908);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(2802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(22836);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(50172);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
var UniqueValueRenderer = __webpack_require__(25634);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(72506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(54021);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(86745);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(59659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/HandleOwner.js
var HandleOwner = __webpack_require__(53280);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 4 modules
var workers = __webpack_require__(47109);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(40400);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/ogc/wfsUtils.js + 1 modules
var wfsUtils = __webpack_require__(48662);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(51211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/WFSSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let j=class extends((0,HandleOwner/* HandleOwnerMixin */.p)(Loadable/* default */.Z)){constructor(){super(...arguments),this.capabilities=(0,clientSideDefaults/* createCapabilities */.MS)(!1,!1),this.type="wfs",this.refresh=(0,promiseUtils/* debounce */.Ds)((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){var t;const r=null!=(t=(0,maybe/* isSome */.pC)(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return FeatureSet["default"].fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:Extent/* default.fromJSON */.Z.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:r,customParameters:o,name:s,namespaceUri:a,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new Error/* default */.Z("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await (0,wfsUtils/* getCapabilities */.FU)(r,{customParameters:o,...e}));const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=u?await (0,wfsUtils/* getWFSLayerInfo */.be)(this.wfsCapabilities,s,a,{spatialReference:n,customParameters:o,signal:null==e?void 0:e.signal}):{...(0,wfsUtils/* prepareWFSLayerFields */.eB)(c),geometryType:p,name:s,namespaceUri:a,spatialReference:n,swapXY:l},d=(0,maybe/* unwrap */.Wg)((0,wfsUtils/* findFeatureType */.ft)(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=typeUtils/* featureGeometryTypeKebabDictionary.toJSON */.Mk.toJSON(y.geometryType);return{customParameters:o,featureType:d,fields:y.fields.map((e=>e.toJSON())),geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY}}async _startWorker(e){const[t,r]=await (0,promiseUtils/* eachAlways */.as)([this._createLoadOptions(e),(0,workers/* open */.bA)("WFSSourceWorker",{...e,strategy:(0,has/* default */.Z)("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,a=r.value||null;if(s)throw a&&a.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:(0,clientSideDefaults/* createDrawingInfo */.bU)(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}}}};(0,tslib_es6._)([(0,property/* property */.Cb)()],j.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],j.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],j.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],j.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],j.prototype,"wfsCapabilities",void 0),j=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.graphics.sources.WFSSource")],j);const v=j;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(27668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(63989);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var FeatureEffectLayer = __webpack_require__(22368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OrderedLayer.js + 1 modules
var OrderedLayer = __webpack_require__(50386);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(12478);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2030);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureReductionUtils.js + 3 modules
var featureReductionUtils = __webpack_require__(94759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(12512);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(89076);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js + 1 modules
var fieldUtils = __webpack_require__(17095);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(26732);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(49341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(10171);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/WFSLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var J;const M=(0,fieldProperties/* defineFieldProperties */.v)();let _=J=class extends((0,OrderedLayer/* OrderedLayer */.c)((0,CustomParametersMixin/* CustomParametersMixin */.N)((0,FeatureEffectLayer/* FeatureEffectLayer */.b)((0,BlendLayer/* BlendLayer */.h)((0,TemporalLayer/* TemporalLayer */.n)((0,RefreshableLayer/* RefreshableLayer */.Q)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(Layer/* default */.Z))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=SpatialReference/* default.WGS84 */.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new J({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,fieldUtils/* fixRendererFields */.YN)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==wfsUtils/* WFS_OID_FIELD_NAME */.M8));this.geometryField&&i.unshift(new Field/* default */.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,object/* setDeepValue */.RB)(t,i.map((e=>e.toJSON())),r)}get parsedUrl(){return this.url?(0,urlUtils/* urlToObject */.mN)(this.url):null}set renderer(e){(0,fieldUtils/* fixRendererFields */.YN)(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.eZ)(this,e)}createQuery(){const e=new Query/* default */.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){var t;return null==(t=this.getField(e))?void 0:t.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(Query/* default.from */.Z.from(e)||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(Query/* default.from */.Z.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(Query/* default.from */.Z.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(Query/* default.from */.Z.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh(this.customParameters);return (0,maybe/* isSome */.pC)(r)&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,aliasOf:"source.capabilities"})],_.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],_.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],_.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],_.prototype,"customParameters",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],_.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],_.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],_.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],_.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(featureReductionUtils/* featureReductionProperty */.d)],_.prototype,"featureReduction",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"featureUrl",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Field/* default */.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],_.prototype,"fields",void 0),(0,tslib_es6._)([(0,writer/* writer */.c)("fields")],_.prototype,"writeFields",null),(0,tslib_es6._)([(0,property/* property */.Cb)(M.fieldsIndex)],_.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent/* default */.Z,json:{name:"extent"}})],_.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],_.prototype,"geometryField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:typeUtils/* featureGeometryTypeKebabDictionary.read */.Mk.read},write:{target:"layerDefinition.geometryType",writer:typeUtils/* featureGeometryTypeKebabDictionary.write */.Mk.write,ignoreOrigin:!0},origins:{service:{read:typeUtils/* featureGeometryTypeKebabDictionary.read */.Mk.read}}}})],_.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],_.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* labelsVisible */.iR)],_.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[LabelClass/* default */.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.r},write:!0}})],_.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* legendEnabled */.rn)],_.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],_.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["WFS"]})],_.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"maxFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],_.prototype,"mode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"namespaceUri",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* opacityDrawingInfo */.bT)],_.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(M.outFields)],_.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* popupEnabled */.C_)],_.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PopupTemplate/* default */.Z,json:{name:"popupInfo",write:!0}})],_.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:types/* rendererTypes */.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:types/* webSceneRendererTypes */.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],_.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* screenSizePerspectiveEnabled */.YI)],_.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],_.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference/* default */.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],_.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:[ensureType/* Integer */.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"spatialReferences",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"swapXY",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],_.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0})],_.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* url */.HQ)],_.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"version",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({aliasOf:"source.wfsCapabilities"})],_.prototype,"wfsCapabilities",void 0),_=J=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.WFSLayer")],_);const k=_;


/***/ }),

/***/ 10287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


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
//# sourceMappingURL=4420.render-page.js.map