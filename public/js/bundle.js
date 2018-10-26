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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SearchView = __webpack_require__(/*! ./views/search_view.js */ \"./src/views/search_view.js\");\nconst Search = __webpack_require__(/*! ./models/search_function.js */ \"./src/models/search_function.js\");\nconst CountryView = __webpack_require__(/*! ./views/country_view.js */ \"./src/views/country_view.js\");\nconst ContinentView = __webpack_require__(/*! ./views/continent_view.js */ \"./src/views/continent_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const search = new Search();\n  search.bindEvents();\n\n  const searchView = new SearchView();\n  searchView.bindEvents();\n\n  const resultView = document.querySelector('#display');\n\n  const countryView = new CountryView(resultView);\n  countryView.bindEvents();\n\n  const continentView = new ContinentView(resultView);\n  continentView.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  // can use return as fetch returns a promise object\n  return fetch(this.url)\n    //then do this to the result (no ; after fetch as chaining then, use end of statement)\n    .then((response) => response.json());\n      //.json() will parse json object. Has implicit return so will return response\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/search_function.js":
/*!***************************************!*\
  !*** ./src/models/search_function.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Search = function () {\n  this.data = null;\n};\n\nSearch.prototype.bindEvents = function () {\n  PubSub.subscribe('Country:countrySearch', (evt) => {\n    const searchType = evt.detail;\n    this.getData();\n    this.countrySearch(searchType);\n  });\n  PubSub.subscribe('Continent:continentSearch', (evt) => {\n    const searchType = evt.detail;\n    this.getData();\n    this.continentSearch(searchType);\n  });\n};\n\n\nSearch.prototype.getData = function () {\nconst url = `https://restcountries.eu/rest/v2/all`;\n  const request = new Request(url);\n  request.get()\n    .then((data) => {\n      PubSub.publish('Data:dataReady', data);\n    })\n    .catch((err) => {\n      PubSub.publish('Activity:error', err);\n    })\n};\n\n\nSearch.prototype.countrySearch = function (countryName) {\n  PubSub.subscribe('Data:dataReady', (evt) => {\n    const data = evt.detail;\n    const searchName = this.inputFormat(countryName);\n\n    let count = data.length;\n\n    for(i=0; i< data.length; i++){\n      if(data[i].name.toLowerCase() === searchName){\n        PubSub.publish('Country:dataReady', data[i]);\n      }\n      else{\n        count -- ;\n      }\n    }\n\n    if(count === 0){\n      console.log(\"country not found\");\n    }\n\n  });\n};\n\nSearch.prototype.continentSearch = function (continentName) {\n  PubSub.subscribe('Data:dataReady', (evt) => {\n    const data = evt.detail;\n    const searchName = this.inputFormat(continentName);\n\n    let count = data.length;\n\n    let continent = [];\n\n    for(i=0; i< data.length; i++){\n      if(data[i].region.toLowerCase() === searchName){\n        // console.log(data[i]);\n        continent.push(data[i]);\n      }\n      else{\n        count -- ;\n      }\n    }\n\n    if(count === 0){\n      console.log(\"Continent not found\");\n    }\n\n\n    if( continent.length > 0){\n      PubSub.publish('Continent:dataReady', continent);\n    }\n  });\n};\n\nSearch.prototype.inputFormat = function (input) {\n  return input.toLowerCase();\n};\n\n\n\n\n\n\n\nmodule.exports = Search;\n\n\n//# sourceURL=webpack:///./src/models/search_function.js?");

/***/ }),

/***/ "./src/views/continent_view.js":
/*!*************************************!*\
  !*** ./src/views/continent_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst ContinentView = function (container) {\n  this.container = container;\n};\n\nContinentView.prototype.bindEvents = function () {\n  PubSub.subscribe('Continent:dataReady', (evt) => {\n    const continent = evt.detail;\n    // console.log(continent);\n    this.render(continent);\n  });\n};\n\nContinentView.prototype.render = function (data) {\n  this.container.innerHTML = '';\n\n  const continentNameElement = document.createElement('h1');\n  continentNameElement.id = \"continentName\";\n  continentNameElement.textContent = data[0].region;\n  console.log(data);\n  this.container.appendChild(continentNameElement);\n\n\n  const continentElement = document.createElement('div');\n  continentElement.id = \"continentView\";\n  this.container.appendChild(continentElement);\n\n  for(i=0; i < data.length; i++){\n    // create wrapper, set bg to flag and display name\n    const country = document.createElement('div');\n    country.class = \"country\";\n    country.textContent = data[i].name;\n    country.style.backgroundImage = data[i].flag;\n    continentElement.appendChild(country);\n  }\n};\n\n\nmodule.exports = ContinentView;\n\n\n//# sourceURL=webpack:///./src/views/continent_view.js?");

/***/ }),

/***/ "./src/views/country_view.js":
/*!***********************************!*\
  !*** ./src/views/country_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst CountryView = function (container) {\n  this.container = container;\n};\n\nCountryView.prototype.bindEvents = function () {\n  PubSub.subscribe('Country:dataReady', (evt) => {\n    const country = evt.detail;\n    this.render(country);\n  });\n};\n\nCountryView.prototype.render = function (data) {\n  this.container.innerHTML = '';\n\n  const countryElement = document.createElement('div');\n  countryElement.id = \"countryView\";\n  this.container.appendChild(countryElement);\n\n  const nameElement = document.createElement('h2');\n  nameElement.textContent = data.name;\n  countryElement.appendChild(nameElement);\n\n  const listElement = document.createElement('ul');\n  listElement.id = \"listElement\";\n  countryElement.appendChild(listElement);\n\n  const continentElement = document.createElement('li');\n  continentElement.textContent = `Continent: ${data.region}`;\n  listElement.appendChild(continentElement);\n\n  const subregionElement = document.createElement('li');\n  subregionElement.textContent = `Subregion: ${data.subregion}`;\n  listElement.appendChild(subregionElement);\n\n  const populationElement = document.createElement('li');\n  populationElement.textContent = `Population: ${data.population}`;\n  listElement.appendChild(populationElement);\n\n  const capitalElement = document.createElement('li');\n  capitalElement.textContent = `Capital City: ${data.capital}`;\n  listElement.appendChild(capitalElement);\n};\n\n\nmodule.exports = CountryView;\n\n\n//# sourceURL=webpack:///./src/views/country_view.js?");

/***/ }),

/***/ "./src/views/search_view.js":
/*!**********************************!*\
  !*** ./src/views/search_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SearchView = function () {\n};\n\nSearchView.prototype.bindEvents = function () {\n\n\n\nvar country = document.getElementById(\"countrySearch\");\ncountry.addEventListener(\"keyup\", function(event) {\n    event.preventDefault();\n    if (event.keyCode === 13) {\n        PubSub.publish('Country:countrySearch', country.value);\n    }\n});\n\nvar continent = document.getElementById(\"continentSearch\");\ncontinent.addEventListener(\"keyup\", function(event) {\n    event.preventDefault();\n    if (event.keyCode === 13) {\n        PubSub.publish('Continent:continentSearch', continent.value);\n    }\n});\n\n};\n\nmodule.exports = SearchView;\n\n\n//# sourceURL=webpack:///./src/views/search_view.js?");

/***/ })

/******/ });