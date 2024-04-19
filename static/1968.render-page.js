"use strict";
exports.id = 1968;
exports.ids = [1968];
exports.modules = {

/***/ 31968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ b)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(25709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(27668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(12478);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(81590);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/BaseTileLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u={id:"0/0/0",level:0,row:0,col:0,extent:null};let y=class extends((0,BlendLayer/* BlendLayer */.h)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,RefreshableLayer/* RefreshableLayer */.Q)(Layer/* default */.Z)))){constructor(){super(...arguments),this.tileInfo=TileInfo/* default.create */.Z.create({spatialReference:SpatialReference/* default.WebMercator */.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new Extent/* default */.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,SpatialReference/* default.WebMercator */.Z.WebMercator),this.spatialReference=SpatialReference/* default.WebMercator */.Z.WebMercator}getTileBounds(e,t,r,o){const s=o||(0,aaBoundingRect/* create */.Ue)();return u.level=e,u.row=t,u.col=r,u.extent=s,this.tileInfo.updateTileInfo(u),u.extent=null,s}fetchTile(e,r,o,s={}){const{signal:i}=s,l=this.getTileUrl(e,r,o),p={responseType:"image",signal:i,query:{...this.refreshParameters}};return (0,request["default"])(l,p).then((e=>e.data))}getTileUrl(){throw new Error/* default */.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:TileInfo/* default */.Z})],y.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],y.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,value:"base-tile"})],y.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({nonNullable:!0})],y.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],y.prototype,"spatialReference",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.BaseTileLayer")],y);const d=y;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/BingMapsLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const BingMapsLayer_y=new jsonMap/* JSONMap */.Xn({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),h="https://dev.virtualearth.net";let m=class extends((0,BlendLayer/* BlendLayer */.h)((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(d)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new TileInfo/* default */.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:SpatialReference/* default.WebMercator */.Z.WebMercator},spatialReference:SpatialReference/* default.WebMercator */.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return (0,maybe/* isSome */.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return BingMapsLayer_y.toJSON(this.style)}get bingLogo(){return (0,maybe/* isSome */.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new Error/* default */.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,r){if(!this.loaded||(0,maybe/* isNone */.Wi)(this.bingMetadata))return null;const o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],i=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",i)}async fetchAttributionData(){return this.load().then((()=>{if((0,maybe/* isNone */.Wi)(this.bingMetadata))return null;return{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return (0,request["default"])(`${h}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new Error/* default */.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new Error/* default */.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new Error/* default */.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new Error/* default */.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return (0,request["default"])(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new Error/* default */.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new Error/* default */.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let a=e;a>0;a--){let e=0;const s=1<<a-1;0!=(r&s)&&(e+=1),0!=(t&s)&&(e+=2),o+=e.toString()}return o}};(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1,write:!1},value:null})],m.prototype,"bingMetadata",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:TileInfo/* default */.Z})],m.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"copyright",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!1,read:!1}})],m.prototype,"key",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:BingMapsLayer_y.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:BingMapsLayer_y.read}}})],m.prototype,"style",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],m.prototype,"operationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!1,read:!1}})],m.prototype,"culture",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!1,read:!1}})],m.prototype,"region",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0,read:!0}})],m.prototype,"portalUrl",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!1,read:!1}})],m.prototype,"hasAttributionData",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0})],m.prototype,"bingLogo",null),m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.BingMapsLayer")],m);const b=m;


/***/ })

};
;
//# sourceMappingURL=1968.render-page.js.map