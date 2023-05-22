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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'CellFont';\n  src: \n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff') font-weight-normal,\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-Medium.woff') format('woff'), */\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-SemiBold.woff') format('woff'), */\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff') font-weight-bold\n  ;\n}\n\n.cell {\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n\n  display: grid;\n  place-items: center;\n\n  font: bold 16px \"CellFont\", sans-serif;\n\n  background-color: lightgrey;\n  box-shadow: \n    inset 3px 3px white,\n    inset -3px -3px darkgray\n  ;\n  border: 1px solid black;\n  border-radius: 5px;\n\n  cursor: pointer;\n\n  transition: all 0.1s;\n}\n\n.cell_revealed {\n  cursor: unset;\n  box-shadow: none;\n  background-color: white;\n}\n\n.cell_value_flag::after {\n  /* content: url('../assets/flag.png'); */\n  content: \"🚩\";\n}\n\n.cell_value_explodes {\n  background-color: red;\n  box-shadow: none;\n}\n\n.cell_value_false-flag {\n  box-shadow: none;\n  background-color: pink;\n}\n\n.cell_value_mined::after {\n  content: \"💣\";\n}\n\n.cell_value_1::after {\n  content: '1';\n  color: blue;\n}\n\n.cell_value_2::after {\n  content: '2';\n  color: green;\n}\n\n.cell_value_3::after {\n  content: '3';\n  color: orangered;\n}\n\n.cell_value_4::after {\n  content: '4';\n  color: brown;\n}\n\n.cell_value_5::after {\n  content: '5';\n  color: red;\n}\n\n.cell_value_6::after {\n  content: '6';\n  color: darkviolet;\n}\n\n.cell_value_7::after {\n  content: '7';\n  color: coral;\n}\n\n.cell_value_8::after {\n  content: '8';\n  color: royalblue;\n}\n", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/components/cell.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB;;;;;EAKA;AACF;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,mBAAmB;;EAEnB,sCAAsC;;EAEtC,2BAA2B;EAC3B;;;EAGA;EACA,uBAAuB;EACvB,kBAAkB;;EAElB,eAAe;;EAEf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":["@font-face {\n  font-family: 'CellFont';\n  src: \n    url('../assets/fonts/cell-font/NotoSansNagMundari-Regular.woff') format('woff') font-weight-normal,\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-Medium.woff') format('woff'), */\n    /* url('../assets/fonts/cell-font/NotoSansNagMundari-SemiBold.woff') format('woff'), */\n    url('../assets/fonts/cell-font/NotoSansNagMundari-Bold.woff') format('woff') font-weight-bold\n  ;\n}\n\n.cell {\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n\n  display: grid;\n  place-items: center;\n\n  font: bold 16px \"CellFont\", sans-serif;\n\n  background-color: lightgrey;\n  box-shadow: \n    inset 3px 3px white,\n    inset -3px -3px darkgray\n  ;\n  border: 1px solid black;\n  border-radius: 5px;\n\n  cursor: pointer;\n\n  transition: all 0.1s;\n}\n\n.cell_revealed {\n  cursor: unset;\n  box-shadow: none;\n  background-color: white;\n}\n\n.cell_value_flag::after {\n  /* content: url('../assets/flag.png'); */\n  content: \"🚩\";\n}\n\n.cell_value_explodes {\n  background-color: red;\n  box-shadow: none;\n}\n\n.cell_value_false-flag {\n  box-shadow: none;\n  background-color: pink;\n}\n\n.cell_value_mined::after {\n  content: \"💣\";\n}\n\n.cell_value_1::after {\n  content: '1';\n  color: blue;\n}\n\n.cell_value_2::after {\n  content: '2';\n  color: green;\n}\n\n.cell_value_3::after {\n  content: '3';\n  color: orangered;\n}\n\n.cell_value_4::after {\n  content: '4';\n  color: brown;\n}\n\n.cell_value_5::after {\n  content: '5';\n  color: red;\n}\n\n.cell_value_6::after {\n  content: '6';\n  color: darkviolet;\n}\n\n.cell_value_7::after {\n  content: '7';\n  color: coral;\n}\n\n.cell_value_8::after {\n  content: '8';\n  color: royalblue;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".minesweeper-field {\n  position: relative;\n  width: min-content;\n  display: grid;\n  gap: 5px;\n  padding: 5px;\n  border: 1px solid black;\n  background-color: white;\n}\n\n.minesweeper-field_size_small {\n  grid-template-columns: repeat(10, min-content);\n}\n\n.minesweeper-field_size_small > .minesweeper-field__cell:nth-last-child(-n+525) {\n  display: none;\n}\n\n.minesweeper-field_size_medium {\n  grid-template-columns: repeat(15, min-content);\n}\n\n.minesweeper-field_size_medium > .minesweeper-field__cell:nth-last-child(-n+400) {\n  display: none;\n}\n\n.minesweeper-field_size_large {\n  grid-template-columns: repeat(25, min-content);\n}\n\n.minesweeper-field_disabled::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/components/field.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd","sourcesContent":[".minesweeper-field {\n  position: relative;\n  width: min-content;\n  display: grid;\n  gap: 5px;\n  padding: 5px;\n  border: 1px solid black;\n  background-color: white;\n}\n\n.minesweeper-field_size_small {\n  grid-template-columns: repeat(10, min-content);\n}\n\n.minesweeper-field_size_small > .minesweeper-field__cell:nth-last-child(-n+525) {\n  display: none;\n}\n\n.minesweeper-field_size_medium {\n  grid-template-columns: repeat(15, min-content);\n}\n\n.minesweeper-field_size_medium > .minesweeper-field__cell:nth-last-child(-n+400) {\n  display: none;\n}\n\n.minesweeper-field_size_large {\n  grid-template-columns: repeat(25, min-content);\n}\n\n.minesweeper-field_disabled::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".minesweeper-app {\n  display: grid;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/app-minesweeper/view/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;AACzB","sourcesContent":[".minesweeper-app {\n  display: grid;\n  justify-content: center;\n}"],"sourceRoot":""}]);
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

  const gameObject = {
    openCell,
    countSecond() { seconds += 1; },
    countStep() { steps += 1; },
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
      if (!cell || cell.isRevealed()) return;
      const id = cell.getId();
      if (checkedIds.has(id)) return;
      const value = cell.getNumber();
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
/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newGame */ "./src/app-minesweeper/view/components/newGame.js");



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
  modelApi = apis.modelApi;
  fieldApi = apis.fieldApi;
}

function create(id) {
  let flagged;
  let revealed;

  const element = createCellElement();
  element.addEventListener('click', () => {
    if (flagged) return;
    clickHandler(id);
  });

  element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (revealed) return;

    if (!flagged) {
      flagged = true;
      element.append(createFlag());
      fieldApi.addToFlagged(id);
    } else {
      flagged = false;
      element.replaceChildren();
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
    _newGame__WEBPACK_IMPORTED_MODULE_2__.startGame(id);
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
  },
  removeFromFlagged(id) {
    flaggedCells.delete(id);
    modifiedCells.delete(id);
  },
};

function revealCell({ primaryCell, secondaryCells }) {
  reveal(primaryCell);
  secondaryCells.forEach((cellData) => {
    reveal(cellData);
  });
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





function init(model) {
  _components_field__WEBPACK_IMPORTED_MODULE_2__.init(model);
  _components_newGame__WEBPACK_IMPORTED_MODULE_3__.init(model);
  // todo: inject model into other view submodules
}

function getElement() {
  const appElement = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'minesweeper-app');
  appElement.append(_components_field__WEBPACK_IMPORTED_MODULE_2__.getElement());
  // todo: add all elements
  return appElement;
}

function getApi() {
  return {
    revealCell: _components_field__WEBPACK_IMPORTED_MODULE_2__.revealCell,
    revealField: _components_field__WEBPACK_IMPORTED_MODULE_2__.revealField,
    winGame: _components_field__WEBPACK_IMPORTED_MODULE_2__.winGame,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNnRDs7QUFFcEUsc0JBQXNCLDBFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L2NvbXBvbmVudHMvY2VsbC5jc3MiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9maWVsZC5jc3MiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9ib2R5LmNzcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9jZWxsLmNzcz9kMTIyIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L2NvbXBvbmVudHMvZmllbGQuY3NzPzRlNDciLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvc3R5bGVzLmNzcz9mOTg4Iiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2JvZHkuY3NzPzMwZTMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvbW9kZWwvZ2FtZS9nYW1lRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvbW9kZWwvZ2FtZS9tYXRyaXhGYWN0b3J5LmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2FwcC1taW5lc3dlZXBlci9tb2RlbC9nYW1lL3V0aWxzLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2FwcC1taW5lc3dlZXBlci9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2NlbGwuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY29tcG9uZW50cy9maWVsZC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2ZpZWxkVmlldy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLW1pbmVzd2VlcGVyL3ZpZXcvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvY2VsbC1mb250L05vdG9TYW5zTmFnTXVuZGFyaS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvY2VsbC1mb250L05vdG9TYW5zTmFnTXVuZGFyaS1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NlbGxGb250JztcXG4gIHNyYzogXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJykgZm9udC13ZWlnaHQtbm9ybWFsLFxcbiAgICAvKiB1cmwoJy4uL2Fzc2V0cy9mb250cy9jZWxsLWZvbnQvTm90b1NhbnNOYWdNdW5kYXJpLU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksICovXFxuICAgIC8qIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2NlbGwtZm9udC9Ob3RvU2Fuc05hZ011bmRhcmktU2VtaUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCAqL1xcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpIGZvbnQtd2VpZ2h0LWJvbGRcXG4gIDtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250OiBib2xkIDE2cHggXFxcIkNlbGxGb250XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGJveC1zaGFkb3c6IFxcbiAgICBpbnNldCAzcHggM3B4IHdoaXRlLFxcbiAgICBpbnNldCAtM3B4IC0zcHggZGFya2dyYXlcXG4gIDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxufVxcblxcbi5jZWxsX3JldmVhbGVkIHtcXG4gIGN1cnNvcjogdW5zZXQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2ZsYWc6OmFmdGVyIHtcXG4gIC8qIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL2ZsYWcucG5nJyk7ICovXFxuICBjb250ZW50OiBcXFwi8J+aqVxcXCI7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2V4cGxvZGVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2ZhbHNlLWZsYWcge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi5jZWxsX3ZhbHVlX21pbmVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi8J+So1xcXCI7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcxJztcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY2VsbF92YWx1ZV8yOjphZnRlciB7XFxuICBjb250ZW50OiAnMic7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jZWxsX3ZhbHVlXzM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICczJztcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc0JztcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNTo6YWZ0ZXIge1xcbiAgY29udGVudDogJzUnO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNjo6YWZ0ZXIge1xcbiAgY29udGVudDogJzYnO1xcbiAgY29sb3I6IGRhcmt2aW9sZXQ7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc3JztcXG4gIGNvbG9yOiBjb3JhbDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfODo6YWZ0ZXIge1xcbiAgY29udGVudDogJzgnO1xcbiAgY29sb3I6IHJveWFsYmx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L2NvbXBvbmVudHMvY2VsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkI7Ozs7O0VBS0E7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixzQ0FBc0M7O0VBRXRDLDJCQUEyQjtFQUMzQjs7O0VBR0E7RUFDQSx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixlQUFlOztFQUVmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NlbGxGb250JztcXG4gIHNyYzogXFxuICAgIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2NlbGwtZm9udC9Ob3RvU2Fuc05hZ011bmRhcmktUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJykgZm9udC13ZWlnaHQtbm9ybWFsLFxcbiAgICAvKiB1cmwoJy4uL2Fzc2V0cy9mb250cy9jZWxsLWZvbnQvTm90b1NhbnNOYWdNdW5kYXJpLU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksICovXFxuICAgIC8qIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2NlbGwtZm9udC9Ob3RvU2Fuc05hZ011bmRhcmktU2VtaUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCAqL1xcbiAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9jZWxsLWZvbnQvTm90b1NhbnNOYWdNdW5kYXJpLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpIGZvbnQtd2VpZ2h0LWJvbGRcXG4gIDtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250OiBib2xkIDE2cHggXFxcIkNlbGxGb250XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGJveC1zaGFkb3c6IFxcbiAgICBpbnNldCAzcHggM3B4IHdoaXRlLFxcbiAgICBpbnNldCAtM3B4IC0zcHggZGFya2dyYXlcXG4gIDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxufVxcblxcbi5jZWxsX3JldmVhbGVkIHtcXG4gIGN1cnNvcjogdW5zZXQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2ZsYWc6OmFmdGVyIHtcXG4gIC8qIGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL2ZsYWcucG5nJyk7ICovXFxuICBjb250ZW50OiBcXFwi8J+aqVxcXCI7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2V4cGxvZGVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jZWxsX3ZhbHVlX2ZhbHNlLWZsYWcge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi5jZWxsX3ZhbHVlX21pbmVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi8J+So1xcXCI7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcxJztcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY2VsbF92YWx1ZV8yOjphZnRlciB7XFxuICBjb250ZW50OiAnMic7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5jZWxsX3ZhbHVlXzM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICczJztcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc0JztcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNTo6YWZ0ZXIge1xcbiAgY29udGVudDogJzUnO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfNjo6YWZ0ZXIge1xcbiAgY29udGVudDogJzYnO1xcbiAgY29sb3I6IGRhcmt2aW9sZXQ7XFxufVxcblxcbi5jZWxsX3ZhbHVlXzc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc3JztcXG4gIGNvbG9yOiBjb3JhbDtcXG59XFxuXFxuLmNlbGxfdmFsdWVfODo6YWZ0ZXIge1xcbiAgY29udGVudDogJzgnO1xcbiAgY29sb3I6IHJveWFsYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1pbmVzd2VlcGVyLWZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5taW5lc3dlZXBlci1maWVsZF9zaXplX3NtYWxsIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW4tY29udGVudCk7XFxufVxcblxcbi5taW5lc3dlZXBlci1maWVsZF9zaXplX3NtYWxsID4gLm1pbmVzd2VlcGVyLWZpZWxkX19jZWxsOm50aC1sYXN0LWNoaWxkKC1uKzUyNSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1pbmVzd2VlcGVyLWZpZWxkX3NpemVfbWVkaXVtIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE1LCBtaW4tY29udGVudCk7XFxufVxcblxcbi5taW5lc3dlZXBlci1maWVsZF9zaXplX21lZGl1bSA+IC5taW5lc3dlZXBlci1maWVsZF9fY2VsbDpudGgtbGFzdC1jaGlsZCgtbis0MDApIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5taW5lc3dlZXBlci1maWVsZF9zaXplX2xhcmdlIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDI1LCBtaW4tY29udGVudCk7XFxufVxcblxcbi5taW5lc3dlZXBlci1maWVsZF9kaXNhYmxlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAtbWluZXN3ZWVwZXIvdmlldy9jb21wb25lbnRzL2ZpZWxkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5taW5lc3dlZXBlci1maWVsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfc2l6ZV9zbWFsbCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfc2l6ZV9zbWFsbCA+IC5taW5lc3dlZXBlci1maWVsZF9fY2VsbDpudGgtbGFzdC1jaGlsZCgtbis1MjUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5taW5lc3dlZXBlci1maWVsZF9zaXplX21lZGl1bSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNSwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfc2l6ZV9tZWRpdW0gPiAubWluZXN3ZWVwZXItZmllbGRfX2NlbGw6bnRoLWxhc3QtY2hpbGQoLW4rNDAwKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfc2l6ZV9sYXJnZSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyNSwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4ubWluZXN3ZWVwZXItZmllbGRfZGlzYWJsZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWluZXN3ZWVwZXItYXBwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC1taW5lc3dlZXBlci92aWV3L3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5taW5lc3dlZXBlci1hcHAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYm9keS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmllbGQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maWVsZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2R5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHZpZXcgZnJvbSAnLi92aWV3L2luZGV4LmpzJztcbmltcG9ydCAqIGFzIG1vZGVsIGZyb20gJy4vbW9kZWwvaW5kZXguanMnO1xuXG4vLyBNb2RlbCBsb29rcyBpbiBMb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgZ2FtZSBhbmQgaW5qZWN0IHZpZXcgQVBJIGZvciBpdHMgc3VibW9kdWxlXG5tb2RlbC5pbml0KHZpZXcuZ2V0QXBpKCkpO1xuXG4vLyBBIHNhdmVkIGdhbWUgaXMgYXZhaWxhYmxlIHRocm91Z2ggTW9kZWxBUEksXG4vLyBzbyB0aGUgVmlldyB3aWxsIGJlIGluaXRpYWxpemVkIHdpdGggdGhpcyBnYW1lIGlmIGl0IGlzIHByZXNlbnQuXG52aWV3LmluaXQobW9kZWwuZ2V0QXBpKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBcHBFbGVtZW50KCkge1xuICByZXR1cm4gdmlldy5nZXRFbGVtZW50KCk7XG59XG4iLCJpbXBvcnQgZ2V0Q29vcmRpbmF0ZXNBcm91bmQgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgY3JlYXRlTWF0cml4IGZyb20gJy4vbWF0cml4RmFjdG9yeSc7XG5cbmxldCB2aWV3QXBpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoYXBpKSB7XG4gIHZpZXdBcGkgPSBhcGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoeyBzaXplLCBtaW5lcyB9KSB7XG4gIGNvbnN0IG1hdHJpeCA9IGNyZWF0ZU1hdHJpeChzaXplKTtcblxuICBsZXQgYXJlTWluZXNQbGFjZWQgPSBmYWxzZTtcbiAgbGV0IG1pbmVzSWRzO1xuXG4gIGxldCByZXZlYWxlZENlbGxzQ291bnRlciA9IDA7XG4gIGNvbnN0IGNlbGxzVG9SZXZlYWxGb3JXaW4gPSBzaXplICoqIDIgLSBtaW5lcztcblxuICBsZXQgc2Vjb25kcyA9IDA7XG4gIGxldCBzdGVwcyA9IDA7XG5cbiAgY29uc3QgZ2FtZU9iamVjdCA9IHtcbiAgICBvcGVuQ2VsbCxcbiAgICBjb3VudFNlY29uZCgpIHsgc2Vjb25kcyArPSAxOyB9LFxuICAgIGNvdW50U3RlcCgpIHsgc3RlcHMgKz0gMTsgfSxcbiAgfTtcblxuICByZXR1cm4gZ2FtZU9iamVjdDtcblxuICBmdW5jdGlvbiBvcGVuQ2VsbChpZCkge1xuICAgIGlmICghYXJlTWluZXNQbGFjZWQpIHtcbiAgICAgIG1pbmVzSWRzID0gbWF0cml4LnBsYWNlTWluZXMoeyBleGNlcHRDZWxsSWQ6IGlkLCBob3dNdWNoTWluZXM6IG1pbmVzIH0pO1xuICAgICAgYXJlTWluZXNQbGFjZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbGwgPSBtYXRyaXguZ2V0QnlJZChpZCk7XG5cbiAgICBpZiAoY2VsbC5pc01pbmVkKCkpIHtcbiAgICAgIHZpZXdBcGkucmV2ZWFsRmllbGQoeyBleHBsb2RlZElkOiBpZCwgbWluZXNJZHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBjZWxsLmdldE51bWJlcigpO1xuICAgIGNlbGwucmV2ZWFsKCk7XG5cbiAgICBsZXQgc2Vjb25kYXJ5Q2VsbHMgPSBbXTtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHNlY29uZGFyeUNlbGxzID0gZ2V0Q2VsbHNBcm91bmQoeyBtYXRyaXgsIGNvb3JkaW5hdGVzOiBjZWxsLmdldENvb3JkaW5hdGVzKCkgfSk7XG4gICAgfVxuXG4gICAgdmlld0FwaS5yZXZlYWxDZWxsKHtcbiAgICAgIHByaW1hcnlDZWxsOiB7IGlkLCB2YWx1ZSB9LFxuICAgICAgc2Vjb25kYXJ5Q2VsbHMsXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJldmVhbGVkQ2VsbHNDb3VudGVyICs9IHNlY29uZGFyeUNlbGxzLmxlbmd0aCArIDE7XG4gICAgICBpZiAocmV2ZWFsZWRDZWxsc0NvdW50ZXIgPT09IGNlbGxzVG9SZXZlYWxGb3JXaW4pIHtcbiAgICAgICAgdmlld0FwaS53aW5HYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbHNBcm91bmQoeyBtYXRyaXgsIGNvb3JkaW5hdGVzIH0pIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgY29uc3QgY2hlY2tlZElkcyA9IG5ldyBTZXQoKTtcbiAgY2hlY2tDZWxsKGNvb3JkaW5hdGVzKTtcblxuICBmdW5jdGlvbiBjaGVja0NlbGwoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBjb29yZGluYXRlc0Fyb3VuZCA9IGdldENvb3JkaW5hdGVzQXJvdW5kKHsgeCwgeSB9KTtcbiAgICBjb29yZGluYXRlc0Fyb3VuZC5mb3JFYWNoKCh7IHg6IGNlbGxYLCB5OiBjZWxsWSB9KSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gbWF0cml4LmdldEJ5WFkoeyB4OiBjZWxsWCwgeTogY2VsbFkgfSk7XG4gICAgICBpZiAoIWNlbGwgfHwgY2VsbC5pc1JldmVhbGVkKCkpIHJldHVybjtcbiAgICAgIGNvbnN0IGlkID0gY2VsbC5nZXRJZCgpO1xuICAgICAgaWYgKGNoZWNrZWRJZHMuaGFzKGlkKSkgcmV0dXJuO1xuICAgICAgY29uc3QgdmFsdWUgPSBjZWxsLmdldE51bWJlcigpO1xuICAgICAgcmVzdWx0LnB1c2goeyBpZCwgdmFsdWUgfSk7XG4gICAgICBjaGVja2VkSWRzLmFkZChpZCk7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICBjaGVja0NlbGwoeyB4OiBjZWxsWCwgeTogY2VsbFkgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IGdldENvb3JkaW5hdGVzQXJvdW5kIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGUoc2l6ZSkge1xuICBjb25zdCBjZWxsQnlJZCA9IG5ldyBNYXAoKTtcbiAgLy8gY29uc3QgY2VsbEJ5Q29vcmRpbmF0ZXMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1hdHJpeCA9IFtdO1xuXG4gIGxldCBjdXJyZW50SWQgPSAwO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemU7IHggKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIG1hdHJpeC5wdXNoKHJvdyk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5ICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBjcmVhdGVDZWxsKGN1cnJlbnRJZCwgeyB4LCB5IH0pO1xuICAgICAgY2VsbEJ5SWQuc2V0KGN1cnJlbnRJZCwgY2VsbCk7XG4gICAgICByb3cucHVzaChjZWxsKTtcbiAgICAgIC8vIGNlbGxCeUNvb3JkaW5hdGVzLnNldChbeCwgeV0uam9pbignLScpLCBjZWxsKTtcbiAgICAgIGN1cnJlbnRJZCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gY2VsbEJ5Q29vcmRpbmF0ZXMsXG4gICAgLy8gZ2V0U2l6ZTogKCkgPT4gc2l6ZSxcbiAgICBkYXRhOiB7XG4gICAgICBjZWxsQnlJZCxcbiAgICAgIG1hdHJpeCxcbiAgICAgIC8vIGNlbGxCeUNvb3JkaW5hdGVzLFxuICAgIH0sXG4gICAgZ2V0QnlYWSh7IHgsIHkgfSkge1xuICAgICAgcmV0dXJuIG1hdHJpeD8uW3hdPy5beV07XG4gICAgfSxcbiAgICBnZXRCeUlkKGlkKSB7IHJldHVybiBjZWxsQnlJZC5nZXQoaWQpOyB9LFxuICAgIC8vIGdldEJ5Q29vcmRpbmF0ZXMoY29vcmQpIHtjZWxsQnlDb29yZGluYXRlcy5nZXQoY29vcmQuam9pbignLScpKX0sXG4gICAgcGxhY2VNaW5lcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGxhY2VNaW5lcyh7IGV4Y2VwdENlbGxJZCwgaG93TXVjaE1pbmVzIH0pIHtcbiAgY29uc3QgbWluZXNJZHMgPSBbXTtcbiAgY29uc3QgYWxsSWRzID0gQXJyYXkuZnJvbSh0aGlzLmRhdGEuY2VsbEJ5SWQua2V5cygpKTtcbiAgZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XG4gICAgYWxsSWRzLnNwbGljZShhbGxJZHMuaW5kZXhPZihpZCksIDEpO1xuICB9XG4gIHJlbW92ZShleGNlcHRDZWxsSWQpO1xuXG4gIGxldCBtaW5lc0NvdW50ID0gMDtcbiAgd2hpbGUgKG1pbmVzQ291bnQgPCBob3dNdWNoTWluZXMpIHtcbiAgICBjb25zdCByYW5kb21JZCA9IGFsbElkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxJZHMubGVuZ3RoKV07XG4gICAgY29uc3QgY2VsbCA9IHRoaXMuZGF0YS5jZWxsQnlJZC5nZXQocmFuZG9tSWQpO1xuICAgIGNlbGwubWluZSgpO1xuICAgIG1pbmVzSWRzLnB1c2gocmFuZG9tSWQpO1xuICAgIGluY3JlbWVudEFyb3VuZC5jYWxsKHRoaXMsIGNlbGwuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgcmVtb3ZlKHJhbmRvbUlkKTtcbiAgICBtaW5lc0NvdW50ICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRBcm91bmQoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBjZWxsc0Fyb3VuZCA9IGdldENvb3JkaW5hdGVzQXJvdW5kKHsgeCwgeSB9KTtcbiAgICBjZWxsc0Fyb3VuZC5mb3JFYWNoKCh7IHg6IGNlbGxYLCB5OiBjZWxsWSB9KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gdGhpcy5nZXRCeVhZKHsgeDogY2VsbFgsIHk6IGNlbGxZIH0pO1xuICAgICAgaWYgKCF0YXJnZXRDZWxsKSByZXR1cm47XG4gICAgICB0YXJnZXRDZWxsLnNldE51bWJlcih0YXJnZXRDZWxsLmdldE51bWJlcigpICsgMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWluZXNJZHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbGwoaWQsIHsgLi4uY29vcmQgfSkge1xuICAvLyBjb29yZCA9IHsuLi5jb29yZH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgbWluZWQ6IGZhbHNlLFxuICAgICAgbnVtYmVyOiAwLFxuICAgICAgcmV2ZWFsZWQ6IGZhbHNlLFxuICAgICAgZmxhZ2dlZDogZmFsc2UsXG4gICAgfSxcblxuICAgIGdldElkOiAoKSA9PiBpZCxcbiAgICBnZXRDb29yZGluYXRlczogKCkgPT4gY29vcmQsXG5cbiAgICBtaW5lKCkgeyB0aGlzLnN0YXRlLm1pbmVkID0gdHJ1ZTsgfSxcbiAgICBpc01pbmVkKCkgeyByZXR1cm4gISF0aGlzLnN0YXRlLm1pbmVkOyB9LFxuXG4gICAgZmxhZygpIHsgdGhpcy5zdGF0ZS5mbGFnZ2VkID0gdHJ1ZTsgfSxcbiAgICBpc0ZsYWdnZWQoKSB7IHJldHVybiAhIXRoaXMuc3RhdGUuZmxhZ2dlZDsgfSxcblxuICAgIHNldE51bWJlcihudW0pIHsgdGhpcy5zdGF0ZS5udW1iZXIgPSBudW07IH0sXG4gICAgZ2V0TnVtYmVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubnVtYmVyO1xuICAgIH0sXG5cbiAgICByZXZlYWwoKSB7IHRoaXMuc3RhdGUucmV2ZWFsZWQgPSB0cnVlOyB9LFxuICAgIGlzUmV2ZWFsZWQoKSB7IHJldHVybiAhIXRoaXMuc3RhdGUucmV2ZWFsZWQ7IH0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Fyb3VuZCh7IHgsIHkgfSkge1xuICBjb25zdCByYW5nZSA9IFstMSwgMCwgMV07XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGxldCB4SW5kZXggPSAwOyB4SW5kZXggPCByYW5nZS5sZW5ndGg7IHhJbmRleCArPSAxKSB7XG4gICAgY29uc3QgZFggPSByYW5nZVt4SW5kZXhdO1xuICAgIGZvciAobGV0IHlJbmRleCA9IDA7IHlJbmRleCA8IHJhbmdlLmxlbmd0aDsgeUluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IGRZID0gcmFuZ2VbeUluZGV4XTtcbiAgICAgIGlmIChkWCAhPT0gMCB8fCBkWSAhPT0gMCkge1xuICAgICAgICByZXMucHVzaCh7IHg6IHggKyBkWCwgeTogeSArIGRZIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0ICogYXMgZ2FtZUZhY3RvcnkgZnJvbSAnLi9nYW1lL2dhbWVGYWN0b3J5LmpzJztcblxuLy8gbGV0IHZpZXdBcGk7XG5leHBvcnQgZnVuY3Rpb24gaW5pdChhcGkpIHtcbiAgLy8gdmlld0FwaSA9IGFwaTtcbiAgZ2FtZUZhY3RvcnkuaW5pdChhcGkpO1xufVxuXG5jb25zdCBtb2RlbEFwaSA9IHtcbiAgaXNHYW1lTm93OiBmYWxzZSxcbiAgc3RhcnRHYW1lLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcGkoKSB7XG4gIHJldHVybiBtb2RlbEFwaTtcbn1cblxuLy8gdG9kbzogbG9vayBpbnRvIExTIGFuZCByZXRyZWF0IGEgZ2FtZSBpZiB0aGVyZSdzIG9uZVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocGFyYW1zKSB7XG4gIGNvbnN0IGdhbWUgPSBnYW1lRmFjdG9yeS5jcmVhdGUocGFyYW1zKTtcbiAgbW9kZWxBcGkuaXNHYW1lTm93ID0gdHJ1ZTtcbiAgT2JqZWN0LmFzc2lnbihtb2RlbEFwaSwgZ2FtZSk7XG59XG4iLCJpbXBvcnQgJy4vY2VsbC5jc3MnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBuZXdHYW1lIGZyb20gJy4vbmV3R2FtZSc7XG4vLyBpbXBvcnQgZmxhZ0ljb24gZnJvbSAnLi4vYXNzZXRzL2ZsYWcuc3ZnJztcblxuY29uc3QgQ0xBU1NFUyA9IHtcbiAgaW5pdDogJ21pbmVzd2VlcGVyLWZpZWxkX19jZWxsIGNlbGwnLFxuICByZXZlYWxlZDogJ2NlbGxfcmV2ZWFsZWQnLFxuICBudW1lcmljVGVtcGxhdGU6ICdjZWxsX3ZhbHVlXycsXG4gIGZsYWdnZWQ6ICdjZWxsX3ZhbHVlX2ZsYWcnLFxuICBtaW5lZDogJ2NlbGxfdmFsdWVfbWluZWQnLFxuICBleHBsb2RlczogJ2NlbGxfdmFsdWVfZXhwbG9kZXMnLFxuICBmYWxzZUZsYWc6ICdjZWxsX3ZhbHVlX2ZhbHNlLWZsYWcnLFxufTtcblxubGV0IG1vZGVsQXBpO1xubGV0IGZpZWxkQXBpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoYXBpcykge1xuICBtb2RlbEFwaSA9IGFwaXMubW9kZWxBcGk7XG4gIGZpZWxkQXBpID0gYXBpcy5maWVsZEFwaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShpZCkge1xuICBsZXQgZmxhZ2dlZDtcbiAgbGV0IHJldmVhbGVkO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDZWxsRWxlbWVudCgpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChmbGFnZ2VkKSByZXR1cm47XG4gICAgY2xpY2tIYW5kbGVyKGlkKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHJldmVhbGVkKSByZXR1cm47XG5cbiAgICBpZiAoIWZsYWdnZWQpIHtcbiAgICAgIGZsYWdnZWQgPSB0cnVlO1xuICAgICAgZWxlbWVudC5hcHBlbmQoY3JlYXRlRmxhZygpKTtcbiAgICAgIGZpZWxkQXBpLmFkZFRvRmxhZ2dlZChpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYWdnZWQgPSBmYWxzZTtcbiAgICAgIGVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBmaWVsZEFwaS5yZW1vdmVGcm9tRmxhZ2dlZChpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICByZXZlYWxlZCA9IHRydWU7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5yZXZlYWxlZCk7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8IDkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTRVMubnVtZXJpY1RlbXBsYXRlICsgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09ICdtaW5lJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5taW5lKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZXhwbG9kZXMoKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NFUy5leHBsb2Rlcyk7XG4gICAgfSxcblxuICAgIHJlbWFpbnNNaW5lZCgpIHtcbiAgICAgIGlmICghZmxhZ2dlZCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZChjcmVhdGVNaW5lKCkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpc0ZhbHNlRmxhZ2dlZCgpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU0VTLmZhbHNlRmxhZyk7XG4gICAgfSxcblxuICAgIGdldEVsZW1lbnQ6ICgpID0+IGVsZW1lbnQsXG4gIH07XG59XG5cbi8vIGZ1bmN0aW9uIGZsYWcoZWxlbSkge1xuLy8gICAvLyB3ZWJwYWNrIGVycm9yXG4vLyAgIGNvbnN0IGZsYWdJY29uRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuLy8gICBmbGFnSWNvbkVsZW1lbnQuc3JjID0gZmxhZ0ljb247XG4vLyAgIGVsZW0uYXBwZW5kKGZsYWdJY29uRWxlbWVudCk7XG4vLyB9XG5cbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihpZCkge1xuICBpZiAoIW1vZGVsQXBpLmlzR2FtZU5vdykge1xuICAgIG5ld0dhbWUuc3RhcnRHYW1lKGlkKTtcbiAgfVxuICBtb2RlbEFwaS5vcGVuQ2VsbChpZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbGxFbGVtZW50KCkge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgQ0xBU1NFUy5pbml0KTtcbn1cblxubGV0IGZsYWdDYW52YXM7XG5mdW5jdGlvbiBjcmVhdGVGbGFnKCkge1xuICBpZiAoZmxhZ0NhbnZhcykge1xuICAgIHJldHVybiBjbG9uZUNhbnZhcyhmbGFnQ2FudmFzKTtcbiAgfVxuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSAyMDtcbiAgY2FudmFzLmhlaWdodCA9IDIwO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBmbGFncG9sZVxuICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGNvbnRleHQuZmlsbFJlY3QoMiwgMCwgMiwgMjApO1xuICBjb250ZXh0LmZpbGxSZWN0KDAsIDE4LCA2LCAyKTtcblxuICAvLyBmbGFnXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQubW92ZVRvKDQsIDApO1xuICBjb250ZXh0LmxpbmVUbygyMCwgNyk7XG4gIGNvbnRleHQubGluZVRvKDQsIDE0KTtcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgY29udGV4dC5maWxsKCk7XG5cbiAgZmxhZ0NhbnZhcyA9IGNhbnZhcztcbiAgcmV0dXJuIGZsYWdDYW52YXM7XG59XG5cbmxldCBtaW5lQ2FudmFzO1xuZnVuY3Rpb24gY3JlYXRlTWluZSgpIHtcbiAgaWYgKG1pbmVDYW52YXMpIHtcbiAgICByZXR1cm4gY2xvbmVDYW52YXMobWluZUNhbnZhcyk7XG4gIH1cblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gMjA7XG4gIGNhbnZhcy5oZWlnaHQgPSAyMDtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIC8vIG1pbmVcbiAgY29uc3QgY2VudGVyWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gIGNvbnN0IGNlbnRlclkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgY29uc3QgcmFkaXVzID0gODtcblxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjb250ZXh0LmZpbGwoKTtcblxuICAvLyBmbGFzaFxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0Lm1vdmVUbygxMiwgMTMpOyAvLyBvdXRcbiAgY29udGV4dC5saW5lVG8oMTUsIDgpOyAvLyBpblxuICBjb250ZXh0LmxpbmVUbygxMCwgNSk7IC8vIG91dFxuICBjb250ZXh0LmxpbmVUbygxNSwgMyk7IC8vIGluXG4gIGNvbnRleHQubGluZVRvKDEyLCAwKTsgLy8gb3V0XG4gIGNvbnRleHQubGluZVRvKDE4LCAyKTsgLy8gaW5cbiAgY29udGV4dC5saW5lVG8oMjAsIDMpOyAvLyBvdXRcbiAgY29udGV4dC5saW5lVG8oMTcsIDcpOyAvLyBpblxuICBjb250ZXh0LmxpbmVUbygyMCwgMTApOyAvLyBvdXRcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgY29udGV4dC5maWxsKCk7XG5cbiAgbWluZUNhbnZhcyA9IGNhbnZhcztcbiAgcmV0dXJuIG1pbmVDYW52YXM7XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2FudmFzKG9sZENhbnZhcykge1xuICBjb25zdCBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBuZXdDYW52YXMud2lkdGggPSBvbGRDYW52YXMud2lkdGg7XG4gIG5ld0NhbnZhcy5oZWlnaHQgPSBvbGRDYW52YXMuaGVpZ2h0O1xuICBjb250ZXh0LmRyYXdJbWFnZShvbGRDYW52YXMsIDAsIDApO1xuICByZXR1cm4gbmV3Q2FudmFzO1xufVxuIiwiaW1wb3J0ICogYXMgZmllbGRWaWV3IGZyb20gJy4vZmllbGRWaWV3JztcbmltcG9ydCAqIGFzIGNlbGxGYWN0b3J5IGZyb20gJy4vY2VsbCc7XG5cbmxldCBtb2RlbEFwaTtcbmxldCBjZWxsQnlJZDtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KGFwaSkge1xuICBtb2RlbEFwaSA9IGFwaTtcbiAgY2VsbEZhY3RvcnkuaW5pdCh7IG1vZGVsQXBpLCBmaWVsZEFwaSB9KTtcblxuICBmaWVsZFZpZXcuaW5pdChtb2RlbEFwaSk7XG4gIGNlbGxCeUlkID0gZmllbGRWaWV3LmdldENlbGxzTWFwKCk7XG5cbiAgaWYgKCFtb2RlbEFwaS5jdXJyZW50R2FtZSkge1xuICAgIGZpZWxkVmlldy5zZXRTaXplKCdzbWFsbCcpO1xuICB9XG59XG5cbmNvbnN0IGZsYWdnZWRDZWxscyA9IG5ldyBTZXQoKTtcbmNvbnN0IG1vZGlmaWVkQ2VsbHMgPSBuZXcgU2V0KCk7XG5jb25zdCBmaWVsZEFwaSA9IHtcbiAgYWRkVG9GbGFnZ2VkKGlkKSB7XG4gICAgZmxhZ2dlZENlbGxzLmFkZChpZCk7XG4gICAgbW9kaWZpZWRDZWxscy5hZGQoaWQpO1xuICB9LFxuICByZW1vdmVGcm9tRmxhZ2dlZChpZCkge1xuICAgIGZsYWdnZWRDZWxscy5kZWxldGUoaWQpO1xuICAgIG1vZGlmaWVkQ2VsbHMuZGVsZXRlKGlkKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlYWxDZWxsKHsgcHJpbWFyeUNlbGwsIHNlY29uZGFyeUNlbGxzIH0pIHtcbiAgcmV2ZWFsKHByaW1hcnlDZWxsKTtcbiAgc2Vjb25kYXJ5Q2VsbHMuZm9yRWFjaCgoY2VsbERhdGEpID0+IHtcbiAgICByZXZlYWwoY2VsbERhdGEpO1xuICB9KTtcbiAgZnVuY3Rpb24gcmV2ZWFsKHsgaWQsIHZhbHVlIH0pIHtcbiAgICBjb25zdCBjZWxsID0gY2VsbEJ5SWQuZ2V0KGlkKTtcbiAgICBjZWxsLnNldFZhbHVlKHZhbHVlKTtcbiAgICBtb2RpZmllZENlbGxzLmFkZChpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVhbEZpZWxkKHsgZXhwbG9kZWRJZCwgbWluZXNJZHMgfSkge1xuICBjb25zdCBleHBsb2RlZENlbGwgPSBjZWxsQnlJZC5nZXQoZXhwbG9kZWRJZCk7XG4gIGV4cGxvZGVkQ2VsbC5leHBsb2RlcygpO1xuXG4gIG1pbmVzSWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgY29uc3QgcmVtYWluZWRNaW5lQ2VsbCA9IGNlbGxCeUlkLmdldChpZCk7XG4gICAgcmVtYWluZWRNaW5lQ2VsbC5yZW1haW5zTWluZWQoKTtcbiAgICBtb2RpZmllZENlbGxzLmFkZChpZCk7XG4gIH0pO1xuXG4gIGZsYWdnZWRDZWxscy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGlmICghbWluZXNJZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICBjb25zdCBmYWxzZUZsYWdnZWRDZWxsID0gY2VsbEJ5SWQuZ2V0KGlkKTtcbiAgICAgIGZhbHNlRmxhZ2dlZENlbGwuaXNGYWxzZUZsYWdnZWQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZpZWxkVmlldy5kaXNhYmxlRmllbGQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpbkdhbWUoKSB7XG4gIGZpZWxkVmlldy5kaXNhYmxlRmllbGQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gIHJldHVybiBmaWVsZFZpZXcuZ2V0RWxlbWVudCgpO1xufVxuIiwiaW1wb3J0ICcuL2ZpZWxkLmNzcyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCAqIGFzIGNlbGxGYWN0b3J5IGZyb20gJy4vY2VsbCc7XG5cbmxldCBtb2RlbEFwaTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KGFwaSkge1xuICBtb2RlbEFwaSA9IGFwaTtcbiAgY3JlYXRlQWxsQ2VsbHMoKTtcblxuICBpZiAoIW1vZGVsQXBpLmN1cnJlbnRHYW1lKSB7XG4gICAgc2V0U2l6ZSgnc21hbGwnKTtcbiAgfVxufVxuXG5jb25zdCBNQVhfQ0VMTFMgPSAyNSAqKiAyO1xuY29uc3QgQ0xBU1NFUyA9IHtcbiAgZmllbGRJbml0OiAnbWluZXN3ZWVwZXJfX2ZpZWxkIG1pbmVzd2VlcGVyLWZpZWxkJyxcbiAgZmllbGRTaXplczoge1xuICAgIHNtYWxsOiAnbWluZXN3ZWVwZXItZmllbGRfc2l6ZV9zbWFsbCcsXG4gICAgbWVkaXVtOiAnbWluZXN3ZWVwZXItZmllbGRfc2l6ZV9tZWRpdW0nLFxuICAgIGxhcmdlOiAnbWluZXN3ZWVwZXItZmllbGRfc2l6ZV9sYXJnZScsXG4gIH0sXG4gIGRpc2FibGVkOiAnbWluZXN3ZWVwZXItZmllbGRfZGlzYWJsZWQnLFxufTtcbmNvbnN0IGZpZWxkRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIENMQVNTRVMuZmllbGRJbml0KTtcblxuY29uc3QgY2VsbEJ5SWQgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbHNNYXAoKSB7XG4gIHJldHVybiBjZWxsQnlJZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWxsQ2VsbHMoKSB7XG4gIGxldCBjdXJyZW50SWQgPSAwO1xuICBjb25zdCBjZWxsRWxlbWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IE1BWF9DRUxMUzsgaW5kZXggKz0gMSwgY3VycmVudElkICs9IDEpIHtcbiAgICBjb25zdCBjZWxsID0gY2VsbEZhY3RvcnkuY3JlYXRlKGN1cnJlbnRJZCk7XG4gICAgY2VsbEJ5SWQuc2V0KGN1cnJlbnRJZCwgY2VsbCk7XG4gICAgY2VsbEVsZW1lbnRzLnB1c2goY2VsbC5nZXRFbGVtZW50KCkpO1xuICB9XG4gIGZpZWxkRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oLi4uY2VsbEVsZW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpemUoc2l6ZSkge1xuICBPYmplY3QuZW50cmllcyhDTEFTU0VTLmZpZWxkU2l6ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChrZXkgPT09IHNpemUpIHtcbiAgICAgIGZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRmllbGQoKSB7XG4gIGZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTRVMuZGlzYWJsZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgcmV0dXJuIGZpZWxkRWxlbWVudDtcbn1cbiIsImNvbnN0IE1PREVTID0ge1xuICBlYXN5OiB7XG4gICAgc2l6ZTogMTAsXG4gICAgbWluZXM6IDEwLFxuICB9LFxuICBtZWRpdW06IHtcbiAgICBzaXplOiAxNSxcbiAgICBtaW5lczogMzAsXG4gIH0sXG4gIGhhcmQ6IHtcbiAgICBzaXplOiAyNSxcbiAgICBtaW5lczogOTksXG4gIH0sXG59O1xuXG5sZXQgbW9kZWxBcGk7XG5leHBvcnQgZnVuY3Rpb24gaW5pdChhcGkpIHtcbiAgbW9kZWxBcGkgPSBhcGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIC8vIHRvZG8gaW1wbGVtZW50IHRoZSBtb2RlIGNob2ljZVxuICBjb25zdCBtb2RlID0gTU9ERVMuZWFzeTtcblxuICBtb2RlbEFwaS5zdGFydEdhbWUobW9kZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgKiBhcyBmaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQnO1xuaW1wb3J0ICogYXMgZ2FtZVN0YXRlIGZyb20gJy4vY29tcG9uZW50cy9uZXdHYW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobW9kZWwpIHtcbiAgZmllbGQuaW5pdChtb2RlbCk7XG4gIGdhbWVTdGF0ZS5pbml0KG1vZGVsKTtcbiAgLy8gdG9kbzogaW5qZWN0IG1vZGVsIGludG8gb3RoZXIgdmlldyBzdWJtb2R1bGVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICBjb25zdCBhcHBFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21pbmVzd2VlcGVyLWFwcCcpO1xuICBhcHBFbGVtZW50LmFwcGVuZChmaWVsZC5nZXRFbGVtZW50KCkpO1xuICAvLyB0b2RvOiBhZGQgYWxsIGVsZW1lbnRzXG4gIHJldHVybiBhcHBFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpKCkge1xuICByZXR1cm4ge1xuICAgIHJldmVhbENlbGw6IGZpZWxkLnJldmVhbENlbGwsXG4gICAgcmV2ZWFsRmllbGQ6IGZpZWxkLnJldmVhbEZpZWxkLFxuICAgIHdpbkdhbWU6IGZpZWxkLndpbkdhbWUsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9ib2R5LmNzcyc7XG5pbXBvcnQgZ2V0TWluZXN3ZWVwZXJFbGVtZW50IGZyb20gJy4vYXBwLW1pbmVzd2VlcGVyL2NvbnRyb2xsZXIuanMnO1xuXG5kb2N1bWVudC5ib2R5LnByZXBlbmQoZ2V0TWluZXN3ZWVwZXJFbGVtZW50KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9