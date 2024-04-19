"use strict";
exports.id = 3861;
exports.ids = [3861];
exports.modules = {

/***/ 73861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ g)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(84238);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/areasAndLengths.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o(o,s,e){const a=(0,utils/* parseUrl */.en)(o),u={...a.query,f:"json",...s.toJSON()},f=(0,utils/* asValidOptions */.lA)(u,e);return (0,request["default"])(a.path+"/areasAndLengths",f).then((t=>t.data))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/geometryService/utils.js
var geometryService_utils = __webpack_require__(5167);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(89542);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/autoComplete.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(i,n,m,p){const g=n[0].spatialReference,f=(0,utils/* parseUrl */.en)(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(n).geometries),polylines:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(m).geometries)},y=(0,utils/* asValidOptions */.lA)(a,p);return (0,request["default"])(f.path+"/autoComplete",y).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new Polygon/* default */.Z({spatialReference:g,rings:e})))))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/buffer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function s(s,n,i){const m=(0,utils/* parseUrl */.en)(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=(0,utils/* asValidOptions */.lA)(a,i);return (0,request["default"])(m.path+"/buffer",p).then((e=>(e.data.geometries||[]).map((({rings:e})=>new Polygon/* default */.Z({spatialReference:f,rings:e})))))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(53736);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/convexHull.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function convexHull_i(i,n,m){const f=n[0].spatialReference,p=(0,utils/* parseUrl */.en)(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(n))},u=(0,utils/* asValidOptions */.lA)(a,m);return (0,request["default"])(p.path+"/convexHull",u).then((({data:t})=>(0,jsonUtils/* fromJSON */.im)(t.geometry).set({spatialReference:f})))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/cut.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function cut_o(o,i,n,m){const a=(0,utils/* parseUrl */.en)(o),p=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await (0,request["default"])(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return{cutIndexes:f,geometries:g.map((e=>{const t=(0,jsonUtils/* fromJSON */.im)(e);return t.spatialReference=p,t}))}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/densify.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function densify_o(o,i,n){const m=i.geometries[0].spatialReference,p=(0,utils/* parseUrl */.en)(o),a={...p.query,f:"json",...i.toJSON()},f=(0,utils/* asValidOptions */.lA)(a,n);return (0,request["default"])(p.path+"/densify",f).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils/* fromJSON */.im)(e).set({spatialReference:m})))))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/difference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function difference_i(i,m,n,f){const p=m[0].spatialReference,y=(0,utils/* parseUrl */.en)(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(m)),geometry:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),(0,request["default"])(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils/* fromJSON */.im)(e).set({spatialReference:p})))))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/distance.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function distance_r(r,s,e){const a=(0,utils/* parseUrl */.en)(r),i={...a.query,f:"json",...s.toJSON()},c=(0,utils/* asValidOptions */.lA)(i,e);return (0,request["default"])(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(25709);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/units.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=new jsonMap/* JSONMap */.Xn({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),N={UNIT_METER:9001,UNIT_GERMAN_METER:9031,UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/fromGeoCoordinateString.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_.toJSON(f),c.conversionMode=i.conversionMode;const m=(0,utils/* parseUrl */.en)(t),p={...m.query,f:"json",...c},u=(0,utils/* asValidOptions */.lA)(p,e);return (0,request["default"])(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/GeneralizeParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends JSONSupport/* JSONSupport */.wq{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],p.prototype,"deviationUnit",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils/* fromJSON */.im)(r))):null},write:{writer:(r,o)=>{o.geometries=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],p.prototype,"maxDeviation",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.GeneralizeParameters")],p),p.from=(0,ensureType/* ensureType */.se)(p);const a=p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/operations/generalize.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const generalize_i=new jsonMap/* JSONMap */.Xn({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function r(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),generalize_i.write(s,n,"deviationUnit"),n}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/generalize.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function geometryService_generalize_i(i,m,p){const n=(m=a.from(m)).toJSON(),f=r(m),j=(0,utils/* parseUrl */.en)(i),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=(0,utils/* asValidOptions */.lA)(l,p);return (0,request["default"])(j.path+"/generalize",c).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils/* fromJSON */.im)(e).set({spatialReference:u})))))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/intersect.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function m(m,n,p,f){const y=n[0].spatialReference,a=(0,utils/* parseUrl */.en)(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(n)),geometry:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(p),geometry:p.toJSON()})},u=(0,utils/* asValidOptions */.lA)(g,f);return (0,request["default"])(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils/* fromJSON */.im)(e).set({spatialReference:y})))))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/labelPoints.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function labelPoints_r(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=(0,utils/* parseUrl */.en)(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=(0,utils/* asValidOptions */.lA)(l,n);return (0,request["default"])(f.path+"/labelPoints",m).then((({data:t})=>(t.labelPoints||[]).map((t=>(0,jsonUtils/* fromJSON */.im)(t).set({spatialReference:a})))))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(90819);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/LengthsParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],l.prototype,"calculationType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"geodesic",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0}})],l.prototype,"lengthUnit",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Polyline/* default */.Z],json:{read:{reader:o=>o?o.map((o=>(0,jsonUtils/* fromJSON */.im)(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()))}}}})],l.prototype,"polylines",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.LengthsParameters")],l),l.from=(0,ensureType/* ensureType */.se)(l);const LengthsParameters_n=l;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/operations/lengths.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new jsonMap/* JSONMap */.Xn({preserveShape:"preserve-shape"});function lengths_o(e){const{polylines:o,lengthUnit:t,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(o);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),t&&(r.lengthUnit=t),i&&(r.geodesic=i),s&&(r.calculationType=n.toJSON(s)),r}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/lengths.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function lengths_n(n,m,p){m=LengthsParameters_n.from(m);const a=lengths_o(m),f=(0,utils/* parseUrl */.en)(n),i={...f.query,f:"json",...a},u=(0,utils/* asValidOptions */.lA)(i,p);return (0,request["default"])(f.path+"/lengths",u).then((({data:t})=>t))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/OffsetParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let OffsetParameters_i=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],OffsetParameters_i.prototype,"bevelRatio",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{reader:o=>o?o.map((o=>(0,jsonUtils/* fromJSON */.im)(o))):null},write:{writer:(o,t)=>{t.geometries=o.map((o=>o.toJSON()))}}}})],OffsetParameters_i.prototype,"geometries",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],OffsetParameters_i.prototype,"offsetDistance",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],OffsetParameters_i.prototype,"offsetHow",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],OffsetParameters_i.prototype,"offsetUnit",void 0),OffsetParameters_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.OffsetParameters")],OffsetParameters_i),OffsetParameters_i.from=(0,ensureType/* ensureType */.se)(OffsetParameters_i);const OffsetParameters_m=OffsetParameters_i;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/operations/offset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const offset_o=new jsonMap/* JSONMap */.Xn({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),offset_s=new jsonMap/* JSONMap */.Xn({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function offset_r(e){const{geometries:r,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:m}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return r&&r.length&&(l.geometries=JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(r[0]),geometries:r}),l.sr=JSON.stringify(r[0].spatialReference)),n&&(l.offsetHow=offset_o.toJSON(n)),m&&(l.offsetUnit=offset_s.toJSON(m)),l}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/offset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function offset_m(m,p,a){p=OffsetParameters_m.from(p);const i=offset_r(p),n=(0,utils/* parseUrl */.en)(m),j={...n.query,f:"json",...i},u=p.geometries[0].spatialReference,c=(0,utils/* asValidOptions */.lA)(j,a);return (0,request["default"])(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils/* fromJSON */.im)(e).set({spatialReference:u})))))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/geometryService/project.js
var project = __webpack_require__(94466);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/RelationParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let RelationParameters_p=class extends JSONSupport/* JSONSupport */.wq{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils/* fromJSON */.im)(r))):null},write:{writer:(r,e)=>{e.geometries1=r.map((r=>r.toJSON()))}}}})],RelationParameters_p.prototype,"geometries1",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils/* fromJSON */.im)(r))):null},write:{writer:(r,e)=>{e.geometries2=r.map((r=>r.toJSON()))}}}})],RelationParameters_p.prototype,"geometries2",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],RelationParameters_p.prototype,"relation",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],RelationParameters_p.prototype,"relationParameter",void 0),RelationParameters_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.RelationParameters")],RelationParameters_p),RelationParameters_p.from=(0,ensureType/* ensureType */.se)(RelationParameters_p);const RelationParameters_a=RelationParameters_p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/operations/relation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const relation_t=new jsonMap/* JSONMap */.Xn({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function relation_o(e){const{geometries1:o,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),a={};if(o&&o.length){a.geometries1=JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(o[0]),geometries:o});const e=o[0].spatialReference;a.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(a.geometries2=JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(r[0]),geometries:r})),n&&(a.relation=relation_t.toJSON(n)),s&&(a.relationParam=s),a}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/relation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function relation_a(a,n,i){n=RelationParameters_a.from(n);const m=relation_o(n),p=(0,utils/* parseUrl */.en)(a),f={...p.query,f:"json",...m},u=(0,utils/* asValidOptions */.lA)(f,i);return (0,request["default"])(p.path+"/relation",u).then((({data:r})=>r.relations))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/reshape.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function reshape_i(i,n,p,a){const f=n.spatialReference,m=(0,utils/* parseUrl */.en)(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.Ji)(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p.toJSON())},g=(0,utils/* asValidOptions */.lA)(y,a);return (0,request["default"])(m.path+"/reshape",g).then((({data:e})=>(0,jsonUtils/* fromJSON */.im)(e.geometry).set({spatialReference:f})))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/simplify.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function simplify_o(o,m,f){const n="string"==typeof o?(0,urlUtils/* urlToObject */.mN)(o):o,p=m[0].spatialReference,a=(0,jsonUtils/* getJsonType */.Ji)(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(m))}},{data:y}=await (0,request["default"])(n.path+"/simplify",u);return (0,geometryService_utils/* decodeGeometries */.o)(y.geometries,a,p)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/toGeoCoordinateString.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function toGeoCoordinateString_t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=(0,utils/* parseUrl */.en)(t),u={...a.query,f:"json",...c},f=(0,utils/* asValidOptions */.lA)(u,e);return (0,request["default"])(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/TrimExtendParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let TrimExtendParameters_m=class extends JSONSupport/* JSONSupport */.wq{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],TrimExtendParameters_m.prototype,"extendHow",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Polyline/* default */.Z],json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils/* fromJSON */.im)(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()))}}}})],TrimExtendParameters_m.prototype,"polylines",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:{reader:r=>r?(0,jsonUtils/* fromJSON */.im)(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON()}}}})],TrimExtendParameters_m.prototype,"trimExtendTo",void 0),TrimExtendParameters_m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.TrimExtendParameters")],TrimExtendParameters_m),TrimExtendParameters_m.from=(0,ensureType/* ensureType */.se)(TrimExtendParameters_m);const TrimExtendParameters_n=TrimExtendParameters_m;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/operations/trimExtend.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const trimExtend_t=new jsonMap/* JSONMap */.Xn({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function trimExtend_n(e){const{extendHow:n,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=trimExtend_t.toJSON(n),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/trimExtend.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function trimExtend_i(i,p,n){p=TrimExtendParameters_n.from(p);const a=trimExtend_n(p),f=(0,utils/* parseUrl */.en)(i),j={...f.query,f:"json",...a},u=p.sr,y=(0,utils/* asValidOptions */.lA)(j,n);return (0,request["default"])(f.path+"/trimExtend",y).then((({data:t})=>(t.geometries||[]).map((({paths:t})=>new Polyline/* default */.Z({spatialReference:u,paths:t})))))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/geometryService/union.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function union_i(i,n,m){const f=n[0].spatialReference,p=(0,utils/* parseUrl */.en)(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.F)(n))},u=(0,utils/* asValidOptions */.lA)(a,m);return (0,request["default"])(p.path+"/union",u).then((({data:t})=>(0,jsonUtils/* fromJSON */.im)(t.geometry).set({spatialReference:f})))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/tasks/Task.js
var Task = __webpack_require__(42964);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/tasks/GeometryService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let C=class extends Task/* default */.Z{constructor(r){super(r),this.url=null}areasAndLengths(r,e){return o(this.url,r,e)}autoComplete(r,e,t){return i(this.url,r,e,t)}buffer(r,e){return s(this.url,r,e)}convexHull(r,e){return convexHull_i(this.url,r,e)}cut(r,e,t){return cut_o(this.url,r,e,t)}densify(r,e){return densify_o(this.url,r,e)}difference(r,e,t){return difference_i(this.url,r,e,t)}distance(r,e){return distance_r(this.url,r,e)}fromGeoCoordinateString(r,e){return t(this.url,r,e)}generalize(r,e){return geometryService_generalize_i(this.url,r,e)}intersect(r,e,t){return m(this.url,r,e,t)}labelPoints(r,e){return labelPoints_r(this.url,r,e)}lengths(r,e){return lengths_n(this.url,r,e)}offset(r,e){return offset_m(this.url,r,e)}project(r,e){return (0,project/* project */.i)(this.url,r,e)}relation(r,e){return relation_a(this.url,r,e)}reshape(r,e,t){return reshape_i(this.url,r,e,t)}simplify(r,e){return simplify_o(this.url,r,e)}toGeoCoordinateString(r,e){return toGeoCoordinateString_t(this.url,r,e)}trimExtend(r,e){return trimExtend_i(this.url,r,e)}union(r,e){return union_i(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,tslib_es6._)([(0,property/* property */.Cb)()],C.prototype,"url",void 0),C=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.tasks.GeometryService")],C);const g=C;


/***/ })

};
;
//# sourceMappingURL=3861.render-page.js.map