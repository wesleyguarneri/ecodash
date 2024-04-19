"use strict";
exports.id = 3108;
exports.ids = [3108,8611];
exports.modules = {

/***/ 73108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(80020);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(86745);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* JSONSupport */.wq{constructor(r){super(r),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l=t;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let p=d=class extends l{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new d({field:this.field,requiredClearBits:(0,lang/* clone */.d9)(this.requiredClearBits),requiredSetBits:(0,lang/* clone */.d9)(this.requiredSetBits)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:[ensureType/* Integer */.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[ensureType/* Integer */.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=d=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);const u=p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;let PointCloudReturnFilter_p=n=class extends l{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new n({field:this.field,includedReturns:(0,lang/* clone */.d9)(this.includedReturns)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudReturnFilter_p.prototype,"includedReturns",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudReturnFilter:"return"})],PointCloudReturnFilter_p.prototype,"type",void 0),PointCloudReturnFilter_p=n=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],PointCloudReturnFilter_p);const PointCloudReturnFilter_u=PointCloudReturnFilter_p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointCloudValueFilter_p;let PointCloudValueFilter_l=PointCloudValueFilter_p=class extends l{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new PointCloudValueFilter_p({field:this.field,mode:this.mode,values:(0,lang/* clone */.d9)(this.values)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudValueFilter_l.prototype,"mode",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudValueFilter:"value"})],PointCloudValueFilter_l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudValueFilter_l.prototype,"values",void 0),PointCloudValueFilter_l=PointCloudValueFilter_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],PointCloudValueFilter_l);const PointCloudValueFilter_u=PointCloudValueFilter_l;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:l,typeMap:{value:PointCloudValueFilter_u,bitfield:u,return:PointCloudReturnFilter_u}};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(12512);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(89076);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/ExpressionInfo.js
var ExpressionInfo = __webpack_require__(18228);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js + 1 modules
var PointCloudClassBreaksRenderer = __webpack_require__(99723);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(46999);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let c=i=class extends PointCloudRenderer/* default */.Z{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:(0,lang/* clone */.d9)(this.field)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudRGBRenderer")],c);const PointCloudRGBRenderer_n=c;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var PointCloudStretchRenderer = __webpack_require__(5947);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js + 1 modules
var PointCloudUniqueValueRenderer = __webpack_require__(60948);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const typeUtils_i={key:"type",base:PointCloudRenderer/* default */.Z,typeMap:{"point-cloud-class-breaks":PointCloudClassBreaksRenderer/* default */.Z,"point-cloud-rgb":PointCloudRGBRenderer_n,"point-cloud-stretch":PointCloudStretchRenderer/* default */.Z,"point-cloud-unique-value":PointCloudUniqueValueRenderer/* default */.Z},errorContext:"renderer"};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(10171);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/PointCloudLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const N=Logger/* default.getLogger */.Z.getLogger("esri.layers.PointCloudLayer"),R=(0,fieldProperties/* defineFieldProperties */.v)();let O=class extends((0,SceneService/* SceneService */.V)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)((0,APIKeyMixin/* APIKeyMixin */.V)(Layer/* default */.Z)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new Field/* default */.Z;return"FieldTypeInteger"===e.type&&((e=(0,lang/* clone */.d9)(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new Field/* default */.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,r,t,o){(0,object/* setDeepValue */.RB)("layerDefinition.drawingInfo.renderer",e.write({},o),r)}load(e){const r=(0,maybe/* isSome */.pC)(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.r9).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=(0,popupUtils/* createPopupTemplate */.eZ)(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new ExpressionInfo/* default */.Z({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new ExpressionInfo/* default */.Z({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new Error/* default */.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new Error/* default */.Z("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=(0,urlUtils/* join */.v_)(this.parsedUrl.path,`./statistics/${o.key}`);return (0,request["default"])(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new Error/* default */.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new Error/* default */.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error/* default */.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new Error/* default */.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&N.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&N.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* popupEnabled */.C_)],O.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PopupTemplate/* default */.Z,json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],O.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Field/* default */.Z]})],O.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(R.fieldsIndex)],O.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),(0,tslib_es6._)([(0,property/* property */.Cb)(R.outFields)],O.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],O.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* legendEnabled */.rn)],O.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:typeUtils_i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:typeUtils_i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),(0,tslib_es6._)([(0,writer/* writer */.c)("renderer")],O.prototype,"writeRenderer",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.PointCloudLayer")],O);const _=O;


/***/ }),

/***/ 69877:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ N)
});

// UNUSED EXPORTS: SCENE_SERVICE_ITEM_TYPE

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(50516);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(64307);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(20692);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(40909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 1 modules
var Portal = __webpack_require__(26869);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(53110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(67979);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(12173);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/resourceUtils.js
var resourceUtils = __webpack_require__(68611);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/webdoc/support/saveUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function saveUtils_a(r,a,u){if(!a||!a.resources)return;const h=a.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f=new Set,m=[];i.forEach((e=>{h.delete(e),r.paths.push(e)}));for(const e of a.resources.toUpdate)if(h.delete(e.resource.path),i.has(e.resource.path)||f.has(e.resource.path)){const{resource:o,content:t,finish:a,error:p}=e,h=(0,resourceUtils.getSiblingOfSameTypeI)(o,(0,uuid/* generateUUID */.D)());r.paths.push(h.path),m.push(n({resource:h,content:t,finish:a,error:p},u))}else r.paths.push(e.resource.path),m.push(p(e,u)),f.add(e.resource.path);for(const e of a.resources.toAdd)m.push(n(e,u)),r.paths.push(e.resource.path);if(h.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})))})),0===m.length)return;const l=await (0,promiseUtils/* eachAlways */.as)(m);(0,promiseUtils/* throwIfAborted */.k_)(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new Error/* default */.Z("save:resources","Failed to save one or more resources",{errors:d})}async function n(e,o){const t=await (0,asyncUtils/* result */.q6)(e.resource.portalItem.addResource(e.resource,e.content,o));if(!0!==t.ok)throw e.error&&e.error(t.error),t.error;e.finish&&e.finish(e.resource)}async function p(e,o){const t=await (0,asyncUtils/* result */.q6)(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error(t.error),t.error;e.finish(e.resource)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const R=Logger/* default.getLogger */.Z.getLogger("esri.layers.mixins.SceneService"),N=i=>{let N=class extends i{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.Ds)((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return SpatialReference/* default.fromJSON */.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new SpatialReference/* default */.Z(i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return Extent/* default.fromJSON */.Z.fromJSON(i,r)}const i=t.store,o=this._readSpatialReference(t);return null==o||null==i||null==i.extent||!Array.isArray(i.extent)||i.extent.some((e=>e<U))?null:new Extent/* default */.Z({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return (0,arcgisLayerUrl/* titleFromUrlAndName */.a7)(this.url,t.name);let i=t.name;if(!i&&this.url){const e=(0,arcgisLayerUrl/* parse */.Qc)(this.url);(0,maybe/* isSome */.pC)(e)&&(i=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(i=r+" - "+i),(0,arcgisLayerUrl/* cleanTitle */.ld)(i)}set url(e){const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){(0,arcgisLayerUrl/* writeUrlWithLayerId */.wH)(this,e,"layers",t,i)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,urlUtils/* urlToObject */.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,i;const o=e.rootIndex%e.pageSize,s=null==(t=e.rootPage)||null==(i=t.nodes)?void 0:i[o];if(null==s||null==s.obb||null==s.obb.center||null==s.obb.halfSize)throw new Error/* default */.Z("sceneservice:invalid-node-page","Invalid node page.");if(s.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const a=s.obb.halfSize,n=s.obb.center[2],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new Error/* default */.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request["default"])(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(i=!0),i)return this.read(r.data,{origin:"service",url:this.parsedUrl}),this._fetchVoxelServiceLayer();const o=r.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const r=(await (0,request["default"])(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const o of i)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const i={...E,...t};let o=PortalItem["default"].from(e);o||(R.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new Error/* default */.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const s=o.portal||Portal/* default.getDefault */.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=O,o.portal=s;const a={origin:"portal-item",url:null,messages:[],portal:s,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations),await this._validateAgainstJSONSchema(n,a,i),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,i,1),await s._signIn(),await s.user.addItem({item:o,folder:i&&i.folder,data:n}),await saveUtils_a(this.resourceReferences,a,null),this.portalItem=o,(0,originUtils/* updateOrigins */.D)(a),a.portalItem=o,o}async _save(e){const t={...E,...e};this.portalItem||(R.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new Error/* default */.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==O&&(R.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+O),await Promise.reject(new Error/* default */.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${O}"`))),await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&(0,urlUtils/* urlToObject */.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||Portal/* default.getDefault */.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(o,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await saveUtils_a(this.resourceReferences,i,null),(0,originUtils/* updateOrigins */.D)(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new Error/* default */.Z(e.name,e.message,e.details)));if(i&&i.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),i.validationOptions.enabled||T){const t=(await __webpack_require__.e(/* import() */ 7062).then(__webpack_require__.bind(__webpack_require__, 67062))).validate(e,i.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(R.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.validationOptions.failPolicy){const e=t.map((e=>new Error/* default */.Z("sceneservice:schema-validation",e))).concat(o);throw new Error/* default */.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new Error/* default */.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return (0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties.id)],N.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference/* default */.Z})],N.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent/* default */.Z})],N.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:HeightModelInfo/* default */.Z})],N.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],N.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],N.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],N.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("version",["store.version"])],N.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{read:!1}})],N.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],N.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("portal-item","title")],N.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.r)("service","title",["name"])],N.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],N.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* url */.HQ)],N.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.c)("url")],N.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],N.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],N.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],N.prototype,"rootNode",void 0),N=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.mixins.SceneService")],N),N},U=-1e38,T=!1,O="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};


/***/ }),

/***/ 40909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70375);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n,t,s,a,i,d){let l=null;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .isSome */ .pC)(s)){const o=`${n}/nodepages/`,t=o+Math.floor(s.rootIndex/s.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{query:{f:"json",token:a},responseType:"json",signal:d})).data,rootIndex:s.rootIndex,pageSize:s.nodesPerPage,lodMetric:s.lodSelectionMetricType,urlPrefix:o}}catch(f){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .isSome */ .pC)(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,f),l=f}}if(!t)return null;const p=`${n}/nodes/`,c=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c,{query:{f:"json",token:a},responseType:"json",signal:d})).data,urlPrefix:p}}catch(f){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:f,url:c})}}


/***/ }),

/***/ 68611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOrUpdateResource": () => (/* binding */ u),
/* harmony export */   "contentToBlob": () => (/* binding */ h),
/* harmony export */   "fetchResources": () => (/* binding */ c),
/* harmony export */   "getSiblingOfSameType": () => (/* binding */ f),
/* harmony export */   "getSiblingOfSameTypeI": () => (/* binding */ w),
/* harmony export */   "removeAllResources": () => (/* binding */ l),
/* harmony export */   "removeResource": () => (/* binding */ i),
/* harmony export */   "splitPrefixFileNameAndExtension": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70375);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3466);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function c(e,t={},a){await e.load(a);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(e.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:n,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(a,"signal")},p=await e.portal._request(o,l);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function u(e,o,n,c){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;await u.load(c);const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(u.userItemUrl,"add"===o?"addResources":"updateResources"),[l,d]=p(e.path),m=await h(n),f=new FormData;return l&&"."!==l&&f.append("resourcesPrefix",l),f.append("fileName",d),f.append("file",m,d),f.append("f","json"),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(c)&&c.access&&f.append("access",c.access),await u.portal._request(i,{method:"post",body:f,signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(c,"signal")}),e}async function i(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:a.path},signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(o,"signal")}),a.portalItem=null}async function l(e,t){await e.load(t);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=m(e),[a,o]=p(t);return[a,o,r]}function m(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Ml)(e);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isNone */ .Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function h(t){if(t instanceof Blob)return t;return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(r,t+a))}


/***/ }),

/***/ 99723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ d)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(46999);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(24794);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let p=a=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,lang/* clone */.d9)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Color/* default */.Z,json:{type:[ensureType/* Integer */.z8],write:!0}})],p.prototype,"color",void 0),p=a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c=p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let PointCloudClassBreaksRenderer_a=l=class extends PointCloudRenderer/* default */.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new l({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,lang/* clone */.d9)(this.colorClassBreakInfos),legendOptions:(0,lang/* clone */.d9)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],PointCloudClassBreaksRenderer_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0},type:String})],PointCloudClassBreaksRenderer_a.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:LegendOptions/* default */.Z,json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.apiValues */.Z.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.jsonValues */.Z.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default.fieldTransformTypeKebabDict.read */.Z.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default.fieldTransformTypeKebabDict.write */.Z.fieldTransformTypeKebabDict.write}})],PointCloudClassBreaksRenderer_a.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[c],json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"colorClassBreakInfos",void 0),PointCloudClassBreaksRenderer_a=l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudClassBreaksRenderer")],PointCloudClassBreaksRenderer_a);const d=PointCloudClassBreaksRenderer_a;


/***/ }),

/***/ 46999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PointCloudRenderer_a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(25709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],i.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"maxValue",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.ColorModulation")],i);const p=i;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const PointSizeAlgorithm_p=new jsonMap/* JSONMap */.Xn({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let PointSizeAlgorithm_i=class extends JSONSupport/* JSONSupport */.wq{};(0,tslib_es6._)([(0,property/* property */.Cb)({type:PointSizeAlgorithm_p.apiValues,readOnly:!0,nonNullable:!0,json:{type:PointSizeAlgorithm_p.jsonValues,read:!1,write:PointSizeAlgorithm_p.write}})],PointSizeAlgorithm_i.prototype,"type",void 0),PointSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],PointSizeAlgorithm_i);const a=PointSizeAlgorithm_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointSizeFixedSizeAlgorithm_i;let PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=class extends a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new PointSizeFixedSizeAlgorithm_i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],PointSizeFixedSizeAlgorithm_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"useRealWorldSymbolSizes",void 0),PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],PointSizeFixedSizeAlgorithm_p);const l=PointSizeFixedSizeAlgorithm_p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointSizeSplatAlgorithm_p;let c=PointSizeSplatAlgorithm_p=class extends a{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new PointSizeSplatAlgorithm_p({scaleFactor:this.scaleFactor})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=PointSizeSplatAlgorithm_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const PointSizeSplatAlgorithm_a=c;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:a,typeMap:{"fixed-size":l,splat:PointSizeSplatAlgorithm_a}};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=(0,jsonMap/* strict */.wY)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let PointCloudRenderer_c=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,lang/* clone */.d9)(this.pointSizeAlgorithm),colorModulation:(0,lang/* clone */.d9)(this.colorModulation),pointsPerInch:(0,lang/* clone */.d9)(this.pointsPerInch)}}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],PointCloudRenderer_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:e,json:{write:!0}})],PointCloudRenderer_c.prototype,"pointSizeAlgorithm",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:p,json:{write:!0}})],PointCloudRenderer_c.prototype,"colorModulation",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0},nonNullable:!0,type:Number})],PointCloudRenderer_c.prototype,"pointsPerInch",void 0),PointCloudRenderer_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudRenderer")],PointCloudRenderer_c),function(o){o.fieldTransformTypeKebabDict=new jsonMap/* JSONMap */.Xn({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(PointCloudRenderer_c||(PointCloudRenderer_c={}));const PointCloudRenderer_a=PointCloudRenderer_c;


/***/ }),

/***/ 5947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36663);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67134);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79438);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40266);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46999);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24794);
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68844);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_3__/* .enumeration */ .J)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.apiValues */ .Z.fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.jsonValues */ .Z.fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.read */ .Z.fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.write */ .Z.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z],json:{write:!0}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .j)("esri.renderers.PointCloudStretchRenderer")],d);const a=d;


/***/ }),

/***/ 60948:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(46999);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(24794);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let c=l=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,lang/* clone */.d9)(this.values),color:(0,lang/* clone */.d9)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{write:!0}})],c.prototype,"values",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Color/* default */.Z,json:{type:[ensureType/* Integer */.z8],write:!0}})],c.prototype,"color",void 0),c=l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointCloudUniqueValueRenderer_l;let u=PointCloudUniqueValueRenderer_l=class extends PointCloudRenderer/* default */.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new PointCloudUniqueValueRenderer_l({...this.cloneProperties(),field:(0,lang/* clone */.d9)(this.field),fieldTransformType:(0,lang/* clone */.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,lang/* clone */.d9)(this.colorUniqueValueInfos),legendOptions:(0,lang/* clone */.d9)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0},type:String})],u.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.apiValues */.Z.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.jsonValues */.Z.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default.fieldTransformTypeKebabDict.read */.Z.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default.fieldTransformTypeKebabDict.write */.Z.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:LegendOptions/* default */.Z,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=PointCloudUniqueValueRenderer_l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;


/***/ })

};
;
//# sourceMappingURL=3108.render-page.js.map