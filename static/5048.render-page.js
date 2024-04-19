"use strict";
exports.id = 5048;
exports.ids = [5048];
exports.modules = {

/***/ 48420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=t=>{if(!Array.isArray(t))return!1;const[e]=t;return"number"==typeof e||"string"==typeof e};class e{constructor(t={}){this._options=t}toQueryParams(e){if(!e)return null;const o=e.toJSON(),n={};return Object.keys(o).forEach((e=>{const r=this._options[e];if(r){const s="boolean"!=typeof r&&r.name?r.name:e,i="boolean"!=typeof r&&r.getter?r.getter(o):o[e];null!=i&&(n[s]=t(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else n[e]=o[e]}),this),n}}function o(t){return new e(t)}


/***/ }),

/***/ 76058:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "et": () => (/* binding */ networkService_u),
  "ef": () => (/* binding */ networkService_p),
  "bI": () => (/* binding */ networkService_c),
  "mT": () => (/* binding */ f),
  "Wf": () => (/* binding */ d)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(86745);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(84238);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(25709);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/networkEnums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(0,jsonMap/* strict */.wY)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),s=(0,jsonMap/* strict */.wY)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),r=(0,jsonMap/* strict */.wY)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),t=(0,jsonMap/* strict */.wY)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),a=(0,jsonMap/* strict */.wY)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),n=(0,jsonMap/* strict */.wY)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),l=(0,jsonMap/* strict */.wY)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),o=(0,jsonMap/* strict */.wY)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),m=(0,jsonMap/* strict */.wY)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/TravelMode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;let c=u=class extends JSONSupport/* JSONSupport */.wq{constructor(t){super(t),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new u((0,lang/* clone */.d9)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Object],json:{write:!0}})],c.prototype,"attributeParameterValues",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"distanceAttributeName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"impedanceAttributeName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{write:!0}})],c.prototype,"restrictionAttributeNames",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],c.prototype,"simplificationTolerance",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)(i)],c.prototype,"simplificationToleranceUnits",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"timeAttributeName",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)(m)],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"useHierarchy",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.J)(n)],c.prototype,"uturnAtJunctions",void 0),c=u=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.TravelMode")],c);const TravelMode_m=c;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"currentVersion",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"defaultTravelMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"directionsLanguage",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"directionsSupportedLanguages",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"directionsTimeAttribute",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"impedance",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],p.prototype,"networkDataset",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[TravelMode_m]})],p.prototype,"supportedTravelModes",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.NetworkServiceDescription")],p);const NetworkServiceDescription_i=p;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(80085);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(51211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/NAMessage.js
var NAMessage = __webpack_require__(89956);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js + 1 modules
var DirectionsFeatureSet = __webpack_require__(71343);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/RouteResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let RouteResult_i=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:DirectionsFeatureSet/* default */.Z,json:{write:!0}})],RouteResult_i.prototype,"directions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Graphic/* default */.Z,json:{write:!0}})],RouteResult_i.prototype,"route",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],RouteResult_i.prototype,"routeName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Graphic/* default */.Z],json:{write:!0}})],RouteResult_i.prototype,"stops",void 0),RouteResult_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.RouteResult")],RouteResult_i);const RouteResult_c=RouteResult_i;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/RouteResultsContainer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function RouteResultsContainer_n(r){return r&&FeatureSet["default"].fromJSON(r).features.map((r=>r))}let RouteResultsContainer_u=class extends JSONSupport/* JSONSupport */.wq{constructor(r){super(r),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(r,o){return RouteResultsContainer_n(o.barriers||o.pointBarriers)}readPolylineBarriers(r){return RouteResultsContainer_n(r)}readPolygonBarriers(r){return RouteResultsContainer_n(r)}};(0,tslib_es6._)([(0,property/* property */.Cb)({aliasOf:"pointBarriers"})],RouteResultsContainer_u.prototype,"barriers",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[NAMessage/* default */.Z]})],RouteResultsContainer_u.prototype,"messages",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Graphic/* default */.Z]})],RouteResultsContainer_u.prototype,"pointBarriers",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("pointBarriers",["barriers","pointBarriers"])],RouteResultsContainer_u.prototype,"readPointBarriers",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Graphic/* default */.Z]})],RouteResultsContainer_u.prototype,"polylineBarriers",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("polylineBarriers")],RouteResultsContainer_u.prototype,"readPolylineBarriers",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Graphic/* default */.Z]})],RouteResultsContainer_u.prototype,"polygonBarriers",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("polygonBarriers")],RouteResultsContainer_u.prototype,"readPolygonBarriers",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[RouteResult_c]})],RouteResultsContainer_u.prototype,"routeResults",void 0),RouteResultsContainer_u=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.RouteResultsContainer")],RouteResultsContainer_u);const y=RouteResultsContainer_u;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/networkService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function networkService_u(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}function networkService_p(e,r){for(let t=0;t<r.length;t++){const o=e[r[t]];if(o&&o.length)for(const e of o)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function f(e){const r=[],o=[],{directions:s=[],routes:{features:a=[],spatialReference:l=null}={},stops:{features:n=[],spatialReference:u=null}={},barriers:p,polygonBarriers:f,polylineBarriers:d,messages:c}=e.data,v="esri.tasks.RouteTask.NULL_ROUTE_NAME";let m,h,T=!0;const g=a&&l||n&&u||p&&p.spatialReference||f&&f.spatialReference||d&&d.spatialReference;s.forEach((e=>{r.push(m=e.routeName),o[m]={directions:e}})),a.forEach((e=>{-1===r.indexOf(m=e.attributes.Name)&&(r.push(m),o[m]={}),(0,maybe/* isSome */.pC)(e.geometry)&&(e.geometry.spatialReference=g),o[m].route=e})),n.forEach((e=>{h=e.attributes,-1===r.indexOf(m=h.RouteName||v)&&(r.push(m),o[m]={}),m!==v&&(T=!1),(0,maybe/* isSome */.pC)(e.geometry)&&(e.geometry.spatialReference=g),null==o[m].stops&&(o[m].stops=[]),o[m].stops.push(e)})),n.length>0&&!0===T&&(o[r[0]].stops=o[v].stops,delete o[v],r.splice(r.indexOf(v),1));const M=r.map((e=>(o[e].routeName=e===v?null:e,o[e])));return y.fromJSON({routeResults:M,pointBarriers:p,polygonBarriers:f,polylineBarriers:d,messages:c})}function d(e,r){for(let o=0;o<r.length;o++){const s=e[r[o]];if(s&&s.length)for(const e of s)if((0,maybe/* isSome */.pC)(e)&&e.hasZ)return!0}return!1}async function networkService_c(t,o,s){if(!t)throw new Error/* default */.Z("network-service:missing-url","Url to Network service is missing");const l=(0,utils/* asValidOptions */.lA)({f:"json",token:o},s),{data:i}=await (0,request["default"])(t,l);i.supportedTravelModes||(i.supportedTravelModes=[]);for(let e=0;e<i.supportedTravelModes.length;e++)i.supportedTravelModes[e].id||(i.supportedTravelModes[e].id=i.supportedTravelModes[e].itemId);const u=i.currentVersion>=10.4?networkService_m(t,o,s):v(t,s),{defaultTravelMode:p,supportedTravelModes:f}=await u;return i.defaultTravelMode=p,i.supportedTravelModes=f,NetworkServiceDescription_i.fromJSON(i)}async function v(r,t){var n,i;const u=(0,utils/* asValidOptions */.lA)({f:"json"},t),{data:p}=await (0,request["default"])(r.replace(/\/rest\/.*$/i,"/info"),u);if(!p||!p.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:f}=p,d=(0,urlUtils/* removeTrailingSlash */.Qj)(f)+"/sharing/rest/portals/self",{data:c}=await (0,request["default"])(d,u),v=(0,object/* getDeepValue */.hS)("helperServices.routingUtilities.url",c);if(!v)return{supportedTravelModes:[],defaultTravelMode:null};const m=(0,utils/* parseUrl */.en)(f),h=/\/solve$/i.test(m.path)?"Route":/\/solveclosestfacility$/i.test(m.path)?"ClosestFacility":"ServiceAreas",T=(0,utils/* asValidOptions */.lA)({f:"json",serviceName:h},t),g=(0,urlUtils/* removeTrailingSlash */.Qj)(v)+"/GetTravelModes/execute",M=await (0,request["default"])(g,T),w=[];let y=null;if(null!=M&&null!=(n=M.data)&&null!=(i=n.results)&&i.length){const e=M.data.results;for(const r of e){var N;if("supportedTravelModes"===r.paramName){if(null!=(N=r.value)&&N.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);w.push(r)}}else"defaultTravelMode"===r.paramName&&(y=r.value)}}return{supportedTravelModes:w,defaultTravelMode:y}}async function networkService_m(t,o,l){try{const r=(0,utils/* asValidOptions */.lA)({f:"json",token:o},l),n=(0,urlUtils/* removeTrailingSlash */.Qj)(t)+"/retrieveTravelModes",{data:{supportedTravelModes:i,defaultTravelMode:u}}=await (0,request["default"])(n,r);return{supportedTravelModes:i,defaultTravelMode:u}}catch(n){throw new Error/* default */.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}


/***/ }),

/***/ 71343:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ c)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(80085);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/DirectionsFeature.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends Graphic/* default */.Z{};(0,tslib_es6._)([(0,property/* property */.Cb)()],e.prototype,"events",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],e.prototype,"strings",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.DirectionsFeature")],e);const DirectionsFeature_p=e;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(51211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(90819);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules
var Point = __webpack_require__(53446);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let u=class extends FeatureSet["default"]{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const o=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,s=o&&SpatialReference/* default.fromJSON */.Z.fromJSON(o);return e.map((e=>{var t,r;const o=this._decompressGeometry(e.compressedGeometry),n=new Polyline/* default */.Z({...o,spatialReference:s}),p=null!=(t=null==(r=e.events)?void 0:r.map((e=>{const{arriveTimeUTC:t,ETA:r,point:{x:o,y:n,z:p},strings:i}=e;return new DirectionsFeature_p({geometry:new Point/* default */.Z({x:o,y:n,z:p,hasZ:void 0!==p,spatialReference:s}),attributes:{ETA:r,arriveTimeUTC:t},strings:i})})))?t:[];return new DirectionsFeature_p({attributes:e.attributes,events:p,geometry:n,strings:e.strings})}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>(0,maybe/* unwrap */.Wg)(e))),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}get strings(){return this.features.map((({strings:e})=>e))}_decompressGeometry(e){let t=0,r=0,o=0,s=0;const a=[];let n,p,i,m,l,u,c,y,h=0,f=0,d=0;if(l=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),l||(l=[]),0===parseInt(l[h],32)){h=2;const e=parseInt(l[h],32);h++,u=parseInt(l[h],32),h++,1&e&&(f=l.indexOf("|")+1,c=parseInt(l[f],32),f++),2&e&&(d=l.indexOf("|",f)+1,y=parseInt(l[d],32),d++)}else u=parseInt(l[h],32),h++;for(;h<l.length&&"|"!==l[h];){n=parseInt(l[h],32)+t,h++,t=n,p=parseInt(l[h],32)+r,h++,r=p;const e=[n/u,p/u];f&&(m=parseInt(l[f],32)+o,f++,o=m,e.push(m/c)),d&&(i=parseInt(l[d],32)+s,d++,s=i,e.push(i/y)),a.push(e)}return{paths:[a],hasZ:f>0,hasM:d>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new Polyline/* default */.Z({spatialReference:t});const r=[];for(const n of e)for(const e of n.paths)r.push(...e);const o=[];r.forEach(((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||o.push(e)}));const{hasM:s,hasZ:a}=e[0];return new Polyline/* default */.Z({hasM:s,hasZ:a,paths:[o],spatialReference:t})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent/* default */.Z,json:{read:{source:"summary.envelope"}}})],u.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],u.prototype,"features",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("features")],u.prototype,"readFeatures",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],u.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],u.prototype,"mergedGeometry",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],u.prototype,"routeId",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],u.prototype,"routeName",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({value:null,readOnly:!0})],u.prototype,"strings",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{source:"summary.totalDriveTime"}}})],u.prototype,"totalDriveTime",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{source:"summary.totalLength"}}})],u.prototype,"totalLength",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{source:"summary.totalTime"}}})],u.prototype,"totalTime",void 0),u=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.DirectionsFeatureSet")],u);const c=u;


/***/ }),

/***/ 8050:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36663);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25709);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49004);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .Xn({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .wq{constructor(e){super(e),this.description=null,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:String,json:{write:!0}})],i.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.rest.support.GPMessage")],i);const a=i;


/***/ }),

/***/ 89956:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36663);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25709);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8050);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .Xn({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends _GPMessage_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z{constructor(r){super(r),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:String,json:{read:p.read,write:p.write}})],c.prototype,"type",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_7__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.rest.support.NAMessage")],c);const a=c;


/***/ }),

/***/ 5048:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ c)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(33156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/queryUtils.js
var queryUtils = __webpack_require__(48420);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js + 2 modules
var normalizeUtils = __webpack_require__(56247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/networkService.js + 5 modules
var networkService = __webpack_require__(76058);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(84238);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/route.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=(0,queryUtils/* createQueryParamsHelper */.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function l(r,l,m){const c=[],f=[],y={},B={},b=(0,utils/* parseUrl */.en)(r),{path:g}=b;l.stops&&l.stops.features&&(0,networkService/* collectGeometries */.et)(l.stops.features,f,"stops.features",y),l.pointBarriers&&l.pointBarriers.features&&(0,networkService/* collectGeometries */.et)(l.pointBarriers.features,f,"pointBarriers.features",y),l.polylineBarriers&&l.polylineBarriers.features&&(0,networkService/* collectGeometries */.et)(l.polylineBarriers.features,f,"polylineBarriers.features",y),l.polygonBarriers&&l.polygonBarriers.features&&(0,networkService/* collectGeometries */.et)(l.polygonBarriers.features,f,"polygonBarriers.features",y);const A=await (0,normalizeUtils/* normalizeCentralMeridian */.aX)(f);for(const e in y){const r=y[e];c.push(e),B[e]=A.slice(r[0],r[1])}if((0,networkService/* isInputGeometryZAware */.Wf)(B,c)){let e=null;try{e=await (0,networkService/* fetchServiceDescription */.bI)(g,l.apiKey,m)}catch{}e&&!e.hasZ&&(0,networkService/* dropZValuesOffInputGeometry */.ef)(B,c)}for(const e in B)B[e].forEach(((r,t)=>{l.get(e)[t].geometry=r}));const d={...m,query:{...b.query,...p.toQueryParams(l),f:"json"}},h=g.endsWith("/solve")?g:`${g}/solve`,j=await (0,request["default"])(h,d);return (0,networkService/* handleSolveResponse */.mT)(j)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/tasks/Task.js
var Task = __webpack_require__(42964);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/RouteTask.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends Task/* default */.Z{constructor(s){super(s)}solve(s,r){return l(this.url,s,r)}};e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.tasks.RouteTask")],e);const c=e;


/***/ })

};
;
//# sourceMappingURL=5048.render-page.js.map