/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nimg {\n  height: auto;\n  display: block;\n}\n\n#wrapper {\n  width: 400px;\n  height: 100%;\n  text-align: center;\n}\n\n.auth {\n  display: grid;\n  text-align: center;\n  width: 100%;\n  max-width: 360px;\n}\n.auth .auth_img {\n  max-width: 88px;\n  margin-left: 7em;\n  margin-top: 2em;\n}\n.auth .auth_heading {\n  font-size: 28px;\n  font-weight: 700;\n  color: #333;\n  margin-top: 1px;\n  margin-right: 1em;\n  font-family: \"Times New Roman\", serif;\n  margin-bottom: 1em;\n}\n.auth .auth_text {\n  font-size: 16px;\n  color: #666;\n  gap: 2em;\n}\n.auth .social-login {\n  width: 100%;\n  padding: 12px;\n  margin: 8px 0;\n  border-radius: 25px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.auth .facebook {\n  background-color: #f8f8f8;\n  color: black;\n}\n.auth .google {\n  background-color: #f8f8f8;\n  color: black;\n}\n.auth .facebook:hover {\n  background-color: #e7e7e7;\n}\n.auth .google:hover {\n  background-color: #e7e7e7;\n}\n.auth .auth_separator {\n  display: flex;\n  align-items: center;\n  margin: 25px 0;\n  padding-bottom: 3em;\n}\n.auth .auth_separator .line {\n  flex: 1;\n  height: 1px;\n  background-color: #ccc;\n}\n.auth .auth_separator .or {\n  margin: 0 10px;\n  color: #666;\n}\n.auth .password-login {\n  width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.auth .password-login:hover {\n  background-color: #45a049;\n}\n.auth .signup-text {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #666;\n  margin-left: 3em;\n}\n.auth .signup-text a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.auth .signup-text a:hover {\n  text-decoration: underline;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n#wrapper,\nheader {\n  width: 400px;\n  margin: 0 auto;\n}\n\nh1,\nh2 {\n  font-family: \"Playfair Display\", serif;\n}\n\np {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n}\n\n.home-heading {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n  place-self: center;\n  margin-bottom: 1em;\n  margin-top: 1em;\n}\n.home-heading__logo {\n  max-width: 19px;\n}\n.home-heading__newsify {\n  font-weight: 900;\n  font-size: 24px;\n}\n\n.search-container {\n  width: 345px;\n  margin: 0 auto;\n}\n.search-container .search-bar {\n  width: 345px;\n  height: 46px;\n  border: none;\n  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);\n  padding-left: 1em;\n}\n\n.section-heading {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n}\n.section-heading__text {\n  font-family: \"Playfair Display\", serif;\n  font-size: 16px;\n  font-weight: 900;\n}\n.section-heading__logo {\n  width: 18px;\n  height: 26px;\n}\n\n.section-heading-container {\n  margin-top: 1.5em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5em;\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 2em;\n  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);\n}\n.footer-container .footer-icon {\n  font-size: 16px;\n  color: lightgray;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 2em;\n  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);\n  gap: 2em;\n}\n.footer-container .footer-img {\n  width: 26px;\n  margin-bottom: 1em;\n}\n\n.dropdown-content {\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background-color: #fff;\n  transition: max-height 0.3s ease, opacity 0.3s ease;\n  overflow: hidden;\n  display: none;\n}\n\n.news-article {\n  margin-bottom: 10px;\n  display: flex;\n  gap: 1em;\n}\n.news-article h3 {\n  font-size: 16;\n  font-weight: 700;\n  margin: 0;\n}\n.news-article img {\n  width: 72px;\n  height: 72px;\n}\n.news-article p {\n  font-size: 14px;\n  margin: 5px 0;\n}\n\n.open .arrow {\n  transform: rotate(180deg);\n}\n.open .dropdown-content {\n  display: unset;\n}\n\nbody {\n  font-family: \"Roboto\", Arial, sans-serif;\n  background-color: #f4f4f4;\n  color: #333;\n  margin: 0;\n  padding: 0;\n  transition: background-color 0.3s, color 0.3s;\n}\nbody.dark-mode {\n  background-color: #1a1a1a;\n  color: #fff;\n}\n\n.container {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s, color 0.3s;\n}\n.container.dark-mode {\n  background-color: #1a1a1a;\n  color: #fff;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n.header img {\n  height: 40px;\n  margin-bottom: 10px;\n}\n.header h1 {\n  font-size: 24px;\n  margin: 0;\n}\n\n.section {\n  margin-bottom: 30px;\n}\n.section h2 {\n  margin-top: 0;\n}\n\n.toggle-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.toggle-container .toggle-label {\n  font-size: 16px;\n}\n.toggle-container .toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.toggle-container .toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-container .toggle-switch .toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n.toggle-container .toggle-switch .toggle-slider::before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.toggle-container .toggle-switch input:checked + .toggle-slider {\n  background-color: #4CAF50;\n}\n.toggle-container .toggle-switch input:checked + .toggle-slider::before {\n  transform: translateX(26px);\n}\n.toggle-container .toggle-switch input:focus + .toggle-slider {\n  box-shadow: 0 0 1px #4CAF50;\n}\n\n.bottom-nav {\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0;\n  border-top: 1px solid #e0e0e0;\n}\n.bottom-nav a {\n  color: #333;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 14px;\n  transition: color 0.3s;\n}\n.bottom-nav a i {\n  font-size: 24px;\n  margin-bottom: 4px;\n}\n.bottom-nav a.active {\n  color: #4CAF50;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f4f4f4;\n  font-family: Arial, sans-serif;\n}\n\nh1, h2, h3 {\n  font-family: \"Playfair Display\", serif;\n}\n\n.splash-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.newsify-logo {\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n  text-align: center;\n}\n\n.newsify-heading {\n  margin-top: 20px;\n  font-size: 2em;\n  opacity: 0;\n  transition: opacity 2s ease-in-out;\n}\n\n.sign-in-button {\n  background-color: #4D861F;\n}\n\n/* Onboarding styles */\n.onboarding {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #f4f4f4;\n}\n\n.onboard_img {\n  width: 100%;\n  max-width: 392px;\n  height: auto;\n}\n\n.onboard_heading {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.onboard_writing {\n  font-size: 1em;\n  color: #666;\n  text-align: center;\n  margin: 0 1em;\n}\n\n.swap {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  margin-top: 0.5em;\n}\n.swap .dot,\n.swap .first_dot {\n  width: 10px;\n  height: 10px;\n  background-color: gray;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.swap .dot.active,\n.swap .first_dot.active {\n  width: 35px;\n  background-color: #3A5F0B;\n  border-radius: 5px;\n}\n\n.onboard_button {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n.onboard_button .skip_button,\n.onboard_button .continue_button {\n  font-size: 16px;\n  font-weight: bold;\n  padding: 10px 20px;\n  border-radius: 20px;\n  border: 2px solid transparent;\n  cursor: pointer;\n  width: 45%;\n}\n.onboard_button .skip_button {\n  color: #3A5F0B;\n  border-color: #3A5F0B;\n  background-color: #fff;\n}\n.onboard_button .continue_button {\n  color: #fff;\n  background-color: #3A5F0B;\n}\n\n/*\n//Tablet styles \n@media (min-width: 768px) {\n  .onboarding {\n    flex-direction: row;\n  }\n\n  .onboard_img {\n    width: 50%;\n  }\n\n  .onboard_heading {\n    font-size: 2em;\n  }\n\n  .onboard_writing {\n    font-size: 1.2em;\n    margin: 0 2em;\n  }\n\n  .skip_button,\n  .continue_button {\n    padding: 12px 24px;\n  }\n}\n\n// Desktop styles \n@media (min-width: 1024px) {\n  .onboarding {\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .onboard_img {\n    width: 30%;\n  }\n\n  .onboard_heading {\n    font-size: 2.5em;\n  }\n\n  .onboard_writing {\n    font-size: 1.5em;\n    margin: 0 3em;\n  }\n\n  .skip_button,\n  .continue_button {\n    padding: 15px 30px;\n  }\n}*/`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://newsify-farzana84/./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://newsify-farzana84/./src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://newsify-farzana84/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/components/fetch-most-popular-by-views.js":
/*!**********************************************************!*\
  !*** ./src/js/components/fetch-most-popular-by-views.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../sass/styles.scss */ \"./src/sass/styles.scss\")\r\n//const API_KEY = 'WS2sWpl8J2xj1BQb5e0KTdRgQqdlhNGO';\r\nconst API_KEY = 'MlTTn3vMLfdAE6nqruHnKOI2fioS97Ft'\r\n//const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey';\r\nconst BASE_URL = 'https://api.nytimes.com/svc/';\r\nconst endpoints = {\r\n   mostPopularByViews: 'mostpopular/v2/viewed/'\r\n\r\n}\r\n\r\n  async function fetchMostPopularByViews(days = 1) {\r\n   const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);\r\n\r\n   url.searchParams.set('api-key', API_KEY);//?api-key=yourkey    searchparams er age ?hoe\r\n\r\n   const response = await fetch(url);\r\n   const data = await response.json();\r\n\r\n   return data;\r\n}\r\nmodule.exports = fetchMostPopularByViews;\n\n//# sourceURL=webpack://newsify-farzana84/./src/js/components/fetch-most-popular-by-views.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_fetch_most_popular_by_views_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fetch-most-popular-by-views.js */ \"./src/js/components/fetch-most-popular-by-views.js\");\n/* harmony import */ var _components_fetch_most_popular_by_views_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_fetch_most_popular_by_views_js__WEBPACK_IMPORTED_MODULE_0__);\n//const SplashScreen = require('./components/splash-screen');\r\n//const fetchMostPopularByViews = require('./home.js');\r\n__webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\") ;\r\n\r\ndocument.addEventListener('DOMContentLoaded', async() => {\r\n    const app = document.getElementById('app');\r\n\r\n    class SplashScreen {\r\n        #element = null;\r\n\r\n        get element() { return this.#element }\r\n\r\n        constructor() {\r\n            this.#element = document.createElement('div');\r\n            this.#element.classList.add('splash-screen'); // Add a class for styling\r\n        }\r\n\r\n        createLogo() {\r\n            const logo = document.createElement('img');\r\n            logo.classList.add('newsify-logo');\r\n            logo.src = './images/newsify_logo.png';\r\n            logo.alt = 'Logo';\r\n            this.#element.append(logo);\r\n            setTimeout(() => { logo.style.opacity = 1; logo.style.transition = 'opacity 1s ease-in-out'; }, 1000);\r\n        }\r\n\r\n        createHeading() {\r\n            const heading = document.createElement('h1');\r\n            heading.textContent = 'Newsify';\r\n            heading.classList.add('newsify-heading');\r\n            heading.style.opacity = 0; // Initially hidden\r\n            this.#element.append(heading);\r\n            setTimeout(() => { heading.style.opacity = 1; heading.style.transition = 'opacity 1s ease-in-out'; }, 2000); // Animate the heading after 2 seconds\r\n        }\r\n    }\r\n\r\n    // Create and display the splash screen\r\n    const splashScreen = new SplashScreen();\r\n    splashScreen.createLogo();\r\n    splashScreen.createHeading();\r\n    app.appendChild(splashScreen.element);\r\n\r\n    // Function to show onboarding screen after splash screen\r\n    const showOnboarding = () => {\r\n        app.innerHTML = `\r\n        <div id=\"onboarding\" class=\"onboarding\">\r\n          <div id=\"wrapper\">\r\n            <section class=\"onborard\">\r\n              <div class=\"onboard_img\">\r\n                <img src=\"images/onboarding1.jpg\" alt=\"onborard\">\r\n              </div>\r\n              <div class=\"onboard1\">\r\n                <h1 class=\"onboard_heading\">Stay Connected,<br>Everywhere, Anytime</h1>\r\n                <p class=\"onboard_writing\">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>\r\n              </div>\r\n              <div class=\"swap\">\r\n                <span class=\"first_dot\"></span>\r\n                <span class=\"dot\"></span>\r\n                <span class=\"dot\"></span>\r\n              </div>\r\n              <div class=\"onboard_button\">\r\n                <button class=\"skip_button\">Skip</button>\r\n                <button class=\"continue_button\">Continue</button>\r\n              </div>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      `;\r\n        initializeOnboarding();\r\n    };\r\n\r\n    // Simulate a delay to show the splash screen for a few seconds\r\n    setTimeout(showOnboarding, 4000);\r\n\r\n    function initializeOnboarding() {\r\n        const slides = [\r\n            {\r\n                image: 'images/onboarding1.jpg',\r\n                heading: 'Stay Connected,<br>Everywhere, Anytime',\r\n                text: 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.'\r\n            },\r\n            {\r\n                image: 'images/onboarding2.jpg',\r\n                heading: 'Discover the World,<br>One Story at a Time',\r\n                text: 'Explore a wide range of topics and stories from around the globe, tailored just for you.'\r\n            },\r\n            {\r\n                image: 'images/onboarding3.jpg',\r\n                heading: 'Stay Informed,<br>Stay Ahead',\r\n                text: 'Get timely updates and notifications on the topics that matter most to you.'\r\n            }\r\n        ];\r\n\r\n        let currentIndex = 0;\r\n\r\n        const onboardImage = document.querySelector('.onboard_img img');\r\n        const onboardHeading = document.querySelector('.onboard_heading');\r\n        const onboardWriting = document.querySelector('.onboard_writing');\r\n        const continueButton = document.querySelector('.continue_button');\r\n        const skipButton = document.querySelector('.skip_button');\r\n        const dots = document.querySelectorAll('.dot, .first_dot');\r\n\r\n        continueButton.addEventListener('click', () => {\r\n            if (currentIndex === slides.length - 1) {\r\n                window.location.href = 'auth.html'; // Redirect to authentication page\r\n            } else {\r\n                currentIndex = (currentIndex + 1) % slides.length;\r\n                updateSlide(currentIndex);\r\n            }\r\n        });\r\n\r\n        skipButton.addEventListener('click', () => {\r\n           window.location.href = 'auth.html';\r\n            \r\n        });\r\n\r\n        function updateSlide(index) {\r\n            onboardImage.src = slides[index].image;\r\n            onboardHeading.innerHTML = slides[index].heading;\r\n            onboardWriting.textContent = slides[index].text;\r\n            updateDots(index);\r\n        }\r\n\r\n        function updateDots(index) {\r\n            dots.forEach((dot, idx) => {\r\n                dot.classList.toggle('active', idx === index);\r\n            });\r\n        }\r\n\r\n        // Initialize with the first slide\r\n        updateSlide(currentIndex);\r\n    }\r\n\r\n\r\n});\r\nconst page = window.location.pathname;\r\n\r\nif (page === '/home.html') {\r\n\r\n    const popularNews = await fetchMostPopolarByViews(7);\r\n    console.log(popularNews);\r\n    \r\n\r\n}\r\n\r\n/*if (page === '/index.html') {\r\n    const products = await getProducts();\r\n    console.log(products);\r\n    \r\n    //const productList =document.createElement('div');\r\n    //productList.classList.add('sale-items__product-container');\r\n    const saleItemsContainer = document.querySelector('.sale-items');\r\n    const productList = document.createElement('div');//creat korte hobe document dia ... kintu eta kothae kisher vitor creat hobe sheta tik korte hobe append onujai\r\n    productList.classList.add('sale-items__product-list');\r\n\r\n    saleItemsContainer.append(productList);\r\n\r\n    products.forEach(product => {\r\n        const newProductCard = createProductCard(product);\r\n        newProductCard.classList.add('product');\r\n        productList.append(newProductCard);\r\n    });\r\n\r\n} else if (page == '/cart.html') {\r\n    const shoppingCartTable = document.querySelector('.shopping-cart__table');\r\n    const cartItems = getItems();\r\n    const cartItemsKeysAsArray = Object.keys(cartItems);\r\n\r\n    // Create a total price row element here, so it doesn't get appended in each iteration\r\n    const totalPriceRow = document.createElement('tr');\r\n    totalPriceRow.classList.add('shopping-cart__total-price-row');\r\n    const totalPriceLabel = document.createElement('td');\r\n    const totalPriceValue = document.createElement('td');\r\n\r\n    // Calculate total price once outside the loop\r\n    const totalPrice = calculateTotal();\r\n    console.log('totalprice', totalPrice);\r\n    totalPriceLabel.innerText = 'Total Price';\r\n    totalPriceValue.colSpan = 3; // Span across the rest of the columns\r\n    totalPriceValue.innerText = totalPrice;\r\n\r\n    // Append the label and value cells to the total price row\r\n    totalPriceRow.appendChild(totalPriceLabel);\r\n    totalPriceRow.appendChild(totalPriceValue);\r\n\r\n    cartItemsKeysAsArray.forEach(key => {\r\n        const tableRow = document.createElement('tr');\r\n        tableRow.classList.add('shopping-cart__item-row');\r\n\r\n        const amountTableData = document.createElement('td');\r\n        const nameTableData = document.createElement('td');\r\n        const priceTableData = document.createElement('td');\r\n        const removeTableData = document.createElement('td');\r\n\r\n        const buttonRemove = document.createElement('button');\r\n        buttonRemove.innerText = 'Remove';\r\n        buttonRemove.addEventListener('click', () => {\r\n            deleteItems(key);\r\n            shoppingCartTable.removeChild(tableRow); // Remove row from table\r\n            updateTotalPrice();\r\n        });\r\n\r\n        amountTableData.innerText = cartItems[key].amount;\r\n        nameTableData.innerText = cartItems[key].name;\r\n        priceTableData.innerText = cartItems[key].price;\r\n        removeTableData.appendChild(buttonRemove); // Append the button to the cell\r\n\r\n        tableRow.append(amountTableData, nameTableData, priceTableData, removeTableData);\r\n        shoppingCartTable.appendChild(tableRow); // Append each item row to the table\r\n    });\r\n\r\n    // Append the total price row after all item rows\r\n    shoppingCartTable.appendChild(totalPriceRow);\r\n\r\n    function updateTotalPrice() {\r\n        const newTotalPrice = calculateTotal();\r\n        totalPriceValue.innerText = newTotalPrice; // Update total price value\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n    */\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://newsify-farzana84/./src/js/index.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;