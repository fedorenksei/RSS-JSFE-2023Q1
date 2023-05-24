/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/cell.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/cell.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/cell-font/NotoSansNagMundari-Regular.woff */ "./src/app-minesweeper/view/assets/fonts/cell-font/NotoSansNagMundari-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/cell-font/NotoSansNagMundari-Bold.woff */ "./src/app-minesweeper/view/assets/fonts/cell-font/NotoSansNagMundari-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'CellFont';\n  src: \n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff') font-weight-normal,\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-Medium.woff') format('woff'), */\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-SemiBold.woff') format('woff'), */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff') font-weight-bold\n  ;\n}\n\n.cell {\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n\n  display: grid;\n  place-items: center;\n\n  font: bold 16px \"CellFont\", sans-serif;\n\n  background-color: lightgrey;\n  box-shadow: \n    inset 3px 3px white,\n    inset -3px -3px darkgray\n  ;\n  border: 0.1px solid black;\n\n  cursor: pointer;\n\n  transition: all 0.1s;\n}\n\n.cell_revealed {\n  cursor: unset;\n  box-shadow: none;\n  background-color: white;\n}\n\n.cell_value_flag::after {\n  /* content: url('../assets/flag.png'); */\n  content: \"🚩\";\n}\n\n.cell_value_explodes {\n  background-color: red;\n  box-shadow: none;\n}\n\n.cell_value_false-flag {\n  box-shadow: none;\n  background-color: pink;\n}\n\n.cell_value_mined::after {\n  content: \"💣\";\n}\n\n.cell_value_1::after {\n  content: '1';\n  color: blue;\n}\n\n.cell_value_2::after {\n  content: '2';\n  color: green;\n}\n\n.cell_value_3::after {\n  content: '3';\n  color: orangered;\n}\n\n.cell_value_4::after {\n  content: '4';\n  color: brown;\n}\n\n.cell_value_5::after {\n  content: '5';\n  color: red;\n}\n\n.cell_value_6::after {\n  content: '6';\n  color: darkviolet;\n}\n\n.cell_value_7::after {\n  content: '7';\n  color: coral;\n}\n\n.cell_value_8::after {\n  content: '8';\n  color: royalblue;\n}\n", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/components/cell.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB;;;;;EAKA;AACF;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,mBAAmB;;EAEnB,sCAAsC;;EAEtC,2BAA2B;EAC3B;;;EAGA;EACA,yBAAyB;;EAEzB,eAAe;;EAEf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":["@font-face {\n  font-family: 'CellFont';\n  src: \n    url('../assets/fonts/cell-font/NotoSansNagMundari-Regular.woff') format('woff') font-weight-normal,\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-Medium.woff') format('woff'), */\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-SemiBold.woff') format('woff'), */\n    url('../assets/fonts/cell-font/NotoSansNagMundari-Bold.woff') format('woff') font-weight-bold\n  ;\n}\n\n.cell {\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n\n  display: grid;\n  place-items: center;\n\n  font: bold 16px \"CellFont\", sans-serif;\n\n  background-color: lightgrey;\n  box-shadow: \n    inset 3px 3px white,\n    inset -3px -3px darkgray\n  ;\n  border: 0.1px solid black;\n\n  cursor: pointer;\n\n  transition: all 0.1s;\n}\n\n.cell_revealed {\n  cursor: unset;\n  box-shadow: none;\n  background-color: white;\n}\n\n.cell_value_flag::after {\n  /* content: url('../assets/flag.png'); */\n  content: \"🚩\";\n}\n\n.cell_value_explodes {\n  background-color: red;\n  box-shadow: none;\n}\n\n.cell_value_false-flag {\n  box-shadow: none;\n  background-color: pink;\n}\n\n.cell_value_mined::after {\n  content: \"💣\";\n}\n\n.cell_value_1::after {\n  content: '1';\n  color: blue;\n}\n\n.cell_value_2::after {\n  content: '2';\n  color: green;\n}\n\n.cell_value_3::after {\n  content: '3';\n  color: orangered;\n}\n\n.cell_value_4::after {\n  content: '4';\n  color: brown;\n}\n\n.cell_value_5::after {\n  content: '5';\n  color: red;\n}\n\n.cell_value_6::after {\n  content: '6';\n  color: darkviolet;\n}\n\n.cell_value_7::after {\n  content: '7';\n  color: coral;\n}\n\n.cell_value_8::after {\n  content: '8';\n  color: royalblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/counters.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/counters.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".counters {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/components/counters.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB","sourcesContent":[".counters {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/field.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/field.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".minesweeper-field {\n  place-self: center;\n\n  position: relative;\n  width: min-content;\n  display: grid;\n  gap: 0;\n  border: 1px solid black;\n  background-color: white;\n}\n\n.minesweeper-field_size_small {\n  grid-template-columns: repeat(10, min-content);\n}\n\n.minesweeper-field_size_small > .minesweeper-field__cell:nth-last-child(-n+525) {\n  display: none;\n}\n\n.minesweeper-field_size_medium {\n  grid-template-columns: repeat(15, min-content);\n}\n\n.minesweeper-field_size_medium > .minesweeper-field__cell:nth-last-child(-n+400) {\n  display: none;\n}\n\n.minesweeper-field_size_large {\n  grid-template-columns: repeat(25, min-content);\n}\n\n.minesweeper-field_disabled::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/components/field.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;;EAElB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,MAAM;EACN,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd","sourcesContent":[".minesweeper-field {\n  place-self: center;\n\n  position: relative;\n  width: min-content;\n  display: grid;\n  gap: 0;\n  border: 1px solid black;\n  background-color: white;\n}\n\n.minesweeper-field_size_small {\n  grid-template-columns: repeat(10, min-content);\n}\n\n.minesweeper-field_size_small > .minesweeper-field__cell:nth-last-child(-n+525) {\n  display: none;\n}\n\n.minesweeper-field_size_medium {\n  grid-template-columns: repeat(15, min-content);\n}\n\n.minesweeper-field_size_medium > .minesweeper-field__cell:nth-last-child(-n+400) {\n  display: none;\n}\n\n.minesweeper-field_size_large {\n  grid-template-columns: repeat(25, min-content);\n}\n\n.minesweeper-field_disabled::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/styles.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/styles.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".minesweeper-app {\n  display: grid;\n  /* justify-content: center; */\n}", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,6BAA6B;AAC/B","sourcesContent":[".minesweeper-app {\n  display: grid;\n  /* justify-content: center; */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/body.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/body.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  background-color: white;\n}", "",{"version":3,"sources":["webpack://./src/body.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,uBAAuB;AACzB","sourcesContent":["body {\n  margin: 0;\n  background-color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/app-minesweeper/view/components/cell.css":
/*!******************************************************!*\
  !*** ./src/app-minesweeper/view/components/cell.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./cell.css */ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/cell.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app-minesweeper/view/components/counters.css":
/*!**********************************************************!*\
  !*** ./src/app-minesweeper/view/components/counters.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_counters_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./counters.css */ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/counters.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_counters_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_counters_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_counters_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_counters_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app-minesweeper/view/components/field.css":
/*!*******************************************************!*\
  !*** ./src/app-minesweeper/view/components/field.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_field_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./field.css */ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/components/field.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_field_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_field_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_field_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_field_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app-minesweeper/view/styles.css":
/*!*********************************************!*\
  !*** ./src/app-minesweeper/view/styles.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/app-minesweeper/view/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/body.css":
/*!**********************!*\
  !*** ./src/body.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./body.css */ "./node_modules/css-loader/dist/cjs.js!./src/body.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app-minesweeper/controller.js":
/*!*******************************************!*\
  !*** ./src/app-minesweeper/controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAppElement)
/* harmony export */ });
/* harmony import */ var _view_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/index.js */ "./src/app-minesweeper/view/index.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/index.js */ "./src/app-minesweeper/model/index.js");



// Model looks in LocalStorage for a saved game and inject view API for its submodule
_model_index_js__WEBPACK_IMPORTED_MODULE_1__.init(_view_index_js__WEBPACK_IMPORTED_MODULE_0__.getApi());

// A saved game is available through ModelAPI,
// so the View will be initialized with this game if it is present.
_view_index_js__WEBPACK_IMPORTED_MODULE_0__.init(_model_index_js__WEBPACK_IMPORTED_MODULE_1__.getApi());

function getAppElement() {
  return _view_index_js__WEBPACK_IMPORTED_MODULE_0__.getElement();
}


/***/ }),

/***/ "./src/app-minesweeper/model/game/gameFactory.js":
/*!*******************************************************!*\
  !*** ./src/app-minesweeper/model/game/gameFactory.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app-minesweeper/model/game/utils.js");
/* harmony import */ var _matrixFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrixFactory */ "./src/app-minesweeper/model/game/matrixFactory.js");



let viewApi;
function init(api) {
  viewApi = api;
}

function create({ size, mines }) {
  const matrix = (0,_matrixFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(size);

  let areMinesPlaced = false;
  let minesIds;

  let revealedCellsCounter = 0;
  const cellsToRevealForWin = size ** 2 - mines;

  let seconds = 0;
  let steps = 0;
  let flags = 0; // todo: it's redundant variable, can be calculated on view side

  const gameObject = {
    openCell,
    getMinesAmount() { return mines; },
    countSecond() { seconds += 1; },
    countStep() { steps += 1; },
    getDataForView() {
      return {
        mines,
        seconds,
        steps,
        flags,
        getRevealedCells() { matrix.getRevealedCells(); },
        getFlaggedCells() { matrix.getFlaggedCells(matrix); },
      };
    },
    flagCell(id) {
      const cell = matrix.getById(id);
      cell.flag();
      flags += 1;
    },
    unflagCell(id) {
      const cell = matrix.getById(id);
      cell.unflag();
      flags -= 1;
    },
  };

  return gameObject;

  function openCell(id) {
    if (!areMinesPlaced) {
      minesIds = matrix.placeMines({ exceptCellId: id, howMuchMines: mines });
      areMinesPlaced = true;
    }

    const cell = matrix.getById(id);

    if (cell.isMined()) {
      viewApi.revealField({ explodedId: id, minesIds });
      return;
    }

    const value = cell.getNumber();
    cell.reveal();
    steps += 1;

    let secondaryCells = [];
    if (value === 0) {
      secondaryCells = getCellsAround({ matrix, coordinates: cell.getCoordinates() });
    }

    viewApi.revealCell({
      primaryCell: { id, value },
      secondaryCells,
    });

    setTimeout(() => {
      revealedCellsCounter += secondaryCells.length + 1;
      if (revealedCellsCounter === cellsToRevealForWin) {
        viewApi.winGame();
      }
    });
  }
}

function getCellsAround({ matrix, coordinates }) {
  const result = [];

  const checkedIds = new Set();
  checkCell(coordinates);

  function checkCell({ x, y }) {
    const coordinatesAround = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])({ x, y });
    coordinatesAround.forEach(({ x: cellX, y: cellY }) => {
      const cell = matrix.getByXY({ x: cellX, y: cellY });
      if (!cell || cell.isRevealed() || cell.isFlagged()) return;
      const id = cell.getId();
      if (checkedIds.has(id)) return;
      const value = cell.getNumber();
      cell.reveal();
      result.push({ id, value });
      checkedIds.add(id);

      if (value === 0) {
        checkCell({ x: cellX, y: cellY });
      }
    });
  }

  return result;
}


/***/ }),

/***/ "./src/app-minesweeper/model/game/matrixFactory.js":
/*!*********************************************************!*\
  !*** ./src/app-minesweeper/model/game/matrixFactory.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/app-minesweeper/model/game/utils.js");


function create(size) {
  const cellById = new Map();
  // const cellByCoordinates = new Map();
  const matrix = [];

  let currentId = 0;
  for (let x = 0; x < size; x += 1) {
    const row = [];
    matrix.push(row);
    for (let y = 0; y < size; y += 1) {
      const cell = createCell(currentId, { x, y });
      cellById.set(currentId, cell);
      row.push(cell);
      // cellByCoordinates.set([x, y].join('-'), cell);
      currentId += 1;
    }
  }

  return {
    // cellByCoordinates,
    // getSize: () => size,
    data: {
      cellById,
      matrix,
      // cellByCoordinates,
    },
    getByXY({ x, y }) {
      return matrix?.[x]?.[y];
    },
    getById(id) { return cellById.get(id); },
    // getByCoordinates(coord) {cellByCoordinates.get(coord.join('-'))},
    placeMines,
  };
}

function placeMines({ exceptCellId, howMuchMines }) {
  const minesIds = [];
  const allIds = Array.from(this.data.cellById.keys());
  function remove(id) {
    allIds.splice(allIds.indexOf(id), 1);
  }
  remove(exceptCellId);

  let minesCount = 0;
  while (minesCount < howMuchMines) {
    const randomId = allIds[Math.floor(Math.random() * allIds.length)];
    const cell = this.data.cellById.get(randomId);
    cell.mine();
    minesIds.push(randomId);
    incrementAround.call(this, cell.getCoordinates());
    remove(randomId);
    minesCount += 1;
  }

  function incrementAround({ x, y }) {
    const cellsAround = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ x, y });
    cellsAround.forEach(({ x: cellX, y: cellY }) => {
      const targetCell = this.getByXY({ x: cellX, y: cellY });
      if (!targetCell) return;
      targetCell.setNumber(targetCell.getNumber() + 1);
    });
  }

  return minesIds;
}

function createCell(id, { ...coord }) {
  // coord = {...coord}
  return {
    state: {
      mined: false,
      number: 0,
      revealed: false,
      flagged: false,
    },

    getId: () => id,
    getCoordinates: () => coord,

    mine() { this.state.mined = true; },
    isMined() { return !!this.state.mined; },

    flag() { this.state.flagged = true; },
    unflag() { this.state.flagged = false; },
    isFlagged() { return !!this.state.flagged; },

    setNumber(num) { this.state.number = num; },
    getNumber() {
      return this.state.number;
    },

    reveal() { this.state.revealed = true; },
    isRevealed() { return !!this.state.revealed; },
  };
}


/***/ }),

/***/ "./src/app-minesweeper/model/game/utils.js":
/*!*************************************************!*\
  !*** ./src/app-minesweeper/model/game/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCoordinatesAround)
/* harmony export */ });
function getCoordinatesAround({ x, y }) {
  const range = [-1, 0, 1];
  const res = [];
  for (let xIndex = 0; xIndex < range.length; xIndex += 1) {
    const dX = range[xIndex];
    for (let yIndex = 0; yIndex < range.length; yIndex += 1) {
      const dY = range[yIndex];
      if (dX !== 0 || dY !== 0) {
        res.push({ x: x + dX, y: y + dY });
      }
    }
  }
  return res;
}


/***/ }),

/***/ "./src/app-minesweeper/model/index.js":
/*!********************************************!*\
  !*** ./src/app-minesweeper/model/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApi": () => (/* binding */ getApi),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _game_gameFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/gameFactory.js */ "./src/app-minesweeper/model/game/gameFactory.js");


// let viewApi;
function init(api) {
  // viewApi = api;
  _game_gameFactory_js__WEBPACK_IMPORTED_MODULE_0__.init(api);
}

const modelApi = {
  isGameNow: false,
  startGame,
};
function getApi() {
  return modelApi;
}

// todo: look into LS and retreat a game if there's one

function startGame(params) {
  const game = _game_gameFactory_js__WEBPACK_IMPORTED_MODULE_0__.create(params);
  modelApi.isGameNow = true;
  Object.assign(modelApi, game);
}


/***/ }),

/***/ "./src/app-minesweeper/view/components/cell.js":
/*!*****************************************************!*\
  !*** ./src/app-minesweeper/view/components/cell.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _cell_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.css */ "./src/app-minesweeper/view/components/cell.css");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ "./src/app-minesweeper/view/createElement.js");


// import flagIcon from '../assets/flag.svg';

const CLASSES = {
  init: 'minesweeper-field__cell cell',
  revealed: 'cell_revealed',
  numericTemplate: 'cell_value_',
  flagged: 'cell_value_flag',
  mined: 'cell_value_mined',
  explodes: 'cell_value_explodes',
  falseFlag: 'cell_value_false-flag',
};

let modelApi;
let fieldApi;
function init(apis) {
  ({ modelApi, fieldApi } = apis);
}

function create(id) {
  let flagged;
  let revealed;

  const element = createCellElement();
  element.addEventListener('click', () => {
    if (flagged || revealed) return;
    clickHandler(id);
  });

  element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (revealed || !modelApi.flagCell) return;

    if (!flagged) {
      flagged = true;
      element.replaceChildren(createFlag());
      modelApi.flagCell(id);
      fieldApi.addToFlagged(id);
    } else {
      flagged = false;
      element.replaceChildren();
      modelApi.unflagCell(id);
      fieldApi.removeFromFlagged(id);
    }
  });

  return {
    setValue(value) {
      revealed = true;
      element.classList.add(CLASSES.revealed);

      if (typeof value === 'number' && value > 0 && value < 9) {
        element.classList.add(CLASSES.numericTemplate + value);
      }

      if (value === 'mine') {
        element.classList.add(CLASSES.mine);
      }
    },

    explodes() {
      element.classList.add(CLASSES.explodes);
    },

    remainsMined() {
      if (!flagged) {
        element.append(createMine());
      }
    },

    isFalseFlagged() {
      element.classList.add(CLASSES.falseFlag);
    },

    getElement: () => element,
  };
}

// function flag(elem) {
//   // webpack error
//   const flagIconElement = new Image();
//   flagIconElement.src = flagIcon;
//   elem.append(flagIconElement);
// }

function clickHandler(id) {
  if (!modelApi.isGameNow) {
    fieldApi.startGame(id);
  }
  modelApi.openCell(id);
}

function createCellElement() {
  return (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', CLASSES.init);
}

let flagCanvas;
function createFlag() {
  if (flagCanvas) {
    return cloneCanvas(flagCanvas);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 20;

  const context = canvas.getContext('2d');

  // flagpole
  context.fillStyle = 'black';
  context.fillRect(2, 0, 2, 20);
  context.fillRect(0, 18, 6, 2);

  // flag
  context.beginPath();
  context.moveTo(4, 0);
  context.lineTo(20, 7);
  context.lineTo(4, 14);
  context.closePath();
  context.fillStyle = 'red';
  context.fill();

  flagCanvas = canvas;
  return flagCanvas;
}

let mineCanvas;
function createMine() {
  if (mineCanvas) {
    return cloneCanvas(mineCanvas);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 20;
  const context = canvas.getContext('2d');

  // mine
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 8;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.fillStyle = 'black';
  context.fill();

  // flash
  context.beginPath();
  context.moveTo(12, 13); // out
  context.lineTo(15, 8); // in
  context.lineTo(10, 5); // out
  context.lineTo(15, 3); // in
  context.lineTo(12, 0); // out
  context.lineTo(18, 2); // in
  context.lineTo(20, 3); // out
  context.lineTo(17, 7); // in
  context.lineTo(20, 10); // out
  context.closePath();
  context.fillStyle = 'yellow';
  context.fill();

  mineCanvas = canvas;
  return mineCanvas;
}

function cloneCanvas(oldCanvas) {
  const newCanvas = document.createElement('canvas');
  const context = newCanvas.getContext('2d');
  newCanvas.width = oldCanvas.width;
  newCanvas.height = oldCanvas.height;
  context.drawImage(oldCanvas, 0, 0);
  return newCanvas;
}


/***/ }),

/***/ "./src/app-minesweeper/view/components/counters.js":
/*!*********************************************************!*\
  !*** ./src/app-minesweeper/view/components/counters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "continueSecondsCounter": () => (/* binding */ continueSecondsCounter),
/* harmony export */   "countStep": () => (/* binding */ countStep),
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "minusFlag": () => (/* binding */ minusFlag),
/* harmony export */   "plusFlag": () => (/* binding */ plusFlag),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "stopSecondCounter": () => (/* binding */ stopSecondCounter)
/* harmony export */ });
/* harmony import */ var _counters_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.css */ "./src/app-minesweeper/view/components/counters.css");
/* harmony import */ var _countersView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countersView */ "./src/app-minesweeper/view/components/countersView.js");



let modelApi;
function init(api) {
  modelApi = api;
  reset();
}

const counterValues = {
  seconds: 0,
  steps: 0,
  flags: 0,
  mines: 0,
};
let secondIntervalId;

reset();

function reset() {
  if (modelApi && modelApi.isGameNow) {
    modelApi.getDataForView();
    ({
      seconds: counterValues.seconds,
      steps: counterValues.steps,
      flags: counterValues.flags,
      mines: counterValues.mines,
    } = modelApi.getDataForView());
  }

  _countersView__WEBPACK_IMPORTED_MODULE_1__.setValues(counterValues);

  if (modelApi && modelApi.isGameNow) {
    continueSecondsCounter();
  }
}

function continueSecondsCounter() {
  secondIntervalId = setInterval(() => {
    counterValues.seconds += 1;
    _countersView__WEBPACK_IMPORTED_MODULE_1__.count('seconds');
  }, 1000);
}

function stopSecondCounter() {
  if (!secondIntervalId) return;
  clearInterval(secondIntervalId);
}

function plusFlag() {
  counterValues.flags += 1;
  counterValues.mines -= 1;
  _countersView__WEBPACK_IMPORTED_MODULE_1__.setValues(counterValues);
}

function minusFlag() {
  counterValues.flags -= 1;
  counterValues.mines += 1;
  _countersView__WEBPACK_IMPORTED_MODULE_1__.setValues(counterValues);
}

function countStep() {
  counterValues.steps += 1;
  _countersView__WEBPACK_IMPORTED_MODULE_1__.setValues(counterValues);
}

function getElement() {
  return _countersView__WEBPACK_IMPORTED_MODULE_1__.getElement();
}


/***/ }),

/***/ "./src/app-minesweeper/view/components/countersView.js":
/*!*************************************************************!*\
  !*** ./src/app-minesweeper/view/components/countersView.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "count": () => (/* binding */ count),
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "setValues": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/app-minesweeper/view/createElement.js");


const CLASSES = {
  section: 'counters',
  counter: {
    block: 'counter',
    title: 'counter__title',
    value: 'counter__value',
  },
};

const section = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', CLASSES.section);
const counters = {};
['seconds', 'steps', 'flags', 'mines'].forEach((counterName) => {
  const counter = createCounter(counterName);
  counters[counterName] = counter;
  section.append(counter.getElement());
});

function setValues(data) {
  Object.entries(counters).forEach(([counterName, counterObject]) => {
    counterObject.setValue(data[counterName]);
  });
}

function count(counterName) {
  counters[counterName].count();
}

function getElement() {
  return section;
}

function createCounter(name) {
  let counterValue;
  const blockElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', CLASSES.counter.block);
  const titleElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', CLASSES.counter.title);
  titleElement.textContent = name;
  const valueElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', CLASSES.counter.value);
  blockElement.append(titleElement, valueElement);

  return {
    getElement() { return blockElement; },
    setValue(value) {
      counterValue = parseInt(value, 10);
      if (Number.isNaN(counterValue)) return;
      valueElement.textContent = value;
    },
    count() {
      counterValue += 1;
      this.setValue(counterValue);
    },
  };
}


/***/ }),

/***/ "./src/app-minesweeper/view/components/field.js":
/*!******************************************************!*\
  !*** ./src/app-minesweeper/view/components/field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "revealCell": () => (/* binding */ revealCell),
/* harmony export */   "revealField": () => (/* binding */ revealField),
/* harmony export */   "winGame": () => (/* binding */ winGame)
/* harmony export */ });
/* harmony import */ var _fieldView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldView */ "./src/app-minesweeper/view/components/fieldView.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/app-minesweeper/view/components/cell.js");
/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newGame */ "./src/app-minesweeper/view/components/newGame.js");
/* harmony import */ var _counters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counters */ "./src/app-minesweeper/view/components/counters.js");





let modelApi;
let cellById;
function init(api) {
  modelApi = api;
  _cell__WEBPACK_IMPORTED_MODULE_1__.init({ modelApi, fieldApi });

  _fieldView__WEBPACK_IMPORTED_MODULE_0__.init(modelApi);
  cellById = _fieldView__WEBPACK_IMPORTED_MODULE_0__.getCellsMap();

  if (!modelApi.currentGame) {
    _fieldView__WEBPACK_IMPORTED_MODULE_0__.setSize('small');
  }
}

const flaggedCells = new Set();
const modifiedCells = new Set();
const fieldApi = {
  addToFlagged(id) {
    flaggedCells.add(id);
    modifiedCells.add(id);
    _counters__WEBPACK_IMPORTED_MODULE_3__.plusFlag();
  },
  removeFromFlagged(id) {
    flaggedCells.delete(id);
    modifiedCells.delete(id);
    _counters__WEBPACK_IMPORTED_MODULE_3__.minusFlag();
  },
  startGame() { _newGame__WEBPACK_IMPORTED_MODULE_2__.startGame(); },
};

function revealCell({ primaryCell, secondaryCells }) {
  reveal(primaryCell);
  secondaryCells.forEach((cellData) => {
    reveal(cellData);
  });
  _counters__WEBPACK_IMPORTED_MODULE_3__.countStep();
  function reveal({ id, value }) {
    const cell = cellById.get(id);
    cell.setValue(value);
    modifiedCells.add(id);
  }
}

function revealField({ explodedId, minesIds }) {
  const explodedCell = cellById.get(explodedId);
  explodedCell.explodes();

  minesIds.forEach((id) => {
    const remainedMineCell = cellById.get(id);
    remainedMineCell.remainsMined();
    modifiedCells.add(id);
  });

  flaggedCells.forEach((id) => {
    if (!minesIds.includes(id)) {
      const falseFlaggedCell = cellById.get(id);
      falseFlaggedCell.isFalseFlagged();
    }
  });

  _fieldView__WEBPACK_IMPORTED_MODULE_0__.disableField();
}

function winGame() {
  _fieldView__WEBPACK_IMPORTED_MODULE_0__.disableField();
}

function getElement() {
  return _fieldView__WEBPACK_IMPORTED_MODULE_0__.getElement();
}


/***/ }),

/***/ "./src/app-minesweeper/view/components/fieldView.js":
/*!**********************************************************!*\
  !*** ./src/app-minesweeper/view/components/fieldView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableField": () => (/* binding */ disableField),
/* harmony export */   "getCellsMap": () => (/* binding */ getCellsMap),
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "setSize": () => (/* binding */ setSize)
/* harmony export */ });
/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field.css */ "./src/app-minesweeper/view/components/field.css");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ "./src/app-minesweeper/view/createElement.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/app-minesweeper/view/components/cell.js");




let modelApi;
function init(api) {
  modelApi = api;
  createAllCells();

  if (!modelApi.currentGame) {
    setSize('small');
  }
}

const MAX_CELLS = 25 ** 2;
const CLASSES = {
  fieldInit: 'minesweeper__field minesweeper-field',
  fieldSizes: {
    small: 'minesweeper-field_size_small',
    medium: 'minesweeper-field_size_medium',
    large: 'minesweeper-field_size_large',
  },
  disabled: 'minesweeper-field_disabled',
};
const fieldElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', CLASSES.fieldInit);

const cellById = new Map();
function getCellsMap() {
  return cellById;
}

function createAllCells() {
  let currentId = 0;
  const cellElements = [];
  for (let index = 0; index < MAX_CELLS; index += 1, currentId += 1) {
    const cell = _cell__WEBPACK_IMPORTED_MODULE_2__.create(currentId);
    cellById.set(currentId, cell);
    cellElements.push(cell.getElement());
  }
  fieldElement.replaceChildren(...cellElements);
}

function setSize(size) {
  Object.entries(CLASSES.fieldSizes).forEach(([key, value]) => {
    if (key === size) {
      fieldElement.classList.add(value);
    } else {
      fieldElement.classList.remove(value);
    }
  });
}

function disableField() {
  fieldElement.classList.add(CLASSES.disabled);
}

function getElement() {
  return fieldElement;
}


/***/ }),

/***/ "./src/app-minesweeper/view/components/newGame.js":
/*!********************************************************!*\
  !*** ./src/app-minesweeper/view/components/newGame.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _counters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters */ "./src/app-minesweeper/view/components/counters.js");


const MODES = {
  easy: {
    size: 10,
    mines: 10,
  },
  medium: {
    size: 15,
    mines: 30,
  },
  hard: {
    size: 25,
    mines: 99,
  },
};

let modelApi;
function init(api) {
  modelApi = api;
}

function startGame() {
  // todo implement the mode choice
  const mode = MODES.easy;

  modelApi.startGame(mode);
  _counters__WEBPACK_IMPORTED_MODULE_0__.reset();
}


/***/ }),

/***/ "./src/app-minesweeper/view/createElement.js":
/*!***************************************************!*\
  !*** ./src/app-minesweeper/view/createElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
}


/***/ }),

/***/ "./src/app-minesweeper/view/index.js":
/*!*******************************************!*\
  !*** ./src/app-minesweeper/view/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApi": () => (/* binding */ getApi),
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/app-minesweeper/view/styles.css");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/app-minesweeper/view/createElement.js");
/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/field */ "./src/app-minesweeper/view/components/field.js");
/* harmony import */ var _components_newGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/newGame */ "./src/app-minesweeper/view/components/newGame.js");
/* harmony import */ var _components_counters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/counters */ "./src/app-minesweeper/view/components/counters.js");






function init(modelApi) {
  _components_field__WEBPACK_IMPORTED_MODULE_2__.init(modelApi);
  _components_newGame__WEBPACK_IMPORTED_MODULE_3__.init(modelApi);
  _components_counters__WEBPACK_IMPORTED_MODULE_4__.init(modelApi);
  // todo: inject model into other view submodules
}

function getElement() {
  const appElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'minesweeper-app');
  appElement.replaceChildren(
    _components_counters__WEBPACK_IMPORTED_MODULE_4__.getElement(),
    _components_field__WEBPACK_IMPORTED_MODULE_2__.getElement(),
  );
  // todo: add all elements
  return appElement;
}

function getApi() {
  return {
    revealCell(data) { _components_field__WEBPACK_IMPORTED_MODULE_2__.revealCell(data); },
    revealField(data) {
      _components_field__WEBPACK_IMPORTED_MODULE_2__.revealField(data);
      _components_counters__WEBPACK_IMPORTED_MODULE_4__.stopSecondCounter();
    },
    winGame() {
      _components_field__WEBPACK_IMPORTED_MODULE_2__.winGame();
      _components_counters__WEBPACK_IMPORTED_MODULE_4__.stopSecondCounter();
    },
  };
}


/***/ }),

/***/ "./src/app-minesweeper/view/assets/fonts/cell-font/NotoSansNagMundari-Bold.woff":
/*!**************************************************************************************!*\
  !*** ./src/app-minesweeper/view/assets/fonts/cell-font/NotoSansNagMundari-Bold.woff ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "162d6243d5d62eb0798f.woff";

/***/ }),

/***/ "./src/app-minesweeper/view/assets/fonts/cell-font/NotoSansNagMundari-Regular.woff":
/*!*****************************************************************************************!*\
  !*** ./src/app-minesweeper/view/assets/fonts/cell-font/NotoSansNagMundari-Regular.woff ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55594e8feca5155174a7.woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./src/body.css");
/* harmony import */ var _app_minesweeper_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-minesweeper/controller.js */ "./src/app-minesweeper/controller.js");



document.body.prepend((0,_app_minesweeper_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2dEOztBQUVwRSxzQkFBc0IsMEVBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9jZWxsLmNzcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2NvdW50ZXJzLmNzcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2ZpZWxkLmNzcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9zdHlsZXMuY3NzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2JvZHkuY3NzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2NlbGwuY3NzP2QxMjIiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9jb3VudGVycy5jc3M/MjljMCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2ZpZWxkLmNzcz80ZTQ3Iiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L3N0eWxlcy5jc3M/Zjk4OCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9ib2R5LmNzcz8zMGUzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL21vZGVsL2dhbWUvZ2FtZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL21vZGVsL2dhbWUvbWF0cml4RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvbW9kZWwvZ2FtZS91dGlscy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9jZWxsLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L2NvbXBvbmVudHMvY291bnRlcnMuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9jb3VudGVyc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9maWVsZC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2ZpZWxkVmlldy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvY2VsbC1mb250L05vdG9TYW5zTmFnTXVuZGFyaS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvY2VsbC1mb250L05vdG9TYW5zTmFnTXVuZGFyaS1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NlbGxGb250JztcXG4gIHNyYzogXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJykgZm9udC13ZWlnaHQtbm9ybWFsLFxcbiAgICAvKiB1cmwoJy4uL2Fzc2V0cy9mb250cy9jZWxsLWZvbnQvTm90b1NhbnNOYWdNdW5kYXJpLU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksICovXFxuICAgIC8qIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2NlbGwtZm9udC9Ob3RvU2Fuc05hZ011bmRhcmktU2VtaUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCAqL1xcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpIGZvbnQtd2VpZ2h0LWJvbGRcXG4gIDtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250OiBib2xkIDE2cHggXFxcIkNlbGxGb250XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGJveC1zaGFkb3c6IFxcbiAgICBpbnNldCAzcHggM3B4IHdoaXRlLFxcbiAgICBpbnNldCAtM3B4IC0zcHggZGFya2dyYXlcXG4gIDtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgYmxhY2s7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcXG59XFxuXFxuLmNlbGxfcmV2ZWFsZWQge1xcbiAgY3Vyc29yOiB1bnNldDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNlbGxfdmFsdWVfZmxhZzo6YWZ0ZXIge1xcbiAgLyogY29udGVudDogdXJsKCcuLi9hc3NldHMvZmxhZy5wbmcnKTsgKi9cXG4gIGNvbnRlbnQ6IFxcXCLwn5qpXFxcIjtcXG59XFxuXFxuLmNlbGxfdmFsdWVfZXhwbG9kZXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNlbGxfdmFsdWVfZmFsc2UtZmxhZyB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLmNlbGxfdmFsdWVfbWluZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5KjXFxcIjtcXG59XFxuXFxuLmNlbGxfdmFsdWVfMTo6YWZ0ZXIge1xcbiAgY29udGVudDogJzEnO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcyJztcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNlbGxfdmFsdWVfMzo6YWZ0ZXIge1xcbiAgY29udGVudDogJzMnO1xcbiAgY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNDo6YWZ0ZXIge1xcbiAgY29udGVudDogJzQnO1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uY2VsbF92YWx1ZV81OjphZnRlciB7XFxuICBjb250ZW50OiAnNSc7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY2VsbF92YWx1ZV82OjphZnRlciB7XFxuICBjb250ZW50OiAnNic7XFxuICBjb2xvcjogZGFya3Zpb2xldDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNzo6YWZ0ZXIge1xcbiAgY29udGVudDogJzcnO1xcbiAgY29sb3I6IGNvcmFsO1xcbn1cXG5cXG4uY2VsbF92YWx1ZV84OjphZnRlciB7XFxuICBjb250ZW50OiAnOCc7XFxuICBjb2xvcjogcm95YWxibHVlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qjs7Ozs7RUFLQTtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLHNDQUFzQzs7RUFFdEMsMkJBQTJCO0VBQzNCOzs7RUFHQTtFQUNBLHlCQUF5Qjs7RUFFekIsZUFBZTs7RUFFZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDZWxsRm9udCc7XFxuICBzcmM6IFxcbiAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9jZWxsLWZvbnQvTm90b1NhbnNOYWdNdW5kYXJpLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpIGZvbnQtd2VpZ2h0LW5vcm1hbCxcXG4gICAgLyogdXJsKCcuLi9hc3NldHMvZm9udHMvY2VsbC1mb250L05vdG9TYW5zTmFnTXVuZGFyaS1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpLCAqL1xcbiAgICAvKiB1cmwoJy4uL2Fzc2V0cy9mb250cy9jZWxsLWZvbnQvTm90b1NhbnNOYWdNdW5kYXJpLVNlbWlCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgKi9cXG4gICAgdXJsKCcuLi9hc3NldHMvZm9udHMvY2VsbC1mb250L05vdG9TYW5zTmFnTXVuZGFyaS1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSBmb250LXdlaWdodC1ib2xkXFxuICA7XFxufVxcblxcbi5jZWxsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udDogYm9sZCAxNnB4IFxcXCJDZWxsRm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBib3gtc2hhZG93OiBcXG4gICAgaW5zZXQgM3B4IDNweCB3aGl0ZSxcXG4gICAgaW5zZXQgLTNweCAtM3B4IGRhcmtncmF5XFxuICA7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxufVxcblxcbi5jZWxsX3JldmVhbGVkIHtcXG4gIGN1cnNvcjogdW5zZXQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2ZsYWc6OmFmdGVyIHtcXG4gIC8qIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL2ZsYWcucG5nJyk7ICovXFxuICBjb250ZW50OiBcXFwi8J+aqVxcXCI7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2V4cGxvZGVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2ZhbHNlLWZsYWcge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi5jZWxsX3ZhbHVlX21pbmVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi8J+So1xcXCI7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcxJztcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY2VsbF92YWx1ZV8yOjphZnRlciB7XFxuICBjb250ZW50OiAnMic7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jZWxsX3ZhbHVlXzM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICczJztcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc0JztcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNTo6YWZ0ZXIge1xcbiAgY29udGVudDogJzUnO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNjo6YWZ0ZXIge1xcbiAgY29udGVudDogJzYnO1xcbiAgY29sb3I6IGRhcmt2aW9sZXQ7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc3JztcXG4gIGNvbG9yOiBjb3JhbDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfODo6YWZ0ZXIge1xcbiAgY29udGVudDogJzgnO1xcbiAgY29sb3I6IHJveWFsYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvdW50ZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L2NvbXBvbmVudHMvY291bnRlcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudGVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5taW5lc3dlZXBlci1maWVsZCB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfc21hbGwge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfc21hbGwgPiAubWluZXN3ZWVwZXItZmllbGRfX2NlbGw6bnRoLWxhc3QtY2hpbGQoLW4rNTI1KSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfc2l6ZV9tZWRpdW0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTUsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfbWVkaXVtID4gLm1pbmVzd2VlcGVyLWZpZWxkX19jZWxsOm50aC1sYXN0LWNoaWxkKC1uKzQwMCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfbGFyZ2Uge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMjUsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX2Rpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L2NvbXBvbmVudHMvZmllbGQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixNQUFNO0VBQ04sdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5taW5lc3dlZXBlci1maWVsZCB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfc21hbGwge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfc21hbGwgPiAubWluZXN3ZWVwZXItZmllbGRfX2NlbGw6bnRoLWxhc3QtY2hpbGQoLW4rNTI1KSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfc2l6ZV9tZWRpdW0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTUsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfbWVkaXVtID4gLm1pbmVzd2VlcGVyLWZpZWxkX19jZWxsOm50aC1sYXN0LWNoaWxkKC1uKzQwMCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfbGFyZ2Uge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMjUsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX2Rpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pbmVzd2VlcGVyLWFwcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWluZXN3ZWVwZXItYXBwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2JvZHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvdW50ZXJzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY291bnRlcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpZWxkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmllbGQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyB2aWV3IGZyb20gJy4vdmlldy9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyBtb2RlbCBmcm9tICcuL21vZGVsL2luZGV4LmpzJztcblxuLy8gTW9kZWwgbG9va3MgaW4gTG9jYWxTdG9yYWdlIGZvciBhIHNhdmVkIGdhbWUgYW5kIGluamVjdCB2aWV3IEFQSSBmb3IgaXRzIHN1Ym1vZHVsZVxubW9kZWwuaW5pdCh2aWV3LmdldEFwaSgpKTtcblxuLy8gQSBzYXZlZCBnYW1lIGlzIGF2YWlsYWJsZSB0aHJvdWdoIE1vZGVsQVBJLFxuLy8gc28gdGhlIFZpZXcgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIHRoaXMgZ2FtZSBpZiBpdCBpcyBwcmVzZW50Llxudmlldy5pbml0KG1vZGVsLmdldEFwaSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXBwRWxlbWVudCgpIHtcbiAgcmV0dXJuIHZpZXcuZ2V0RWxlbWVudCgpO1xufVxuIiwiaW1wb3J0IGdldENvb3JkaW5hdGVzQXJvdW5kIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZU1hdHJpeCBmcm9tICcuL21hdHJpeEZhY3RvcnknO1xuXG5sZXQgdmlld0FwaTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KGFwaSkge1xuICB2aWV3QXBpID0gYXBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHsgc2l6ZSwgbWluZXMgfSkge1xuICBjb25zdCBtYXRyaXggPSBjcmVhdGVNYXRyaXgoc2l6ZSk7XG5cbiAgbGV0IGFyZU1pbmVzUGxhY2VkID0gZmFsc2U7XG4gIGxldCBtaW5lc0lkcztcblxuICBsZXQgcmV2ZWFsZWRDZWxsc0NvdW50ZXIgPSAwO1xuICBjb25zdCBjZWxsc1RvUmV2ZWFsRm9yV2luID0gc2l6ZSAqKiAyIC0gbWluZXM7XG5cbiAgbGV0IHNlY29uZHMgPSAwO1xuICBsZXQgc3RlcHMgPSAwO1xuICBsZXQgZmxhZ3MgPSAwOyAvLyB0b2RvOiBpdCdzIHJlZHVuZGFudCB2YXJpYWJsZSwgY2FuIGJlIGNhbGN1bGF0ZWQgb24gdmlldyBzaWRlXG5cbiAgY29uc3QgZ2FtZU9iamVjdCA9IHtcbiAgICBvcGVuQ2VsbCxcbiAgICBnZXRNaW5lc0Ftb3VudCgpIHsgcmV0dXJuIG1pbmVzOyB9LFxuICAgIGNvdW50U2Vjb25kKCkgeyBzZWNvbmRzICs9IDE7IH0sXG4gICAgY291bnRTdGVwKCkgeyBzdGVwcyArPSAxOyB9LFxuICAgIGdldERhdGFGb3JWaWV3KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluZXMsXG4gICAgICAgIHNlY29uZHMsXG4gICAgICAgIHN0ZXBzLFxuICAgICAgICBmbGFncyxcbiAgICAgICAgZ2V0UmV2ZWFsZWRDZWxscygpIHsgbWF0cml4LmdldFJldmVhbGVkQ2VsbHMoKTsgfSxcbiAgICAgICAgZ2V0RmxhZ2dlZENlbGxzKCkgeyBtYXRyaXguZ2V0RmxhZ2dlZENlbGxzKG1hdHJpeCk7IH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgZmxhZ0NlbGwoaWQpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBtYXRyaXguZ2V0QnlJZChpZCk7XG4gICAgICBjZWxsLmZsYWcoKTtcbiAgICAgIGZsYWdzICs9IDE7XG4gICAgfSxcbiAgICB1bmZsYWdDZWxsKGlkKSB7XG4gICAgICBjb25zdCBjZWxsID0gbWF0cml4LmdldEJ5SWQoaWQpO1xuICAgICAgY2VsbC51bmZsYWcoKTtcbiAgICAgIGZsYWdzIC09IDE7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gZ2FtZU9iamVjdDtcblxuICBmdW5jdGlvbiBvcGVuQ2VsbChpZCkge1xuICAgIGlmICghYXJlTWluZXNQbGFjZWQpIHtcbiAgICAgIG1pbmVzSWRzID0gbWF0cml4LnBsYWNlTWluZXMoeyBleGNlcHRDZWxsSWQ6IGlkLCBob3dNdWNoTWluZXM6IG1pbmVzIH0pO1xuICAgICAgYXJlTWluZXNQbGFjZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbGwgPSBtYXRyaXguZ2V0QnlJZChpZCk7XG5cbiAgICBpZiAoY2VsbC5pc01pbmVkKCkpIHtcbiAgICAgIHZpZXdBcGkucmV2ZWFsRmllbGQoeyBleHBsb2RlZElkOiBpZCwgbWluZXNJZHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBjZWxsLmdldE51bWJlcigpO1xuICAgIGNlbGwucmV2ZWFsKCk7XG4gICAgc3RlcHMgKz0gMTtcblxuICAgIGxldCBzZWNvbmRhcnlDZWxscyA9IFtdO1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgc2Vjb25kYXJ5Q2VsbHMgPSBnZXRDZWxsc0Fyb3VuZCh7IG1hdHJpeCwgY29vcmRpbmF0ZXM6IGNlbGwuZ2V0Q29vcmRpbmF0ZXMoKSB9KTtcbiAgICB9XG5cbiAgICB2aWV3QXBpLnJldmVhbENlbGwoe1xuICAgICAgcHJpbWFyeUNlbGw6IHsgaWQsIHZhbHVlIH0sXG4gICAgICBzZWNvbmRhcnlDZWxscyxcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmV2ZWFsZWRDZWxsc0NvdW50ZXIgKz0gc2Vjb25kYXJ5Q2VsbHMubGVuZ3RoICsgMTtcbiAgICAgIGlmIChyZXZlYWxlZENlbGxzQ291bnRlciA9PT0gY2VsbHNUb1JldmVhbEZvcldpbikge1xuICAgICAgICB2aWV3QXBpLndpbkdhbWUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDZWxsc0Fyb3VuZCh7IG1hdHJpeCwgY29vcmRpbmF0ZXMgfSkge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBjb25zdCBjaGVja2VkSWRzID0gbmV3IFNldCgpO1xuICBjaGVja0NlbGwoY29vcmRpbmF0ZXMpO1xuXG4gIGZ1bmN0aW9uIGNoZWNrQ2VsbCh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzQXJvdW5kID0gZ2V0Q29vcmRpbmF0ZXNBcm91bmQoeyB4LCB5IH0pO1xuICAgIGNvb3JkaW5hdGVzQXJvdW5kLmZvckVhY2goKHsgeDogY2VsbFgsIHk6IGNlbGxZIH0pID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSBtYXRyaXguZ2V0QnlYWSh7IHg6IGNlbGxYLCB5OiBjZWxsWSB9KTtcbiAgICAgIGlmICghY2VsbCB8fCBjZWxsLmlzUmV2ZWFsZWQoKSB8fCBjZWxsLmlzRmxhZ2dlZCgpKSByZXR1cm47XG4gICAgICBjb25zdCBpZCA9IGNlbGwuZ2V0SWQoKTtcbiAgICAgIGlmIChjaGVja2VkSWRzLmhhcyhpZCkpIHJldHVybjtcbiAgICAgIGNvbnN0IHZhbHVlID0gY2VsbC5nZXROdW1iZXIoKTtcbiAgICAgIGNlbGwucmV2ZWFsKCk7XG4gICAgICByZXN1bHQucHVzaCh7IGlkLCB2YWx1ZSB9KTtcbiAgICAgIGNoZWNrZWRJZHMuYWRkKGlkKTtcblxuICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIGNoZWNrQ2VsbCh7IHg6IGNlbGxYLCB5OiBjZWxsWSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgZ2V0Q29vcmRpbmF0ZXNBcm91bmQgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZShzaXplKSB7XG4gIGNvbnN0IGNlbGxCeUlkID0gbmV3IE1hcCgpO1xuICAvLyBjb25zdCBjZWxsQnlDb29yZGluYXRlcyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbWF0cml4ID0gW107XG5cbiAgbGV0IGN1cnJlbnRJZCA9IDA7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgbWF0cml4LnB1c2gocm93KTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoY3VycmVudElkLCB7IHgsIHkgfSk7XG4gICAgICBjZWxsQnlJZC5zZXQoY3VycmVudElkLCBjZWxsKTtcbiAgICAgIHJvdy5wdXNoKGNlbGwpO1xuICAgICAgLy8gY2VsbEJ5Q29vcmRpbmF0ZXMuc2V0KFt4LCB5XS5qb2luKCctJyksIGNlbGwpO1xuICAgICAgY3VycmVudElkICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBjZWxsQnlDb29yZGluYXRlcyxcbiAgICAvLyBnZXRTaXplOiAoKSA9PiBzaXplLFxuICAgIGRhdGE6IHtcbiAgICAgIGNlbGxCeUlkLFxuICAgICAgbWF0cml4LFxuICAgICAgLy8gY2VsbEJ5Q29vcmRpbmF0ZXMsXG4gICAgfSxcbiAgICBnZXRCeVhZKHsgeCwgeSB9KSB7XG4gICAgICByZXR1cm4gbWF0cml4Py5beF0/Llt5XTtcbiAgICB9LFxuICAgIGdldEJ5SWQoaWQpIHsgcmV0dXJuIGNlbGxCeUlkLmdldChpZCk7IH0sXG4gICAgLy8gZ2V0QnlDb29yZGluYXRlcyhjb29yZCkge2NlbGxCeUNvb3JkaW5hdGVzLmdldChjb29yZC5qb2luKCctJykpfSxcbiAgICBwbGFjZU1pbmVzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwbGFjZU1pbmVzKHsgZXhjZXB0Q2VsbElkLCBob3dNdWNoTWluZXMgfSkge1xuICBjb25zdCBtaW5lc0lkcyA9IFtdO1xuICBjb25zdCBhbGxJZHMgPSBBcnJheS5mcm9tKHRoaXMuZGF0YS5jZWxsQnlJZC5rZXlzKCkpO1xuICBmdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgICBhbGxJZHMuc3BsaWNlKGFsbElkcy5pbmRleE9mKGlkKSwgMSk7XG4gIH1cbiAgcmVtb3ZlKGV4Y2VwdENlbGxJZCk7XG5cbiAgbGV0IG1pbmVzQ291bnQgPSAwO1xuICB3aGlsZSAobWluZXNDb3VudCA8IGhvd011Y2hNaW5lcykge1xuICAgIGNvbnN0IHJhbmRvbUlkID0gYWxsSWRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbElkcy5sZW5ndGgpXTtcbiAgICBjb25zdCBjZWxsID0gdGhpcy5kYXRhLmNlbGxCeUlkLmdldChyYW5kb21JZCk7XG4gICAgY2VsbC5taW5lKCk7XG4gICAgbWluZXNJZHMucHVzaChyYW5kb21JZCk7XG4gICAgaW5jcmVtZW50QXJvdW5kLmNhbGwodGhpcywgY2VsbC5nZXRDb29yZGluYXRlcygpKTtcbiAgICByZW1vdmUocmFuZG9tSWQpO1xuICAgIG1pbmVzQ291bnQgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudEFyb3VuZCh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGNlbGxzQXJvdW5kID0gZ2V0Q29vcmRpbmF0ZXNBcm91bmQoeyB4LCB5IH0pO1xuICAgIGNlbGxzQXJvdW5kLmZvckVhY2goKHsgeDogY2VsbFgsIHk6IGNlbGxZIH0pID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldENlbGwgPSB0aGlzLmdldEJ5WFkoeyB4OiBjZWxsWCwgeTogY2VsbFkgfSk7XG4gICAgICBpZiAoIXRhcmdldENlbGwpIHJldHVybjtcbiAgICAgIHRhcmdldENlbGwuc2V0TnVtYmVyKHRhcmdldENlbGwuZ2V0TnVtYmVyKCkgKyAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtaW5lc0lkcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2VsbChpZCwgeyAuLi5jb29yZCB9KSB7XG4gIC8vIGNvb3JkID0gey4uLmNvb3JkfVxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICBtaW5lZDogZmFsc2UsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICByZXZlYWxlZDogZmFsc2UsXG4gICAgICBmbGFnZ2VkOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgZ2V0SWQ6ICgpID0+IGlkLFxuICAgIGdldENvb3JkaW5hdGVzOiAoKSA9PiBjb29yZCxcblxuICAgIG1pbmUoKSB7IHRoaXMuc3RhdGUubWluZWQgPSB0cnVlOyB9LFxuICAgIGlzTWluZWQoKSB7IHJldHVybiAhIXRoaXMuc3RhdGUubWluZWQ7IH0sXG5cbiAgICBmbGFnKCkgeyB0aGlzLnN0YXRlLmZsYWdnZWQgPSB0cnVlOyB9LFxuICAgIHVuZmxhZygpIHsgdGhpcy5zdGF0ZS5mbGFnZ2VkID0gZmFsc2U7IH0sXG4gICAgaXNGbGFnZ2VkKCkgeyByZXR1cm4gISF0aGlzLnN0YXRlLmZsYWdnZWQ7IH0sXG5cbiAgICBzZXROdW1iZXIobnVtKSB7IHRoaXMuc3RhdGUubnVtYmVyID0gbnVtOyB9LFxuICAgIGdldE51bWJlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm51bWJlcjtcbiAgICB9LFxuXG4gICAgcmV2ZWFsKCkgeyB0aGlzLnN0YXRlLnJldmVhbGVkID0gdHJ1ZTsgfSxcbiAgICBpc1JldmVhbGVkKCkgeyByZXR1cm4gISF0aGlzLnN0YXRlLnJldmVhbGVkOyB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNBcm91bmQoeyB4LCB5IH0pIHtcbiAgY29uc3QgcmFuZ2UgPSBbLTEsIDAsIDFdO1xuICBjb25zdCByZXMgPSBbXTtcbiAgZm9yIChsZXQgeEluZGV4ID0gMDsgeEluZGV4IDwgcmFuZ2UubGVuZ3RoOyB4SW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGRYID0gcmFuZ2VbeEluZGV4XTtcbiAgICBmb3IgKGxldCB5SW5kZXggPSAwOyB5SW5kZXggPCByYW5nZS5sZW5ndGg7IHlJbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBkWSA9IHJhbmdlW3lJbmRleF07XG4gICAgICBpZiAoZFggIT09IDAgfHwgZFkgIT09IDApIHtcbiAgICAgICAgcmVzLnB1c2goeyB4OiB4ICsgZFgsIHk6IHkgKyBkWSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbiIsImltcG9ydCAqIGFzIGdhbWVGYWN0b3J5IGZyb20gJy4vZ2FtZS9nYW1lRmFjdG9yeS5qcyc7XG5cbi8vIGxldCB2aWV3QXBpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoYXBpKSB7XG4gIC8vIHZpZXdBcGkgPSBhcGk7XG4gIGdhbWVGYWN0b3J5LmluaXQoYXBpKTtcbn1cblxuY29uc3QgbW9kZWxBcGkgPSB7XG4gIGlzR2FtZU5vdzogZmFsc2UsXG4gIHN0YXJ0R2FtZSxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpKCkge1xuICByZXR1cm4gbW9kZWxBcGk7XG59XG5cbi8vIHRvZG86IGxvb2sgaW50byBMUyBhbmQgcmV0cmVhdCBhIGdhbWUgaWYgdGhlcmUncyBvbmVcblxuZnVuY3Rpb24gc3RhcnRHYW1lKHBhcmFtcykge1xuICBjb25zdCBnYW1lID0gZ2FtZUZhY3RvcnkuY3JlYXRlKHBhcmFtcyk7XG4gIG1vZGVsQXBpLmlzR2FtZU5vdyA9IHRydWU7XG4gIE9iamVjdC5hc3NpZ24obW9kZWxBcGksIGdhbWUpO1xufVxuIiwiaW1wb3J0ICcuL2NlbGwuY3NzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQnO1xuLy8gaW1wb3J0IGZsYWdJY29uIGZyb20gJy4uL2Fzc2V0cy9mbGFnLnN2Zyc7XG5cbmNvbnN0IENMQVNTRVMgPSB7XG4gIGluaXQ6ICdtaW5lc3dlZXBlci1maWVsZF9fY2VsbCBjZWxsJyxcbiAgcmV2ZWFsZWQ6ICdjZWxsX3JldmVhbGVkJyxcbiAgbnVtZXJpY1RlbXBsYXRlOiAnY2VsbF92YWx1ZV8nLFxuICBmbGFnZ2VkOiAnY2VsbF92YWx1ZV9mbGFnJyxcbiAgbWluZWQ6ICdjZWxsX3ZhbHVlX21pbmVkJyxcbiAgZXhwbG9kZXM6ICdjZWxsX3ZhbHVlX2V4cGxvZGVzJyxcbiAgZmFsc2VGbGFnOiAnY2VsbF92YWx1ZV9mYWxzZS1mbGFnJyxcbn07XG5cbmxldCBtb2RlbEFwaTtcbmxldCBmaWVsZEFwaTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KGFwaXMpIHtcbiAgKHsgbW9kZWxBcGksIGZpZWxkQXBpIH0gPSBhcGlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShpZCkge1xuICBsZXQgZmxhZ2dlZDtcbiAgbGV0IHJldmVhbGVkO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDZWxsRWxlbWVudCgpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChmbGFnZ2VkIHx8IHJldmVhbGVkKSByZXR1cm47XG4gICAgY2xpY2tIYW5kbGVyKGlkKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHJldmVhbGVkIHx8ICFtb2RlbEFwaS5mbGFnQ2VsbCkgcmV0dXJuO1xuXG4gICAgaWYgKCFmbGFnZ2VkKSB7XG4gICAgICBmbGFnZ2VkID0gdHJ1ZTtcbiAgICAgIGVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKGNyZWF0ZUZsYWcoKSk7XG4gICAgICBtb2RlbEFwaS5mbGFnQ2VsbChpZCk7XG4gICAgICBmaWVsZEFwaS5hZGRUb0ZsYWdnZWQoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGFnZ2VkID0gZmFsc2U7XG4gICAgICBlbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgbW9kZWxBcGkudW5mbGFnQ2VsbChpZCk7XG4gICAgICBmaWVsZEFwaS5yZW1vdmVGcm9tRmxhZ2dlZChpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICByZXZlYWxlZCA9IHRydWU7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5yZXZlYWxlZCk7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8IDkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTRVMubnVtZXJpY1RlbXBsYXRlICsgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09ICdtaW5lJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5taW5lKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZXhwbG9kZXMoKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5leHBsb2Rlcyk7XG4gICAgfSxcblxuICAgIHJlbWFpbnNNaW5lZCgpIHtcbiAgICAgIGlmICghZmxhZ2dlZCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZChjcmVhdGVNaW5lKCkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpc0ZhbHNlRmxhZ2dlZCgpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU0VTLmZhbHNlRmxhZyk7XG4gICAgfSxcblxuICAgIGdldEVsZW1lbnQ6ICgpID0+IGVsZW1lbnQsXG4gIH07XG59XG5cbi8vIGZ1bmN0aW9uIGZsYWcoZWxlbSkge1xuLy8gICAvLyB3ZWJwYWNrIGVycm9yXG4vLyAgIGNvbnN0IGZsYWdJY29uRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuLy8gICBmbGFnSWNvbkVsZW1lbnQuc3JjID0gZmxhZ0ljb247XG4vLyAgIGVsZW0uYXBwZW5kKGZsYWdJY29uRWxlbWVudCk7XG4vLyB9XG5cbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihpZCkge1xuICBpZiAoIW1vZGVsQXBpLmlzR2FtZU5vdykge1xuICAgIGZpZWxkQXBpLnN0YXJ0R2FtZShpZCk7XG4gIH1cbiAgbW9kZWxBcGkub3BlbkNlbGwoaWQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDZWxsRWxlbWVudCgpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIENMQVNTRVMuaW5pdCk7XG59XG5cbmxldCBmbGFnQ2FudmFzO1xuZnVuY3Rpb24gY3JlYXRlRmxhZygpIHtcbiAgaWYgKGZsYWdDYW52YXMpIHtcbiAgICByZXR1cm4gY2xvbmVDYW52YXMoZmxhZ0NhbnZhcyk7XG4gIH1cblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gMjA7XG4gIGNhbnZhcy5oZWlnaHQgPSAyMDtcblxuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gZmxhZ3BvbGVcbiAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjb250ZXh0LmZpbGxSZWN0KDIsIDAsIDIsIDIwKTtcbiAgY29udGV4dC5maWxsUmVjdCgwLCAxOCwgNiwgMik7XG5cbiAgLy8gZmxhZ1xuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0Lm1vdmVUbyg0LCAwKTtcbiAgY29udGV4dC5saW5lVG8oMjAsIDcpO1xuICBjb250ZXh0LmxpbmVUbyg0LCAxNCk7XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCc7XG4gIGNvbnRleHQuZmlsbCgpO1xuXG4gIGZsYWdDYW52YXMgPSBjYW52YXM7XG4gIHJldHVybiBmbGFnQ2FudmFzO1xufVxuXG5sZXQgbWluZUNhbnZhcztcbmZ1bmN0aW9uIGNyZWF0ZU1pbmUoKSB7XG4gIGlmIChtaW5lQ2FudmFzKSB7XG4gICAgcmV0dXJuIGNsb25lQ2FudmFzKG1pbmVDYW52YXMpO1xuICB9XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IDIwO1xuICBjYW52YXMuaGVpZ2h0ID0gMjA7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBtaW5lXG4gIGNvbnN0IGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyO1xuICBjb25zdCBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gIGNvbnN0IHJhZGl1cyA9IDg7XG5cbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY29udGV4dC5maWxsKCk7XG5cbiAgLy8gZmxhc2hcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5tb3ZlVG8oMTIsIDEzKTsgLy8gb3V0XG4gIGNvbnRleHQubGluZVRvKDE1LCA4KTsgLy8gaW5cbiAgY29udGV4dC5saW5lVG8oMTAsIDUpOyAvLyBvdXRcbiAgY29udGV4dC5saW5lVG8oMTUsIDMpOyAvLyBpblxuICBjb250ZXh0LmxpbmVUbygxMiwgMCk7IC8vIG91dFxuICBjb250ZXh0LmxpbmVUbygxOCwgMik7IC8vIGluXG4gIGNvbnRleHQubGluZVRvKDIwLCAzKTsgLy8gb3V0XG4gIGNvbnRleHQubGluZVRvKDE3LCA3KTsgLy8gaW5cbiAgY29udGV4dC5saW5lVG8oMjAsIDEwKTsgLy8gb3V0XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gJ3llbGxvdyc7XG4gIGNvbnRleHQuZmlsbCgpO1xuXG4gIG1pbmVDYW52YXMgPSBjYW52YXM7XG4gIHJldHVybiBtaW5lQ2FudmFzO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNhbnZhcyhvbGRDYW52YXMpIHtcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgbmV3Q2FudmFzLndpZHRoID0gb2xkQ2FudmFzLndpZHRoO1xuICBuZXdDYW52YXMuaGVpZ2h0ID0gb2xkQ2FudmFzLmhlaWdodDtcbiAgY29udGV4dC5kcmF3SW1hZ2Uob2xkQ2FudmFzLCAwLCAwKTtcbiAgcmV0dXJuIG5ld0NhbnZhcztcbn1cbiIsImltcG9ydCAnLi9jb3VudGVycy5jc3MnO1xuaW1wb3J0ICogYXMgY291bnRlcnNWaWV3IGZyb20gJy4vY291bnRlcnNWaWV3JztcblxubGV0IG1vZGVsQXBpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoYXBpKSB7XG4gIG1vZGVsQXBpID0gYXBpO1xuICByZXNldCgpO1xufVxuXG5jb25zdCBjb3VudGVyVmFsdWVzID0ge1xuICBzZWNvbmRzOiAwLFxuICBzdGVwczogMCxcbiAgZmxhZ3M6IDAsXG4gIG1pbmVzOiAwLFxufTtcbmxldCBzZWNvbmRJbnRlcnZhbElkO1xuXG5yZXNldCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XG4gIGlmIChtb2RlbEFwaSAmJiBtb2RlbEFwaS5pc0dhbWVOb3cpIHtcbiAgICBtb2RlbEFwaS5nZXREYXRhRm9yVmlldygpO1xuICAgICh7XG4gICAgICBzZWNvbmRzOiBjb3VudGVyVmFsdWVzLnNlY29uZHMsXG4gICAgICBzdGVwczogY291bnRlclZhbHVlcy5zdGVwcyxcbiAgICAgIGZsYWdzOiBjb3VudGVyVmFsdWVzLmZsYWdzLFxuICAgICAgbWluZXM6IGNvdW50ZXJWYWx1ZXMubWluZXMsXG4gICAgfSA9IG1vZGVsQXBpLmdldERhdGFGb3JWaWV3KCkpO1xuICB9XG5cbiAgY291bnRlcnNWaWV3LnNldFZhbHVlcyhjb3VudGVyVmFsdWVzKTtcblxuICBpZiAobW9kZWxBcGkgJiYgbW9kZWxBcGkuaXNHYW1lTm93KSB7XG4gICAgY29udGludWVTZWNvbmRzQ291bnRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZVNlY29uZHNDb3VudGVyKCkge1xuICBzZWNvbmRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvdW50ZXJWYWx1ZXMuc2Vjb25kcyArPSAxO1xuICAgIGNvdW50ZXJzVmlldy5jb3VudCgnc2Vjb25kcycpO1xuICB9LCAxMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BTZWNvbmRDb3VudGVyKCkge1xuICBpZiAoIXNlY29uZEludGVydmFsSWQpIHJldHVybjtcbiAgY2xlYXJJbnRlcnZhbChzZWNvbmRJbnRlcnZhbElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsdXNGbGFnKCkge1xuICBjb3VudGVyVmFsdWVzLmZsYWdzICs9IDE7XG4gIGNvdW50ZXJWYWx1ZXMubWluZXMgLT0gMTtcbiAgY291bnRlcnNWaWV3LnNldFZhbHVlcyhjb3VudGVyVmFsdWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbnVzRmxhZygpIHtcbiAgY291bnRlclZhbHVlcy5mbGFncyAtPSAxO1xuICBjb3VudGVyVmFsdWVzLm1pbmVzICs9IDE7XG4gIGNvdW50ZXJzVmlldy5zZXRWYWx1ZXMoY291bnRlclZhbHVlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFN0ZXAoKSB7XG4gIGNvdW50ZXJWYWx1ZXMuc3RlcHMgKz0gMTtcbiAgY291bnRlcnNWaWV3LnNldFZhbHVlcyhjb3VudGVyVmFsdWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gIHJldHVybiBjb3VudGVyc1ZpZXcuZ2V0RWxlbWVudCgpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudCc7XG5cbmNvbnN0IENMQVNTRVMgPSB7XG4gIHNlY3Rpb246ICdjb3VudGVycycsXG4gIGNvdW50ZXI6IHtcbiAgICBibG9jazogJ2NvdW50ZXInLFxuICAgIHRpdGxlOiAnY291bnRlcl9fdGl0bGUnLFxuICAgIHZhbHVlOiAnY291bnRlcl9fdmFsdWUnLFxuICB9LFxufTtcblxuY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIENMQVNTRVMuc2VjdGlvbik7XG5jb25zdCBjb3VudGVycyA9IHt9O1xuWydzZWNvbmRzJywgJ3N0ZXBzJywgJ2ZsYWdzJywgJ21pbmVzJ10uZm9yRWFjaCgoY291bnRlck5hbWUpID0+IHtcbiAgY29uc3QgY291bnRlciA9IGNyZWF0ZUNvdW50ZXIoY291bnRlck5hbWUpO1xuICBjb3VudGVyc1tjb3VudGVyTmFtZV0gPSBjb3VudGVyO1xuICBzZWN0aW9uLmFwcGVuZChjb3VudGVyLmdldEVsZW1lbnQoKSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlcyhkYXRhKSB7XG4gIE9iamVjdC5lbnRyaWVzKGNvdW50ZXJzKS5mb3JFYWNoKChbY291bnRlck5hbWUsIGNvdW50ZXJPYmplY3RdKSA9PiB7XG4gICAgY291bnRlck9iamVjdC5zZXRWYWx1ZShkYXRhW2NvdW50ZXJOYW1lXSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnQoY291bnRlck5hbWUpIHtcbiAgY291bnRlcnNbY291bnRlck5hbWVdLmNvdW50KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ291bnRlcihuYW1lKSB7XG4gIGxldCBjb3VudGVyVmFsdWU7XG4gIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIENMQVNTRVMuY291bnRlci5ibG9jayk7XG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBDTEFTU0VTLmNvdW50ZXIudGl0bGUpO1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjb25zdCB2YWx1ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwJywgQ0xBU1NFUy5jb3VudGVyLnZhbHVlKTtcbiAgYmxvY2tFbGVtZW50LmFwcGVuZCh0aXRsZUVsZW1lbnQsIHZhbHVlRWxlbWVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRFbGVtZW50KCkgeyByZXR1cm4gYmxvY2tFbGVtZW50OyB9LFxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICBjb3VudGVyVmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgaWYgKE51bWJlci5pc05hTihjb3VudGVyVmFsdWUpKSByZXR1cm47XG4gICAgICB2YWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGNvdW50KCkge1xuICAgICAgY291bnRlclZhbHVlICs9IDE7XG4gICAgICB0aGlzLnNldFZhbHVlKGNvdW50ZXJWYWx1ZSk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCAqIGFzIGZpZWxkVmlldyBmcm9tICcuL2ZpZWxkVmlldyc7XG5pbXBvcnQgKiBhcyBjZWxsRmFjdG9yeSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0ICogYXMgbmV3R2FtZSBmcm9tICcuL25ld0dhbWUnO1xuaW1wb3J0ICogYXMgY291bnRlcnMgZnJvbSAnLi9jb3VudGVycyc7XG5cbmxldCBtb2RlbEFwaTtcbmxldCBjZWxsQnlJZDtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KGFwaSkge1xuICBtb2RlbEFwaSA9IGFwaTtcbiAgY2VsbEZhY3RvcnkuaW5pdCh7IG1vZGVsQXBpLCBmaWVsZEFwaSB9KTtcblxuICBmaWVsZFZpZXcuaW5pdChtb2RlbEFwaSk7XG4gIGNlbGxCeUlkID0gZmllbGRWaWV3LmdldENlbGxzTWFwKCk7XG5cbiAgaWYgKCFtb2RlbEFwaS5jdXJyZW50R2FtZSkge1xuICAgIGZpZWxkVmlldy5zZXRTaXplKCdzbWFsbCcpO1xuICB9XG59XG5cbmNvbnN0IGZsYWdnZWRDZWxscyA9IG5ldyBTZXQoKTtcbmNvbnN0IG1vZGlmaWVkQ2VsbHMgPSBuZXcgU2V0KCk7XG5jb25zdCBmaWVsZEFwaSA9IHtcbiAgYWRkVG9GbGFnZ2VkKGlkKSB7XG4gICAgZmxhZ2dlZENlbGxzLmFkZChpZCk7XG4gICAgbW9kaWZpZWRDZWxscy5hZGQoaWQpO1xuICAgIGNvdW50ZXJzLnBsdXNGbGFnKCk7XG4gIH0sXG4gIHJlbW92ZUZyb21GbGFnZ2VkKGlkKSB7XG4gICAgZmxhZ2dlZENlbGxzLmRlbGV0ZShpZCk7XG4gICAgbW9kaWZpZWRDZWxscy5kZWxldGUoaWQpO1xuICAgIGNvdW50ZXJzLm1pbnVzRmxhZygpO1xuICB9LFxuICBzdGFydEdhbWUoKSB7IG5ld0dhbWUuc3RhcnRHYW1lKCk7IH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsQ2VsbCh7IHByaW1hcnlDZWxsLCBzZWNvbmRhcnlDZWxscyB9KSB7XG4gIHJldmVhbChwcmltYXJ5Q2VsbCk7XG4gIHNlY29uZGFyeUNlbGxzLmZvckVhY2goKGNlbGxEYXRhKSA9PiB7XG4gICAgcmV2ZWFsKGNlbGxEYXRhKTtcbiAgfSk7XG4gIGNvdW50ZXJzLmNvdW50U3RlcCgpO1xuICBmdW5jdGlvbiByZXZlYWwoeyBpZCwgdmFsdWUgfSkge1xuICAgIGNvbnN0IGNlbGwgPSBjZWxsQnlJZC5nZXQoaWQpO1xuICAgIGNlbGwuc2V0VmFsdWUodmFsdWUpO1xuICAgIG1vZGlmaWVkQ2VsbHMuYWRkKGlkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsRmllbGQoeyBleHBsb2RlZElkLCBtaW5lc0lkcyB9KSB7XG4gIGNvbnN0IGV4cGxvZGVkQ2VsbCA9IGNlbGxCeUlkLmdldChleHBsb2RlZElkKTtcbiAgZXhwbG9kZWRDZWxsLmV4cGxvZGVzKCk7XG5cbiAgbWluZXNJZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBjb25zdCByZW1haW5lZE1pbmVDZWxsID0gY2VsbEJ5SWQuZ2V0KGlkKTtcbiAgICByZW1haW5lZE1pbmVDZWxsLnJlbWFpbnNNaW5lZCgpO1xuICAgIG1vZGlmaWVkQ2VsbHMuYWRkKGlkKTtcbiAgfSk7XG5cbiAgZmxhZ2dlZENlbGxzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgaWYgKCFtaW5lc0lkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGNvbnN0IGZhbHNlRmxhZ2dlZENlbGwgPSBjZWxsQnlJZC5nZXQoaWQpO1xuICAgICAgZmFsc2VGbGFnZ2VkQ2VsbC5pc0ZhbHNlRmxhZ2dlZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZmllbGRWaWV3LmRpc2FibGVGaWVsZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2luR2FtZSgpIHtcbiAgZmllbGRWaWV3LmRpc2FibGVGaWVsZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgcmV0dXJuIGZpZWxkVmlldy5nZXRFbGVtZW50KCk7XG59XG4iLCJpbXBvcnQgJy4vZmllbGQuY3NzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0ICogYXMgY2VsbEZhY3RvcnkgZnJvbSAnLi9jZWxsJztcblxubGV0IG1vZGVsQXBpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoYXBpKSB7XG4gIG1vZGVsQXBpID0gYXBpO1xuICBjcmVhdGVBbGxDZWxscygpO1xuXG4gIGlmICghbW9kZWxBcGkuY3VycmVudEdhbWUpIHtcbiAgICBzZXRTaXplKCdzbWFsbCcpO1xuICB9XG59XG5cbmNvbnN0IE1BWF9DRUxMUyA9IDI1ICoqIDI7XG5jb25zdCBDTEFTU0VTID0ge1xuICBmaWVsZEluaXQ6ICdtaW5lc3dlZXBlcl9fZmllbGQgbWluZXN3ZWVwZXItZmllbGQnLFxuICBmaWVsZFNpemVzOiB7XG4gICAgc21hbGw6ICdtaW5lc3dlZXBlci1maWVsZF9zaXplX3NtYWxsJyxcbiAgICBtZWRpdW06ICdtaW5lc3dlZXBlci1maWVsZF9zaXplX21lZGl1bScsXG4gICAgbGFyZ2U6ICdtaW5lc3dlZXBlci1maWVsZF9zaXplX2xhcmdlJyxcbiAgfSxcbiAgZGlzYWJsZWQ6ICdtaW5lc3dlZXBlci1maWVsZF9kaXNhYmxlZCcsXG59O1xuY29uc3QgZmllbGRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgQ0xBU1NFUy5maWVsZEluaXQpO1xuXG5jb25zdCBjZWxsQnlJZCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZWxsc01hcCgpIHtcbiAgcmV0dXJuIGNlbGxCeUlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbGxDZWxscygpIHtcbiAgbGV0IGN1cnJlbnRJZCA9IDA7XG4gIGNvbnN0IGNlbGxFbGVtZW50cyA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgTUFYX0NFTExTOyBpbmRleCArPSAxLCBjdXJyZW50SWQgKz0gMSkge1xuICAgIGNvbnN0IGNlbGwgPSBjZWxsRmFjdG9yeS5jcmVhdGUoY3VycmVudElkKTtcbiAgICBjZWxsQnlJZC5zZXQoY3VycmVudElkLCBjZWxsKTtcbiAgICBjZWxsRWxlbWVudHMucHVzaChjZWxsLmdldEVsZW1lbnQoKSk7XG4gIH1cbiAgZmllbGRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbiguLi5jZWxsRWxlbWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2l6ZShzaXplKSB7XG4gIE9iamVjdC5lbnRyaWVzKENMQVNTRVMuZmllbGRTaXplcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKGtleSA9PT0gc2l6ZSkge1xuICAgICAgZmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVGaWVsZCgpIHtcbiAgZmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5kaXNhYmxlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICByZXR1cm4gZmllbGRFbGVtZW50O1xufVxuIiwiaW1wb3J0ICogYXMgY291bnRlcnMgZnJvbSAnLi9jb3VudGVycyc7XG5cbmNvbnN0IE1PREVTID0ge1xuICBlYXN5OiB7XG4gICAgc2l6ZTogMTAsXG4gICAgbWluZXM6IDEwLFxuICB9LFxuICBtZWRpdW06IHtcbiAgICBzaXplOiAxNSxcbiAgICBtaW5lczogMzAsXG4gIH0sXG4gIGhhcmQ6IHtcbiAgICBzaXplOiAyNSxcbiAgICBtaW5lczogOTksXG4gIH0sXG59O1xuXG5sZXQgbW9kZWxBcGk7XG5leHBvcnQgZnVuY3Rpb24gaW5pdChhcGkpIHtcbiAgbW9kZWxBcGkgPSBhcGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIC8vIHRvZG8gaW1wbGVtZW50IHRoZSBtb2RlIGNob2ljZVxuICBjb25zdCBtb2RlID0gTU9ERVMuZWFzeTtcblxuICBtb2RlbEFwaS5zdGFydEdhbWUobW9kZSk7XG4gIGNvdW50ZXJzLnJlc2V0KCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBmaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQnO1xuaW1wb3J0ICogYXMgbmV3R2FtZSBmcm9tICcuL2NvbXBvbmVudHMvbmV3R2FtZSc7XG5pbXBvcnQgKiBhcyBjb3VudGVycyBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChtb2RlbEFwaSkge1xuICBmaWVsZC5pbml0KG1vZGVsQXBpKTtcbiAgbmV3R2FtZS5pbml0KG1vZGVsQXBpKTtcbiAgY291bnRlcnMuaW5pdChtb2RlbEFwaSk7XG4gIC8vIHRvZG86IGluamVjdCBtb2RlbCBpbnRvIG90aGVyIHZpZXcgc3VibW9kdWxlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgY29uc3QgYXBwRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtaW5lc3dlZXBlci1hcHAnKTtcbiAgYXBwRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgY291bnRlcnMuZ2V0RWxlbWVudCgpLFxuICAgIGZpZWxkLmdldEVsZW1lbnQoKSxcbiAgKTtcbiAgLy8gdG9kbzogYWRkIGFsbCBlbGVtZW50c1xuICByZXR1cm4gYXBwRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXZlYWxDZWxsKGRhdGEpIHsgZmllbGQucmV2ZWFsQ2VsbChkYXRhKTsgfSxcbiAgICByZXZlYWxGaWVsZChkYXRhKSB7XG4gICAgICBmaWVsZC5yZXZlYWxGaWVsZChkYXRhKTtcbiAgICAgIGNvdW50ZXJzLnN0b3BTZWNvbmRDb3VudGVyKCk7XG4gICAgfSxcbiAgICB3aW5HYW1lKCkge1xuICAgICAgZmllbGQud2luR2FtZSgpO1xuICAgICAgY291bnRlcnMuc3RvcFNlY29uZENvdW50ZXIoKTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYm9keS5jc3MnO1xuaW1wb3J0IGdldE1pbmVzd2VlcGVyRWxlbWVudCBmcm9tICcuL2FwcC1taW5lc3dlZXBlci9jb250cm9sbGVyLmpzJztcblxuZG9jdW1lbnQuYm9keS5wcmVwZW5kKGdldE1pbmVzd2VlcGVyRWxlbWVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==