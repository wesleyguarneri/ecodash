"use strict";
exports.id = 9871;
exports.ids = [9871];
exports.modules = {

/***/ 59871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ K)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(66591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(81739);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(63592);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(25709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(64189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/FeatureLayer.js + 24 modules
var FeatureLayer = __webpack_require__(77567);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(86618);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends((0,Identifiable/* IdentifiableMixin */.I)(MultiOriginJSONSupport/* MultiOriginJSONSupport */.w)){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(r,e){return"string"==typeof e.alias?e.alias:"string"==typeof e.name?e.name:""}readIdOnlyOnce(r){return-1!==this.id?this.id:"number"==typeof r?r:void 0}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("service","title",["alias","name"])],l.prototype,"readTitle",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],l.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("service","id")],l.prototype,"readIdOnlyOnce",null),(0,tslib_es6._)([(0,property/* property */.Cb)((0,commonProperties/* readOnlyService */.Lx)(String))],l.prototype,"modelName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)((0,commonProperties/* readOnlyService */.Lx)(Boolean))],l.prototype,"isEmpty",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],l.prototype,"visible",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],l.prototype,"opacity",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.buildingSublayers.BuildingSublayer")],l);const n=l;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/capabilities.js
var capabilities = __webpack_require__(31484);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(89076);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(28790);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(40909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var I3SLayerDefinitions = __webpack_require__(97304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(10171);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 2 modules
var ElevationInfo = __webpack_require__(35957);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D=Logger/* default.getLogger */.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Q=(0,fieldProperties/* defineFieldProperties */.v)();let R=class extends(Loadable/* default.LoadableMixin */.Z.LoadableMixin((0,core_Promise/* EsriPromiseMixin */.v)(n))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new FieldsIndex/* default */.Z(this.fields)}readAssociatedLayer(e,r){const t=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return (0,maybe/* isSome */.pC)(t)&&"number"==typeof o?new FeatureLayer["default"]({portalItem:t,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return (0,maybe/* isSome */.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=(0,maybe/* isSome */.pC)(e)?e.signal:null,t=this._fetchService(r).then((()=>{this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,D,r)}));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.eZ)(this,e)}async _fetchService(e){const r=(await (0,request["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t,o,s,i;const a=null==(t=this.getFeatureType(null==r?void 0:r.feature))||null==(o=t.domains)?void 0:o[e];return a&&"inherited"!==a.type?a:null!=(s=null==(i=this.getField(e))?void 0:i.domain)?s:null}getFeatureType(e){return e&&(0,maybe/* isSome */.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return (0,maybe/* isSome */.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return (0,maybe/* isSome */.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,maybe/* isSome */.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:capabilities/* zeroCapabilities */.C,{query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}=e;return{query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}}createQuery(){const e=new Query/* default */.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,maybe/* isSome */.pC)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return (0,maybe/* isSome */.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,maybe/* isNone */.Wi)(this.associatedLayer))throw new Error/* default */.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new Error/* default */.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],R.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:I3SLayerDefinitions/* I3SNodePageDefinition */.U4,readOnly:!0})],R.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3SMaterialDefinition */.QI],readOnly:!0})],R.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3STextureSetDefinition */.Yh],readOnly:!0})],R.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3SGeometryDefinition */.H3],readOnly:!0})],R.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],R.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],R.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],R.prototype,"rootNode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(Q.fields)],R.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],R.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:FeatureLayer["default"]})],R.prototype,"associatedLayer",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("service","associatedLayer",["associatedLayerID"])],R.prototype,"readAssociatedLayer",null),(0,tslib_es6._)([(0,property/* property */.Cb)(Q.outFields)],R.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0})],R.prototype,"objectIdField",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:String,json:{read:!1}})],R.prototype,"displayField",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],R.prototype,"apiKey",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Extent/* default */.Z,aliasOf:"layer.fullExtent"})],R.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:SpatialReference/* default */.Z,aliasOf:"layer.spatialReference"})],R.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,aliasOf:"layer.version"})],R.prototype,"version",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:ElevationInfo/* default */.Z,aliasOf:"layer.elevationInfo"})],R.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],R.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],R.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["hide","show"],json:{write:!0}})],R.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:types/* webSceneRendererTypes */.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],R.prototype,"renderer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* popupEnabled */.C_)],R.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PopupTemplate/* default */.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],R.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],R.prototype,"normalReferenceFrame",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],R.prototype,"types",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],R.prototype,"typeIdField",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!1}}),(0,enumeration/* enumeration */.J)(new jsonMap/* JSONMap */.Xn({"3DObject":"3d-object",Point:"point"}))],R.prototype,"layerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],R.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],R.prototype,"profile",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],R.prototype,"capabilities",null),R=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],R);const U=R;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(96863);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;const p={type:Collection/* default */.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:BuildingGroupSublayer_l}}},read:!1}};function BuildingGroupSublayer_l(r,o,t){if(r&&Array.isArray(r))return new Collection/* default */.Z(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}t&&t.messages&&r&&t.messages.push(new Warning/* default */.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t}))})))}let c=a=class extends n{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return (0,loadAll/* loadAllChildren */.wF)(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e)}))))}};function y(r){return"group"===r.layerType?c:U}(0,tslib_es6._)([(0,property/* property */.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(p)],c.prototype,"sublayers",void 0),c=a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o)}))}r.sublayersProperty=p,r.readSublayers=BuildingGroupSublayer_l,r.forEachSublayer=e}(c||(c={}));const d=c;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(91223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(87232);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(69877);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(12173);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.type=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterAuthoringInfo")],e);const BuildingFilterAuthoringInfo_p=e;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoType_p;let i=BuildingFilterAuthoringInfoType_p=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new BuildingFilterAuthoringInfoType_p({filterType:this.filterType,filterValues:(0,lang/* clone */.d9)(this.filterValues)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],i.prototype,"filterType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{write:!0}})],i.prototype,"filterValues",void 0),i=BuildingFilterAuthoringInfoType_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],i);const BuildingFilterAuthoringInfoType_l=i;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoBlock_c;const BuildingFilterAuthoringInfoBlock_l=Collection/* default.ofType */.Z.ofType(BuildingFilterAuthoringInfoType_l);let BuildingFilterAuthoringInfoBlock_n=BuildingFilterAuthoringInfoBlock_c=class extends JSONSupport/* JSONSupport */.wq{clone(){return new BuildingFilterAuthoringInfoBlock_c({filterTypes:(0,lang/* clone */.d9)(this.filterTypes)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:BuildingFilterAuthoringInfoBlock_l,json:{write:!0}})],BuildingFilterAuthoringInfoBlock_n.prototype,"filterTypes",void 0),BuildingFilterAuthoringInfoBlock_n=BuildingFilterAuthoringInfoBlock_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],BuildingFilterAuthoringInfoBlock_n);const m=BuildingFilterAuthoringInfoBlock_n;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoCheckbox_p;const BuildingFilterAuthoringInfoCheckbox_l=Collection/* default.ofType */.Z.ofType(m);let BuildingFilterAuthoringInfoCheckbox_n=BuildingFilterAuthoringInfoCheckbox_p=class extends BuildingFilterAuthoringInfo_p{constructor(){super(...arguments),this.type="checkbox"}clone(){return new BuildingFilterAuthoringInfoCheckbox_p({filterBlocks:(0,lang/* clone */.d9)(this.filterBlocks)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:["checkbox"]})],BuildingFilterAuthoringInfoCheckbox_n.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:BuildingFilterAuthoringInfoCheckbox_l,json:{write:!0}})],BuildingFilterAuthoringInfoCheckbox_n.prototype,"filterBlocks",void 0),BuildingFilterAuthoringInfoCheckbox_n=BuildingFilterAuthoringInfoCheckbox_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],BuildingFilterAuthoringInfoCheckbox_n);const u=BuildingFilterAuthoringInfoCheckbox_n;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterMode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* JSONSupport */.wq{};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterMode")],t);const BuildingFilterMode_p=t;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterModeSolid_t;let BuildingFilterModeSolid_p=BuildingFilterModeSolid_t=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="solid"}clone(){return new BuildingFilterModeSolid_t}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],BuildingFilterModeSolid_p.prototype,"type",void 0),BuildingFilterModeSolid_p=BuildingFilterModeSolid_t=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterModeSolid")],BuildingFilterModeSolid_p);const BuildingFilterModeSolid_i=BuildingFilterModeSolid_p;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/edges/utils.js + 3 modules
var utils = __webpack_require__(64372);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterModeWireFrame_c;let BuildingFilterModeWireFrame_m=BuildingFilterModeWireFrame_c=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new BuildingFilterModeWireFrame_c({edges:(0,lang/* clone */.d9)(this.edges)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({wireFrame:"wire-frame"})],BuildingFilterModeWireFrame_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(utils/* symbol3dEdgesProperty */.Z)],BuildingFilterModeWireFrame_m.prototype,"edges",void 0),BuildingFilterModeWireFrame_m=BuildingFilterModeWireFrame_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterModeWireFrame")],BuildingFilterModeWireFrame_m);const BuildingFilterModeWireFrame_a=BuildingFilterModeWireFrame_m;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterModeXRay_t;let BuildingFilterModeXRay_p=BuildingFilterModeXRay_t=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="x-ray"}clone(){return new BuildingFilterModeXRay_t}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],BuildingFilterModeXRay_p.prototype,"type",void 0),BuildingFilterModeXRay_p=BuildingFilterModeXRay_t=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterModeXRay")],BuildingFilterModeXRay_p);const BuildingFilterModeXRay_c=BuildingFilterModeXRay_p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilterBlock_d;const BuildingFilterBlock_a={nonNullable:!0,types:{key:"type",base:BuildingFilterMode_p,typeMap:{solid:BuildingFilterModeSolid_i,"wire-frame":BuildingFilterModeWireFrame_a,"x-ray":BuildingFilterModeXRay_c}},json:{read:e=>{switch(e&&e.type){case"solid":return BuildingFilterModeSolid_i.fromJSON(e);case"wireFrame":return BuildingFilterModeWireFrame_a.fromJSON(e);case"x-ray":return BuildingFilterModeXRay_c.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let BuildingFilterBlock_u=BuildingFilterBlock_d=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new BuildingFilterModeSolid_i,this.title=""}clone(){return new BuildingFilterBlock_d({filterExpression:this.filterExpression,filterMode:(0,lang/* clone */.d9)(this.filterMode),title:this.title})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilterBlock_u.prototype,"filterExpression",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(BuildingFilterBlock_a)],BuildingFilterBlock_u.prototype,"filterMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilterBlock_u.prototype,"title",void 0),BuildingFilterBlock_u=BuildingFilterBlock_d=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilterBlock")],BuildingFilterBlock_u);const BuildingFilterBlock_c=BuildingFilterBlock_u;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var BuildingFilter_u;const BuildingFilter_d=Collection/* default.ofType */.Z.ofType(BuildingFilterBlock_c);let BuildingFilter_m=BuildingFilter_u=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,uuid/* generateUUID */.D)(),this.name=null}clone(){return new BuildingFilter_u({description:this.description,filterBlocks:(0,lang/* clone */.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,lang/* clone */.d9)(this.filterAuthoringInfo)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],BuildingFilter_m.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:BuildingFilter_d,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"filterBlocks",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:{key:"type",base:BuildingFilterAuthoringInfo_p,typeMap:{checkbox:u}},json:{read:o=>"checkbox"===(o&&o.type)?u.fromJSON(o):null,write:!0}})],BuildingFilter_m.prototype,"filterAuthoringInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"name",void 0),BuildingFilter_m=BuildingFilter_u=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFilter")],BuildingFilter_m);const f=BuildingFilter_m;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const BuildingSummaryStatistics_u=Logger/* default.getLogger */.Z.getLogger("esri.layers.support.BuildingSummaryStatistics");let BuildingSummaryStatistics_n=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],BuildingSummaryStatistics_n.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],BuildingSummaryStatistics_n.prototype,"modelName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],BuildingSummaryStatistics_n.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number})],BuildingSummaryStatistics_n.prototype,"min",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number})],BuildingSummaryStatistics_n.prototype,"max",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],BuildingSummaryStatistics_n.prototype,"mostFrequentValues",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Number]})],BuildingSummaryStatistics_n.prototype,"subLayerIds",void 0),BuildingSummaryStatistics_n=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingFieldStatistics")],BuildingSummaryStatistics_n);let BuildingSummaryStatistics_m=class extends(Loadable/* default.LoadableMixin */.Z.LoadableMixin((0,core_Promise/* EsriPromiseMixin */.v)(JSONSupport/* JSONSupport */.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(BuildingSummaryStatistics_u.error("building summary statistics are not loaded"),null)}load(e){const r=(0,maybe/* isSome */.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await (0,request["default"])(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0,type:String})],BuildingSummaryStatistics_m.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:[BuildingSummaryStatistics_n],json:{read:{source:"summary"}}})],BuildingSummaryStatistics_m.prototype,"fields",null),BuildingSummaryStatistics_m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.BuildingSummaryStatistics")],BuildingSummaryStatistics_m);const BuildingSummaryStatistics_c=BuildingSummaryStatistics_m;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FetchAssociatedFeatureLayer.js
var FetchAssociatedFeatureLayer = __webpack_require__(31906);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/BuildingSceneLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const A=Logger/* default.getLogger */.Z.getLogger("esri.layers.BuildingSceneLayer"),E=Collection/* default.ofType */.Z.ofType(f),_=(0,lang/* clone */.d9)(d.sublayersProperty);_.json.origins["web-scene"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends((0,SceneService/* SceneService */.V)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)((0,APIKeyMixin/* APIKeyMixin */.V)(Layer/* default */.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new CollectionFlattener/* default */.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,t){const s=d.readSublayers(e,r,t);return d.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d.forEachSublayer(e,(e=>e.read(r.get(e.id),t)))}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new Error/* default */.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r)})),s.length>0&&(r.sublayers=s)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push((0,lang/* clone */.d9)(e))}))}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=(0,urlUtils/* join */.v_)(this.parsedUrl.path,r.statisticsHRef);return new BuildingSummaryStatistics_c({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=(0,maybe/* isSome */.pC)(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.r9).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return (0,loadAll/* loadAll */.GZ)(this,(e=>{d.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new Error/* default */.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new FetchAssociatedFeatureLayer/* FetchAssociatedFeatureLayer */.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(t){A.warn("Associated feature service item could not be loaded",t)}}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],P.prototype,"allSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(_)],P.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("service","sublayers")],P.prototype,"readSublayers",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:E,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:BuildingSummaryStatistics_c})],P.prototype,"summaryStatistics",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* sceneLayerFullExtent */.vg)],P.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)((0,commonProperties/* readOnlyService */.Lx)(SpatialReference/* default */.Z))],P.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],P.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],P.prototype,"associatedFeatureServiceItem",void 0),P=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.BuildingSceneLayer")],P);const K=P;


/***/ }),

/***/ 31906:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88256);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61681);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78668);
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77567);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26869);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53110);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)})}async fetch(){var t;if(!this.urlParts)return null;const r=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isNone */ .Wi)(r))return this.loadFromUrl();const a=await this.findAndLoadRelatedPortalItem(r);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isNone */ .Wi)(a)?null:this.loadFeatureLayerFromPortalItem(a)}async fetchPortalItem(){var t;if(!this.urlParts)return null;const r=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isNone */ .Wi)(r)?null:this.findAndLoadRelatedPortalItem(r)}async fetchRootDocument(){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(this.rootDocument))return this.rootDocument;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isNone */ .Wi)(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},i=`${this.urlParts.root}/SceneServer`;try{const e=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i,t);this.rootDocument=e.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const a=null==(e=_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=a&&a.owningSystemUrl)return a.owningSystemUrl;const s=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(n){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .r9)(n)}return null}async findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .r9)(r),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_3__["default"]({url:r,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_3__["default"]({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this.urlParts.layerId,s=this.fetchRootDocument(),n=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e,a),[o,l]=await Promise.all([n,s]),c=l&&l.layers,h=o.data&&o.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,h.length);r++){if(c[r].id===i)return`${e}/${h[r].id}`}else if(i<h.length)return`${e}/${h[i].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const r=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]({id:t,apiKey:this.apiKey}),e=await this.fetchServiceOwningPortalUrl();(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(e)&&(r.portal=new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z({url:e}));try{return r.load({signal:this.signal})}catch(s){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .r9)(s),null}}}


/***/ }),

/***/ 31484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ })

};
;
//# sourceMappingURL=9871.render-page.js.map