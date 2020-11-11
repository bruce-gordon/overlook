/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/hotel.svg */ "./src/images/hotel.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/left-arrow-in-circular-button-black-symbol.svg */ "./src/images/left-arrow-in-circular-button-black-symbol.svg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/left-arrow-in-circular-button-blue-symbol.svg */ "./src/images/left-arrow-in-circular-button-blue-symbol.svg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/loupe.svg */ "./src/images/loupe.svg"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/x-mark.svg */ "./src/images/x-mark.svg"));

// Module
exports.push([module.i, "* {\n  padding: 0px;\n  margin: 0px;\n  border: none; }\n\nbody {\n  background: white;\n  font-family: \"Poppins\", sans-serif;\n  padding: 0px;\n  margin: 0px; }\n\nheader {\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: 7.5vw;\n  margin: 0px;\n  background-color: #2BAB03;\n  padding: 0 1vw 0 1vw;\n  justify-content: space-between;\n  border-bottom: 1px solid #5A6057; }\n\nlabel {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 2.75vw;\n  font-weight: 200;\n  color: white;\n  letter-spacing: 1px; }\n\n.hotel-name {\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: 100%;\n  margin: 0vw;\n  background-color: #2BAB03;\n  padding: 0 0.5vw 0 0.5vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 3.8vw;\n  font-weight: 200;\n  color: white;\n  justify-content: center; }\n\n.heading {\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: 80%;\n  margin: 0;\n  background-color: #2BAB03;\n  padding: initial; }\n\n.hotel-icon {\n  display: flex;\n  align-items: center;\n  width: 5.4vw;\n  height: 95%;\n  margin: 0.5vw;\n  background-color: #2BAB03;\n  padding: initial;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: contain;\n  background-color: #2BAB03;\n  background-repeat: no-repeat; }\n\n.user-bar {\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: 7vw;\n  margin: 0px;\n  background-color: #5A6057;\n  padding: initial;\n  justify-content: space-between; }\n\n.welcome-and-back {\n  display: flex;\n  align-items: center; }\n\n#welcome {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 2.25vw;\n  font-weight: 200;\n  color: white;\n  padding: 1vw .8vw;\n  margin-right: 5px;\n  font-weight: 200; }\n\n.back-button {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: contain;\n  background-color: #5A6057;\n  background-repeat: no-repeat;\n  display: flex;\n  align-items: center;\n  width: 4.5vw;\n  height: 4.5vw;\n  margin: 0px;\n  background-color: #5A6057;\n  padding: initial; }\n  .back-button:hover {\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n    background-size: contain;\n    background-color: normal;\n    background-repeat: no-repeat; }\n\n.room-search {\n  display: flex;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  margin: 0px;\n  background-color: #5A6057;\n  padding: initial;\n  justify-content: flex-end; }\n\n.room-type-inputs {\n  display: flex;\n  align-items: center;\n  width: 30%;\n  height: 100%;\n  margin: 0px;\n  background-color: #5A6057;\n  padding: initial;\n  flex-direction: column;\n  justify-content: flex-start; }\n\n.date-selector {\n  display: flex;\n  align-items: center;\n  width: 30%;\n  height: 100%;\n  margin: 0 0.5vw 0 0.5vw;\n  background-color: #5A6057;\n  padding: initial;\n  flex-direction: column;\n  justify-content: flex-start; }\n\n.room-input-label {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: 200;\n  color: white;\n  width: 100%;\n  padding-top: .5vw;\n  display: flex;\n  justify-content: center; }\n\n.room-input {\n  display: normal;\n  align-items: center;\n  width: 90%;\n  height: 35%;\n  margin: 0;\n  background-color: normal;\n  padding: 0.1vw 0 0.1vw 0.5vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.25vw;\n  font-weight: 400;\n  color: #5A6057; }\n\n#search-rooms-button {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: 400;\n  color: #5A6057;\n  height: 60%;\n  padding: .5vw;\n  margin-right: 1vw; }\n  #search-rooms-button:hover {\n    cursor: pointer;\n    background-color: #63B3F0;\n    color: white;\n    border: 1px solid white; }\n\n.search-customers {\n  display: flex;\n  align-items: center;\n  width: 27vw;\n  height: 45%;\n  margin: 0px;\n  background-color: #5A6057;\n  padding: initial;\n  justify-content: space-between; }\n\n#customer-field {\n  display: flex;\n  align-items: center;\n  width: 20vw;\n  height: 100%;\n  margin: 0 1vw 0 0;\n  background-color: auto;\n  padding: 0 0 0 1vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2vw;\n  font-weight: 200;\n  color: #5A6057; }\n\n#search-customers-button {\n  display: flex;\n  align-items: center;\n  width: 3vw;\n  height: 2.9vw;\n  margin: 0 1vw 0 1vw;\n  background-color: #5A6057;\n  padding: 1vw;\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n  background-size: contain;\n  background-color: #5A6057;\n  background-repeat: no-repeat;\n  border: none; }\n  #search-customers-button:hover {\n    display: flex;\n    align-items: center;\n    width: 3.5vw;\n    height: 3.4vw;\n    margin: 0 1vw 0 1vw;\n    background-color: #5A6057;\n    padding: 1vw; }\n\n.login-view {\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: 50vw;\n  margin: 0px;\n  background-color: white;\n  padding: initial;\n  flex-direction: column; }\n\n.login-box {\n  display: flex;\n  align-items: center;\n  width: 45%;\n  height: 50%;\n  margin: 5vw 0 0 0;\n  background-color: #2BAB03;\n  padding: 2vw;\n  flex-direction: column;\n  align-items: flex-start;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 2vw;\n  font-weight: 200;\n  color: white;\n  border: 1px solid #5A6057; }\n\n.login-input {\n  display: normal;\n  align-items: center;\n  width: 55%;\n  height: 15%;\n  margin: 1vw 2vw;\n  background-color: white;\n  padding: 0 0 0 1vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.25vw;\n  font-weight: normal;\n  color: #5A6057; }\n\n.login-button {\n  display: flex;\n  align-items: center;\n  width: 6vw;\n  height: 3.75vw;\n  margin: 1vw 0 0 0;\n  background-color: #5A6057;\n  padding: 1vw;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: 200;\n  color: white;\n  justify-content: center; }\n  .login-button:hover {\n    cursor: pointer;\n    background-color: #63B3F0;\n    color: white;\n    border: 1px solid white; }\n\n.login-error {\n  background: white;\n  font-family: \"Poppins\", sans-serif;\n  padding: 0px;\n  margin: 0px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: 400;\n  color: #63B3F0;\n  padding: .2vw; }\n\n.customer-dash {\n  display: normal;\n  align-items: center;\n  width: 100%;\n  height: 40vw;\n  margin: 0;\n  background-color: white;\n  padding: initial;\n  overflow: auto; }\n\n.customer-info {\n  display: normal;\n  align-items: center;\n  width: 90%;\n  height: auto;\n  margin: 1.5vw auto 1.5vw auto;\n  background-color: #2BAB03;\n  padding: 2vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.75vw;\n  font-weight: 200;\n  color: white;\n  border: 1px solid #5A6057;\n  border-radius: 2vw; }\n\n.customer-dash-h3 {\n  font-weight: 200; }\n\n.customer-charges {\n  font-size: 2.25vw;\n  font-weight: 400; }\n\n.manager-dash {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 40vw;\n  margin: 2vw 0;\n  background-color: white;\n  padding: initial;\n  justify-content: space-around;\n  align-items: flex-start; }\n\n.manager-info {\n  display: normal;\n  align-items: center;\n  width: 25%;\n  height: auto;\n  margin: 0;\n  background-color: #2BAB03;\n  padding: 3vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 2.75vw;\n  font-weight: 200;\n  color: white;\n  border-radius: 2vw; }\n\n.manager-data {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 4vw;\n  font-weight: 400;\n  color: white;\n  display: normal;\n  align-items: center;\n  width: auto;\n  height: auto;\n  margin: 0.75vw 0 0 0;\n  background-color: #63B3F0;\n  padding: initial;\n  text-align: center;\n  border: 2px solid #5A6057; }\n\nh4 {\n  display: normal;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  margin: 1vw 0;\n  background-color: none;\n  padding: initial;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 2vw;\n  font-weight: 400;\n  color: #5A6057;\n  text-align: center; }\n\n.room-results-view {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #d0d0d0; }\n\n.search-result {\n  display: flex;\n  align-items: center;\n  width: 95%;\n  height: auto;\n  margin: 1vw 0;\n  background-color: white;\n  padding: 1vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: 200;\n  color: #5A6057;\n  flex-direction: column;\n  border-radius: 2vw;\n  border: 2px solid #63B3F0; }\n\n.top-row {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  height: auto;\n  margin: 0;\n  background-color: white;\n  padding: initial;\n  justify-content: space-between;\n  font-weight: bold; }\n\n.bottom-row {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  height: auto;\n  margin: 0;\n  background-color: white;\n  padding: initial;\n  justify-content: space-between; }\n\n.column-left {\n  border-left: 1px solid #5A6057;\n  padding-left: 1vw;\n  width: 20%; }\n\n.column-middle {\n  border-left: 1px solid #5A6057;\n  padding-left: 1vw;\n  width: 35%; }\n\n.column-right {\n  border-left: 1px solid #5A6057;\n  padding-left: 1vw;\n  width: 30%; }\n\n.book-room-button, .delete-booking-button {\n  display: normal;\n  align-items: center;\n  width: 80%;\n  height: 40%;\n  margin: 5px;\n  background-color: normal;\n  padding: initial;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.25vw;\n  font-weight: 200;\n  color: #5A6057;\n  border: 1px solid #5A6057; }\n  .book-room-button:hover, .delete-booking-button:hover {\n    cursor: pointer;\n    background-color: #63B3F0;\n    color: white;\n    border: 1px solid white;\n    border: 1px solid white; }\n\n.close-box {\n  display: normal;\n  align-items: center;\n  width: 3vw;\n  height: 3vw;\n  margin: 0;\n  background-color: #2BAB03;\n  padding: 1vw;\n  background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n  background-size: contain;\n  background-color: #2BAB03;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 5%;\n  right: 2%; }\n\n.booking-confirmation, .cancel-confirmation {\n  display: normal;\n  align-items: center;\n  width: 30%;\n  height: auto;\n  margin: 2vw 0;\n  background-color: #2BAB03;\n  padding: 4vw;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 2.5vw;\n  font-weight: 400;\n  color: white;\n  text-align: center;\n  border: 0.5vw solid #63B3F0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n@media screen and (max-width: 800px) {\n  .login-box {\n    display: flex;\n    align-items: center;\n    width: 60%;\n    height: 60%;\n    margin: 5vw 0 0 0;\n    background-color: #2BAB03;\n    padding: 2vw;\n    flex-direction: column;\n    align-items: flex-start;\n    font-family: \"Oswald\", sans-serif;\n    font-size: 2vw;\n    font-weight: 200;\n    color: white;\n    border: 1px solid #5A6057; }\n  .manager-dash {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 75vw;\n    margin: 0.5vw 0;\n    background-color: white;\n    padding: initial;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center; }\n  .manager-info {\n    display: normal;\n    align-items: center;\n    width: 40%;\n    height: auto;\n    margin: 0;\n    background-color: #2BAB03;\n    padding: 3vw;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 3.5vw;\n    font-weight: 200;\n    color: white;\n    border-radius: 2vw; }\n  .manager-data {\n    font-family: \"Poppins\", sans-serif;\n    font-size: 4vw;\n    font-weight: 400;\n    color: white;\n    display: normal;\n    align-items: center;\n    width: auto;\n    height: auto;\n    margin: 0.75vw 0 0 0;\n    background-color: #63B3F0;\n    padding: initial;\n    text-align: center;\n    border: 2px solid #5A6057; }\n  .customer-dash {\n    display: normal;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background-color: white;\n    padding: initial;\n    overflow: auto; } }\n\nspan {\n  font-weight: bold; }\n\n.hide {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Classes/Booking-Repo.js":
/*!*************************************!*\
  !*** ./src/Classes/Booking-Repo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingRepo; });
class BookingRepo {
  constructor(bookingsData, roomsData) {
    this.allBookings = bookingsData;
    this.rooms = roomsData;
  }

  findBookingsByDate(date) {
    let result = this.allBookings.reduce((total, booking) => {
      if (booking.date === date) {
        total.push(booking);
      }
      return total;
    }, [])
    return result;
  }

  findOccupiedRoomsPercent(date) {
    let percent;
    if (this.findBookingsByDate(date).length > this.rooms.length) {
      percent = 1;
    } else {
      percent = (this.findBookingsByDate(date).length / this.rooms.length);
    }
    return `${(percent * 100).toFixed(0)}%`
  }

  findNumberOfAvailableRooms(date) {
    let occupied;
    if (this.findBookingsByDate(date).length > this.rooms.length) {
      occupied = this.rooms.length;
    } else {
      occupied = this.findBookingsByDate(date).length
    }
    return this.rooms.length - occupied;
  }

  addRates(rates) {
    let result = rates.reduce((sum, rate) => {
      return sum + rate;
    }, 0);
    return `$${(result).toLocaleString('en')}`;
  }

  findRevenueByDate(date) {
    let occupied = this.findBookingsByDate(date);
    let money = occupied.reduce((roomPrices, booking) => {
      this.rooms.forEach(room => {
        if (booking.roomNumber === room.number) {
          roomPrices.push(room.costPerNight)
        }
      })
      return roomPrices;
    }, []);
    return this.addRates(money);
  }

  filterRoomsByType(openRooms, type) {
    if (type) {
      return openRooms.filter(room => room.roomType === type);
    } else {
      return openRooms;
    }
  }

  searchAvailableRoomsByDate(date, type) {
    let occupied = this.findBookingsByDate(date);
    let takenRooms = occupied.map(booking => booking.roomNumber);
    let openRooms = this.rooms.reduce((available, room) => {
      if (!takenRooms.includes(room.number)) {
        available.push(room);
      }
      return available;
    },[]);
    return this.filterRoomsByType(openRooms, type);
  }
}


/***/ }),

/***/ "./src/Classes/Manager.js":
/*!********************************!*\
  !*** ./src/Classes/Manager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/Classes/User.js");


class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data, bookings, rooms) {
    super(data, bookings, rooms);
  }

  selectUser(name, userData, bookingsData, roomsData) {
    let user = userData.find(userObject => userObject.name === name);
    this.id = user.id;
    this.name = user.name;
    this.bookings = this.getUserBookings(bookingsData);
    this.moneySpent = this.calculateMoneySpent(roomsData);
  }

  deleteBookedRoom(idNumber) {
    return { "id": idNumber };
  }
}


/***/ }),

/***/ "./src/Classes/User.js":
/*!*****************************!*\
  !*** ./src/Classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
class User {
  constructor(data, bookings, rooms) {
    this.id = data.id;
    this.name = data.name;
    this.bookings = this.getUserBookings(bookings);
    this.moneySpent = this.calculateMoneySpent(rooms);
  }

  getUserBookings(bookingsData) {
    let reservations = bookingsData.filter(booking => this.id === booking.userID);
    let results = reservations.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    return results;
  }

  updateUserBookings(bookingsData) {
    this.bookings = this.getUserBookings(bookingsData);
  }

  calculateMoneySpent(data) {
    let roomFees = this.getRoomCosts(data);
    let totalFee = roomFees.reduce((total, fee) => {
      return total + fee;
    }, 0);
    return totalFee;
  }

  getRoomCosts(data) {
    let charges = [];
    this.bookings.forEach(booking => {
      data.forEach(room => {
        if (booking.roomNumber === room.number) {
          charges.push(room.costPerNight);
        }
      })
    })
    return charges;
  }

  bookRoom(date, roomNumber) {
    return {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
  }
}


/***/ }),

/***/ "./src/DOM-methods.js":
/*!****************************!*\
  !*** ./src/DOM-methods.js ***!
  \****************************/
/*! exports provided: domMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domMethods", function() { return domMethods; });
/* harmony import */ var _DOM_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-variables */ "./src/DOM-variables.js");
/* harmony import */ var _src_Classes_Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Classes/Manager */ "./src/Classes/Manager.js");




const domMethods = {
  showCustomerDash: function(user) {
    this.goToDash(_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["loginView"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomSearchBar"]);
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["welcome"].innerText = `Welcome, ${user.name}`;
  },

  showManagerDash: function() {
    this.goToDash(_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["loginView"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["managerDash"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["searchCustomers"]);
  },

  goToDash: function(hide, dash, bar) {
    dash.classList.remove("hide");
    bar.classList.remove("hide");
    hide.classList.add("hide");
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["userBar"].classList.remove("hide");
    document.documentElement.scrollTop = 0;
  },

  showLoginError: function() {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["password"].value = "";
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["loginError"].classList.remove("hide");
  },

  getManagerData: function(bookingRepo, date) {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["welcome"].innerText = `Manager Dashboard`;
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["totalRevenue"].innerText = bookingRepo.findRevenueByDate(date);
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["percentOccupied"].innerText = bookingRepo.findOccupiedRoomsPercent(date);
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomsVacant"].innerText = bookingRepo.findNumberOfAvailableRooms(date);
    document.documentElement.scrollTop = 0;
  },

  getCustomerData: function(user, roomsData) {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerCharges"].innerText = `$${(user.moneySpent).toLocaleString('en')}`;
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerBookings"].innerHTML = '';
    user.bookings.forEach(booking => {
      let room = roomsData.find(roomData => roomData.number === Number(booking.roomNumber));
      let deleteButton = this.checkForManager(user);
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerBookings"].innerHTML +=
        `<article class="search-result">
          <div class="top-row">
            <p tabindex="0" class="column-left">${this.convertDate(booking.date)}</p>
            <p tabindex="0" class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
            <p tabindex="0" class="column-right">Beds:</p>
          </div>
          <div class="bottom-row">
            <p class="column-left">${deleteButton}</p>
            <p tabindex="0" class="column-middle">$${(room.costPerNight).toLocaleString('en')} per night</p>
            <p tabindex="0" class="column-right">${room.numBeds} ${room.bedSize}</p>
            <p class="booking-id hide">${booking.id}</p>
          </div>
        </article>`
    });
    document.documentElement.scrollTop = 0;
  },

  checkForManager: function(user) {
    if (user instanceof _src_Classes_Manager__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return `<button class="book-room-button delete" type="button" name="delete-booking-button">Delete Booking</button>`;
    } else {
      return '';
    }
  },

  goBack: function(bookingRepo, today) {
    if (_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"].classList.contains('hide')) {
      this.goToDash(_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomResultsView"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomSearchBar"]);
      this.isManager();
    } else {
      this.goToDash(_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["managerDash"], _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["searchCustomers"]);
      this.resetManagerDash(bookingRepo, today);
    }
  },

  resetManagerDash: function(bookingRepo, today) {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerBookings"].innerHTML = '';
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["backButton"].classList.add('hide');
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomSearchBar"].classList.add('hide');
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["searchCustomerInput"].value = '';
    this.getManagerData(bookingRepo, today)
  },

  isManager: function() {
    if (!_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["welcome"].innerText.includes('Manager Dashboard - Customer')) {
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["backButton"].classList.add('hide');
    }
  },

  searchRooms: function(bookingRepo, dateInput, type) {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomResultsView"].classList.remove('hide');
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"].classList.add('hide');
    if (!dateInput) {
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomResultsView"].innerHTML = `<h4 id="results-heading">Please enter a date and then click "Search Rooms" again.</h4>`
    } else {
      let date = dateInput.replaceAll("-", "/");
      let openRooms = bookingRepo.searchAvailableRoomsByDate(date, type);
      this.displayRoomResults(openRooms, date);
    }
    document.documentElement.scrollTop = 0;
  },

  convertDate: function(date) {
    let parts = date.split('/');
    return parts[1] + '/' + parts[2] + '/' + parts[0];
  },

  displayRoomResults: function(openRooms, date) {
    let shownDate = this.convertDate(date);
    if (!openRooms.length) {
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomResultsView"].innerHTML = `<h4 id="results-heading">We sincerely apologize that there are no rooms available that match your search.  Please adjust your date or type of room and search again. </h4>`
    } else {
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomResultsView"].innerHTML = `<h4 id="results-heading">Search Results</h4>`
      openRooms.forEach(room => {
        _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomResultsView"].insertAdjacentHTML('beforeend',
          `<article class="search-result">
            <div class="top-row">
              <p tabindex="0" class="column-left">${shownDate}</p>
              <p tabindex="0" class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
              <p tabindex="0" class="column-right">Beds:</p>
            </div>
            <div class="bottom-row">
              <p class="column-left"><button class="book-room-button" type="button" name="book-room">Reserve Room</button></p>
              <p tabindex="0" class="column-middle">$${room.costPerNight}</p>
              <p tabindex="0" class="column-right">${room.numBeds} ${room.bedSize}</p>
              <p class="room-num hide">${room.number}</p>
            </div>
          </article>`)
      })
    }
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["backButton"].classList.remove('hide');
  },

  findUserAccount: function(name, userData, bookingsData, roomsData, manager) {
    manager.selectUser(name, userData, bookingsData, roomsData);
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["welcome"].innerHTML = `Manager Dashboard - Customer: <span>${manager.name}</span>, ID: <span>${manager.id}</span>`;
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["managerDash"].classList.add('hide');
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"].classList.remove('hide');
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["roomSearchBar"].classList.remove("hide");
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["searchCustomers"].classList.add("hide");
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["backButton"].classList.remove('hide');
    this.getCustomerData(manager, roomsData);
  },

  showConfirmation: function() {
    if (!_DOM_variables__WEBPACK_IMPORTED_MODULE_0__["customerDash"].classList.contains('hide')) {
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["cancelConfirmation"].classList.remove('hide');
    } else {
      _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["bookingConfirmation"].classList.remove('hide');
    }
  },

  hideBox: function() {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["bookingConfirmation"].classList.add('hide');
    _DOM_variables__WEBPACK_IMPORTED_MODULE_0__["cancelConfirmation"].classList.add('hide');
  }
}


/***/ }),

/***/ "./src/DOM-variables.js":
/*!******************************!*\
  !*** ./src/DOM-variables.js ***!
  \******************************/
/*! exports provided: closeBox, cancelCloseBox, bookingConfirmation, cancelConfirmation, userBar, welcome, roomSearchBar, roomTypeInput, roomDateInput, searchRoomsButton, loginView, userName, password, loginButton, loginError, customerDash, customerCharges, customerBookings, managerDash, searchCustomers, searchCustomerInput, searchCustomerButton, deleteBookingButton, totalRevenue, percentOccupied, roomsVacant, roomResultsView, resultsHeading, searchResult, backButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBox", function() { return closeBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelCloseBox", function() { return cancelCloseBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingConfirmation", function() { return bookingConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelConfirmation", function() { return cancelConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userBar", function() { return userBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcome", function() { return welcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomSearchBar", function() { return roomSearchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomTypeInput", function() { return roomTypeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomDateInput", function() { return roomDateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRoomsButton", function() { return searchRoomsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginView", function() { return loginView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userName", function() { return userName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginButton", function() { return loginButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerDash", function() { return customerDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerCharges", function() { return customerCharges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerBookings", function() { return customerBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerDash", function() { return managerDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomers", function() { return searchCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomerInput", function() { return searchCustomerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomerButton", function() { return searchCustomerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBookingButton", function() { return deleteBookingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalRevenue", function() { return totalRevenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentOccupied", function() { return percentOccupied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomsVacant", function() { return roomsVacant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomResultsView", function() { return roomResultsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultsHeading", function() { return resultsHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResult", function() { return searchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backButton", function() { return backButton; });
const closeBox = document.querySelector(".close-box")
const cancelCloseBox = document.querySelector(".cancel-close-box")
const bookingConfirmation = document.querySelector(".booking-confirmation")
const cancelConfirmation = document.querySelector(".cancel-confirmation")

const userBar = document.querySelector(".user-bar");
const welcome = document.querySelector("#welcome");
const roomSearchBar = document.querySelector(".room-search");
const roomTypeInput = document.querySelector("#rooms");
const roomDateInput = document.querySelector("#date-input");
const searchRoomsButton = document.querySelector("#search-rooms-button");

const loginView = document.querySelector(".login-view");
const userName = document.querySelector("#username-input");
const password = document.querySelector("#password-input");
const loginButton = document.querySelector(".login-button");
const loginError = document.querySelector(".login-error");

const customerDash = document.querySelector(".customer-dash");
const customerCharges = document.querySelector(".customer-charges");
const customerBookings = document.querySelector("#customer-bookings");

const managerDash = document.querySelector(".manager-dash");
const searchCustomers = document.querySelector(".search-customers");
const searchCustomerInput = document.querySelector("#customer-field");
const searchCustomerButton = document.querySelector("#search-customers-button");
const deleteBookingButton = document.querySelector(".delete-booking-button");
const totalRevenue = document.querySelector("#total-revenue");
const percentOccupied = document.querySelector("#percent-occupied");
const roomsVacant = document.querySelector("#rooms-vacant");

const roomResultsView = document.querySelector(".room-results-view")
const resultsHeading = document.querySelector("#results-heading");
const searchResult = document.querySelector(".search-result");
const backButton = document.querySelector(".back-button");


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/fetch-requests.js":
/*!*******************************!*\
  !*** ./src/fetch-requests.js ***!
  \*******************************/
/*! exports provided: getUsers, getRooms, getBookings, deleteBooking, postBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRooms", function() { return getRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookings", function() { return getBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBooking", function() { return deleteBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postBooking", function() { return postBooking; });
const getUsers = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then((resp) => resp.json());
}

const getRooms = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then((resp) => resp.json());
}

const getBookings = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then((resp) => resp.json());
}

const deleteBooking = (bookingId) => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingId),
    })
    .then((resp) => resp.json());
}

const postBooking = (bookingDetails) => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
    .then((resp) => resp.json());
}


/***/ }),

/***/ "./src/images/hotel.svg":
/*!******************************!*\
  !*** ./src/images/hotel.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hotel.svg";

/***/ }),

/***/ "./src/images/left-arrow-in-circular-button-black-symbol.svg":
/*!*******************************************************************!*\
  !*** ./src/images/left-arrow-in-circular-button-black-symbol.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/left-arrow-in-circular-button-black-symbol.svg";

/***/ }),

/***/ "./src/images/left-arrow-in-circular-button-blue-symbol.svg":
/*!******************************************************************!*\
  !*** ./src/images/left-arrow-in-circular-button-blue-symbol.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/left-arrow-in-circular-button-blue-symbol.svg";

/***/ }),

/***/ "./src/images/loupe.svg":
/*!******************************!*\
  !*** ./src/images/loupe.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/loupe.svg";

/***/ }),

/***/ "./src/images/x-mark.svg":
/*!*******************************!*\
  !*** ./src/images/x-mark.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/x-mark.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Classes_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Classes/User */ "./src/Classes/User.js");
/* harmony import */ var _src_Classes_Manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Classes/Manager */ "./src/Classes/Manager.js");
/* harmony import */ var _src_Classes_Booking_Repo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Classes/Booking-Repo */ "./src/Classes/Booking-Repo.js");
/* harmony import */ var _fetch_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-requests */ "./src/fetch-requests.js");
/* harmony import */ var _DOM_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM-methods */ "./src/DOM-methods.js");
/* harmony import */ var _DOM_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOM-variables */ "./src/DOM-variables.js");










let userData;
let roomsData;
let bookingsData;
let user;
let manager;
let bookingRepo;

const findToday = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  return today;
}

let today = findToday();

// ----------Get Data----------
const updateAllData = () => {
  updateUserData();
  updateRoomsData();
  updateBookingsData();
}

const updateUserData = () => {
  return Object(_fetch_requests__WEBPACK_IMPORTED_MODULE_4__["getUsers"])()
    .then((data) => {
      userData = data.users;
    })
    .catch(error => console.log(error));
}

const updateRoomsData = () => {
  return Object(_fetch_requests__WEBPACK_IMPORTED_MODULE_4__["getRooms"])()
    .then((data) => {
      roomsData = data.rooms;
    })
    .catch(error => console.log(error));
}

const updateBookingsData = () => {
  return Object(_fetch_requests__WEBPACK_IMPORTED_MODULE_4__["getBookings"])()
    .then((data) => {
      bookingsData = data.bookings;
    })
    .catch(error => console.log(error));
}

updateAllData();


// ----------Event Listeners----------
_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["loginButton"].addEventListener("click", () => {
  login(_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["userName"].value, _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["password"].value);
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["password"].addEventListener("keypress", () => {
  if (event.which === 13) {
    login(_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["userName"].value, _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["password"].value);
  }
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["searchRoomsButton"].addEventListener("click", () => {
  _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].searchRooms(bookingRepo, _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomDateInput"].value, _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomTypeInput"].value);
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["searchCustomerButton"].addEventListener("click", () => {
  _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].findUserAccount(_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["searchCustomerInput"].value, userData, bookingsData, roomsData, manager);
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["backButton"].addEventListener("click", () => {
  _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].goBack(bookingRepo, today);
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomResultsView"].addEventListener("click", () => {
  makeBooking(event);
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["customerBookings"].addEventListener("click", () => {
  cancelBooking(event);
})

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["closeBox"].addEventListener("click", _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].hideBox);

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["cancelCloseBox"].addEventListener("click", _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].hideBox);

_DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomTypeInput"].addEventListener("click", () => {
  let open = _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomTypeInput"].getAttribute("aria-expanded");
  if (open === 'false') {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomTypeInput"].setAttribute("aria-expanded", true);
  } else {
    _DOM_variables__WEBPACK_IMPORTED_MODULE_6__["roomTypeInput"].setAttribute("aria-expanded", false);
  }
})

// ----------Login Functions----------
const login = (name, pWord) => {
  bookingRepo = new _src_Classes_Booking_Repo__WEBPACK_IMPORTED_MODULE_3__["default"](bookingsData, roomsData);
  checkManagerPassword(name, pWord);
  let userId = parseInt(name.slice(8));
  let allIds = userData.map(user => {
    return user.id;
  });
  checkCustomerPassword(userId, allIds, pWord);
}

const checkManagerPassword = (name, pWord) => {
  if (name === 'manager') {
    if (pWord === 'overlook2020') {
      manager = new _src_Classes_Manager__WEBPACK_IMPORTED_MODULE_2__["default"]({"id": null, "name": null}, bookingsData, roomsData);
      _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].showManagerDash();
      _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].getManagerData(bookingRepo, today);
    } else {
      _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].showLoginError();
    }
  }
}

const checkCustomerPassword = (userId, allIds, pWord) => {
  if (allIds.includes(userId) && pWord === 'overlook2020') {
    let currentUser = userData.find(person => person.id === userId);
    user = new _src_Classes_User__WEBPACK_IMPORTED_MODULE_1__["default"](currentUser, bookingsData, roomsData);
    _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].showCustomerDash(user);
    _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].getCustomerData(user, roomsData);
  } else {
    _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].showLoginError();
  }
}

// ----------POST and DELETE Data----------
const userOrManager = () => {
  if (user) {
    return user;
  } else {
    return manager;
  }
}

const formatPostingDate = (event) => {
  let dateClick = event.target.closest('article').children[0].children[0].innerText;
  let parts = dateClick.split('/');
  return parts[2] + '/' + parts[0] + '/' + parts[1];
}

const refreshCustomerBookings = () => {
  updateBookingsData()
    .then(() => userOrManager().updateUserBookings(bookingsData))
    .then(() => _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].getCustomerData(userOrManager(), roomsData))
}

const cancelBooking = (event) => {
  if (event.target.classList.contains('delete')) {
    let bookingId = Number(event.target.closest('div').children[3].innerText);
    let input = manager.deleteBookedRoom(bookingId)
    Object(_fetch_requests__WEBPACK_IMPORTED_MODULE_4__["deleteBooking"])(input)
      .then(() => refreshCustomerBookings())
      .then(() => _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].showConfirmation())
      .catch((error) => console.log(error));
  }
}

const makeBooking = (event) => {
  if (event.target.classList.contains('book-room-button')) {
    let date = formatPostingDate(event);
    let roomNumber = Number(event.target.closest('article').children[1].children[3].innerText);
    let bookingDetails = userOrManager().bookRoom(date, roomNumber);
    Object(_fetch_requests__WEBPACK_IMPORTED_MODULE_4__["postBooking"])(bookingDetails)
      .then(() => refreshCustomerBookings())
      .then(() => _DOM_methods__WEBPACK_IMPORTED_MODULE_5__["domMethods"].showConfirmation())
      .catch((error) => console.log(error));
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xhc3Nlcy9Cb29raW5nLVJlcG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NsYXNzZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xhc3Nlcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9ET00tbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NLXZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9mZXRjaC1yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvdGVsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xlZnQtYXJyb3ctaW4tY2lyY3VsYXItYnV0dG9uLWJsYWNrLXN5bWJvbC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sZWZ0LWFycm93LWluLWNpcmN1bGFyLWJ1dHRvbi1ibHVlLXN5bWJvbC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb3VwZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy94LW1hcmsuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFD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O0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LEdBQUc7QUFDSCxJQUFJLDREQUFhO0FBQ2pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFPLEVBQUUseUJBQXlCO0FBQ3RELE1BQU0sdURBQVU7QUFDaEIsTUFBTSx1REFBVTtBQUNoQixLQUFLO0FBQ0wsTUFBTSx1REFBVTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBSTtBQUNuQixJQUFJLHVEQUFVO0FBQ2QsSUFBSSx1REFBVTtBQUNkLEdBQUc7QUFDSCxJQUFJLHVEQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVU7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFhO0FBQ2pCO0FBQ0Esa0JBQWtCLHVEQUFVO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBVztBQUNmO0FBQ0Esa0JBQWtCLHVEQUFVO0FBQzVCO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9ob3RlbC5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2xlZnQtYXJyb3ctaW4tY2lyY3VsYXItYnV0dG9uLWJsYWNrLXN5bWJvbC5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2xlZnQtYXJyb3ctaW4tY2lyY3VsYXItYnV0dG9uLWJsdWUtc3ltYm9sLnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvbG91cGUuc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy94LW1hcmsuc3ZnXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3LjV2dztcXG4gIG1hcmdpbjogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCQUIwMztcXG4gIHBhZGRpbmc6IDAgMXZ3IDAgMXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1QTYwNTc7IH1cXG5cXG5sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjc1dnc7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDsgfVxcblxcbi5ob3RlbC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkFCMDM7XFxuICBwYWRkaW5nOiAwIDAuNXZ3IDAgMC41dnc7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzLjh2dztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkFCMDM7XFxuICBwYWRkaW5nOiBpbml0aWFsOyB9XFxuXFxuLmhvdGVsLWljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNS40dnc7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIG1hcmdpbjogMC41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkJBQjAzO1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkFCMDM7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XFxuXFxuLnVzZXItYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDd2dztcXG4gIG1hcmdpbjogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBNjA1NztcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ud2VsY29tZS1hbmQtYmFjayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbiN3ZWxjb21lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi4yNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDF2dyAuOHZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuLmJhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTYwNTc7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNC41dnc7XFxuICBoZWlnaHQ6IDQuNXZ3O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2MDU3O1xcbiAgcGFkZGluZzogaW5pdGlhbDsgfVxcbiAgLmJhY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vcm1hbDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcblxcbi5yb29tLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTYwNTc7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi5yb29tLXR5cGUtaW5wdXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBNjA1NztcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmRhdGUtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIDAuNXZ3IDAgMC41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2MDU3O1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ucm9vbS1pbnB1dC1sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IC41dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ucm9vbS1pbnB1dCB7XFxuICBkaXNwbGF5OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMzUlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9ybWFsO1xcbiAgcGFkZGluZzogMC4xdncgMCAwLjF2dyAwLjV2dztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzVBNjA1NzsgfVxcblxcbiNzZWFyY2gtcm9vbXMtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM1QTYwNTc7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHBhZGRpbmc6IC41dnc7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dzsgfVxcbiAgI3NlYXJjaC1yb29tcy1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M0IzRjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IH1cXG5cXG4uc2VhcmNoLWN1c3RvbWVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyN3Z3O1xcbiAgaGVpZ2h0OiA0NSU7XFxuICBtYXJnaW46IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTYwNTc7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuI2N1c3RvbWVyLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgMXZ3IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF1dG87XFxuICBwYWRkaW5nOiAwIDAgMCAxdnc7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJ2dztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBjb2xvcjogIzVBNjA1NzsgfVxcblxcbiNzZWFyY2gtY3VzdG9tZXJzLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDIuOXZ3O1xcbiAgbWFyZ2luOiAwIDF2dyAwIDF2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTYwNTc7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2MDU3O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTsgfVxcbiAgI3NlYXJjaC1jdXN0b21lcnMtYnV0dG9uOmhvdmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMuNXZ3O1xcbiAgICBoZWlnaHQ6IDMuNHZ3O1xcbiAgICBtYXJnaW46IDAgMXZ3IDAgMXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2MDU3O1xcbiAgICBwYWRkaW5nOiAxdnc7IH1cXG5cXG4ubG9naW4tdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA1MHZ3O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmxvZ2luLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0NSU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbjogNXZ3IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCQUIwMztcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1QTYwNTc7IH1cXG5cXG4ubG9naW4taW5wdXQge1xcbiAgZGlzcGxheTogbm9ybWFsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1NSU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbjogMXZ3IDJ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAwIDAgMXZ3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjNUE2MDU3OyB9XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDMuNzV2dztcXG4gIG1hcmdpbjogMXZ3IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBNjA1NztcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5sb2dpbi1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M0IzRjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IH1cXG5cXG4ubG9naW4tZXJyb3Ige1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzYzQjNGMDtcXG4gIHBhZGRpbmc6IC4ydnc7IH1cXG5cXG4uY3VzdG9tZXItZGFzaCB7XFxuICBkaXNwbGF5OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwdnc7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5jdXN0b21lci1pbmZvIHtcXG4gIGRpc3BsYXk6IG5vcm1hbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAxLjV2dyBhdXRvIDEuNXZ3IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkJBQjAzO1xcbiAgcGFkZGluZzogMnZ3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS43NXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1QTYwNTc7XFxuICBib3JkZXItcmFkaXVzOiAydnc7IH1cXG5cXG4uY3VzdG9tZXItZGFzaC1oMyB7XFxuICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuLmN1c3RvbWVyLWNoYXJnZXMge1xcbiAgZm9udC1zaXplOiAyLjI1dnc7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuLm1hbmFnZXItZGFzaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHZ3O1xcbiAgbWFyZ2luOiAydncgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ubWFuYWdlci1pbmZvIHtcXG4gIGRpc3BsYXk6IG5vcm1hbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCQUIwMztcXG4gIHBhZGRpbmc6IDN2dztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNzV2dztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAydnc7IH1cXG5cXG4ubWFuYWdlci1kYXRhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDR2dztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDAuNzV2dyAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M0IzRjA7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzVBNjA1NzsgfVxcblxcbmg0IHtcXG4gIGRpc3BsYXk6IG5vcm1hbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMXZ3IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNUE2MDU3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnJvb20tcmVzdWx0cy12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7IH1cXG5cXG4uc2VhcmNoLXJlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDF2dyAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBjb2xvcjogIzVBNjA1NztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAydnc7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjNCM0YwOyB9XFxuXFxuLnRvcC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uYm90dG9tLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY29sdW1uLWxlZnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNUE2MDU3O1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICB3aWR0aDogMjAlOyB9XFxuXFxuLmNvbHVtbi1taWRkbGUge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNUE2MDU3O1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICB3aWR0aDogMzUlOyB9XFxuXFxuLmNvbHVtbi1yaWdodCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1QTYwNTc7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG4uYm9vay1yb29tLWJ1dHRvbiwgLmRlbGV0ZS1ib29raW5nLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub3JtYWw7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiAjNUE2MDU3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzVBNjA1NzsgfVxcbiAgLmJvb2stcm9vbS1idXR0b246aG92ZXIsIC5kZWxldGUtYm9va2luZy1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M0IzRjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyB9XFxuXFxuLmNsb3NlLWJveCB7XFxuICBkaXNwbGF5OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDN2dztcXG4gIGhlaWdodDogM3Z3O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCQUIwMztcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkFCMDM7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1JTtcXG4gIHJpZ2h0OiAyJTsgfVxcblxcbi5ib29raW5nLWNvbmZpcm1hdGlvbiwgLmNhbmNlbC1jb25maXJtYXRpb24ge1xcbiAgZGlzcGxheTogbm9ybWFsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDJ2dyAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCQUIwMztcXG4gIHBhZGRpbmc6IDR2dztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMC41dncgc29saWQgIzYzQjNGMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmxvZ2luLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBtYXJnaW46IDV2dyAwIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCQUIwMztcXG4gICAgcGFkZGluZzogMnZ3O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUE2MDU3OyB9XFxuICAubWFuYWdlci1kYXNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzV2dztcXG4gICAgbWFyZ2luOiAwLjV2dyAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogaW5pdGlhbDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tYW5hZ2VyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBub3JtYWw7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkJBQjAzO1xcbiAgICBwYWRkaW5nOiAzdnc7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnZ3OyB9XFxuICAubWFuYWdlci1kYXRhIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogbm9ybWFsO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46IDAuNzV2dyAwIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzQjNGMDtcXG4gICAgcGFkZGluZzogaW5pdGlhbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNUE2MDU3OyB9XFxuICAuY3VzdG9tZXItZGFzaCB7XFxuICAgIGRpc3BsYXk6IG5vcm1hbDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogaW5pdGlhbDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IH0gfVxcblxcbnNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdSZXBvIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ3NEYXRhLCByb29tc0RhdGEpIHtcbiAgICB0aGlzLmFsbEJvb2tpbmdzID0gYm9va2luZ3NEYXRhO1xuICAgIHRoaXMucm9vbXMgPSByb29tc0RhdGE7XG4gIH1cblxuICBmaW5kQm9va2luZ3NCeURhdGUoZGF0ZSkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJvb2tpbmdzLnJlZHVjZSgodG90YWwsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgdG90YWwucHVzaChib29raW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZE9jY3VwaWVkUm9vbXNQZXJjZW50KGRhdGUpIHtcbiAgICBsZXQgcGVyY2VudDtcbiAgICBpZiAodGhpcy5maW5kQm9va2luZ3NCeURhdGUoZGF0ZSkubGVuZ3RoID4gdGhpcy5yb29tcy5sZW5ndGgpIHtcbiAgICAgIHBlcmNlbnQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZXJjZW50ID0gKHRoaXMuZmluZEJvb2tpbmdzQnlEYXRlKGRhdGUpLmxlbmd0aCAvIHRoaXMucm9vbXMubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIGAkeyhwZXJjZW50ICogMTAwKS50b0ZpeGVkKDApfSVgXG4gIH1cblxuICBmaW5kTnVtYmVyT2ZBdmFpbGFibGVSb29tcyhkYXRlKSB7XG4gICAgbGV0IG9jY3VwaWVkO1xuICAgIGlmICh0aGlzLmZpbmRCb29raW5nc0J5RGF0ZShkYXRlKS5sZW5ndGggPiB0aGlzLnJvb21zLmxlbmd0aCkge1xuICAgICAgb2NjdXBpZWQgPSB0aGlzLnJvb21zLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2NjdXBpZWQgPSB0aGlzLmZpbmRCb29raW5nc0J5RGF0ZShkYXRlKS5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucm9vbXMubGVuZ3RoIC0gb2NjdXBpZWQ7XG4gIH1cblxuICBhZGRSYXRlcyhyYXRlcykge1xuICAgIGxldCByZXN1bHQgPSByYXRlcy5yZWR1Y2UoKHN1bSwgcmF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIHJhdGU7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGAkJHsocmVzdWx0KS50b0xvY2FsZVN0cmluZygnZW4nKX1gO1xuICB9XG5cbiAgZmluZFJldmVudWVCeURhdGUoZGF0ZSkge1xuICAgIGxldCBvY2N1cGllZCA9IHRoaXMuZmluZEJvb2tpbmdzQnlEYXRlKGRhdGUpO1xuICAgIGxldCBtb25leSA9IG9jY3VwaWVkLnJlZHVjZSgocm9vbVByaWNlcywgYm9va2luZykgPT4ge1xuICAgICAgdGhpcy5yb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZiAoYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHJvb21QcmljZXMucHVzaChyb29tLmNvc3RQZXJOaWdodClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByb29tUHJpY2VzO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdGhpcy5hZGRSYXRlcyhtb25leSk7XG4gIH1cblxuICBmaWx0ZXJSb29tc0J5VHlwZShvcGVuUm9vbXMsIHR5cGUpIHtcbiAgICBpZiAodHlwZSkge1xuICAgICAgcmV0dXJuIG9wZW5Sb29tcy5maWx0ZXIocm9vbSA9PiByb29tLnJvb21UeXBlID09PSB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wZW5Sb29tcztcbiAgICB9XG4gIH1cblxuICBzZWFyY2hBdmFpbGFibGVSb29tc0J5RGF0ZShkYXRlLCB0eXBlKSB7XG4gICAgbGV0IG9jY3VwaWVkID0gdGhpcy5maW5kQm9va2luZ3NCeURhdGUoZGF0ZSk7XG4gICAgbGV0IHRha2VuUm9vbXMgPSBvY2N1cGllZC5tYXAoYm9va2luZyA9PiBib29raW5nLnJvb21OdW1iZXIpO1xuICAgIGxldCBvcGVuUm9vbXMgPSB0aGlzLnJvb21zLnJlZHVjZSgoYXZhaWxhYmxlLCByb29tKSA9PiB7XG4gICAgICBpZiAoIXRha2VuUm9vbXMuaW5jbHVkZXMocm9vbS5udW1iZXIpKSB7XG4gICAgICAgIGF2YWlsYWJsZS5wdXNoKHJvb20pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF2YWlsYWJsZTtcbiAgICB9LFtdKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJSb29tc0J5VHlwZShvcGVuUm9vbXMsIHR5cGUpO1xuICB9XG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGJvb2tpbmdzLCByb29tcykge1xuICAgIHN1cGVyKGRhdGEsIGJvb2tpbmdzLCByb29tcyk7XG4gIH1cblxuICBzZWxlY3RVc2VyKG5hbWUsIHVzZXJEYXRhLCBib29raW5nc0RhdGEsIHJvb21zRGF0YSkge1xuICAgIGxldCB1c2VyID0gdXNlckRhdGEuZmluZCh1c2VyT2JqZWN0ID0+IHVzZXJPYmplY3QubmFtZSA9PT0gbmFtZSk7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMuYm9va2luZ3MgPSB0aGlzLmdldFVzZXJCb29raW5ncyhib29raW5nc0RhdGEpO1xuICAgIHRoaXMubW9uZXlTcGVudCA9IHRoaXMuY2FsY3VsYXRlTW9uZXlTcGVudChyb29tc0RhdGEpO1xuICB9XG5cbiAgZGVsZXRlQm9va2VkUm9vbShpZE51bWJlcikge1xuICAgIHJldHVybiB7IFwiaWRcIjogaWROdW1iZXIgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGJvb2tpbmdzLCByb29tcykge1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmJvb2tpbmdzID0gdGhpcy5nZXRVc2VyQm9va2luZ3MoYm9va2luZ3MpO1xuICAgIHRoaXMubW9uZXlTcGVudCA9IHRoaXMuY2FsY3VsYXRlTW9uZXlTcGVudChyb29tcyk7XG4gIH1cblxuICBnZXRVc2VyQm9va2luZ3MoYm9va2luZ3NEYXRhKSB7XG4gICAgbGV0IHJlc2VydmF0aW9ucyA9IGJvb2tpbmdzRGF0YS5maWx0ZXIoYm9va2luZyA9PiB0aGlzLmlkID09PSBib29raW5nLnVzZXJJRCk7XG4gICAgbGV0IHJlc3VsdHMgPSByZXNlcnZhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpO1xuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICB1cGRhdGVVc2VyQm9va2luZ3MoYm9va2luZ3NEYXRhKSB7XG4gICAgdGhpcy5ib29raW5ncyA9IHRoaXMuZ2V0VXNlckJvb2tpbmdzKGJvb2tpbmdzRGF0YSk7XG4gIH1cblxuICBjYWxjdWxhdGVNb25leVNwZW50KGRhdGEpIHtcbiAgICBsZXQgcm9vbUZlZXMgPSB0aGlzLmdldFJvb21Db3N0cyhkYXRhKTtcbiAgICBsZXQgdG90YWxGZWUgPSByb29tRmVlcy5yZWR1Y2UoKHRvdGFsLCBmZWUpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbCArIGZlZTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gdG90YWxGZWU7XG4gIH1cblxuICBnZXRSb29tQ29zdHMoZGF0YSkge1xuICAgIGxldCBjaGFyZ2VzID0gW107XG4gICAgdGhpcy5ib29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZiAoYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIGNoYXJnZXMucHVzaChyb29tLmNvc3RQZXJOaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gY2hhcmdlcztcbiAgfVxuXG4gIGJvb2tSb29tKGRhdGUsIHJvb21OdW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJyb29tTnVtYmVyXCI6IHJvb21OdW1iZXJcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNsb3NlQm94LFxuICBjYW5jZWxDbG9zZUJveCxcbiAgYm9va2luZ0NvbmZpcm1hdGlvbixcbiAgY2FuY2VsQ29uZmlybWF0aW9uLFxuICB1c2VyQmFyLFxuICB3ZWxjb21lLFxuICByb29tU2VhcmNoQmFyLFxuICByb29tVHlwZUlucHV0LFxuICByb29tRGF0ZUlucHV0LFxuICBzZWFyY2hSb29tc0J1dHRvbixcbiAgbG9naW5WaWV3LFxuICB1c2VyTmFtZSxcbiAgcGFzc3dvcmQsXG4gIGxvZ2luQnV0dG9uLFxuICBsb2dpbkVycm9yLFxuICBjdXN0b21lckRhc2gsXG4gIGN1c3RvbWVyQ2hhcmdlcyxcbiAgY3VzdG9tZXJCb29raW5ncyxcbiAgbWFuYWdlckRhc2gsXG4gIHNlYXJjaEN1c3RvbWVycyxcbiAgc2VhcmNoQ3VzdG9tZXJJbnB1dCxcbiAgc2VhcmNoQ3VzdG9tZXJCdXR0b24sXG4gIGRlbGV0ZUJvb2tpbmdCdXR0b24sXG4gIHRvdGFsUmV2ZW51ZSxcbiAgcGVyY2VudE9jY3VwaWVkLFxuICByb29tc1ZhY2FudCxcbiAgcm9vbVJlc3VsdHNWaWV3LFxuICByZXN1bHRzSGVhZGluZyxcbiAgc2VhcmNoUmVzdWx0LFxuICBiYWNrQnV0dG9uXG59IGZyb20gJy4vRE9NLXZhcmlhYmxlcyc7XG5cbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4uL3NyYy9DbGFzc2VzL01hbmFnZXInO1xuXG5leHBvcnQgY29uc3QgZG9tTWV0aG9kcyA9IHtcbiAgc2hvd0N1c3RvbWVyRGFzaDogZnVuY3Rpb24odXNlcikge1xuICAgIHRoaXMuZ29Ub0Rhc2gobG9naW5WaWV3LCBjdXN0b21lckRhc2gsIHJvb21TZWFyY2hCYXIpO1xuICAgIHdlbGNvbWUuaW5uZXJUZXh0ID0gYFdlbGNvbWUsICR7dXNlci5uYW1lfWA7XG4gIH0sXG5cbiAgc2hvd01hbmFnZXJEYXNoOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdvVG9EYXNoKGxvZ2luVmlldywgbWFuYWdlckRhc2gsIHNlYXJjaEN1c3RvbWVycyk7XG4gIH0sXG5cbiAgZ29Ub0Rhc2g6IGZ1bmN0aW9uKGhpZGUsIGRhc2gsIGJhcikge1xuICAgIGRhc2guY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGhpZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgdXNlckJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfSxcblxuICBzaG93TG9naW5FcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgcGFzc3dvcmQudmFsdWUgPSBcIlwiO1xuICAgIGxvZ2luRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIH0sXG5cbiAgZ2V0TWFuYWdlckRhdGE6IGZ1bmN0aW9uKGJvb2tpbmdSZXBvLCBkYXRlKSB7XG4gICAgd2VsY29tZS5pbm5lclRleHQgPSBgTWFuYWdlciBEYXNoYm9hcmRgO1xuICAgIHRvdGFsUmV2ZW51ZS5pbm5lclRleHQgPSBib29raW5nUmVwby5maW5kUmV2ZW51ZUJ5RGF0ZShkYXRlKTtcbiAgICBwZXJjZW50T2NjdXBpZWQuaW5uZXJUZXh0ID0gYm9va2luZ1JlcG8uZmluZE9jY3VwaWVkUm9vbXNQZXJjZW50KGRhdGUpO1xuICAgIHJvb21zVmFjYW50LmlubmVyVGV4dCA9IGJvb2tpbmdSZXBvLmZpbmROdW1iZXJPZkF2YWlsYWJsZVJvb21zKGRhdGUpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9LFxuXG4gIGdldEN1c3RvbWVyRGF0YTogZnVuY3Rpb24odXNlciwgcm9vbXNEYXRhKSB7XG4gICAgY3VzdG9tZXJDaGFyZ2VzLmlubmVyVGV4dCA9IGAkJHsodXNlci5tb25leVNwZW50KS50b0xvY2FsZVN0cmluZygnZW4nKX1gO1xuICAgIGN1c3RvbWVyQm9va2luZ3MuaW5uZXJIVE1MID0gJyc7XG4gICAgdXNlci5ib29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgbGV0IHJvb20gPSByb29tc0RhdGEuZmluZChyb29tRGF0YSA9PiByb29tRGF0YS5udW1iZXIgPT09IE51bWJlcihib29raW5nLnJvb21OdW1iZXIpKTtcbiAgICAgIGxldCBkZWxldGVCdXR0b24gPSB0aGlzLmNoZWNrRm9yTWFuYWdlcih1c2VyKTtcbiAgICAgIGN1c3RvbWVyQm9va2luZ3MuaW5uZXJIVE1MICs9XG4gICAgICAgIGA8YXJ0aWNsZSBjbGFzcz1cInNlYXJjaC1yZXN1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLXJvd1wiPlxuICAgICAgICAgICAgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjb2x1bW4tbGVmdFwiPiR7dGhpcy5jb252ZXJ0RGF0ZShib29raW5nLmRhdGUpfTwvcD5cbiAgICAgICAgICAgIDxwIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY29sdW1uLW1pZGRsZVwiPiR7cm9vbS5yb29tVHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJvb20ucm9vbVR5cGUuc2xpY2UoMSl9PC9wPlxuICAgICAgICAgICAgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjb2x1bW4tcmlnaHRcIj5CZWRzOjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLXJvd1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4tbGVmdFwiPiR7ZGVsZXRlQnV0dG9ufTwvcD5cbiAgICAgICAgICAgIDxwIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY29sdW1uLW1pZGRsZVwiPiQkeyhyb29tLmNvc3RQZXJOaWdodCkudG9Mb2NhbGVTdHJpbmcoJ2VuJyl9IHBlciBuaWdodDwvcD5cbiAgICAgICAgICAgIDxwIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY29sdW1uLXJpZ2h0XCI+JHtyb29tLm51bUJlZHN9ICR7cm9vbS5iZWRTaXplfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9va2luZy1pZCBoaWRlXCI+JHtib29raW5nLmlkfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPmBcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfSxcblxuICBjaGVja0Zvck1hbmFnZXI6IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIE1hbmFnZXIpIHtcbiAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJvb2stcm9vbS1idXR0b24gZGVsZXRlXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJkZWxldGUtYm9va2luZy1idXR0b25cIj5EZWxldGUgQm9va2luZzwvYnV0dG9uPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG5cbiAgZ29CYWNrOiBmdW5jdGlvbihib29raW5nUmVwbywgdG9kYXkpIHtcbiAgICBpZiAoY3VzdG9tZXJEYXNoLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICB0aGlzLmdvVG9EYXNoKHJvb21SZXN1bHRzVmlldywgY3VzdG9tZXJEYXNoLCByb29tU2VhcmNoQmFyKTtcbiAgICAgIHRoaXMuaXNNYW5hZ2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ29Ub0Rhc2goY3VzdG9tZXJEYXNoLCBtYW5hZ2VyRGFzaCwgc2VhcmNoQ3VzdG9tZXJzKTtcbiAgICAgIHRoaXMucmVzZXRNYW5hZ2VyRGFzaChib29raW5nUmVwbywgdG9kYXkpO1xuICAgIH1cbiAgfSxcblxuICByZXNldE1hbmFnZXJEYXNoOiBmdW5jdGlvbihib29raW5nUmVwbywgdG9kYXkpIHtcbiAgICBjdXN0b21lckJvb2tpbmdzLmlubmVySFRNTCA9ICcnO1xuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHJvb21TZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHNlYXJjaEN1c3RvbWVySW5wdXQudmFsdWUgPSAnJztcbiAgICB0aGlzLmdldE1hbmFnZXJEYXRhKGJvb2tpbmdSZXBvLCB0b2RheSlcbiAgfSxcblxuICBpc01hbmFnZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghd2VsY29tZS5pbm5lclRleHQuaW5jbHVkZXMoJ01hbmFnZXIgRGFzaGJvYXJkIC0gQ3VzdG9tZXInKSkge1xuICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuICB9LFxuXG4gIHNlYXJjaFJvb21zOiBmdW5jdGlvbihib29raW5nUmVwbywgZGF0ZUlucHV0LCB0eXBlKSB7XG4gICAgcm9vbVJlc3VsdHNWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBjdXN0b21lckRhc2guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGlmICghZGF0ZUlucHV0KSB7XG4gICAgICByb29tUmVzdWx0c1ZpZXcuaW5uZXJIVE1MID0gYDxoNCBpZD1cInJlc3VsdHMtaGVhZGluZ1wiPlBsZWFzZSBlbnRlciBhIGRhdGUgYW5kIHRoZW4gY2xpY2sgXCJTZWFyY2ggUm9vbXNcIiBhZ2Fpbi48L2g0PmBcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQucmVwbGFjZUFsbChcIi1cIiwgXCIvXCIpO1xuICAgICAgbGV0IG9wZW5Sb29tcyA9IGJvb2tpbmdSZXBvLnNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUsIHR5cGUpO1xuICAgICAgdGhpcy5kaXNwbGF5Um9vbVJlc3VsdHMob3BlblJvb21zLCBkYXRlKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH0sXG5cbiAgY29udmVydERhdGU6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBsZXQgcGFydHMgPSBkYXRlLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIHBhcnRzWzFdICsgJy8nICsgcGFydHNbMl0gKyAnLycgKyBwYXJ0c1swXTtcbiAgfSxcblxuICBkaXNwbGF5Um9vbVJlc3VsdHM6IGZ1bmN0aW9uKG9wZW5Sb29tcywgZGF0ZSkge1xuICAgIGxldCBzaG93bkRhdGUgPSB0aGlzLmNvbnZlcnREYXRlKGRhdGUpO1xuICAgIGlmICghb3BlblJvb21zLmxlbmd0aCkge1xuICAgICAgcm9vbVJlc3VsdHNWaWV3LmlubmVySFRNTCA9IGA8aDQgaWQ9XCJyZXN1bHRzLWhlYWRpbmdcIj5XZSBzaW5jZXJlbHkgYXBvbG9naXplIHRoYXQgdGhlcmUgYXJlIG5vIHJvb21zIGF2YWlsYWJsZSB0aGF0IG1hdGNoIHlvdXIgc2VhcmNoLiAgUGxlYXNlIGFkanVzdCB5b3VyIGRhdGUgb3IgdHlwZSBvZiByb29tIGFuZCBzZWFyY2ggYWdhaW4uIDwvaDQ+YFxuICAgIH0gZWxzZSB7XG4gICAgICByb29tUmVzdWx0c1ZpZXcuaW5uZXJIVE1MID0gYDxoNCBpZD1cInJlc3VsdHMtaGVhZGluZ1wiPlNlYXJjaCBSZXN1bHRzPC9oND5gXG4gICAgICBvcGVuUm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgcm9vbVJlc3VsdHNWaWV3Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgICAgICBgPGFydGljbGUgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLXJvd1wiPlxuICAgICAgICAgICAgICA8cCB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNvbHVtbi1sZWZ0XCI+JHtzaG93bkRhdGV9PC9wPlxuICAgICAgICAgICAgICA8cCB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNvbHVtbi1taWRkbGVcIj4ke3Jvb20ucm9vbVR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByb29tLnJvb21UeXBlLnNsaWNlKDEpfTwvcD5cbiAgICAgICAgICAgICAgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjb2x1bW4tcmlnaHRcIj5CZWRzOjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1yb3dcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4tbGVmdFwiPjxidXR0b24gY2xhc3M9XCJib29rLXJvb20tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJib29rLXJvb21cIj5SZXNlcnZlIFJvb208L2J1dHRvbj48L3A+XG4gICAgICAgICAgICAgIDxwIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY29sdW1uLW1pZGRsZVwiPiQke3Jvb20uY29zdFBlck5pZ2h0fTwvcD5cbiAgICAgICAgICAgICAgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjb2x1bW4tcmlnaHRcIj4ke3Jvb20ubnVtQmVkc30gJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInJvb20tbnVtIGhpZGVcIj4ke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5gKVxuICAgICAgfSlcbiAgICB9XG4gICAgYmFja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sXG5cbiAgZmluZFVzZXJBY2NvdW50OiBmdW5jdGlvbihuYW1lLCB1c2VyRGF0YSwgYm9va2luZ3NEYXRhLCByb29tc0RhdGEsIG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLnNlbGVjdFVzZXIobmFtZSwgdXNlckRhdGEsIGJvb2tpbmdzRGF0YSwgcm9vbXNEYXRhKTtcbiAgICB3ZWxjb21lLmlubmVySFRNTCA9IGBNYW5hZ2VyIERhc2hib2FyZCAtIEN1c3RvbWVyOiA8c3Bhbj4ke21hbmFnZXIubmFtZX08L3NwYW4+LCBJRDogPHNwYW4+JHttYW5hZ2VyLmlkfTwvc3Bhbj5gO1xuICAgIG1hbmFnZXJEYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjdXN0b21lckRhc2guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHJvb21TZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgc2VhcmNoQ3VzdG9tZXJzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHRoaXMuZ2V0Q3VzdG9tZXJEYXRhKG1hbmFnZXIsIHJvb21zRGF0YSk7XG4gIH0sXG5cbiAgc2hvd0NvbmZpcm1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjdXN0b21lckRhc2guY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgIGNhbmNlbENvbmZpcm1hdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvb2tpbmdDb25maXJtYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cbiAgfSxcblxuICBoaWRlQm94OiBmdW5jdGlvbigpIHtcbiAgICBib29raW5nQ29uZmlybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjYW5jZWxDb25maXJtYXRpb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY2xvc2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJveFwiKVxuZXhwb3J0IGNvbnN0IGNhbmNlbENsb3NlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtY2xvc2UtYm94XCIpXG5leHBvcnQgY29uc3QgYm9va2luZ0NvbmZpcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9va2luZy1jb25maXJtYXRpb25cIilcbmV4cG9ydCBjb25zdCBjYW5jZWxDb25maXJtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1jb25maXJtYXRpb25cIilcblxuZXhwb3J0IGNvbnN0IHVzZXJCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYmFyXCIpO1xuZXhwb3J0IGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVcIik7XG5leHBvcnQgY29uc3Qgcm9vbVNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vbS1zZWFyY2hcIik7XG5leHBvcnQgY29uc3Qgcm9vbVR5cGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbXNcIik7XG5leHBvcnQgY29uc3Qgcm9vbURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hSb29tc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLXJvb21zLWJ1dHRvblwiKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tdmlld1wiKTtcbmV4cG9ydCBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1idXR0b25cIik7XG5leHBvcnQgY29uc3QgbG9naW5FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZXJyb3JcIik7XG5cbmV4cG9ydCBjb25zdCBjdXN0b21lckRhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbWVyLWRhc2hcIik7XG5leHBvcnQgY29uc3QgY3VzdG9tZXJDaGFyZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21lci1jaGFyZ2VzXCIpO1xuZXhwb3J0IGNvbnN0IGN1c3RvbWVyQm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyLWJvb2tpbmdzXCIpO1xuXG5leHBvcnQgY29uc3QgbWFuYWdlckRhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hbmFnZXItZGFzaFwiKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hDdXN0b21lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1jdXN0b21lcnNcIik7XG5leHBvcnQgY29uc3Qgc2VhcmNoQ3VzdG9tZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXItZmllbGRcIik7XG5leHBvcnQgY29uc3Qgc2VhcmNoQ3VzdG9tZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1jdXN0b21lcnMtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJvb2tpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1ib29raW5nLWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCB0b3RhbFJldmVudWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLXJldmVudWVcIik7XG5leHBvcnQgY29uc3QgcGVyY2VudE9jY3VwaWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJjZW50LW9jY3VwaWVkXCIpO1xuZXhwb3J0IGNvbnN0IHJvb21zVmFjYW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tcy12YWNhbnRcIik7XG5cbmV4cG9ydCBjb25zdCByb29tUmVzdWx0c1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvb20tcmVzdWx0cy12aWV3XCIpXG5leHBvcnQgY29uc3QgcmVzdWx0c0hlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdHMtaGVhZGluZ1wiKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1yZXN1bHRcIik7XG5leHBvcnQgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1idXR0b25cIik7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzXCIpXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJvb21zID0gKCkgPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tc1wiKVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRCb29raW5ncyA9ICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3NcIilcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQm9va2luZyA9IChib29raW5nSWQpID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3NcIiwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29raW5nSWQpLFxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RCb29raW5nID0gKGJvb2tpbmdEZXRhaWxzKSA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tpbmdEZXRhaWxzKSxcbiAgICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2hvdGVsLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvbGVmdC1hcnJvdy1pbi1jaXJjdWxhci1idXR0b24tYmxhY2stc3ltYm9sLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvbGVmdC1hcnJvdy1pbi1jaXJjdWxhci1idXR0b24tYmx1ZS1zeW1ib2wuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9sb3VwZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3gtbWFyay5zdmdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4uL3NyYy9DbGFzc2VzL1VzZXInO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi4vc3JjL0NsYXNzZXMvTWFuYWdlcic7XG5pbXBvcnQgQm9va2luZ1JlcG8gZnJvbSAnLi4vc3JjL0NsYXNzZXMvQm9va2luZy1SZXBvJztcblxuaW1wb3J0IHsgZ2V0VXNlcnMsIGdldFJvb21zLCBnZXRCb29raW5ncywgZGVsZXRlQm9va2luZywgcG9zdEJvb2tpbmcgfSBmcm9tICcuL2ZldGNoLXJlcXVlc3RzJztcbmltcG9ydCB7IGRvbU1ldGhvZHMgfSBmcm9tICcuL0RPTS1tZXRob2RzJztcbmltcG9ydCB7XG4gIGNsb3NlQm94LFxuICBjYW5jZWxDbG9zZUJveCxcbiAgYm9va2luZ0NvbmZpcm1hdGlvbixcbiAgY2FuY2VsQ29uZmlybWF0aW9uLFxuICB1c2VyQmFyLFxuICB3ZWxjb21lLFxuICByb29tU2VhcmNoQmFyLFxuICByb29tVHlwZUlucHV0LFxuICByb29tRGF0ZUlucHV0LFxuICBzZWFyY2hSb29tc0J1dHRvbixcbiAgbG9naW5WaWV3LFxuICB1c2VyTmFtZSxcbiAgcGFzc3dvcmQsXG4gIGxvZ2luQnV0dG9uLFxuICBsb2dpbkVycm9yLFxuICBjdXN0b21lckRhc2gsXG4gIGN1c3RvbWVyQ2hhcmdlcyxcbiAgY3VzdG9tZXJCb29raW5ncyxcbiAgbWFuYWdlckRhc2gsXG4gIHNlYXJjaEN1c3RvbWVycyxcbiAgc2VhcmNoQ3VzdG9tZXJJbnB1dCxcbiAgc2VhcmNoQ3VzdG9tZXJCdXR0b24sXG4gIGRlbGV0ZUJvb2tpbmdCdXR0b24sXG4gIHRvdGFsUmV2ZW51ZSxcbiAgcGVyY2VudE9jY3VwaWVkLFxuICByb29tc1ZhY2FudCxcbiAgcm9vbVJlc3VsdHNWaWV3LFxuICByZXN1bHRzSGVhZGluZyxcbiAgc2VhcmNoUmVzdWx0LFxuICBiYWNrQnV0dG9uXG59IGZyb20gJy4vRE9NLXZhcmlhYmxlcyc7XG5cbmxldCB1c2VyRGF0YTtcbmxldCByb29tc0RhdGE7XG5sZXQgYm9va2luZ3NEYXRhO1xubGV0IHVzZXI7XG5sZXQgbWFuYWdlcjtcbmxldCBib29raW5nUmVwbztcblxuY29uc3QgZmluZFRvZGF5ID0gKCkgPT4ge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgdG9kYXkgPSB5eXl5ICsgJy8nICsgbW0gKyAnLycgKyBkZDtcbiAgcmV0dXJuIHRvZGF5O1xufVxuXG5sZXQgdG9kYXkgPSBmaW5kVG9kYXkoKTtcblxuLy8gLS0tLS0tLS0tLUdldCBEYXRhLS0tLS0tLS0tLVxuY29uc3QgdXBkYXRlQWxsRGF0YSA9ICgpID0+IHtcbiAgdXBkYXRlVXNlckRhdGEoKTtcbiAgdXBkYXRlUm9vbXNEYXRhKCk7XG4gIHVwZGF0ZUJvb2tpbmdzRGF0YSgpO1xufVxuXG5jb25zdCB1cGRhdGVVc2VyRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIGdldFVzZXJzKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdXNlckRhdGEgPSBkYXRhLnVzZXJzO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmNvbnN0IHVwZGF0ZVJvb21zRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIGdldFJvb21zKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcm9vbXNEYXRhID0gZGF0YS5yb29tcztcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG5jb25zdCB1cGRhdGVCb29raW5nc0RhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRCb29raW5ncygpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGJvb2tpbmdzRGF0YSA9IGRhdGEuYm9va2luZ3M7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cblxudXBkYXRlQWxsRGF0YSgpO1xuXG5cbi8vIC0tLS0tLS0tLS1FdmVudCBMaXN0ZW5lcnMtLS0tLS0tLS0tXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2dpbih1c2VyTmFtZS52YWx1ZSwgcGFzc3dvcmQudmFsdWUpO1xufSlcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsICgpID0+IHtcbiAgaWYgKGV2ZW50LndoaWNoID09PSAxMykge1xuICAgIGxvZ2luKHVzZXJOYW1lLnZhbHVlLCBwYXNzd29yZC52YWx1ZSk7XG4gIH1cbn0pXG5cbnNlYXJjaFJvb21zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvbU1ldGhvZHMuc2VhcmNoUm9vbXMoYm9va2luZ1JlcG8sIHJvb21EYXRlSW5wdXQudmFsdWUsIHJvb21UeXBlSW5wdXQudmFsdWUpO1xufSlcblxuc2VhcmNoQ3VzdG9tZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9tTWV0aG9kcy5maW5kVXNlckFjY291bnQoc2VhcmNoQ3VzdG9tZXJJbnB1dC52YWx1ZSwgdXNlckRhdGEsIGJvb2tpbmdzRGF0YSwgcm9vbXNEYXRhLCBtYW5hZ2VyKTtcbn0pXG5cbmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9tTWV0aG9kcy5nb0JhY2soYm9va2luZ1JlcG8sIHRvZGF5KTtcbn0pXG5cbnJvb21SZXN1bHRzVmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtYWtlQm9va2luZyhldmVudCk7XG59KVxuXG5jdXN0b21lckJvb2tpbmdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNhbmNlbEJvb2tpbmcoZXZlbnQpO1xufSlcblxuY2xvc2VCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbU1ldGhvZHMuaGlkZUJveCk7XG5cbmNhbmNlbENsb3NlQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb21NZXRob2RzLmhpZGVCb3gpO1xuXG5yb29tVHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBvcGVuID0gcm9vbVR5cGVJbnB1dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xuICBpZiAob3BlbiA9PT0gJ2ZhbHNlJykge1xuICAgIHJvb21UeXBlSW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICByb29tVHlwZUlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICB9XG59KVxuXG4vLyAtLS0tLS0tLS0tTG9naW4gRnVuY3Rpb25zLS0tLS0tLS0tLVxuY29uc3QgbG9naW4gPSAobmFtZSwgcFdvcmQpID0+IHtcbiAgYm9va2luZ1JlcG8gPSBuZXcgQm9va2luZ1JlcG8oYm9va2luZ3NEYXRhLCByb29tc0RhdGEpO1xuICBjaGVja01hbmFnZXJQYXNzd29yZChuYW1lLCBwV29yZCk7XG4gIGxldCB1c2VySWQgPSBwYXJzZUludChuYW1lLnNsaWNlKDgpKTtcbiAgbGV0IGFsbElkcyA9IHVzZXJEYXRhLm1hcCh1c2VyID0+IHtcbiAgICByZXR1cm4gdXNlci5pZDtcbiAgfSk7XG4gIGNoZWNrQ3VzdG9tZXJQYXNzd29yZCh1c2VySWQsIGFsbElkcywgcFdvcmQpO1xufVxuXG5jb25zdCBjaGVja01hbmFnZXJQYXNzd29yZCA9IChuYW1lLCBwV29yZCkgPT4ge1xuICBpZiAobmFtZSA9PT0gJ21hbmFnZXInKSB7XG4gICAgaWYgKHBXb3JkID09PSAnb3Zlcmxvb2syMDIwJykge1xuICAgICAgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKHtcImlkXCI6IG51bGwsIFwibmFtZVwiOiBudWxsfSwgYm9va2luZ3NEYXRhLCByb29tc0RhdGEpO1xuICAgICAgZG9tTWV0aG9kcy5zaG93TWFuYWdlckRhc2goKTtcbiAgICAgIGRvbU1ldGhvZHMuZ2V0TWFuYWdlckRhdGEoYm9va2luZ1JlcG8sIHRvZGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tTWV0aG9kcy5zaG93TG9naW5FcnJvcigpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjaGVja0N1c3RvbWVyUGFzc3dvcmQgPSAodXNlcklkLCBhbGxJZHMsIHBXb3JkKSA9PiB7XG4gIGlmIChhbGxJZHMuaW5jbHVkZXModXNlcklkKSAmJiBwV29yZCA9PT0gJ292ZXJsb29rMjAyMCcpIHtcbiAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHBlcnNvbiA9PiBwZXJzb24uaWQgPT09IHVzZXJJZCk7XG4gICAgdXNlciA9IG5ldyBVc2VyKGN1cnJlbnRVc2VyLCBib29raW5nc0RhdGEsIHJvb21zRGF0YSk7XG4gICAgZG9tTWV0aG9kcy5zaG93Q3VzdG9tZXJEYXNoKHVzZXIpO1xuICAgIGRvbU1ldGhvZHMuZ2V0Q3VzdG9tZXJEYXRhKHVzZXIsIHJvb21zRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgZG9tTWV0aG9kcy5zaG93TG9naW5FcnJvcigpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS1QT1NUIGFuZCBERUxFVEUgRGF0YS0tLS0tLS0tLS1cbmNvbnN0IHVzZXJPck1hbmFnZXIgPSAoKSA9PiB7XG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1hbmFnZXI7XG4gIH1cbn1cblxuY29uc3QgZm9ybWF0UG9zdGluZ0RhdGUgPSAoZXZlbnQpID0+IHtcbiAgbGV0IGRhdGVDbGljayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhcnRpY2xlJykuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICBsZXQgcGFydHMgPSBkYXRlQ2xpY2suc3BsaXQoJy8nKTtcbiAgcmV0dXJuIHBhcnRzWzJdICsgJy8nICsgcGFydHNbMF0gKyAnLycgKyBwYXJ0c1sxXTtcbn1cblxuY29uc3QgcmVmcmVzaEN1c3RvbWVyQm9va2luZ3MgPSAoKSA9PiB7XG4gIHVwZGF0ZUJvb2tpbmdzRGF0YSgpXG4gICAgLnRoZW4oKCkgPT4gdXNlck9yTWFuYWdlcigpLnVwZGF0ZVVzZXJCb29raW5ncyhib29raW5nc0RhdGEpKVxuICAgIC50aGVuKCgpID0+IGRvbU1ldGhvZHMuZ2V0Q3VzdG9tZXJEYXRhKHVzZXJPck1hbmFnZXIoKSwgcm9vbXNEYXRhKSlcbn1cblxuY29uc3QgY2FuY2VsQm9va2luZyA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICBsZXQgYm9va2luZ0lkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYnKS5jaGlsZHJlblszXS5pbm5lclRleHQpO1xuICAgIGxldCBpbnB1dCA9IG1hbmFnZXIuZGVsZXRlQm9va2VkUm9vbShib29raW5nSWQpXG4gICAgZGVsZXRlQm9va2luZyhpbnB1dClcbiAgICAgIC50aGVuKCgpID0+IHJlZnJlc2hDdXN0b21lckJvb2tpbmdzKCkpXG4gICAgICAudGhlbigoKSA9PiBkb21NZXRob2RzLnNob3dDb25maXJtYXRpb24oKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cbn1cblxuY29uc3QgbWFrZUJvb2tpbmcgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jvb2stcm9vbS1idXR0b24nKSkge1xuICAgIGxldCBkYXRlID0gZm9ybWF0UG9zdGluZ0RhdGUoZXZlbnQpO1xuICAgIGxldCByb29tTnVtYmVyID0gTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhcnRpY2xlJykuY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uaW5uZXJUZXh0KTtcbiAgICBsZXQgYm9va2luZ0RldGFpbHMgPSB1c2VyT3JNYW5hZ2VyKCkuYm9va1Jvb20oZGF0ZSwgcm9vbU51bWJlcik7XG4gICAgcG9zdEJvb2tpbmcoYm9va2luZ0RldGFpbHMpXG4gICAgICAudGhlbigoKSA9PiByZWZyZXNoQ3VzdG9tZXJCb29raW5ncygpKVxuICAgICAgLnRoZW4oKCkgPT4gZG9tTWV0aG9kcy5zaG93Q29uZmlybWF0aW9uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9