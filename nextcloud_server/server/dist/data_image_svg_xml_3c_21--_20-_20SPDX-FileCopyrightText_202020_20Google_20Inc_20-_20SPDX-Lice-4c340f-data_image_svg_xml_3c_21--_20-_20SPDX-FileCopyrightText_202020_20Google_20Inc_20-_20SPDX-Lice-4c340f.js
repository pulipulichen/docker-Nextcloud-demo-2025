"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Google_20Inc_20-_20SPDX-Lice-4c340f"],{

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcAppContentDetails.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcAppContentDetails.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcAppContentDetails)
/* harmony export */ });
/* harmony import */ var _chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");

const _sfc_main = {
  name: "NcAppContentDetails"
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "app-content-details" }, [_vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const NcAppContentDetails = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcAppContentList.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcAppContentList.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcAppContentList)
/* harmony export */ });
/* harmony import */ var _chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");

const _sfc_main = {
  name: "NcAppContentList",
  props: {
    selection: {
      type: Boolean,
      default: false
    },
    showDetails: {
      type: Boolean,
      default: false
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "app-content-list", class: { selection: _vm.selection, showdetails: _vm.showDetails } }, [_vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const NcAppContentList = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationIconBullet.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationIconBullet.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcAppNavigationIconBullet)
/* harmony export */ });
/* harmony import */ var _assets_NcAppNavigationIconBullet_CeBYVy6t_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcAppNavigationIconBullet-CeBYVy6t.css */ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationIconBullet-CeBYVy6t.css");
/* harmony import */ var _chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");


const _sfc_main = {
  name: "NcAppNavigationIconBullet",
  props: {
    color: {
      type: String,
      required: true,
      validator(color) {
        return /^#?([0-9A-F]{3}){1,2}$/i.test(color);
      }
    }
  },
  emits: ["click"],
  computed: {
    formattedColor() {
      if (this.color.startsWith("#")) {
        return this.color;
      }
      return "#" + this.color;
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "app-navigation-entry__icon-bullet", on: { "click": _vm.onClick } }, [_c("div", { style: { backgroundColor: _vm.formattedColor } })]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "938dadb1"
);
const NcAppNavigationIconBullet = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationNew.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationNew.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcAppNavigationNew)
/* harmony export */ });
/* harmony import */ var _assets_NcAppNavigationNew_BcDuupzO_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcAppNavigationNew-BcDuupzO.css */ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNew-BcDuupzO.css");
/* harmony import */ var _NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NcButton.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");



const _sfc_main = {
  components: {
    NcButton: _NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    buttonId: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "tertiary"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["click"]
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "app-navigation-new" }, [_c("NcButton", { attrs: { "id": _vm.buttonId, "disabled": _vm.disabled, "type": _vm.type }, on: { "click": function($event) {
    return _vm.$emit("click");
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("icon")];
  }, proxy: true }], null, true) }, [_vm._v(" " + _vm._s(_vm.text) + " ")])], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "810cb824"
);
const NcAppNavigationNew = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcGuestContent.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcGuestContent.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcGuestContent)
/* harmony export */ });
/* harmony import */ var _assets_NcGuestContent_B0ivUQHg_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcGuestContent-B0ivUQHg.css */ "./node_modules/@nextcloud/vue/dist/assets/NcGuestContent-B0ivUQHg.css");
/* harmony import */ var _chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");


const _sfc_main = {
  name: "NcGuestContent",
  mounted() {
    document.getElementById("content").classList.add("nc-guest-content");
  },
  destroyed() {
    document.getElementById("content").classList.remove("nc-guest-content");
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { attrs: { "id": "guest-content-vue" } }, [_vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "cbad78fb"
);
const NcGuestContent = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcHeaderButton.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcHeaderButton.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcHeaderButton)
/* harmony export */ });
/* harmony import */ var _assets_NcHeaderButton_BPkJ5wxD_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcHeaderButton-BPkJ5wxD.css */ "./node_modules/@nextcloud/vue/dist/assets/NcHeaderButton-BPkJ5wxD.css");
/* harmony import */ var _chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/GenRandomId-CMooMQt0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _NcButton_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NcButton.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");




const _sfc_main = {
  name: "NcHeaderButton",
  components: {
    NcButton: _NcButton_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    /**
     * Unique id for this menu
     */
    id: {
      type: String,
      required: true
    },
    /**
     * `aria-label` attribute of the button
     */
    ariaLabel: {
      type: String,
      required: true
    },
    /**
     * Additional visually hidden description text for the button
     */
    description: {
      type: String,
      default: null
    }
  },
  emits: [
    "click"
  ],
  data() {
    return {
      descriptionId: (0,_chunks_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_1__.G)()
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "header-menu", attrs: { "id": _vm.id } }, [_c("NcButton", { staticClass: "header-menu__trigger", attrs: { "type": "tertiary-no-background", "aria-label": _vm.ariaLabel, "aria-describedby": _vm.descriptionId, "size": "large" }, on: { "click": function($event) {
    $event.preventDefault();
    return _vm.$emit("click", $event);
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("icon")];
  }, proxy: true }], null, true) }), _vm.description ? _c("span", { staticClass: "header-menu__description hidden-visually", attrs: { "id": _vm.descriptionId } }, [_vm._v(" " + _vm._s(_vm.description) + " ")]) : _vm._e()], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "6be13bb0"
);
const NcHeaderButton = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Composables/useIsDarkTheme.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Composables/useIsDarkTheme.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsDarkTheme: () => (/* binding */ useIsDarkTheme),
/* harmony export */   useIsDarkThemeElement: () => (/* binding */ useIsDarkThemeElement)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/shared/index.mjs");
/* harmony import */ var _Functions_isDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Functions/isDarkTheme.mjs */ "./node_modules/@nextcloud/vue/dist/Functions/isDarkTheme.mjs");



function useIsDarkThemeElement(el = document.body) {
  const isDarkTheme = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_Functions_isDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_0__.checkIfDarkTheme)(el));
  const isDarkSystemTheme = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_2__.usePreferredDark)();
  function updateIsDarkTheme() {
    isDarkTheme.value = (0,_Functions_isDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_0__.checkIfDarkTheme)(el);
  }
  (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_2__.useMutationObserver)(el, updateIsDarkTheme, { attributes: true });
  (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(isDarkSystemTheme, updateIsDarkTheme, { immediate: true });
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.readonly)(isDarkTheme);
}
const useIsDarkTheme = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_3__.createSharedComposable)(() => useIsDarkThemeElement());



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Functions/a11y.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Functions/a11y.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isA11yActivation: () => (/* binding */ isA11yActivation)
/* harmony export */ });
const isA11yActivation = (event) => {
  if (event.type === "click") {
    return true;
  }
  if (event.type === "keydown" && event.key === "Enter") {
    return true;
  }
  return false;
};



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Functions/isDarkTheme.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Functions/isDarkTheme.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfDarkTheme: () => (/* binding */ checkIfDarkTheme),
/* harmony export */   isDarkTheme: () => (/* binding */ isDarkTheme)
/* harmony export */ });
function checkIfDarkTheme(el = document.body) {
  const backgroundInvertIfDark = window.getComputedStyle(el).getPropertyValue("--background-invert-if-dark");
  if (backgroundInvertIfDark !== void 0) {
    return backgroundInvertIfDark === "invert(100%)";
  }
  return false;
}
const isDarkTheme = checkIfDarkTheme();



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Mixins/isFullscreen.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Mixins/isFullscreen.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _Composables_useIsFullscreen_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Composables/useIsFullscreen.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsFullscreen.mjs");

const index = {
  computed: {
    /**
     * @deprecated Is to be removed in v9.0.0 with Vue 3 migration.
     *             Use `composables/useIsFullscreen` instead.
     */
    isFullscreen() {
      return _Composables_useIsFullscreen_mjs__WEBPACK_IMPORTED_MODULE_0__.isFullscreenState.value;
    }
  }
};



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Mixins/isMobile.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Mixins/isMobile.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Composables/useIsMobile.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsMobile.mjs");

const index = {
  computed: {
    /**
     * @deprecated Is to be removed in v9.0.0 with Vue 3 migration.
     *             Use `composables/useIsMobile` instead.
     */
    isMobile() {
      return _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_0__.isMobileState.value;
    }
  }
};



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-BND4GQdv.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-BND4GQdv.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcActionButtonGroup_BND4GQdv_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcActionButtonGroup-BND4GQdv.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-BND4GQdv.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcActionButtonGroup_BND4GQdv_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcActionButtonGroup_BND4GQdv_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcActionButtonGroup_BND4GQdv_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcActionButtonGroup_BND4GQdv_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcActionRadio-C87waXE-.css":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcActionRadio-C87waXE-.css ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcActionRadio_C87waXE_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcActionRadio-C87waXE-.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionRadio-C87waXE-.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcActionRadio_C87waXE_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcActionRadio_C87waXE_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcActionRadio_C87waXE_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcActionRadio_C87waXE_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcActionTextEditable-1TXeJ5zp.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcActionTextEditable-1TXeJ5zp.css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcActionTextEditable_1TXeJ5zp_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcActionTextEditable-1TXeJ5zp.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionTextEditable-1TXeJ5zp.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcActionTextEditable_1TXeJ5zp_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcActionTextEditable_1TXeJ5zp_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcActionTextEditable_1TXeJ5zp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcActionTextEditable_1TXeJ5zp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationCaption-DU9PxTvu.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationCaption-DU9PxTvu.css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcAppNavigationCaption_DU9PxTvu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcAppNavigationCaption-DU9PxTvu.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationCaption-DU9PxTvu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcAppNavigationCaption_DU9PxTvu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcAppNavigationCaption_DU9PxTvu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcAppNavigationCaption_DU9PxTvu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcAppNavigationCaption_DU9PxTvu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationIconBullet-CeBYVy6t.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationIconBullet-CeBYVy6t.css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcAppNavigationIconBullet_CeBYVy6t_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcAppNavigationIconBullet-CeBYVy6t.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationIconBullet-CeBYVy6t.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcAppNavigationIconBullet_CeBYVy6t_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcAppNavigationIconBullet_CeBYVy6t_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcAppNavigationIconBullet_CeBYVy6t_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcAppNavigationIconBullet_CeBYVy6t_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNew-BcDuupzO.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNew-BcDuupzO.css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcAppNavigationNew_BcDuupzO_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcAppNavigationNew-BcDuupzO.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNew-BcDuupzO.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcAppNavigationNew_BcDuupzO_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcAppNavigationNew_BcDuupzO_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcAppNavigationNew_BcDuupzO_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcAppNavigationNew_BcDuupzO_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNewItem-fUP3wQTQ.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNewItem-fUP3wQTQ.css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcAppNavigationNewItem_fUP3wQTQ_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcAppNavigationNewItem-fUP3wQTQ.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNewItem-fUP3wQTQ.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcAppNavigationNewItem_fUP3wQTQ_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcAppNavigationNewItem_fUP3wQTQ_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcAppNavigationNewItem_fUP3wQTQ_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcAppNavigationNewItem_fUP3wQTQ_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationSettings-vd47rlNY.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationSettings-vd47rlNY.css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcAppNavigationSettings_vd47rlNY_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcAppNavigationSettings-vd47rlNY.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationSettings-vd47rlNY.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcAppNavigationSettings_vd47rlNY_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcAppNavigationSettings_vd47rlNY_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcAppNavigationSettings_vd47rlNY_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcAppNavigationSettings_vd47rlNY_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcCollectionList-yjTCAR46.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcCollectionList-yjTCAR46.css ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcCollectionList_yjTCAR46_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcCollectionList-yjTCAR46.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcCollectionList-yjTCAR46.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcCollectionList_yjTCAR46_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcCollectionList_yjTCAR46_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcCollectionList_yjTCAR46_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcCollectionList_yjTCAR46_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcGuestContent-B0ivUQHg.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcGuestContent-B0ivUQHg.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcGuestContent_B0ivUQHg_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcGuestContent-B0ivUQHg.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcGuestContent-B0ivUQHg.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcGuestContent_B0ivUQHg_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcGuestContent_B0ivUQHg_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcGuestContent_B0ivUQHg_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcGuestContent_B0ivUQHg_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcHeaderButton-BPkJ5wxD.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcHeaderButton-BPkJ5wxD.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcHeaderButton_BPkJ5wxD_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcHeaderButton-BPkJ5wxD.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcHeaderButton-BPkJ5wxD.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcHeaderButton_BPkJ5wxD_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcHeaderButton_BPkJ5wxD_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcHeaderButton_BPkJ5wxD_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcHeaderButton_BPkJ5wxD_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcRelatedResourcesPanel-DSf7TVcC.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcRelatedResourcesPanel-DSf7TVcC.css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcRelatedResourcesPanel_DSf7TVcC_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcRelatedResourcesPanel-DSf7TVcC.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcRelatedResourcesPanel-DSf7TVcC.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcRelatedResourcesPanel_DSf7TVcC_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcRelatedResourcesPanel_DSf7TVcC_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcRelatedResourcesPanel_DSf7TVcC_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcRelatedResourcesPanel_DSf7TVcC_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/assets/NcSettingsInputText-Bsp_6DjJ.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/assets/NcSettingsInputText-Bsp_6DjJ.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_NcSettingsInputText_Bsp_6DjJ_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./NcSettingsInputText-Bsp_6DjJ.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcSettingsInputText-Bsp_6DjJ.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_NcSettingsInputText_Bsp_6DjJ_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_NcSettingsInputText_Bsp_6DjJ_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_NcSettingsInputText_Bsp_6DjJ_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_NcSettingsInputText_Bsp_6DjJ_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcActionButtonGroup-3v-qy9C0.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcActionButtonGroup-3v-qy9C0.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcActionButtonGroup)
/* harmony export */ });
/* harmony import */ var _assets_NcActionButtonGroup_BND4GQdv_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionButtonGroup-BND4GQdv.css */ "./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-BND4GQdv.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenRandomId-CMooMQt0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_l10n-DDKxBWQL.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_l10n-DDKxBWQL.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");





(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__.r)();
const _sfc_main = (0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  name: "NcActionButtonGroup",
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  props: {
    /**
     * Optional text shown below the button group
     */
    name: {
      required: false,
      default: void 0,
      type: String
    }
  },
  setup() {
    return {
      labelId: `nc-action-button-group-${(0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_1__.G)()}`
    };
  },
  methods: {
    t: _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__.a
  }
});
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("li", { staticClass: "nc-button-group-base", attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_vm.name ? _c("div", { attrs: { "id": _vm.labelId } }, [_vm._v(" " + _vm._s(_vm.name) + " ")]) : _vm._e(), _c("ul", { staticClass: "nc-button-group-content", attrs: { "role": "group", "aria-labelledby": _vm.name ? _vm.labelId : void 0 } }, [_vm._t("default")], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const NcActionButtonGroup = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcActionRadio-CCTupqRR.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcActionRadio-CCTupqRR.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcActionRadio)
/* harmony export */ });
/* harmony import */ var _assets_NcActionRadio_C87waXE_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionRadio-C87waXE-.css */ "./node_modules/@nextcloud/vue/dist/assets/NcActionRadio-C87waXE-.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _useModelMigration_EhAWvqDD_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useModelMigration-EhAWvqDD.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/useModelMigration-EhAWvqDD.mjs");
/* harmony import */ var _actionGlobal_DqVa7c7G_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionGlobal-DqVa7c7G.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/actionGlobal-DqVa7c7G.mjs");
/* harmony import */ var _GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenRandomId-CMooMQt0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");






const _sfc_main = {
  name: "NcActionRadio",
  mixins: [_actionGlobal_DqVa7c7G_mjs__WEBPACK_IMPORTED_MODULE_2__.A],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * id attribute of the radio element
     */
    id: {
      type: String,
      default: () => "action-" + (0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_3__.G)(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    checked: {
      type: Boolean,
      default: void 0
    },
    /**
     * Checked state of the radio element
     * Boolean type removed in v9 - use String | Number instead
     */
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    /**
     * Define if this radio is part of a set.
     * Checking the radio will disable all the
     * others with the same name.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * value of the radio input
     */
    value: {
      type: [String, Number],
      default: ""
    },
    /**
     * disabled state of the radio element
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:checked",
    /**
     * The radio state is changed
     * @type {boolean}
     */
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value",
    "change"
  ],
  setup(props) {
    if (typeof props.modelValue === "boolean") {
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].util.warn("[NcActionRadio] Boolean type of `modelValue` is deprecated and will be removed in next versions");
    }
    const model = (0,_useModelMigration_EhAWvqDD_mjs__WEBPACK_IMPORTED_MODULE_1__.u)("checked", "update:checked");
    return {
      model
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * aria-checked attribute for role="menuitemcheckbox"
     *
     * @return {'true'|'false'|undefined} aria-checked value if needed
     */
    ariaChecked() {
      if (this.isInSemanticMenu) {
        return this.model ? "true" : "false";
      }
      return void 0;
    }
  },
  methods: {
    toggleInput(event) {
      this.$refs.label.click();
    },
    onChange(event) {
      this.$emit("change", event);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled }, attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("span", { staticClass: "action-radio", attrs: { "role": "menuitemradio", "aria-checked": _vm.ariaChecked } }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], staticClass: "radio action-radio__radio", class: { focusable: _vm.isFocusable }, attrs: { "id": _vm.id, "disabled": _vm.disabled, "name": _vm.name, "type": "radio" }, domProps: { "value": _vm.value, "checked": _vm._q(_vm.model, _vm.value) }, on: { "keydown": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
    if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) return null;
    $event.preventDefault();
    return _vm.toggleInput.apply(null, arguments);
  }, "change": [function($event) {
    _vm.model = _vm.value;
  }, _vm.onChange] } }), _c("label", { ref: "label", staticClass: "action-radio__label", attrs: { "for": _vm.id } }, [_vm._v(_vm._s(_vm.text))]), _vm._e()], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "8ddd08c0"
);
const NcActionRadio = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcActionTextEditable-JRD-G0CT.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcActionTextEditable-JRD-G0CT.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcActionTextEditable)
/* harmony export */ });
/* harmony import */ var _assets_NcActionTextEditable_1TXeJ5zp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionTextEditable-1TXeJ5zp.css */ "./node_modules/@nextcloud/vue/dist/assets/NcActionTextEditable-1TXeJ5zp.css");
/* harmony import */ var _useModelMigration_EhAWvqDD_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useModelMigration-EhAWvqDD.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/useModelMigration-EhAWvqDD.mjs");
/* harmony import */ var _actionText_fFcUPi2g_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionText-fFcUPi2g.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/actionText-fFcUPi2g.mjs");
/* harmony import */ var _GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenRandomId-CMooMQt0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _ArrowLeft_DuT2LZOm_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowLeft-DuT2LZOm.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/ArrowLeft-DuT2LZOm.mjs");
/* harmony import */ var _ArrowRight_CY2b9hgN_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowRight-CY2b9hgN.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/ArrowRight-CY2b9hgN.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");








const _sfc_main = {
  name: "NcActionTextEditable",
  components: {
    ArrowLeft: _ArrowLeft_DuT2LZOm_mjs__WEBPACK_IMPORTED_MODULE_4__.A,
    ArrowRight: _ArrowRight_CY2b9hgN_mjs__WEBPACK_IMPORTED_MODULE_5__.A
  },
  mixins: [_actionText_fFcUPi2g_mjs__WEBPACK_IMPORTED_MODULE_2__.A],
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * id attribute of the checkbox element
     */
    id: {
      type: String,
      default: () => "action-" + (0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_3__.G)(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * disabled state of the text area
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    value: {
      type: String,
      default: void 0
    },
    /**
     * value attribute of the input field
     */
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: [
    "input",
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:value",
    /**
     * Emitted when the inputs value changes
     *
     * @type {string|Date}
     */
    "update:modelValue",
    /** Same as `update:modelValue` but with a different event name */
    "update:model-value",
    "submit"
  ],
  setup() {
    const model = (0,_useModelMigration_EhAWvqDD_mjs__WEBPACK_IMPORTED_MODULE_1__.u)("value", "update:value");
    return {
      model,
      isRTL: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.isRTL)()
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    computedId() {
      return (0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_3__.G)();
    }
  },
  methods: {
    onInput(event) {
      this.$emit("input", event);
      this.model = event.target.value;
    },
    onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.disabled) {
        this.$emit("submit", event);
      } else {
        return false;
      }
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled } }, [_c("span", { staticClass: "action-text-editable", on: { "click": _vm.onClick } }, [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-text-editable__icon", class: [_vm.isIconUrl ? "action-text-editable__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null } })];
  }), _c("form", { ref: "form", staticClass: "action-text-editable__form", attrs: { "disabled": _vm.disabled }, on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.onSubmit.apply(null, arguments);
  } } }, [_c("input", { staticClass: "action-text-editable__submit", attrs: { "id": _vm.id, "type": "submit" } }), _vm.name ? _c("label", { staticClass: "action-text-editable__name", attrs: { "for": _vm.computedId } }, [_vm._v(" " + _vm._s(_vm.name) + " ")]) : _vm._e(), _c("textarea", _vm._b({ class: ["action-text-editable__textarea", { focusable: _vm.isFocusable }], attrs: { "id": _vm.computedId, "disabled": _vm.disabled }, domProps: { "value": _vm.model }, on: { "input": _vm.onInput } }, "textarea", _vm.$attrs, false)), _c("label", { directives: [{ name: "show", rawName: "v-show", value: !_vm.disabled, expression: "!disabled" }], staticClass: "action-text-editable__label", attrs: { "for": _vm.id } }, [_vm.isRTL ? _c("ArrowLeft", { attrs: { "size": 20 } }) : _c("ArrowRight", { attrs: { "size": 20 } })], 1)])], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "35e22bd7"
);
const NcActionTextEditable = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationCaption-B3w692fN.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationCaption-B3w692fN.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcAppNavigationCaption)
/* harmony export */ });
/* harmony import */ var _assets_NcAppNavigationCaption_DU9PxTvu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcAppNavigationCaption-DU9PxTvu.css */ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationCaption-DU9PxTvu.css");
/* harmony import */ var _NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NcActions-D3hGxwlc.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActions-D3hGxwlc.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");



const _sfc_main = {
  name: "NcAppNavigationCaption",
  components: {
    NcActions: _NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_1__.N
  },
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    /**
     * `id` to set on the inner caption
     * Can be used for connecting the `NcActionCaption` with `NcActionList` using `aria-labelledby`.
     */
    headingId: {
      type: String,
      default: null
    },
    /**
     * Enable when used as a heading
     * e.g. Before NcAppNavigationList
     */
    isHeading: {
      type: Boolean,
      default: false
    },
    /**
     * If `isHeading` is set, this defines the heading level that should be used
     */
    headingLevel: {
      type: Number,
      default: 2
    },
    /**
     * Any [NcActions](#/Components/NcActions?id=ncactions-1) prop
     */
    // Not an actual prop but needed to show in vue-styleguidist docs
    // eslint-disable-next-line
    " ": {}
  },
  computed: {
    wrapperTag() {
      return this.isHeading ? "div" : "li";
    },
    captionTag() {
      const headingLevel = Math.max(2, this.headingLevel);
      return this.isHeading ? `h${headingLevel}` : "span";
    },
    // Check if the actions slot is populated
    hasActions() {
      return !!this.$slots.actions;
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c(_vm.wrapperTag, { tag: "component", staticClass: "app-navigation-caption", class: { "app-navigation-caption--heading": _vm.isHeading } }, [_c(_vm.captionTag, { tag: "component", staticClass: "app-navigation-caption__name", attrs: { "id": _vm.headingId } }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _vm.hasActions ? _c("div", { staticClass: "app-navigation-caption__actions" }, [_c("NcActions", _vm._g(_vm._b({ scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("actionsTriggerIcon")];
  }, proxy: true }], null, true) }, "NcActions", _vm.$attrs, false), _vm.$listeners), [_vm._t("actions")], 2)], 1) : _vm._e()], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "1133b4da"
);
const NcAppNavigationCaption = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationNewItem-BvQaVuL6.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationNewItem-BvQaVuL6.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcAppNavigationNewItem)
/* harmony export */ });
/* harmony import */ var _assets_NcAppNavigationNewItem_fUP3wQTQ_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcAppNavigationNewItem-fUP3wQTQ.css */ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNewItem-fUP3wQTQ.css");
/* harmony import */ var _NcInputConfirmCancel_C7a7Nha7_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NcInputConfirmCancel-C7a7Nha7.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel-C7a7Nha7.mjs");
/* harmony import */ var _Components_NcLoadingIcon_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NcLoadingIcon.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");




const _sfc_main = {
  name: "NcAppNavigationNewItem",
  components: {
    NcInputConfirmCancel: _NcInputConfirmCancel_C7a7Nha7_mjs__WEBPACK_IMPORTED_MODULE_1__.N,
    NcLoadingIcon: _Components_NcLoadingIcon_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    /**
     * The name of the element.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Refers to the icon on the left, this prop accepts a class
     * like 'icon-category-enabled'.
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Displays a loading animated icon on the left of the element
     * instead of the icon.
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Only for 'editable' items, sets label for the edit action button.
     */
    editLabel: {
      type: String,
      default: ""
    },
    /**
     * Sets the placeholder text for the editing form.
     */
    editPlaceholder: {
      type: String,
      default: ""
    }
  },
  emits: ["new-item"],
  data() {
    return {
      newItemValue: "",
      newItemActive: false
    };
  },
  methods: {
    handleNewItem() {
      if (!this.loading) {
        this.newItemActive = true;
        this.$nextTick(() => {
          this.$refs.newItemInput.focusInput();
        });
      }
    },
    cancelNewItem() {
      this.newItemActive = false;
    },
    handleNewItemDone() {
      this.$emit("new-item", this.newItemValue);
      this.newItemValue = "";
      this.newItemActive = false;
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "app-navigation-entry", class: {
    "app-navigation-entry--newItemActive": _vm.newItemActive
  } }, [_c("button", { staticClass: "app-navigation-entry-button", on: { "click": _vm.handleNewItem } }, [_c("span", { staticClass: "app-navigation-entry-icon", class: { [_vm.icon]: !_vm.loading } }, [_vm.loading ? _c("NcLoadingIcon") : _vm._t("icon")], 2), !_vm.newItemActive ? _c("span", { staticClass: "app-navigation-new-item__name", attrs: { "title": _vm.name } }, [_vm._v(" " + _vm._s(_vm.name) + " ")]) : _vm._e(), _vm.newItemActive ? _c("span", { staticClass: "newItemContainer" }, [_c("NcInputConfirmCancel", { ref: "newItemInput", attrs: { "placeholder": _vm.editPlaceholder !== "" ? _vm.editPlaceholder : _vm.name }, on: { "cancel": _vm.cancelNewItem, "confirm": _vm.handleNewItemDone }, model: { value: _vm.newItemValue, callback: function($$v) {
    _vm.newItemValue = $$v;
  }, expression: "newItemValue" } })], 1) : _vm._e()])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "46fee9ac"
);
const NcAppNavigationNewItem = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationSettings-CZFm1d-N.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationSettings-CZFm1d-N.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcAppNavigationSettings)
/* harmony export */ });
/* harmony import */ var _assets_NcMentionBubble_BL05HUeF_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcMentionBubble-BL05HUeF.css */ "./node_modules/@nextcloud/vue/dist/assets/NcMentionBubble-BL05HUeF.css");
/* harmony import */ var _assets_NcAppNavigationSettings_vd47rlNY_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/NcAppNavigationSettings-vd47rlNY.css */ "./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationSettings-vd47rlNY.css");
/* harmony import */ var _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_l10n-DDKxBWQL.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_l10n-DDKxBWQL.mjs");
/* harmony import */ var _Mixins_clickOutsideOptions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mixins/clickOutsideOptions.mjs */ "./node_modules/@nextcloud/vue/dist/Mixins/clickOutsideOptions.mjs");
/* harmony import */ var _Composables_useIsFullscreen_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Composables/useIsFullscreen.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsFullscreen.mjs");
/* harmony import */ var _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Composables/useIsMobile.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsMobile.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! striptags */ "./node_modules/striptags/src/striptags.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/capabilities */ "./node_modules/@nextcloud/capabilities/dist/index.mjs");
/* harmony import */ var _vueuse_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vueuse/components */ "./node_modules/@vueuse/components/index.mjs");







/* empty css                                                                          */








(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__.v);
const _sfc_main$1 = {
  name: "CogIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon cog-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null
);
const Cog = __component__$1.exports;
const _sfc_main = {
  directives: {
    ClickOutside: _vueuse_components__WEBPACK_IMPORTED_MODULE_13__.vOnClickOutside
  },
  components: {
    Cog
  },
  mixins: [
    _Mixins_clickOutsideOptions_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
  ],
  props: {
    name: {
      type: String,
      required: false,
      default: (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Settings")
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    clickOutsideConfig() {
      return [
        this.closeMenu,
        this.clickOutsideOptions
      ];
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    },
    closeMenu() {
      this.open = false;
    }
  }
};
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { directives: [{ name: "click-outside", rawName: "v-click-outside", value: _vm.clickOutsideConfig, expression: "clickOutsideConfig" }], class: { open: _vm.open }, attrs: { "id": "app-settings" } }, [_c("div", { attrs: { "id": "app-settings__header" } }, [_c("button", { staticClass: "settings-button", attrs: { "type": "button", "aria-expanded": _vm.open ? "true" : "false", "aria-controls": "app-settings__content" }, on: { "click": _vm.toggleMenu } }, [_c("Cog", { staticClass: "settings-button__icon", attrs: { "size": 20 } }), _c("span", { staticClass: "settings-button__label" }, [_vm._v(_vm._s(_vm.name))])], 1)]), _c("Transition", { attrs: { "name": "slide-up" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.open, expression: "open" }], attrs: { "id": "app-settings__content" } }, [_vm._t("default")], 2)])], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "d278a327"
);
const NcAppNavigationSettings = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcCollectionList-BNxu1MWE.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcCollectionList-BNxu1MWE.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcCollectionList)
/* harmony export */ });
/* harmony import */ var _assets_NcCollectionList_yjTCAR46_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcCollectionList-yjTCAR46.css */ "./node_modules/@nextcloud/vue/dist/assets/NcCollectionList-yjTCAR46.css");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_l10n-DDKxBWQL.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_l10n-DDKxBWQL.mjs");
/* harmony import */ var _NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NcAvatar-BjwyJw34.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAvatar-BjwyJw34.mjs");
/* harmony import */ var _NcSelect_BQ_NFBXI_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NcSelect-BQ-NFBXI.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSelect-BQ-NFBXI.mjs");
/* harmony import */ var _autolink_cbuFALXr_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autolink-cbuFALXr.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/autolink-cbuFALXr.mjs");
/* harmony import */ var _NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NcActions-D3hGxwlc.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActions-D3hGxwlc.mjs");
/* harmony import */ var _NcActionButton_CEysTg4c_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NcActionButton-CEysTg4c.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionButton-CEysTg4c.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");












(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.I);
(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.J);
const _sfc_main$1 = {
  name: "NcCollectionListItem",
  components: {
    NcAvatar: _NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_2__.N,
    NcActions: _NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_5__.N,
    NcActionButton: _NcActionButton_CEysTg4c_mjs__WEBPACK_IMPORTED_MODULE_6__.N
  },
  props: {
    collection: {
      type: Object,
      default: null
    },
    error: {
      type: String,
      default: void 0
    }
  },
  emits: ["remove-resource", "rename-collection"],
  data() {
    return {
      detailsOpen: false,
      newName: null
    };
  },
  computed: {
    getIcon() {
      return (resource) => [resource.iconClass];
    },
    typeClass() {
      return (resource) => "resource-type-" + resource.type;
    },
    resources() {
      return this.collection.resources?.filter((resource) => !Array.isArray(resource)) ?? [];
    },
    getComponent() {
      return (resource) => {
        const route = (0,_autolink_cbuFALXr_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(this.$router, resource.link);
        return route ? { component: "router-link", to: route, href: void 0 } : { component: "a", to: void 0, href: resource.link };
      };
    },
    iconUrl() {
      return (resource) => {
        if (resource.mimetype) {
          return OC.MimeType.getIconUrl(resource.mimetype);
        }
        if (resource.iconUrl) {
          return resource.iconUrl;
        }
        return "";
      };
    }
  },
  methods: {
    t: _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a,
    toggleDetails() {
      this.detailsOpen = !this.detailsOpen;
    },
    showDetails() {
      this.detailsOpen = true;
    },
    removeResource(collection, resource) {
      this.$emit("remove-resource", {
        collectionId: collection.id,
        resourceType: resource.type,
        resourceId: resource.id
      });
    },
    openRename() {
      this.newName = this.collection.name;
    },
    renameCollection() {
      if (this.newName) {
        this.$emit("rename-collection", {
          collectionId: this.collection.id,
          name: this.newName
        });
      }
      this.newName = null;
    }
  }
};
var _sfc_render$1 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "collection-list-item" }, [_c("NcAvatar", { staticClass: "collection-avatar", attrs: { "display-name": _vm.collection.name, "allow-placeholder": "" } }), _vm.newName === null ? _c("span", { staticClass: "collection-item-name", attrs: { "title": "" }, on: { "click": _vm.showDetails } }, [_vm._v(_vm._s(_vm.collection.name))]) : _c("form", { class: { "should-shake": _vm.error }, on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.renameCollection.apply(null, arguments);
  } } }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.newName, expression: "newName" }], attrs: { "type": "text", "autocomplete": "off", "autocapitalize": "off" }, domProps: { "value": _vm.newName }, on: { "input": function($event) {
    if ($event.target.composing) return;
    _vm.newName = $event.target.value;
  } } }), _c("input", { staticClass: "icon-confirm", attrs: { "type": "submit", "value": "" } })]), !_vm.detailsOpen && _vm.newName === null ? _c("div", { staticClass: "linked-icons" }, _vm._l(_vm.resources.slice(0, 2), function(resource) {
    return _c(_vm.getComponent(resource).component, { key: resource.type + "|" + resource.id, tag: "component", class: _vm.typeClass(resource), attrs: { "title": resource.name, "to": _vm.getComponent(resource).to, "href": _vm.getComponent(resource).href } }, [_c("img", { attrs: { "src": _vm.iconUrl(resource), "alt": resource.name } })]);
  }), 1) : _vm._e(), _vm.newName === null ? _c("span", { staticClass: "sharingOptionsGroup" }, [_c("NcActions", [_c("NcActionButton", { attrs: { "icon": "icon-info" }, on: { "click": function($event) {
    $event.preventDefault();
    return _vm.toggleDetails.apply(null, arguments);
  } } }, [_vm._v(" " + _vm._s(_vm.detailsOpen ? _vm.t("Hide details") : _vm.t("Show details")) + " ")]), _c("NcActionButton", { attrs: { "icon": "icon-rename" }, on: { "click": function($event) {
    $event.preventDefault();
    return _vm.openRename.apply(null, arguments);
  } } }, [_vm._v(" " + _vm._s(_vm.t("Rename project")) + " ")])], 1)], 1) : _vm._e(), _c("transition", { attrs: { "name": "fade" } }, [_vm.error ? _c("div", { staticClass: "error" }, [_vm._v(" " + _vm._s(_vm.error) + " ")]) : _vm._e()]), _c("transition", { attrs: { "name": "fade" } }, [_vm.detailsOpen ? _c("ul", { staticClass: "resource-list-details" }, _vm._l(_vm.resources, function(resource) {
    return _c("li", { key: resource.type + "|" + resource.id, class: _vm.typeClass(resource) }, [_c(_vm.getComponent(resource).component, { tag: "component", attrs: { "to": _vm.getComponent(resource).to, "href": _vm.getComponent(resource).href } }, [_c("img", { attrs: { "src": _vm.iconUrl(resource), "alt": resource.name } }), _c("span", { staticClass: "resource-name" }, [_vm._v(_vm._s(resource.name || ""))])]), _c("span", { staticClass: "icon-close", on: { "click": function($event) {
      return _vm.removeResource(_vm.collection, resource);
    } } })], 1);
  }), 0) : _vm._e()])], 1);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  "878b819f"
);
const NcCollectionListItem = __component__$1.exports;
function extractOcsData(response) {
  return response.data.ocs.data;
}
function renameCollectionService(collectionId, collectionName) {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateOcsUrl)("collaboration/resources/collections/{collectionId}", { collectionId }), { collectionName }).then(extractOcsData);
}
function getCollectionsByResourceService(resourceType, resourceId) {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateOcsUrl)("collaboration/resources/{resourceType}/{resourceId}", { resourceType, resourceId })).then(extractOcsData);
}
function createCollectionService(resourceType, resourceId, name) {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateOcsUrl)("collaboration/resources/{resourceType}/{resourceId}", { resourceType, resourceId }), { name }).then(extractOcsData);
}
function addResourceService(collectionId, resourceType, resourceId) {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateOcsUrl)("collaboration/resources/collections/{collectionId}", { collectionId }), { resourceType, resourceId }).then(extractOcsData);
}
function removeResourceService(collectionId, resourceType, resourceId) {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__["default"].delete((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateOcsUrl)("collaboration/resources/collections/{collectionId}", { collectionId }), { params: { resourceType, resourceId } }).then(extractOcsData);
}
function searchService(query) {
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateOcsUrl)("collaboration/resources/collections/search/{query}", { query })).then(extractOcsData);
}
function useCollections() {
  const storedCollections = (0,vue__WEBPACK_IMPORTED_MODULE_10__.ref)([]);
  const addCollections = (collections) => {
    (0,vue__WEBPACK_IMPORTED_MODULE_10__.set)(storedCollections, "value", collections);
  };
  const addCollection = (collection) => {
    (0,vue__WEBPACK_IMPORTED_MODULE_10__.set)(storedCollections, "value", [...storedCollections.value, collection]);
  };
  const removeCollection = (collectionId) => {
    (0,vue__WEBPACK_IMPORTED_MODULE_10__.set)(storedCollections, "value", storedCollections.value.filter((item) => item.id !== collectionId));
  };
  const updateCollection = (collection) => {
    const index = storedCollections.value.findIndex((item) => item.id === collection.id);
    if (index !== -1) {
      (0,vue__WEBPACK_IMPORTED_MODULE_10__.set)(storedCollections.value, index, collection);
    } else {
      addCollection(collection);
    }
  };
  const fetchCollectionsByResource = async ({ resourceType, resourceId }) => {
    const collections = await getCollectionsByResourceService(resourceType, resourceId);
    addCollections(collections);
  };
  const createCollection = async ({ baseResourceType, baseResourceId, resourceType, resourceId, name }) => {
    const collection = await createCollectionService(baseResourceType, baseResourceId, name);
    addCollection(collection);
    await addResourceToCollection({
      collectionId: collection.id,
      resourceType,
      resourceId
    });
  };
  const renameCollection = async ({ collectionId, name }) => {
    const collection = await renameCollectionService(collectionId, name);
    updateCollection(collection);
  };
  const addResourceToCollection = async ({ collectionId, resourceType, resourceId }) => {
    const collection = await addResourceService(collectionId, resourceType, String(resourceId));
    updateCollection(collection);
  };
  const removeResourceFromCollection = async ({ collectionId, resourceType, resourceId }) => {
    const collection = await removeResourceService(collectionId, resourceType, String(resourceId));
    if (collection.resources.length > 0) {
      updateCollection(collection);
    } else {
      removeCollection(collectionId);
    }
  };
  return {
    storedCollections,
    fetchCollectionsByResource,
    createCollection,
    renameCollection,
    addResourceToCollection,
    removeResourceFromCollection
  };
}
const METHOD_CREATE_COLLECTION = 0;
const METHOD_ADD_TO_COLLECTION = 1;
const _sfc_main = {
  name: "NcCollectionList",
  components: {
    NcCollectionListItem,
    NcAvatar: _NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_2__.N,
    NcSelect: _NcSelect_BQ_NFBXI_mjs__WEBPACK_IMPORTED_MODULE_3__.N
  },
  props: {
    /**
     * Resource type identifier
     */
    type: {
      type: String,
      default: null
    },
    /**
     * Unique id of the resource
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Name of the resource
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Whether the component is active (to start fetch resources)
     */
    isActive: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const {
      storedCollections,
      fetchCollectionsByResource,
      createCollection,
      addResourceToCollection,
      removeResourceFromCollection,
      renameCollection
    } = useCollections();
    const searchCollections = (0,vue__WEBPACK_IMPORTED_MODULE_10__.ref)([]);
    const search = debounce__WEBPACK_IMPORTED_MODULE_11__(function(query, loading) {
      if (query !== "") {
        loading(true);
        searchService(query).then((collections) => {
          searchCollections.value = collections;
        }).catch((e) => {
          console.error("Failed to search for collections", e);
        }).finally(() => {
          loading(false);
        });
      }
    }, 500);
    return {
      storedCollections,
      fetchCollectionsByResource,
      createCollection,
      addResourceToCollection,
      removeResourceFromCollection,
      renameCollection,
      searchCollections,
      search
    };
  },
  data() {
    return {
      selectIsOpen: false,
      generatingCodes: false,
      codes: void 0,
      value: null,
      model: {},
      collectionsError: {},
      error: null,
      isSelectOpen: false
    };
  },
  computed: {
    collections() {
      return this.storedCollections.filter(
        (collection) => collection.resources.some((resource) => resource && resource.id === String(this.id) && resource.type === this.type)
      );
    },
    placeholder() {
      return this.isSelectOpen ? (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Type to search for existing projects") : (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Add to a project");
    },
    options() {
      const options = [];
      window.OCP.Collaboration.getTypes().sort().forEach((type) => {
        options.push({
          method: METHOD_CREATE_COLLECTION,
          type,
          title: window.OCP.Collaboration.getLabel(type),
          class: window.OCP.Collaboration.getIcon(type),
          action: () => window.OCP.Collaboration.trigger(type)
        });
      });
      for (const index in this.searchCollections) {
        if (!this.collections.find((collection) => collection.id === this.searchCollections[index].id)) {
          options.push({
            method: METHOD_ADD_TO_COLLECTION,
            title: this.searchCollections[index].name,
            collectionId: this.searchCollections[index].id
          });
        }
      }
      return options;
    },
    resourceIdentifier() {
      return {
        resourceType: this.type,
        resourceId: this.id,
        isActive: this.isActive
      };
    }
  },
  watch: {
    resourceIdentifier: {
      deep: true,
      immediate: true,
      handler(resourceIdentifier) {
        if (!resourceIdentifier.isActive || !resourceIdentifier.resourceId || !resourceIdentifier.resourceType) {
          return;
        }
        this.fetchCollectionsByResource(resourceIdentifier);
      }
    }
  },
  methods: {
    t: _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a,
    select(selectedOption) {
      if (selectedOption.method === METHOD_CREATE_COLLECTION) {
        selectedOption.action().then((resourceId) => {
          this.createCollection({
            baseResourceType: this.type,
            baseResourceId: this.id,
            resourceType: selectedOption.type,
            resourceId,
            name: this.name
          }).catch((e) => {
            this.setError((0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Failed to create a project"), e);
          });
        }).catch((e) => {
          console.error("No resource selected", e);
        });
      }
      if (selectedOption.method === METHOD_ADD_TO_COLLECTION) {
        this.addResourceToCollection({
          collectionId: selectedOption.collectionId,
          resourceType: this.type,
          resourceId: this.id
        }).catch((e) => {
          this.setError((0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Failed to add the item to the project"), e);
        });
      }
      this.value = null;
    },
    showSelect() {
      this.selectIsOpen = true;
      this.$refs.select.$el.focus();
    },
    setError(error, e) {
      console.error(error, e);
      this.error = error;
      setTimeout(() => {
        this.error = null;
      }, 5e3);
    },
    renameCollectionFromItem({ collectionId, name }) {
      this.renameCollection({ collectionId, name }).catch((e) => {
        console.error((0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Failed to rename the project"), e);
        this.collectionsError[collectionId] = (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Failed to rename the project");
        setTimeout(() => {
          this.collectionsError[collectionId] = null;
        }, 5e3);
      });
    }
  }
};
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _vm.collections && _vm.type && _vm.id ? _c("ul", { staticClass: "collection-list", attrs: { "id": "collection-list" } }, [_c("li", { on: { "click": _vm.showSelect } }, [_vm._m(0), _c("div", { attrs: { "id": "collection-select-container" } }, [_c("NcSelect", { ref: "select", attrs: { "aria-label-combobox": _vm.t("Add to a project"), "options": _vm.options, "placeholder": _vm.placeholder, "label": "title", "limit": 5 }, on: { "close": function($event) {
    _vm.isSelectOpen = false;
  }, "open": function($event) {
    _vm.isSelectOpen = true;
  }, "option:selected": _vm.select, "search": _vm.search }, scopedSlots: _vm._u([{ key: "selected-option", fn: function(option) {
    return [_c("span", { staticClass: "option__desc" }, [_c("span", { staticClass: "option__title" }, [_vm._v(_vm._s(option.title))])])];
  } }, { key: "option", fn: function(option) {
    return [_c("span", { staticClass: "option__wrapper" }, [option.class ? _c("span", { staticClass: "avatar", class: option.class }) : option.method !== 2 ? _c("NcAvatar", { attrs: { "allow-placeholder": "", "display-name": option.title } }) : _vm._e(), _c("span", { staticClass: "option__title" }, [_vm._v(_vm._s(option.title))])], 1)];
  } }], null, false, 2397208459), model: { value: _vm.value, callback: function($$v) {
    _vm.value = $$v;
  }, expression: "value" } }, [_c("p", { staticClass: "hint" }, [_vm._v(" " + _vm._s(_vm.t("Connect items to a project to make them easier to find")) + " ")])])], 1)]), _c("transition", { attrs: { "name": "fade" } }, [_vm.error ? _c("li", { staticClass: "error" }, [_vm._v(" " + _vm._s(_vm.error) + " ")]) : _vm._e()]), _vm._l(_vm.collections, function(collection) {
    return _c("NcCollectionListItem", { key: collection.id, attrs: { "collection": collection, "error": _vm.collectionsError[collection.id] }, on: { "rename-collection": _vm.renameCollectionFromItem, "remove-resource": _vm.removeResourceFromCollection } });
  })], 2) : _vm._e();
};
var _sfc_staticRenderFns = [function() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "avatar" }, [_c("span", { staticClass: "icon-projects" })]);
}];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_7__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "efe8beb8"
);
const NcCollectionList = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcRelatedResourcesPanel-C6JIVMvN.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcRelatedResourcesPanel-C6JIVMvN.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcRelatedResourcesPanel)
/* harmony export */ });
/* harmony import */ var _assets_NcRelatedResourcesPanel_DSf7TVcC_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcRelatedResourcesPanel-DSf7TVcC.css */ "./node_modules/@nextcloud/vue/dist/assets/NcRelatedResourcesPanel-DSf7TVcC.css");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/capabilities */ "./node_modules/@nextcloud/capabilities/dist/index.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");
/* harmony import */ var _ChevronDown_DFQfzh63_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChevronDown-DFQfzh63.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/ChevronDown-DFQfzh63.mjs");
/* harmony import */ var _ChevronUp_C7Dy9Bph_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChevronUp-C7Dy9Bph.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/ChevronUp-C7Dy9Bph.mjs");
/* harmony import */ var _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/NcButton.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _NcIconSvgWrapper_CHmdAuhg_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NcIconSvgWrapper-CHmdAuhg.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcIconSvgWrapper-CHmdAuhg.mjs");
/* harmony import */ var _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_l10n-DDKxBWQL.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_l10n-DDKxBWQL.mjs");
/* harmony import */ var _autolink_cbuFALXr_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./autolink-cbuFALXr.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/autolink-cbuFALXr.mjs");











const _sfc_main$4 = {
  name: "AccountGroupIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$4 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-group-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  null
);
const AccountGroup = __component__$4.exports;
const _sfc_main$3 = {
  name: "OpenInNewIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$3 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon open-in-new-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const OpenInNew = __component__$3.exports;
(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.P);
const teamResourceProviders = (0,_nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_3__.getCapabilities)()?.circles?.teamResourceProviders ?? [];
const _sfc_main$2 = {
  name: "NcTeamResources",
  components: {
    AccountGroup,
    ChevronDown: _ChevronDown_DFQfzh63_mjs__WEBPACK_IMPORTED_MODULE_5__.C,
    ChevronUp: _ChevronUp_C7Dy9Bph_mjs__WEBPACK_IMPORTED_MODULE_6__.C,
    OpenInNew,
    NcButton: _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcIconSvgWrapper: _NcIconSvgWrapper_CHmdAuhg_mjs__WEBPACK_IMPORTED_MODULE_8__.N
  },
  props: {
    providerId: {
      type: String,
      default: null
    },
    itemId: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      appEnabled: OC?.appswebroots?.circles !== void 0 && (OC.config.version.split(".")[0] ?? 0) >= 29,
      loading: false,
      teamResources: null,
      teamOpen: []
    };
  },
  computed: {
    isVisible() {
      return !this.loading && this.teamResources?.length > 0;
    },
    teamProviders() {
      return (teamId) => {
        const team = this.teamResources.find((t2) => t2.teamId === teamId);
        return team.resources?.reduce((acc, resource) => {
          if (resource.provider.id === this.providerId && resource.id === String(this.itemId)) {
            return acc;
          }
          if (!acc[resource.provider.id]) {
            acc[resource.provider.id] = resource.provider;
            acc[resource.provider.id].resources = [];
          }
          if (resource.provider.id === this.providerId && resource.id === String(this.itemId)) {
            return acc;
          }
          acc[resource.provider.id].resources.push(resource);
          return acc;
        }, {});
      };
    },
    open() {
      return (teamId) => {
        return this.teamOpen.indexOf(teamId) !== -1;
      };
    }
  },
  watch: {
    providerId() {
      this.fetchTeamResources();
    },
    itemId() {
      this.fetchTeamResources();
    }
  },
  created() {
    this.fetchTeamResources();
  },
  methods: {
    t: _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a,
    async fetchTeamResources() {
      if (!teamResourceProviders.includes(this.providerId)) {
        return;
      }
      try {
        this.loading = true;
        const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)(`/teams/resources/${this.providerId}/${this.itemId}`));
        this.teamResources = response.data.ocs.data.teams;
        this.teamOpen = [this.teamResources[0]?.teamId];
      } catch (e) {
        this.teamResources = null;
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    toggleOpen(teamId, open) {
      if (open) {
        this.teamOpen.push(teamId);
      } else {
        this.teamOpen.splice(this.teamOpen.indexOf(teamId), 1);
      }
    }
  }
};
var _sfc_render$2 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _vm.appEnabled && _vm.isVisible ? _c("div", { staticClass: "team-resources" }, [_c("h5", { staticClass: "team-resources__header" }, [_vm._v(" " + _vm._s(_vm.t("Related team resources")) + " ")]), _vm._l(_vm.teamResources, function(team) {
    return _c("details", { key: team.teamId, staticClass: "related-team", attrs: { "name": "Team resources", "open": _vm.open(team.teamId) }, on: { "toggle": (event) => _vm.toggleOpen(team.teamId, event.target.open) } }, [_c("summary", { staticClass: "related-team__header" }, [_c("h5", { staticClass: "related-team__name" }, [_c("AccountGroup", { attrs: { "size": 20 } }), _vm._v(" " + _vm._s(team.displayName) + " ")], 1), _c("NcButton", { attrs: { "type": "tertiary", "href": team.link, "aria-label": _vm.t("View team"), "title": _vm.t("View team") }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c("OpenInNew", { attrs: { "size": 20 } })];
    }, proxy: true }], null, true) }), _vm.open(team.teamId) ? _c("ChevronUp", { attrs: { "size": 20 } }) : _c("ChevronDown", { attrs: { "size": 20 } })], 1), _c("div", _vm._l(_vm.teamProviders(team.teamId), function(provider) {
      return _c("div", { key: provider.id, staticClass: "related-team-provider" }, [provider.resources.length > 0 ? _c("h6", [_vm._v(" " + _vm._s(provider.name) + " ")]) : _vm._e(), _c("ul", _vm._l(provider.resources, function(resource) {
        return _c("li", { key: resource.url, staticClass: "related-team-resource" }, [_c("a", { staticClass: "related-team-resource__link", attrs: { "href": resource.url } }, [resource.iconEmoji ? _c("span", { staticClass: "resource__icon" }, [_vm._v(" " + _vm._s(resource.iconEmoji) + " ")]) : resource.iconSvg ? _c("NcIconSvgWrapper", { staticClass: "resource__icon", attrs: { "svg": resource.iconSvg, "size": 20 } }) : resource.iconURL ? _c("span", { staticClass: "resource__icon" }, [_c("img", { attrs: { "src": resource.iconURL, "alt": "" } })]) : _vm._e(), _c("span", { staticClass: "resource__name" }, [_vm._v(" " + _vm._s(resource.label) + " ")])], 1)]);
      }), 0)]);
    }), 0)]);
  })], 2) : _vm._e();
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  "799fdf5d"
);
const NcTeamResources = __component__$2.exports;
(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.Q);
const _sfc_main$1 = {
  name: "NcResource",
  components: {
    NcButton: _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      labelTranslated: (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a)('Open link to "{resourceName}"', { resourceName: this.name })
    };
  },
  computed: {
    route() {
      return (0,_autolink_cbuFALXr_mjs__WEBPACK_IMPORTED_MODULE_10__.g)(this.$router, this.url);
    }
  },
  methods: {
    t: _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a
  }
};
var _sfc_render$1 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "resource" }, [_c("NcButton", { staticClass: "resource__button", attrs: { "aria-label": _vm.labelTranslated, "type": "tertiary", "to": _vm.route, "href": _vm.route ? null : _vm.url }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("div", { staticClass: "resource__icon" }, [_c("img", { attrs: { "src": _vm.icon } })])];
  }, proxy: true }]) }, [_vm._v(" " + _vm._s(_vm.name) + " ")])], 1);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  "ac1115a7"
);
const NcResource = __component__$1.exports;
(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.R);
const _sfc_main = {
  name: "NcRelatedResourcesPanel",
  components: {
    NcResource,
    NcTeamResources
  },
  props: {
    /**
     * The provider id implemented with `\OCA\RelatedResources\IRelatedResourceProvider::getProviderId()`
     */
    providerId: {
      type: String,
      default: null
    },
    /**
     * The item id which uniquely identities the e.g. Calendar event, Deck board, file, Talk room, etc.
     */
    itemId: {
      type: [String, Number],
      default: null
    },
    /**
     * Limits to specific resource type. i.e. any provider id implemented with `\OCA\RelatedResources\IRelatedResourceProvider::getProviderId()`
     */
    resourceType: {
      type: String,
      default: ""
    },
    /**
     * Set the maximum number of resources to load
     */
    limit: {
      type: Number,
      default: 0
    },
    /**
     * Only used by the files sidebar
     *
     * File info is passed when registered with `OCA.Sharing.ShareTabSections.registerSection()`
     */
    fileInfo: {
      type: Object,
      default: null
    },
    /**
     * Make the header name dynamic
     */
    header: {
      type: String,
      default: (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a)("Related resources")
    },
    description: {
      type: String,
      default: (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a)("Anything shared with the same group of people will show up here")
    },
    /**
     * If this element is used on a primary element set to true for primary styling.
     */
    primary: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "has-error",
    "has-resources"
  ],
  data() {
    return {
      appEnabled: OC?.appswebroots?.related_resources !== void 0,
      loading: false,
      error: null,
      resources: []
    };
  },
  computed: {
    isVisible() {
      if (this.loading) {
        return false;
      }
      return this.error ?? this.resources.length > 0;
    },
    subline() {
      if (this.error) {
        return (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a)("Error getting related resources. Please contact your system administrator if you have any questions.");
      }
      return this.description;
    },
    hasResourceInfo() {
      if (this.providerId !== null && this.itemId !== null) {
        return true;
      }
      if (this.fileInfo !== null) {
        return true;
      }
      return false;
    },
    isFiles() {
      return this.fileInfo?.id !== void 0;
    },
    url() {
      let providerId = null;
      let itemId = null;
      if (this.isFiles) {
        providerId = "files";
        itemId = this.fileInfo.id;
      } else {
        providerId = this.providerId;
        itemId = this.itemId;
      }
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)("/apps/related_resources/related/{providerId}?itemId={itemId}&resourceType={resourceType}&limit={limit}&format=json", {
        providerId,
        itemId,
        resourceType: this.resourceType,
        limit: this.limit
      });
    }
  },
  watch: {
    providerId() {
      this.fetchRelatedResources();
    },
    itemId() {
      this.fetchRelatedResources();
    },
    fileInfo() {
      this.fetchRelatedResources();
    },
    error(error) {
      this.$emit("has-error", Boolean(error));
    },
    resources(resources) {
      this.$emit("has-resources", resources.length > 0);
    }
  },
  created() {
    this.fetchRelatedResources();
  },
  methods: {
    t: _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_9__.a,
    async fetchRelatedResources() {
      if (!this.appEnabled || !this.hasResourceInfo) {
        return;
      }
      this.loading = true;
      this.error = null;
      this.resources = [];
      try {
        const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.url);
        this.resources = response.data.ocs?.data;
      } catch (e) {
        this.error = e;
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  }
};
var _sfc_render = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_c("NcTeamResources", { attrs: { "provider-id": _vm.providerId, "item-id": _vm.itemId } }), _vm.appEnabled && _vm.isVisible ? _c("div", { staticClass: "related-resources" }, [_c("div", { staticClass: "related-resources__header" }, [_c("h5", [_vm._v(_vm._s(_vm.header))]), _c("p", [_vm._v(_vm._s(_vm.subline))])]), _vm._l(_vm.resources, function(resource) {
    return _c("NcResource", { key: resource.itemId, staticClass: "related-resources__entry", attrs: { "icon": resource.icon, "name": resource.title, "url": resource.url } });
  })], 2) : _vm._e()], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "badd46a9"
);
const NcRelatedResourcesPanel = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcSavingIndicatorIcon-nv1147dk.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcSavingIndicatorIcon-nv1147dk.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcSavingIndicatorIcon)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");


const _sfc_main = (0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  name: "NcSavingIndicatorIcon",
  props: {
    /**
     * Specify the size of the saving icon.
     */
    size: {
      type: Number,
      default: 20
    },
    /**
     * Specify what is saved.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Set to true when saving is in progress.
     */
    saving: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Set to true if an error occured while saving.
     */
    error: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  emits: ["click"],
  computed: {
    indicatorColor() {
      return this.error ? "var(--color-error)" : this.saving ? "var(--color-primary-element)" : "none";
    }
  }
});
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("span", { staticClass: "material-design-icon", attrs: { "aria-label": _vm.name, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "fill": _vm.indicatorColor, "d": "m19 15a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" } }), _c("path", { attrs: { "fill": "currentColor", "d": "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" } }, [_vm.name ? _c("title", [_vm._v(_vm._s(_vm.name))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const NcSavingIndicatorIcon = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/NcSettingsInputText-DC7H_6Uz.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/NcSettingsInputText-DC7H_6Uz.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcSettingsInputText)
/* harmony export */ });
/* harmony import */ var _assets_NcSettingsInputText_Bsp_6DjJ_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcSettingsInputText-Bsp_6DjJ.css */ "./node_modules/@nextcloud/vue/dist/assets/NcSettingsInputText-Bsp_6DjJ.css");
/* harmony import */ var _l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_l10n-DDKxBWQL.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_l10n-DDKxBWQL.mjs");
/* harmony import */ var _GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenRandomId-CMooMQt0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/GenRandomId-CMooMQt0.mjs");
/* harmony import */ var _useModelMigration_EhAWvqDD_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useModelMigration-EhAWvqDD.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/useModelMigration-EhAWvqDD.mjs");
/* harmony import */ var _plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-DU4iP6Vu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/_plugin-vue2_normalizer-DU4iP6Vu.mjs");





(0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.g);
const _sfc_main = {
  name: "NcSettingsInputText",
  model: {
    prop: "value",
    event: "update:value"
  },
  props: {
    /**
     * label of the select group element
     */
    label: {
      type: String,
      required: true
    },
    /**
     * hint of the select group input
     */
    hint: {
      type: String,
      default: ""
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    value: {
      type: String,
      default: void 0
    },
    /**
     * value of the select group input
     */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * disabled state of the settings select group input
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * id attribute of the select group element
     */
    id: {
      type: String,
      default: () => "settings-input-text-" + (0,_GenRandomId_CMooMQt0_mjs__WEBPACK_IMPORTED_MODULE_2__.G)(),
      validator: (id) => id.trim() !== ""
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:value",
    /**
     * Emitted when the inputs value changes
     *
     * @type {string}
     */
    "update:modelValue",
    /* Same as update:modelValue for Vue 2 compatibility */
    "update:model-value",
    "input",
    "submit",
    "change"
  ],
  setup() {
    const model = (0,_useModelMigration_EhAWvqDD_mjs__WEBPACK_IMPORTED_MODULE_3__.u)("value", "update:value");
    return {
      model
    };
  },
  data() {
    return {
      submitTranslated: (0,_l10n_DDKxBWQL_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Submit")
    };
  },
  computed: {
    /**
     * @return {string}
     */
    idSubmit() {
      return this.id + "-submit";
    }
  },
  methods: {
    onInput(event) {
      this.$emit("input", event);
      this.model = event.target.value;
    },
    onSubmit(event) {
      if (!this.disabled) {
        this.$emit("submit", event);
      }
    },
    onChange(event) {
      this.$emit("change", event);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("form", { ref: "form", attrs: { "disabled": _vm.disabled }, on: { "submit": function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    return _vm.onSubmit.apply(null, arguments);
  } } }, [_c("div", { staticClass: "input-wrapper" }, [_c("label", { staticClass: "action-input__label", attrs: { "for": _vm.id } }, [_vm._v(_vm._s(_vm.label))]), _c("input", { attrs: { "id": _vm.id, "type": "text", "disabled": _vm.disabled }, domProps: { "value": _vm.model }, on: { "input": _vm.onInput, "change": _vm.onChange } }), _c("input", { staticClass: "action-input__submit", attrs: { "id": _vm.idSubmit, "type": "submit" }, domProps: { "value": _vm.submitTranslated } }), _vm.hint ? _c("p", { staticClass: "hint" }, [_vm._v(" " + _vm._s(_vm.hint) + " ")]) : _vm._e()])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_DU4iP6Vu_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "0907eb0a"
);
const NcSettingsInputText = __component__.exports;



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiSkinTone: () => (/* reexport safe */ _chunks_emoji_BY_D0V5K_mjs__WEBPACK_IMPORTED_MODULE_91__.E),
/* harmony export */   Focus: () => (/* reexport safe */ _Directives_Focus_mjs__WEBPACK_IMPORTED_MODULE_95__.directive),
/* harmony export */   Linkify: () => (/* reexport safe */ _Directives_Linkify_mjs__WEBPACK_IMPORTED_MODULE_96__.directive),
/* harmony export */   MOBILE_BREAKPOINT: () => (/* reexport safe */ _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_86__.MOBILE_BREAKPOINT),
/* harmony export */   MOBILE_SMALL_BREAKPOINT: () => (/* reexport safe */ _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_86__.MOBILE_SMALL_BREAKPOINT),
/* harmony export */   NcActionButton: () => (/* reexport safe */ _chunks_NcActionButton_CEysTg4c_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NcActionButtonGroup: () => (/* reexport safe */ _chunks_NcActionButtonGroup_3v_qy9C0_mjs__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   NcActionCaption: () => (/* reexport safe */ _Components_NcActionCaption_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   NcActionCheckbox: () => (/* reexport safe */ _chunks_NcActionCheckbox_BnL71Qmi_mjs__WEBPACK_IMPORTED_MODULE_3__.N),
/* harmony export */   NcActionInput: () => (/* reexport safe */ _chunks_NcActionInput_BAM8T3gm_mjs__WEBPACK_IMPORTED_MODULE_4__.N),
/* harmony export */   NcActionLink: () => (/* reexport safe */ _Components_NcActionLink_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   NcActionRadio: () => (/* reexport safe */ _chunks_NcActionRadio_CCTupqRR_mjs__WEBPACK_IMPORTED_MODULE_6__.N),
/* harmony export */   NcActionRouter: () => (/* reexport safe */ _Components_NcActionRouter_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   NcActionSeparator: () => (/* reexport safe */ _Components_NcActionSeparator_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   NcActionText: () => (/* reexport safe */ _Components_NcActionText_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   NcActionTextEditable: () => (/* reexport safe */ _chunks_NcActionTextEditable_JRD_G0CT_mjs__WEBPACK_IMPORTED_MODULE_11__.N),
/* harmony export */   NcActions: () => (/* reexport safe */ _chunks_NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_8__.N),
/* harmony export */   NcAppContent: () => (/* reexport safe */ _chunks_NcAppContent_BKQ_H04y_mjs__WEBPACK_IMPORTED_MODULE_12__.N),
/* harmony export */   NcAppContentDetails: () => (/* reexport safe */ _Components_NcAppContentDetails_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   NcAppContentList: () => (/* reexport safe */ _Components_NcAppContentList_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   NcAppNavigation: () => (/* reexport safe */ _chunks_NcAppNavigation_B_92V8o3_mjs__WEBPACK_IMPORTED_MODULE_15__.N),
/* harmony export */   NcAppNavigationCaption: () => (/* reexport safe */ _chunks_NcAppNavigationCaption_B3w692fN_mjs__WEBPACK_IMPORTED_MODULE_16__.N),
/* harmony export */   NcAppNavigationIconBullet: () => (/* reexport safe */ _Components_NcAppNavigationIconBullet_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   NcAppNavigationItem: () => (/* reexport safe */ _chunks_NcAppNavigationItem_CpcFOmJR_mjs__WEBPACK_IMPORTED_MODULE_18__.N),
/* harmony export */   NcAppNavigationList: () => (/* reexport safe */ _Components_NcAppNavigationList_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   NcAppNavigationNew: () => (/* reexport safe */ _Components_NcAppNavigationNew_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   NcAppNavigationNewItem: () => (/* reexport safe */ _chunks_NcAppNavigationNewItem_BvQaVuL6_mjs__WEBPACK_IMPORTED_MODULE_21__.N),
/* harmony export */   NcAppNavigationSearch: () => (/* reexport safe */ _chunks_NcAppNavigationSearch_gytpBKme_mjs__WEBPACK_IMPORTED_MODULE_22__.N),
/* harmony export */   NcAppNavigationSettings: () => (/* reexport safe */ _chunks_NcAppNavigationSettings_CZFm1d_N_mjs__WEBPACK_IMPORTED_MODULE_23__.N),
/* harmony export */   NcAppNavigationSpacer: () => (/* reexport safe */ _Components_NcAppNavigationSpacer_mjs__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   NcAppSettingsDialog: () => (/* reexport safe */ _chunks_NcAppSettingsDialog_JPB_srka_mjs__WEBPACK_IMPORTED_MODULE_25__.N),
/* harmony export */   NcAppSettingsSection: () => (/* reexport safe */ _Components_NcAppSettingsSection_mjs__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   NcAppSidebar: () => (/* reexport safe */ _chunks_NcAppSidebar_cEQy8s50_mjs__WEBPACK_IMPORTED_MODULE_27__.N),
/* harmony export */   NcAppSidebarTab: () => (/* reexport safe */ _Components_NcAppSidebarTab_mjs__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   NcAutoCompleteResult: () => (/* reexport safe */ _chunks_NcRichContenteditable_3kkU0Uxu_mjs__WEBPACK_IMPORTED_MODULE_64__.N),
/* harmony export */   NcAvatar: () => (/* reexport safe */ _chunks_NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_29__.N),
/* harmony export */   NcBreadcrumb: () => (/* reexport safe */ _chunks_NcBreadcrumb_GHiD_Sw7_mjs__WEBPACK_IMPORTED_MODULE_30__.N),
/* harmony export */   NcBreadcrumbs: () => (/* reexport safe */ _chunks_NcBreadcrumbs_D0Hhym9A_mjs__WEBPACK_IMPORTED_MODULE_31__.N),
/* harmony export */   NcButton: () => (/* reexport safe */ _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   NcCheckboxRadioSwitch: () => (/* reexport safe */ _chunks_NcCheckboxRadioSwitch_CCuKA55c_mjs__WEBPACK_IMPORTED_MODULE_33__.N),
/* harmony export */   NcCollectionList: () => (/* reexport safe */ _chunks_NcCollectionList_BNxu1MWE_mjs__WEBPACK_IMPORTED_MODULE_34__.N),
/* harmony export */   NcColorPicker: () => (/* reexport safe */ _chunks_NcColorPicker_ph8Nubq7_mjs__WEBPACK_IMPORTED_MODULE_35__.N),
/* harmony export */   NcContent: () => (/* reexport safe */ _chunks_NcContent_RlppaZCX_mjs__WEBPACK_IMPORTED_MODULE_36__.N),
/* harmony export */   NcCounterBubble: () => (/* reexport safe */ _chunks_NcCounterBubble_CDfRYl8B_mjs__WEBPACK_IMPORTED_MODULE_37__.N),
/* harmony export */   NcCustomPickerRenderResult: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.N),
/* harmony export */   NcDashboardWidget: () => (/* reexport safe */ _chunks_NcDashboardWidget_Dg12xu50_mjs__WEBPACK_IMPORTED_MODULE_38__.N),
/* harmony export */   NcDashboardWidgetItem: () => (/* reexport safe */ _chunks_NcDashboardWidgetItem_DZGooEwA_mjs__WEBPACK_IMPORTED_MODULE_39__.N),
/* harmony export */   NcDateTime: () => (/* reexport safe */ _chunks_NcDateTime_DBZ_vBfi_mjs__WEBPACK_IMPORTED_MODULE_40__.N),
/* harmony export */   NcDateTimePicker: () => (/* reexport safe */ _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   NcDateTimePickerNative: () => (/* reexport safe */ _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   NcDialog: () => (/* reexport safe */ _chunks_NcDialog_I_9fyJVt_mjs__WEBPACK_IMPORTED_MODULE_43__.N),
/* harmony export */   NcDialogButton: () => (/* reexport safe */ _chunks_NcDialogButton_DuJ3lE7e_mjs__WEBPACK_IMPORTED_MODULE_44__.N),
/* harmony export */   NcEllipsisedOption: () => (/* reexport safe */ _Components_NcEllipsisedOption_mjs__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   NcEmojiPicker: () => (/* reexport safe */ _chunks_NcEmojiPicker_DDCgW2zQ_mjs__WEBPACK_IMPORTED_MODULE_46__.N),
/* harmony export */   NcEmptyContent: () => (/* reexport safe */ _Components_NcEmptyContent_mjs__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   NcGuestContent: () => (/* reexport safe */ _Components_NcGuestContent_mjs__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   NcHeaderButton: () => (/* reexport safe */ _Components_NcHeaderButton_mjs__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   NcHeaderMenu: () => (/* reexport safe */ _chunks_NcHeaderMenu_CLcpStap_mjs__WEBPACK_IMPORTED_MODULE_50__.N),
/* harmony export */   NcHighlight: () => (/* reexport safe */ _chunks_index_Bz6q9mZw_mjs__WEBPACK_IMPORTED_MODULE_51__.N),
/* harmony export */   NcIconSvgWrapper: () => (/* reexport safe */ _chunks_NcIconSvgWrapper_CHmdAuhg_mjs__WEBPACK_IMPORTED_MODULE_52__.N),
/* harmony export */   NcInputField: () => (/* reexport safe */ _chunks_NcInputField_CU5a68Pc_mjs__WEBPACK_IMPORTED_MODULE_53__.N),
/* harmony export */   NcListItem: () => (/* reexport safe */ _chunks_NcListItem_3e1MminS_mjs__WEBPACK_IMPORTED_MODULE_54__.N),
/* harmony export */   NcListItemIcon: () => (/* reexport safe */ _chunks_NcListItemIcon_7x7iDHYw_mjs__WEBPACK_IMPORTED_MODULE_55__.N),
/* harmony export */   NcLoadingIcon: () => (/* reexport safe */ _Components_NcLoadingIcon_mjs__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   NcMentionBubble: () => (/* reexport safe */ _chunks_index_G8WQDZ8G_mjs__WEBPACK_IMPORTED_MODULE_63__.N),
/* harmony export */   NcModal: () => (/* reexport safe */ _Components_NcModal_mjs__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   NcNoteCard: () => (/* reexport safe */ _Components_NcNoteCard_mjs__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   NcPasswordField: () => (/* reexport safe */ _chunks_NcPasswordField_Dpu9nI6h_mjs__WEBPACK_IMPORTED_MODULE_59__.N),
/* harmony export */   NcPopover: () => (/* reexport safe */ _chunks_NcPopover_DFCPlZpS_mjs__WEBPACK_IMPORTED_MODULE_60__.N),
/* harmony export */   NcProgressBar: () => (/* reexport safe */ _chunks_NcProgressBar_DegJ2JjE_mjs__WEBPACK_IMPORTED_MODULE_61__.N),
/* harmony export */   NcRelatedResourcesPanel: () => (/* reexport safe */ _chunks_NcRelatedResourcesPanel_C6JIVMvN_mjs__WEBPACK_IMPORTED_MODULE_62__.N),
/* harmony export */   NcRichContenteditable: () => (/* reexport safe */ _chunks_NcRichContenteditable_3kkU0Uxu_mjs__WEBPACK_IMPORTED_MODULE_64__.a),
/* harmony export */   NcRichText: () => (/* reexport safe */ _chunks_NcRichText_C8SjsRK8_mjs__WEBPACK_IMPORTED_MODULE_65__.N),
/* harmony export */   NcSavingIndicatorIcon: () => (/* reexport safe */ _chunks_NcSavingIndicatorIcon_nv1147dk_mjs__WEBPACK_IMPORTED_MODULE_75__.N),
/* harmony export */   NcSelect: () => (/* reexport safe */ _chunks_NcSelect_BQ_NFBXI_mjs__WEBPACK_IMPORTED_MODULE_72__.N),
/* harmony export */   NcSelectTags: () => (/* reexport safe */ _chunks_NcSelectTags_BKtOWgrz_mjs__WEBPACK_IMPORTED_MODULE_76__.N),
/* harmony export */   NcSettingsInputText: () => (/* reexport safe */ _chunks_NcSettingsInputText_DC7H_6Uz_mjs__WEBPACK_IMPORTED_MODULE_77__.N),
/* harmony export */   NcSettingsSection: () => (/* reexport safe */ _chunks_NcSettingsSection_BYKUjim0_mjs__WEBPACK_IMPORTED_MODULE_78__.N),
/* harmony export */   NcSettingsSelectGroup: () => (/* reexport safe */ _chunks_NcSettingsSelectGroup_CI2LoVeL_mjs__WEBPACK_IMPORTED_MODULE_79__.N),
/* harmony export */   NcTextArea: () => (/* reexport safe */ _chunks_NcTextArea_BHERsE_g_mjs__WEBPACK_IMPORTED_MODULE_80__.N),
/* harmony export */   NcTextField: () => (/* reexport safe */ _chunks_NcTextField_9gC8or6j_mjs__WEBPACK_IMPORTED_MODULE_73__.N),
/* harmony export */   NcTimezonePicker: () => (/* reexport safe */ _chunks_NcTimezonePicker_xSXSuNHX_mjs__WEBPACK_IMPORTED_MODULE_81__.N),
/* harmony export */   NcUserBubble: () => (/* reexport safe */ _chunks_NcUserBubble_BFvEaXLr_mjs__WEBPACK_IMPORTED_MODULE_82__.N),
/* harmony export */   NcUserStatusIcon: () => (/* reexport safe */ _chunks_NcUserStatusIcon_S5bBgRl6_mjs__WEBPACK_IMPORTED_MODULE_83__.N),
/* harmony export */   NcVNodes: () => (/* reexport safe */ _Components_NcVNodes_mjs__WEBPACK_IMPORTED_MODULE_84__["default"]),
/* harmony export */   NextcloudVuePlugin: () => (/* binding */ NextcloudVuePlugin),
/* harmony export */   Tooltip: () => (/* reexport safe */ floating_vue__WEBPACK_IMPORTED_MODULE_101__.VTooltip),
/* harmony export */   anyLinkProviderId: () => (/* reexport safe */ _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__.a),
/* harmony export */   checkIfDarkTheme: () => (/* reexport safe */ _Functions_isDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_92__.checkIfDarkTheme),
/* harmony export */   clickOutsideOptions: () => (/* reexport safe */ _Mixins_clickOutsideOptions_mjs__WEBPACK_IMPORTED_MODULE_98__["default"]),
/* harmony export */   emojiAddRecent: () => (/* reexport safe */ _chunks_emoji_BY_D0V5K_mjs__WEBPACK_IMPORTED_MODULE_91__.a),
/* harmony export */   emojiSearch: () => (/* reexport safe */ _chunks_emoji_BY_D0V5K_mjs__WEBPACK_IMPORTED_MODULE_91__.e),
/* harmony export */   getCurrentSkinTone: () => (/* reexport safe */ _chunks_emoji_BY_D0V5K_mjs__WEBPACK_IMPORTED_MODULE_91__.g),
/* harmony export */   getEnabledContactsMenuActions: () => (/* reexport safe */ _Functions_contactsMenu_mjs__WEBPACK_IMPORTED_MODULE_93__.getEnabledContactsMenuActions),
/* harmony export */   getLinkWithPicker: () => (/* reexport safe */ _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__.g),
/* harmony export */   getProvider: () => (/* reexport safe */ _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__.b),
/* harmony export */   getProviders: () => (/* reexport safe */ _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__.c),
/* harmony export */   hasInteractiveView: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.h),
/* harmony export */   isA11yActivation: () => (/* reexport safe */ _Functions_a11y_mjs__WEBPACK_IMPORTED_MODULE_89__.isA11yActivation),
/* harmony export */   isCustomPickerElementRegistered: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.d),
/* harmony export */   isDarkTheme: () => (/* reexport safe */ _Functions_isDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_92__.isDarkTheme),
/* harmony export */   isFullscreen: () => (/* reexport safe */ _Mixins_isFullscreen_mjs__WEBPACK_IMPORTED_MODULE_99__["default"]),
/* harmony export */   isFullscreenState: () => (/* reexport safe */ _Composables_useIsFullscreen_mjs__WEBPACK_IMPORTED_MODULE_85__.isFullscreenState),
/* harmony export */   isMobile: () => (/* reexport safe */ _Mixins_isMobile_mjs__WEBPACK_IMPORTED_MODULE_100__["default"]),
/* harmony export */   isMobileState: () => (/* reexport safe */ _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_86__.isMobileState),
/* harmony export */   isWidgetRegistered: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.i),
/* harmony export */   registerContactsMenuAction: () => (/* reexport safe */ _Functions_contactsMenu_mjs__WEBPACK_IMPORTED_MODULE_93__.registerContactsMenuAction),
/* harmony export */   registerCustomPickerElement: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.b),
/* harmony export */   registerWidget: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.r),
/* harmony export */   renderCustomPickerElement: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.c),
/* harmony export */   renderWidget: () => (/* reexport safe */ _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__.a),
/* harmony export */   richEditor: () => (/* reexport safe */ _chunks_index_G8WQDZ8G_mjs__WEBPACK_IMPORTED_MODULE_63__.r),
/* harmony export */   searchProvider: () => (/* reexport safe */ _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__.d),
/* harmony export */   setCurrentSkinTone: () => (/* reexport safe */ _chunks_emoji_BY_D0V5K_mjs__WEBPACK_IMPORTED_MODULE_91__.s),
/* harmony export */   sortProviders: () => (/* reexport safe */ _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__.s),
/* harmony export */   spawnDialog: () => (/* reexport safe */ _Functions_dialog_mjs__WEBPACK_IMPORTED_MODULE_90__.spawnDialog),
/* harmony export */   useFormatDateTime: () => (/* reexport safe */ _chunks_NcDateTime_DBZ_vBfi_mjs__WEBPACK_IMPORTED_MODULE_40__.u),
/* harmony export */   useHotKey: () => (/* reexport safe */ _Composables_useHotKey_mjs__WEBPACK_IMPORTED_MODULE_87__.useHotKey),
/* harmony export */   useIsDarkTheme: () => (/* reexport safe */ _Composables_useIsDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_88__.useIsDarkTheme),
/* harmony export */   useIsDarkThemeElement: () => (/* reexport safe */ _Composables_useIsDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_88__.useIsDarkThemeElement),
/* harmony export */   useIsFullscreen: () => (/* reexport safe */ _Composables_useIsFullscreen_mjs__WEBPACK_IMPORTED_MODULE_85__.useIsFullscreen),
/* harmony export */   useIsMobile: () => (/* reexport safe */ _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_86__.useIsMobile),
/* harmony export */   useIsSmallMobile: () => (/* reexport safe */ _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_86__.useIsSmallMobile),
/* harmony export */   userStatus: () => (/* reexport safe */ _chunks_NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_29__.u),
/* harmony export */   usernameToColor: () => (/* reexport safe */ _chunks_usernameToColor_BCZuxlEH_mjs__WEBPACK_IMPORTED_MODULE_94__.u)
/* harmony export */ });
/* harmony import */ var _chunks_NcActionButton_CEysTg4c_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/NcActionButton-CEysTg4c.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionButton-CEysTg4c.mjs");
/* harmony import */ var _chunks_NcActionButtonGroup_3v_qy9C0_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunks/NcActionButtonGroup-3v-qy9C0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionButtonGroup-3v-qy9C0.mjs");
/* harmony import */ var _Components_NcActionCaption_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/NcActionCaption.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcActionCaption.mjs");
/* harmony import */ var _chunks_NcActionCheckbox_BnL71Qmi_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunks/NcActionCheckbox-BnL71Qmi.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionCheckbox-BnL71Qmi.mjs");
/* harmony import */ var _chunks_NcActionInput_BAM8T3gm_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunks/NcActionInput-BAM8T3gm.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionInput-BAM8T3gm.mjs");
/* harmony import */ var _Components_NcActionLink_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/NcActionLink.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcActionLink.mjs");
/* harmony import */ var _chunks_NcActionRadio_CCTupqRR_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chunks/NcActionRadio-CCTupqRR.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionRadio-CCTupqRR.mjs");
/* harmony import */ var _Components_NcActionRouter_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/NcActionRouter.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcActionRouter.mjs");
/* harmony import */ var _chunks_NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chunks/NcActions-D3hGxwlc.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActions-D3hGxwlc.mjs");
/* harmony import */ var _Components_NcActionSeparator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/NcActionSeparator.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcActionSeparator.mjs");
/* harmony import */ var _Components_NcActionText_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/NcActionText.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcActionText.mjs");
/* harmony import */ var _chunks_NcActionTextEditable_JRD_G0CT_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chunks/NcActionTextEditable-JRD-G0CT.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcActionTextEditable-JRD-G0CT.mjs");
/* harmony import */ var _chunks_NcAppContent_BKQ_H04y_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chunks/NcAppContent-BKQ-H04y.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppContent-BKQ-H04y.mjs");
/* harmony import */ var _Components_NcAppContentDetails_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/NcAppContentDetails.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppContentDetails.mjs");
/* harmony import */ var _Components_NcAppContentList_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/NcAppContentList.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppContentList.mjs");
/* harmony import */ var _chunks_NcAppNavigation_B_92V8o3_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chunks/NcAppNavigation-B_92V8o3.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation-B_92V8o3.mjs");
/* harmony import */ var _chunks_NcAppNavigationCaption_B3w692fN_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chunks/NcAppNavigationCaption-B3w692fN.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationCaption-B3w692fN.mjs");
/* harmony import */ var _Components_NcAppNavigationIconBullet_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/NcAppNavigationIconBullet.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationIconBullet.mjs");
/* harmony import */ var _chunks_NcAppNavigationItem_CpcFOmJR_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chunks/NcAppNavigationItem-CpcFOmJR.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationItem-CpcFOmJR.mjs");
/* harmony import */ var _Components_NcAppNavigationList_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/NcAppNavigationList.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationList.mjs");
/* harmony import */ var _Components_NcAppNavigationNew_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/NcAppNavigationNew.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationNew.mjs");
/* harmony import */ var _chunks_NcAppNavigationNewItem_BvQaVuL6_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chunks/NcAppNavigationNewItem-BvQaVuL6.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationNewItem-BvQaVuL6.mjs");
/* harmony import */ var _chunks_NcAppNavigationSearch_gytpBKme_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chunks/NcAppNavigationSearch-gytpBKme.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationSearch-gytpBKme.mjs");
/* harmony import */ var _chunks_NcAppNavigationSettings_CZFm1d_N_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chunks/NcAppNavigationSettings-CZFm1d-N.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppNavigationSettings-CZFm1d-N.mjs");
/* harmony import */ var _Components_NcAppNavigationSpacer_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/NcAppNavigationSpacer.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationSpacer.mjs");
/* harmony import */ var _chunks_NcAppSettingsDialog_JPB_srka_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chunks/NcAppSettingsDialog-JPB-srka.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppSettingsDialog-JPB-srka.mjs");
/* harmony import */ var _Components_NcAppSettingsSection_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/NcAppSettingsSection.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppSettingsSection.mjs");
/* harmony import */ var _chunks_NcAppSidebar_cEQy8s50_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./chunks/NcAppSidebar-cEQy8s50.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAppSidebar-cEQy8s50.mjs");
/* harmony import */ var _Components_NcAppSidebarTab_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/NcAppSidebarTab.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcAppSidebarTab.mjs");
/* harmony import */ var _chunks_NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chunks/NcAvatar-BjwyJw34.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcAvatar-BjwyJw34.mjs");
/* harmony import */ var _chunks_NcBreadcrumb_GHiD_Sw7_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chunks/NcBreadcrumb-GHiD-Sw7.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcBreadcrumb-GHiD-Sw7.mjs");
/* harmony import */ var _chunks_NcBreadcrumbs_D0Hhym9A_mjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./chunks/NcBreadcrumbs-D0Hhym9A.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcBreadcrumbs-D0Hhym9A.mjs");
/* harmony import */ var _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/NcButton.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _chunks_NcCheckboxRadioSwitch_CCuKA55c_mjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./chunks/NcCheckboxRadioSwitch-CCuKA55c.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcCheckboxRadioSwitch-CCuKA55c.mjs");
/* harmony import */ var _chunks_NcCollectionList_BNxu1MWE_mjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./chunks/NcCollectionList-BNxu1MWE.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcCollectionList-BNxu1MWE.mjs");
/* harmony import */ var _chunks_NcColorPicker_ph8Nubq7_mjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chunks/NcColorPicker-ph8Nubq7.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcColorPicker-ph8Nubq7.mjs");
/* harmony import */ var _chunks_NcContent_RlppaZCX_mjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./chunks/NcContent-RlppaZCX.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcContent-RlppaZCX.mjs");
/* harmony import */ var _chunks_NcCounterBubble_CDfRYl8B_mjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./chunks/NcCounterBubble-CDfRYl8B.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcCounterBubble-CDfRYl8B.mjs");
/* harmony import */ var _chunks_NcDashboardWidget_Dg12xu50_mjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./chunks/NcDashboardWidget-Dg12xu50.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcDashboardWidget-Dg12xu50.mjs");
/* harmony import */ var _chunks_NcDashboardWidgetItem_DZGooEwA_mjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./chunks/NcDashboardWidgetItem-DZGooEwA.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcDashboardWidgetItem-DZGooEwA.mjs");
/* harmony import */ var _chunks_NcDateTime_DBZ_vBfi_mjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./chunks/NcDateTime-DBZ-vBfi.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcDateTime-DBZ-vBfi.mjs");
/* harmony import */ var _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Components/NcDateTimePicker.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcDateTimePicker.mjs");
/* harmony import */ var _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Components/NcDateTimePickerNative.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcDateTimePickerNative.mjs");
/* harmony import */ var _chunks_NcDialog_I_9fyJVt_mjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./chunks/NcDialog-I_9fyJVt.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcDialog-I_9fyJVt.mjs");
/* harmony import */ var _chunks_NcDialogButton_DuJ3lE7e_mjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./chunks/NcDialogButton-DuJ3lE7e.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcDialogButton-DuJ3lE7e.mjs");
/* harmony import */ var _Components_NcEllipsisedOption_mjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Components/NcEllipsisedOption.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcEllipsisedOption.mjs");
/* harmony import */ var _chunks_NcEmojiPicker_DDCgW2zQ_mjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./chunks/NcEmojiPicker-DDCgW2zQ.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcEmojiPicker-DDCgW2zQ.mjs");
/* harmony import */ var _Components_NcEmptyContent_mjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Components/NcEmptyContent.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.mjs");
/* harmony import */ var _Components_NcGuestContent_mjs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Components/NcGuestContent.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcGuestContent.mjs");
/* harmony import */ var _Components_NcHeaderButton_mjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Components/NcHeaderButton.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcHeaderButton.mjs");
/* harmony import */ var _chunks_NcHeaderMenu_CLcpStap_mjs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./chunks/NcHeaderMenu-CLcpStap.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcHeaderMenu-CLcpStap.mjs");
/* harmony import */ var _chunks_index_Bz6q9mZw_mjs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./chunks/index-Bz6q9mZw.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/index-Bz6q9mZw.mjs");
/* harmony import */ var _chunks_NcIconSvgWrapper_CHmdAuhg_mjs__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./chunks/NcIconSvgWrapper-CHmdAuhg.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcIconSvgWrapper-CHmdAuhg.mjs");
/* harmony import */ var _chunks_NcInputField_CU5a68Pc_mjs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./chunks/NcInputField-CU5a68Pc.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcInputField-CU5a68Pc.mjs");
/* harmony import */ var _chunks_NcListItem_3e1MminS_mjs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./chunks/NcListItem-3e1MminS.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcListItem-3e1MminS.mjs");
/* harmony import */ var _chunks_NcListItemIcon_7x7iDHYw_mjs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./chunks/NcListItemIcon-7x7iDHYw.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcListItemIcon-7x7iDHYw.mjs");
/* harmony import */ var _Components_NcLoadingIcon_mjs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./Components/NcLoadingIcon.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _Components_NcModal_mjs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Components/NcModal.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcModal.mjs");
/* harmony import */ var _Components_NcNoteCard_mjs__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Components/NcNoteCard.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var _chunks_NcPasswordField_Dpu9nI6h_mjs__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./chunks/NcPasswordField-Dpu9nI6h.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcPasswordField-Dpu9nI6h.mjs");
/* harmony import */ var _chunks_NcPopover_DFCPlZpS_mjs__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./chunks/NcPopover-DFCPlZpS.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcPopover-DFCPlZpS.mjs");
/* harmony import */ var _chunks_NcProgressBar_DegJ2JjE_mjs__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./chunks/NcProgressBar-DegJ2JjE.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcProgressBar-DegJ2JjE.mjs");
/* harmony import */ var _chunks_NcRelatedResourcesPanel_C6JIVMvN_mjs__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./chunks/NcRelatedResourcesPanel-C6JIVMvN.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcRelatedResourcesPanel-C6JIVMvN.mjs");
/* harmony import */ var _chunks_index_G8WQDZ8G_mjs__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./chunks/index-G8WQDZ8G.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/index-G8WQDZ8G.mjs");
/* harmony import */ var _chunks_NcRichContenteditable_3kkU0Uxu_mjs__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./chunks/NcRichContenteditable-3kkU0Uxu.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcRichContenteditable-3kkU0Uxu.mjs");
/* harmony import */ var _chunks_NcRichText_C8SjsRK8_mjs__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./chunks/NcRichText-C8SjsRK8.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcRichText-C8SjsRK8.mjs");
/* harmony import */ var _chunks_index_CtoB4eIp_mjs__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./chunks/index-CtoB4eIp.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/index-CtoB4eIp.mjs");
/* harmony import */ var _chunks_referencePickerModal_CGG57Dy_mjs__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./chunks/referencePickerModal-CGG57Dy_.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/referencePickerModal-CGG57Dy_.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @nextcloud/sharing/public */ "./node_modules/@nextcloud/sharing/dist/public.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _chunks_NcSelect_BQ_NFBXI_mjs__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./chunks/NcSelect-BQ-NFBXI.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSelect-BQ-NFBXI.mjs");
/* harmony import */ var _chunks_NcTextField_9gC8or6j_mjs__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./chunks/NcTextField-9gC8or6j.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcTextField-9gC8or6j.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _chunks_NcSavingIndicatorIcon_nv1147dk_mjs__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./chunks/NcSavingIndicatorIcon-nv1147dk.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSavingIndicatorIcon-nv1147dk.mjs");
/* harmony import */ var _chunks_NcSelectTags_BKtOWgrz_mjs__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./chunks/NcSelectTags-BKtOWgrz.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSelectTags-BKtOWgrz.mjs");
/* harmony import */ var _chunks_NcSettingsInputText_DC7H_6Uz_mjs__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./chunks/NcSettingsInputText-DC7H_6Uz.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSettingsInputText-DC7H_6Uz.mjs");
/* harmony import */ var _chunks_NcSettingsSection_BYKUjim0_mjs__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./chunks/NcSettingsSection-BYKUjim0.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSettingsSection-BYKUjim0.mjs");
/* harmony import */ var _chunks_NcSettingsSelectGroup_CI2LoVeL_mjs__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./chunks/NcSettingsSelectGroup-CI2LoVeL.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcSettingsSelectGroup-CI2LoVeL.mjs");
/* harmony import */ var _chunks_NcTextArea_BHERsE_g_mjs__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./chunks/NcTextArea-BHERsE_g.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcTextArea-BHERsE_g.mjs");
/* harmony import */ var _chunks_NcTimezonePicker_xSXSuNHX_mjs__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./chunks/NcTimezonePicker-xSXSuNHX.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcTimezonePicker-xSXSuNHX.mjs");
/* harmony import */ var _chunks_NcUserBubble_BFvEaXLr_mjs__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./chunks/NcUserBubble-BFvEaXLr.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcUserBubble-BFvEaXLr.mjs");
/* harmony import */ var _chunks_NcUserStatusIcon_S5bBgRl6_mjs__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./chunks/NcUserStatusIcon-S5bBgRl6.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcUserStatusIcon-S5bBgRl6.mjs");
/* harmony import */ var _Components_NcVNodes_mjs__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./Components/NcVNodes.mjs */ "./node_modules/@nextcloud/vue/dist/Components/NcVNodes.mjs");
/* harmony import */ var _Composables_useIsFullscreen_mjs__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./Composables/useIsFullscreen.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsFullscreen.mjs");
/* harmony import */ var _Composables_useIsMobile_mjs__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./Composables/useIsMobile.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsMobile.mjs");
/* harmony import */ var _Composables_useHotKey_mjs__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./Composables/useHotKey.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useHotKey.mjs");
/* harmony import */ var _Composables_useIsDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./Composables/useIsDarkTheme.mjs */ "./node_modules/@nextcloud/vue/dist/Composables/useIsDarkTheme.mjs");
/* harmony import */ var _Functions_a11y_mjs__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./Functions/a11y.mjs */ "./node_modules/@nextcloud/vue/dist/Functions/a11y.mjs");
/* harmony import */ var _Functions_dialog_mjs__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./Functions/dialog.mjs */ "./node_modules/@nextcloud/vue/dist/Functions/dialog.mjs");
/* harmony import */ var _chunks_emoji_BY_D0V5K_mjs__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./chunks/emoji-BY_D0V5K.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/emoji-BY_D0V5K.mjs");
/* harmony import */ var _Functions_isDarkTheme_mjs__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./Functions/isDarkTheme.mjs */ "./node_modules/@nextcloud/vue/dist/Functions/isDarkTheme.mjs");
/* harmony import */ var _Functions_contactsMenu_mjs__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./Functions/contactsMenu.mjs */ "./node_modules/@nextcloud/vue/dist/Functions/contactsMenu.mjs");
/* harmony import */ var _chunks_usernameToColor_BCZuxlEH_mjs__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./chunks/usernameToColor-BCZuxlEH.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/usernameToColor-BCZuxlEH.mjs");
/* harmony import */ var _Directives_Focus_mjs__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./Directives/Focus.mjs */ "./node_modules/@nextcloud/vue/dist/Directives/Focus.mjs");
/* harmony import */ var _Directives_Linkify_mjs__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./Directives/Linkify.mjs */ "./node_modules/@nextcloud/vue/dist/Directives/Linkify.mjs");
/* harmony import */ var _Directives_Tooltip_mjs__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./Directives/Tooltip.mjs */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.mjs");
/* harmony import */ var _Mixins_clickOutsideOptions_mjs__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./Mixins/clickOutsideOptions.mjs */ "./node_modules/@nextcloud/vue/dist/Mixins/clickOutsideOptions.mjs");
/* harmony import */ var _Mixins_isFullscreen_mjs__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./Mixins/isFullscreen.mjs */ "./node_modules/@nextcloud/vue/dist/Mixins/isFullscreen.mjs");
/* harmony import */ var _Mixins_isMobile_mjs__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./Mixins/isMobile.mjs */ "./node_modules/@nextcloud/vue/dist/Mixins/isMobile.mjs");
/* harmony import */ var floating_vue__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! floating-vue */ "./node_modules/floating-vue/dist/floating-vue.es.js");















































































































const NcComponents = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NcActionButton: _chunks_NcActionButton_CEysTg4c_mjs__WEBPACK_IMPORTED_MODULE_0__.N,
  NcActionButtonGroup: _chunks_NcActionButtonGroup_3v_qy9C0_mjs__WEBPACK_IMPORTED_MODULE_1__.N,
  NcActionCaption: _Components_NcActionCaption_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
  NcActionCheckbox: _chunks_NcActionCheckbox_BnL71Qmi_mjs__WEBPACK_IMPORTED_MODULE_3__.N,
  NcActionInput: _chunks_NcActionInput_BAM8T3gm_mjs__WEBPACK_IMPORTED_MODULE_4__.N,
  NcActionLink: _Components_NcActionLink_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
  NcActionRadio: _chunks_NcActionRadio_CCTupqRR_mjs__WEBPACK_IMPORTED_MODULE_6__.N,
  NcActionRouter: _Components_NcActionRouter_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
  NcActionSeparator: _Components_NcActionSeparator_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
  NcActionText: _Components_NcActionText_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
  NcActionTextEditable: _chunks_NcActionTextEditable_JRD_G0CT_mjs__WEBPACK_IMPORTED_MODULE_11__.N,
  NcActions: _chunks_NcActions_D3hGxwlc_mjs__WEBPACK_IMPORTED_MODULE_8__.N,
  NcAppContent: _chunks_NcAppContent_BKQ_H04y_mjs__WEBPACK_IMPORTED_MODULE_12__.N,
  NcAppContentDetails: _Components_NcAppContentDetails_mjs__WEBPACK_IMPORTED_MODULE_13__["default"],
  NcAppContentList: _Components_NcAppContentList_mjs__WEBPACK_IMPORTED_MODULE_14__["default"],
  NcAppNavigation: _chunks_NcAppNavigation_B_92V8o3_mjs__WEBPACK_IMPORTED_MODULE_15__.N,
  NcAppNavigationCaption: _chunks_NcAppNavigationCaption_B3w692fN_mjs__WEBPACK_IMPORTED_MODULE_16__.N,
  NcAppNavigationIconBullet: _Components_NcAppNavigationIconBullet_mjs__WEBPACK_IMPORTED_MODULE_17__["default"],
  NcAppNavigationItem: _chunks_NcAppNavigationItem_CpcFOmJR_mjs__WEBPACK_IMPORTED_MODULE_18__.N,
  NcAppNavigationList: _Components_NcAppNavigationList_mjs__WEBPACK_IMPORTED_MODULE_19__["default"],
  NcAppNavigationNew: _Components_NcAppNavigationNew_mjs__WEBPACK_IMPORTED_MODULE_20__["default"],
  NcAppNavigationNewItem: _chunks_NcAppNavigationNewItem_BvQaVuL6_mjs__WEBPACK_IMPORTED_MODULE_21__.N,
  NcAppNavigationSearch: _chunks_NcAppNavigationSearch_gytpBKme_mjs__WEBPACK_IMPORTED_MODULE_22__.N,
  NcAppNavigationSettings: _chunks_NcAppNavigationSettings_CZFm1d_N_mjs__WEBPACK_IMPORTED_MODULE_23__.N,
  NcAppNavigationSpacer: _Components_NcAppNavigationSpacer_mjs__WEBPACK_IMPORTED_MODULE_24__["default"],
  NcAppSettingsDialog: _chunks_NcAppSettingsDialog_JPB_srka_mjs__WEBPACK_IMPORTED_MODULE_25__.N,
  NcAppSettingsSection: _Components_NcAppSettingsSection_mjs__WEBPACK_IMPORTED_MODULE_26__["default"],
  NcAppSidebar: _chunks_NcAppSidebar_cEQy8s50_mjs__WEBPACK_IMPORTED_MODULE_27__.N,
  NcAppSidebarTab: _Components_NcAppSidebarTab_mjs__WEBPACK_IMPORTED_MODULE_28__["default"],
  NcAutoCompleteResult: _chunks_NcRichContenteditable_3kkU0Uxu_mjs__WEBPACK_IMPORTED_MODULE_64__.N,
  NcAvatar: _chunks_NcAvatar_BjwyJw34_mjs__WEBPACK_IMPORTED_MODULE_29__.N,
  NcBreadcrumb: _chunks_NcBreadcrumb_GHiD_Sw7_mjs__WEBPACK_IMPORTED_MODULE_30__.N,
  NcBreadcrumbs: _chunks_NcBreadcrumbs_D0Hhym9A_mjs__WEBPACK_IMPORTED_MODULE_31__.N,
  NcButton: _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_32__["default"],
  NcCheckboxRadioSwitch: _chunks_NcCheckboxRadioSwitch_CCuKA55c_mjs__WEBPACK_IMPORTED_MODULE_33__.N,
  NcCollectionList: _chunks_NcCollectionList_BNxu1MWE_mjs__WEBPACK_IMPORTED_MODULE_34__.N,
  NcColorPicker: _chunks_NcColorPicker_ph8Nubq7_mjs__WEBPACK_IMPORTED_MODULE_35__.N,
  NcContent: _chunks_NcContent_RlppaZCX_mjs__WEBPACK_IMPORTED_MODULE_36__.N,
  NcCounterBubble: _chunks_NcCounterBubble_CDfRYl8B_mjs__WEBPACK_IMPORTED_MODULE_37__.N,
  NcDashboardWidget: _chunks_NcDashboardWidget_Dg12xu50_mjs__WEBPACK_IMPORTED_MODULE_38__.N,
  NcDashboardWidgetItem: _chunks_NcDashboardWidgetItem_DZGooEwA_mjs__WEBPACK_IMPORTED_MODULE_39__.N,
  NcDateTime: _chunks_NcDateTime_DBZ_vBfi_mjs__WEBPACK_IMPORTED_MODULE_40__.N,
  NcDateTimePicker: _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_41__["default"],
  NcDateTimePickerNative: _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_42__["default"],
  NcDialog: _chunks_NcDialog_I_9fyJVt_mjs__WEBPACK_IMPORTED_MODULE_43__.N,
  NcDialogButton: _chunks_NcDialogButton_DuJ3lE7e_mjs__WEBPACK_IMPORTED_MODULE_44__.N,
  NcEllipsisedOption: _Components_NcEllipsisedOption_mjs__WEBPACK_IMPORTED_MODULE_45__["default"],
  NcEmojiPicker: _chunks_NcEmojiPicker_DDCgW2zQ_mjs__WEBPACK_IMPORTED_MODULE_46__.N,
  NcEmptyContent: _Components_NcEmptyContent_mjs__WEBPACK_IMPORTED_MODULE_47__["default"],
  NcGuestContent: _Components_NcGuestContent_mjs__WEBPACK_IMPORTED_MODULE_48__["default"],
  NcHeaderButton: _Components_NcHeaderButton_mjs__WEBPACK_IMPORTED_MODULE_49__["default"],
  NcHeaderMenu: _chunks_NcHeaderMenu_CLcpStap_mjs__WEBPACK_IMPORTED_MODULE_50__.N,
  NcHighlight: _chunks_index_Bz6q9mZw_mjs__WEBPACK_IMPORTED_MODULE_51__.N,
  NcIconSvgWrapper: _chunks_NcIconSvgWrapper_CHmdAuhg_mjs__WEBPACK_IMPORTED_MODULE_52__.N,
  NcInputField: _chunks_NcInputField_CU5a68Pc_mjs__WEBPACK_IMPORTED_MODULE_53__.N,
  NcListItem: _chunks_NcListItem_3e1MminS_mjs__WEBPACK_IMPORTED_MODULE_54__.N,
  NcListItemIcon: _chunks_NcListItemIcon_7x7iDHYw_mjs__WEBPACK_IMPORTED_MODULE_55__.N,
  NcLoadingIcon: _Components_NcLoadingIcon_mjs__WEBPACK_IMPORTED_MODULE_56__["default"],
  NcMentionBubble: _chunks_index_G8WQDZ8G_mjs__WEBPACK_IMPORTED_MODULE_63__.N,
  NcModal: _Components_NcModal_mjs__WEBPACK_IMPORTED_MODULE_57__["default"],
  NcNoteCard: _Components_NcNoteCard_mjs__WEBPACK_IMPORTED_MODULE_58__["default"],
  NcPasswordField: _chunks_NcPasswordField_Dpu9nI6h_mjs__WEBPACK_IMPORTED_MODULE_59__.N,
  NcPopover: _chunks_NcPopover_DFCPlZpS_mjs__WEBPACK_IMPORTED_MODULE_60__.N,
  NcProgressBar: _chunks_NcProgressBar_DegJ2JjE_mjs__WEBPACK_IMPORTED_MODULE_61__.N,
  NcRelatedResourcesPanel: _chunks_NcRelatedResourcesPanel_C6JIVMvN_mjs__WEBPACK_IMPORTED_MODULE_62__.N,
  NcRichContenteditable: _chunks_NcRichContenteditable_3kkU0Uxu_mjs__WEBPACK_IMPORTED_MODULE_64__.a,
  NcRichText: _chunks_NcRichText_C8SjsRK8_mjs__WEBPACK_IMPORTED_MODULE_65__.N,
  NcSavingIndicatorIcon: _chunks_NcSavingIndicatorIcon_nv1147dk_mjs__WEBPACK_IMPORTED_MODULE_75__.N,
  NcSelect: _chunks_NcSelect_BQ_NFBXI_mjs__WEBPACK_IMPORTED_MODULE_72__.N,
  NcSelectTags: _chunks_NcSelectTags_BKtOWgrz_mjs__WEBPACK_IMPORTED_MODULE_76__.N,
  NcSettingsInputText: _chunks_NcSettingsInputText_DC7H_6Uz_mjs__WEBPACK_IMPORTED_MODULE_77__.N,
  NcSettingsSection: _chunks_NcSettingsSection_BYKUjim0_mjs__WEBPACK_IMPORTED_MODULE_78__.N,
  NcSettingsSelectGroup: _chunks_NcSettingsSelectGroup_CI2LoVeL_mjs__WEBPACK_IMPORTED_MODULE_79__.N,
  NcTextArea: _chunks_NcTextArea_BHERsE_g_mjs__WEBPACK_IMPORTED_MODULE_80__.N,
  NcTextField: _chunks_NcTextField_9gC8or6j_mjs__WEBPACK_IMPORTED_MODULE_73__.N,
  NcTimezonePicker: _chunks_NcTimezonePicker_xSXSuNHX_mjs__WEBPACK_IMPORTED_MODULE_81__.N,
  NcUserBubble: _chunks_NcUserBubble_BFvEaXLr_mjs__WEBPACK_IMPORTED_MODULE_82__.N,
  NcUserStatusIcon: _chunks_NcUserStatusIcon_S5bBgRl6_mjs__WEBPACK_IMPORTED_MODULE_83__.N,
  NcVNodes: _Components_NcVNodes_mjs__WEBPACK_IMPORTED_MODULE_84__["default"]
}, Symbol.toStringTag, { value: "Module" }));
const NcDirectives = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Focus: _Directives_Focus_mjs__WEBPACK_IMPORTED_MODULE_95__.directive,
  Linkify: _Directives_Linkify_mjs__WEBPACK_IMPORTED_MODULE_96__.directive,
  Tooltip: floating_vue__WEBPACK_IMPORTED_MODULE_101__.VTooltip
}, Symbol.toStringTag, { value: "Module" }));
const NextcloudVuePlugin = {
  install(Vue) {
    Object.entries(NcComponents).forEach(([name, component]) => {
      Vue.component(component.name || name, component);
    });
    Object.entries(NcDirectives).forEach(([name, directive2]) => {
      Vue.directive(name, directive2);
    });
  }
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-BND4GQdv.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-BND4GQdv.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.nc-button-group-base > div {
  text-align: center;
  color: var(--color-text-maxcontrast);
}
.nc-button-group-base ul.nc-button-group-content {
  display: flex;
  gap: 4px;
  justify-content: space-between;
}
.nc-button-group-base ul.nc-button-group-content li {
  flex: 1 1;
}
.nc-button-group-base ul.nc-button-group-content .action-button {
  padding: 0 !important;
  width: 100%;
  display: flex;
  justify-content: center;
}
.nc-button-group-base ul.nc-button-group-content .action-button.action-button--active {
  background-color: var(--color-primary-element);
  border-radius: var(--border-radius-large);
  color: var(--color-primary-element-text);
}
.nc-button-group-base ul.nc-button-group-content .action-button.action-button--active:hover, .nc-button-group-base ul.nc-button-group-content .action-button.action-button--active:focus, .nc-button-group-base ul.nc-button-group-content .action-button.action-button--active:focus-within {
  background-color: var(--color-primary-element-hover);
}
.nc-button-group-base ul.nc-button-group-content .action-button .action-button__pressed-icon {
  display: none;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionRadio-C87waXE-.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionRadio-C87waXE-.css ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-8ddd08c0] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
li.action[data-v-8ddd08c0]:hover, li.action.active[data-v-8ddd08c0] {
  border-radius: 6px;
  padding: 0;
}
li.action[data-v-8ddd08c0]:hover {
  background-color: var(--color-background-hover);
}
.action--disabled[data-v-8ddd08c0] {
  pointer-events: none;
  opacity: 0.5;
}
.action--disabled[data-v-8ddd08c0]:hover, .action--disabled[data-v-8ddd08c0]:focus {
  cursor: default;
  opacity: 0.5;
}
.action--disabled *[data-v-8ddd08c0] {
  opacity: 1 !important;
}
.action-radio[data-v-8ddd08c0] {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  cursor: pointer;
  white-space: nowrap;
  color: var(--color-main-text);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  font-weight: normal;
  line-height: var(--default-clickable-area);
  /* checkbox/radio fixes */
}
.action-radio__radio[data-v-8ddd08c0] {
  position: absolute;
  inset-inline-start: 0 !important;
  z-index: -1;
  opacity: 0;
}
.action-radio__label[data-v-8ddd08c0] {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 !important;
  padding-inline-end: calc((var(--default-clickable-area) - 16px) / 2) !important;
}
.action-radio__label[data-v-8ddd08c0]::before {
  margin: calc((var(--default-clickable-area) - 14px) / 2) !important;
}
.action-radio--disabled[data-v-8ddd08c0],
.action-radio--disabled .action-radio__label[data-v-8ddd08c0] {
  cursor: pointer;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionTextEditable-1TXeJ5zp.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcActionTextEditable-1TXeJ5zp.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-35e22bd7] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * color-text-lighter		normal state
 * color-text-lighter		active state
 * color-text-maxcontrast 	disabled state
 */
/* Default global values */
button[data-v-35e22bd7]:not(.button-vue),
input[data-v-35e22bd7]:not([type=range]),
textarea[data-v-35e22bd7] {
  margin: 0;
  padding: 7px 6px;
  cursor: text;
  color: var(--color-text-lighter);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--color-main-background);
  font-size: 13px;
  /* Primary action button, use sparingly */
}
button[data-v-35e22bd7]:not(.button-vue):not(:disabled):not(.primary):hover, button[data-v-35e22bd7]:not(.button-vue):not(:disabled):not(.primary):focus, button:not(.button-vue):not(:disabled):not(.primary).active[data-v-35e22bd7],
input[data-v-35e22bd7]:not([type=range]):not(:disabled):not(.primary):hover,
input[data-v-35e22bd7]:not([type=range]):not(:disabled):not(.primary):focus,
input:not([type=range]):not(:disabled):not(.primary).active[data-v-35e22bd7],
textarea[data-v-35e22bd7]:not(:disabled):not(.primary):hover,
textarea[data-v-35e22bd7]:not(:disabled):not(.primary):focus,
textarea:not(:disabled):not(.primary).active[data-v-35e22bd7] {
  /* active class used for multiselect */
  border-color: var(--color-primary-element);
  outline: none;
}
button[data-v-35e22bd7]:not(.button-vue):not(:disabled):not(.primary):active,
input[data-v-35e22bd7]:not([type=range]):not(:disabled):not(.primary):active,
textarea[data-v-35e22bd7]:not(:disabled):not(.primary):active {
  color: var(--color-text-light);
  outline: none;
  background-color: var(--color-main-background);
}
button[data-v-35e22bd7]:not(.button-vue):disabled,
input[data-v-35e22bd7]:not([type=range]):disabled,
textarea[data-v-35e22bd7]:disabled {
  cursor: default;
  opacity: 0.5;
  color: var(--color-text-maxcontrast);
  background-color: var(--color-background-dark);
}
button[data-v-35e22bd7]:not(.button-vue):required,
input[data-v-35e22bd7]:not([type=range]):required,
textarea[data-v-35e22bd7]:required {
  box-shadow: none;
}
button[data-v-35e22bd7]:not(.button-vue):invalid,
input[data-v-35e22bd7]:not([type=range]):invalid,
textarea[data-v-35e22bd7]:invalid {
  border-color: var(--color-error);
  box-shadow: none !important;
}
button:not(.button-vue).primary[data-v-35e22bd7],
input:not([type=range]).primary[data-v-35e22bd7],
textarea.primary[data-v-35e22bd7] {
  cursor: pointer;
  color: var(--color-primary-element-text);
  border-color: var(--color-primary-element);
  background-color: var(--color-primary-element);
}
button:not(.button-vue).primary[data-v-35e22bd7]:not(:disabled):hover, button:not(.button-vue).primary[data-v-35e22bd7]:not(:disabled):focus, button:not(.button-vue).primary[data-v-35e22bd7]:not(:disabled):active,
input:not([type=range]).primary[data-v-35e22bd7]:not(:disabled):hover,
input:not([type=range]).primary[data-v-35e22bd7]:not(:disabled):focus,
input:not([type=range]).primary[data-v-35e22bd7]:not(:disabled):active,
textarea.primary[data-v-35e22bd7]:not(:disabled):hover,
textarea.primary[data-v-35e22bd7]:not(:disabled):focus,
textarea.primary[data-v-35e22bd7]:not(:disabled):active {
  border-color: var(--color-primary-element-light);
  background-color: var(--color-primary-element-light);
}
button:not(.button-vue).primary[data-v-35e22bd7]:not(:disabled):active,
input:not([type=range]).primary[data-v-35e22bd7]:not(:disabled):active,
textarea.primary[data-v-35e22bd7]:not(:disabled):active {
  color: var(--color-primary-element-text-dark);
}
button:not(.button-vue).primary[data-v-35e22bd7]:disabled,
input:not([type=range]).primary[data-v-35e22bd7]:disabled,
textarea.primary[data-v-35e22bd7]:disabled {
  cursor: default;
  color: var(--color-primary-element-text-dark);
  background-color: var(--color-primary-element);
}
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
li.action[data-v-35e22bd7]:hover, li.action.active[data-v-35e22bd7] {
  border-radius: 6px;
  padding: 0;
}
li.action[data-v-35e22bd7]:hover {
  background-color: var(--color-background-hover);
}
.action--disabled[data-v-35e22bd7] {
  pointer-events: none;
  opacity: 0.5;
}
.action--disabled[data-v-35e22bd7]:hover, .action--disabled[data-v-35e22bd7]:focus {
  cursor: default;
  opacity: 0.5;
}
.action--disabled *[data-v-35e22bd7] {
  opacity: 1 !important;
}
.action-text-editable[data-v-35e22bd7] {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  cursor: pointer;
  white-space: nowrap;
  color: var(--color-main-text);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  font-weight: normal;
  line-height: var(--default-clickable-area);
  /* Inputs inside popover supports text, submit & reset */
}
.action-text-editable > span[data-v-35e22bd7] {
  cursor: pointer;
  white-space: nowrap;
}
.action-text-editable__icon[data-v-35e22bd7] {
  min-width: 0; /* Overwrite icons*/
  min-height: 0;
  /* Keep padding to define the width to
  	assure correct position of a possible text */
  padding: calc(var(--default-clickable-area) / 2) 0 calc(var(--default-clickable-area) / 2) var(--default-clickable-area);
  background-position: calc((var(--default-clickable-area) - 16px) / 2) center;
  background-size: 16px;
}
.action-text-editable[data-v-35e22bd7] .material-design-icon {
  width: var(--default-clickable-area);
  height: var(--default-clickable-area);
  opacity: 1;
}
.action-text-editable[data-v-35e22bd7] .material-design-icon .material-design-icon__svg {
  vertical-align: middle;
}
.action-text-editable__form[data-v-35e22bd7] {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  margin: 4px 0;
  padding-inline-end: calc((var(--default-clickable-area) - 16px) / 2);
}
.action-text-editable__submit[data-v-35e22bd7] {
  position: absolute;
  inset-inline-start: 0;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -1;
  opacity: 0;
}
.action-text-editable__label[data-v-35e22bd7] {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset-inline-end: calc((var(--default-clickable-area) - 16px) / 2 + 1px);
  bottom: 1px;
  width: calc(var(--default-clickable-area) - 8px);
  height: calc(var(--default-clickable-area) - 8px);
  box-sizing: border-box;
  margin: 0;
  padding: 7px 6px;
  border: 0;
  border-radius: 50%;
  /* Avoid background under border */
  background-color: var(--color-main-background);
  background-clip: padding-box;
}
.action-text-editable__label[data-v-35e22bd7], .action-text-editable__label *[data-v-35e22bd7] {
  cursor: pointer;
}
.action-text-editable__textarea[data-v-35e22bd7] {
  flex: 1 1 auto;
  color: inherit;
  border-color: var(--color-border-maxcontrast);
  min-height: calc(var(--default-clickable-area) * 2 - 8px); /* twice the element margin-y */
  max-height: calc(var(--default-clickable-area) * 3 - 8px); /* twice the element margin-y */
  min-width: calc(var(--default-clickable-area) * 4);
  width: 100% !important;
  margin: 0;
  /* only show confirm borders if input is not focused */
}
.action-text-editable__textarea[data-v-35e22bd7]:disabled {
  cursor: default;
}
.action-text-editable__textarea:not(:active):not(:hover):not(:focus):invalid + .action-text-editable__label[data-v-35e22bd7] {
  background-color: var(--color-error);
}
.action-text-editable__textarea:not(:active):not(:hover):not(:focus):not(:disabled) + .action-text-editable__label[data-v-35e22bd7]:active, .action-text-editable__textarea:not(:active):not(:hover):not(:focus):not(:disabled) + .action-text-editable__label[data-v-35e22bd7]:hover, .action-text-editable__textarea:not(:active):not(:hover):not(:focus):not(:disabled) + .action-text-editable__label[data-v-35e22bd7]:focus {
  background-color: var(--color-primary-element);
  color: var(--color-primary-element-text);
}
.action-text-editable__textarea:active:not(:disabled) + .action-text-editable__label[data-v-35e22bd7], .action-text-editable__textarea:hover:not(:disabled) + .action-text-editable__label[data-v-35e22bd7], .action-text-editable__textarea:focus:not(:disabled) + .action-text-editable__label[data-v-35e22bd7] {
  /* above previous input */
  z-index: 2;
  border-color: var(--color-primary-element);
  border-inline-start-color: transparent;
}
li:last-child > .action-text-editable[data-v-35e22bd7] {
  margin-bottom: calc((var(--default-clickable-area) - 16px) / 2 - 4px);
}
li:first-child > .action-text-editable[data-v-35e22bd7] {
  margin-top: calc((var(--default-clickable-area) - 16px) / 2 - 4px);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationCaption-DU9PxTvu.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationCaption-DU9PxTvu.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-1133b4da] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.app-navigation-caption[data-v-1133b4da] {
  display: flex;
  justify-content: space-between;
}
.app-navigation-caption--heading[data-v-1133b4da] {
  padding: var(--app-navigation-padding);
}
.app-navigation-caption--heading[data-v-1133b4da]:not(:first-child):not(:last-child) {
  padding: 0 var(--app-navigation-padding);
}
.app-navigation-caption__name[data-v-1133b4da] {
  font-weight: bold;
  color: var(--color-main-text);
  font-size: var(--default-font-size);
  line-height: var(--default-clickable-area);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: none !important;
  flex-shrink: 1;
  padding-block: 0;
  padding-inline: calc(var(--default-grid-baseline, 4px) * 2) 0;
  margin-top: 0px;
  margin-bottom: var(--default-grid-baseline);
}
.app-navigation-caption__actions[data-v-1133b4da] {
  flex: 0 0 var(--default-clickable-area);
}
.app-navigation-caption[data-v-1133b4da]:not(:first-child) {
  margin-top: calc(var(--default-clickable-area) / 2);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationIconBullet-CeBYVy6t.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationIconBullet-CeBYVy6t.css ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-938dadb1] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.app-navigation-entry__icon-bullet[data-v-938dadb1] {
  display: block;
  padding: calc((var(--default-clickable-area) - 16px) / 2 + 1px);
}
.app-navigation-entry__icon-bullet div[data-v-938dadb1] {
  width: 14px;
  height: 14px;
  cursor: pointer;
  transition: background 100ms ease-in-out;
  border: none;
  border-radius: 50%;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNew-BcDuupzO.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNew-BcDuupzO.css ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-810cb824] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}

/* 'New' button */
.app-navigation-new[data-v-810cb824] {
  display: block;
  padding: calc(var(--default-grid-baseline, 4px) * 2);
}
.app-navigation-new button[data-v-810cb824] {
  width: 100%;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNewItem-fUP3wQTQ.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationNewItem-fUP3wQTQ.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-46fee9ac] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.app-navigation-entry[data-v-46fee9ac] {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  min-height: var(--default-clickable-area);
  transition: background-color var(--animation-quick) ease-in-out;
  transition: background-color 200ms ease-in-out;
  border-radius: var(--border-radius-element, var(--border-radius-pill));
  /* hide deletion/collapse of subitems */
}
.app-navigation-entry-wrapper[data-v-46fee9ac] {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
}
.app-navigation-entry-wrapper.app-navigation-entry--collapsible:not(.app-navigation-entry--opened) > ul[data-v-46fee9ac] {
  display: none;
}
.app-navigation-entry.active[data-v-46fee9ac] {
  background-color: var(--color-primary-element) !important;
}
.app-navigation-entry.active[data-v-46fee9ac]:hover {
  background-color: var(--color-primary-element-hover) !important;
}
.app-navigation-entry.active .app-navigation-entry-link[data-v-46fee9ac], .app-navigation-entry.active .app-navigation-entry-button[data-v-46fee9ac] {
  color: var(--color-primary-element-text) !important;
}
.app-navigation-entry[data-v-46fee9ac]:focus-within, .app-navigation-entry[data-v-46fee9ac]:hover {
  background-color: var(--color-background-hover);
}
.app-navigation-entry.active .app-navigation-entry__children[data-v-46fee9ac], .app-navigation-entry:focus-within .app-navigation-entry__children[data-v-46fee9ac], .app-navigation-entry:hover .app-navigation-entry__children[data-v-46fee9ac] {
  background-color: var(--color-main-background);
}
.app-navigation-entry.active .app-navigation-entry__utils .app-navigation-entry__actions[data-v-46fee9ac], .app-navigation-entry.app-navigation-entry--deleted .app-navigation-entry__utils .app-navigation-entry__actions[data-v-46fee9ac], .app-navigation-entry:focus .app-navigation-entry__utils .app-navigation-entry__actions[data-v-46fee9ac], .app-navigation-entry:focus-within .app-navigation-entry__utils .app-navigation-entry__actions[data-v-46fee9ac], .app-navigation-entry:hover .app-navigation-entry__utils .app-navigation-entry__actions[data-v-46fee9ac] {
  display: inline-block;
}
.app-navigation-entry.app-navigation-entry--deleted > ul[data-v-46fee9ac] {
  display: none;
}
.app-navigation-entry:not(.app-navigation-entry--editing) .app-navigation-entry-link[data-v-46fee9ac], .app-navigation-entry:not(.app-navigation-entry--editing) .app-navigation-entry-button[data-v-46fee9ac] {
  padding-inline-end: calc((var(--default-clickable-area) - 16px) / 2);
}
.app-navigation-entry .app-navigation-entry-link[data-v-46fee9ac], .app-navigation-entry .app-navigation-entry-button[data-v-46fee9ac] {
  z-index: 100; /* above the bullet to allow click*/
  display: flex;
  overflow: hidden;
  flex: 1 1 0;
  box-sizing: border-box;
  min-height: var(--default-clickable-area);
  padding: 0;
  white-space: nowrap;
  color: var(--color-main-text);
  background-repeat: no-repeat;
  background-position: calc((var(--default-clickable-area) - 16px) / 2) center;
  background-size: 16px 16px;
  line-height: var(--default-clickable-area);
}
.app-navigation-entry .app-navigation-entry-link .app-navigation-entry-icon[data-v-46fee9ac], .app-navigation-entry .app-navigation-entry-button .app-navigation-entry-icon[data-v-46fee9ac] {
  display: flex;
  align-items: center;
  flex: 0 0 var(--default-clickable-area);
  justify-content: center;
  width: var(--default-clickable-area);
  height: var(--default-clickable-area);
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: calc((var(--default-clickable-area) - 16px) / 2) center;
}
.app-navigation-entry .app-navigation-entry-link .app-navigation-entry__name[data-v-46fee9ac], .app-navigation-entry .app-navigation-entry-button .app-navigation-entry__name[data-v-46fee9ac] {
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.app-navigation-entry .app-navigation-entry-link .editingContainer[data-v-46fee9ac], .app-navigation-entry .app-navigation-entry-button .editingContainer[data-v-46fee9ac] {
  width: calc(100% - var(--default-clickable-area));
  margin: auto;
}
.app-navigation-entry .app-navigation-entry-link[data-v-46fee9ac]:focus-visible, .app-navigation-entry .app-navigation-entry-button[data-v-46fee9ac]:focus-visible {
  box-shadow: 0 0 0 4px var(--color-main-background);
  outline: 2px solid var(--color-main-text);
  border-radius: var(--border-radius-element, var(--border-radius-pill));
}
/* Second level nesting for lists */
.app-navigation-entry__children[data-v-46fee9ac] {
  position: relative;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  width: 100%;
  gap: var(--default-grid-baseline, 4px);
}
.app-navigation-entry__children .app-navigation-entry[data-v-46fee9ac] {
  display: inline-flex;
  flex-wrap: wrap;
  padding-inline-start: 16px;
}
/* Deleted entries */
.app-navigation-entry__deleted[data-v-46fee9ac] {
  display: inline-flex;
  flex: 1 1 0;
  padding-inline-start: calc(var(--default-clickable-area) - (var(--default-clickable-area) - 16px) / 2) !important;
}
.app-navigation-entry__deleted .app-navigation-entry__deleted-description[data-v-46fee9ac] {
  position: relative;
  overflow: hidden;
  flex: 1 1 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: var(--default-clickable-area);
}
/* counter and actions */
.app-navigation-entry__utils[data-v-46fee9ac] {
  display: flex;
  min-width: var(--default-clickable-area);
  align-items: center;
  flex: 0 1 auto;
  justify-content: flex-end;
  /* counter */
  /* actions */
}
.app-navigation-entry__utils.app-navigation-entry__utils--display-actions .action-item.app-navigation-entry__actions[data-v-46fee9ac] {
  display: inline-block;
}
.app-navigation-entry__utils .app-navigation-entry__counter-wrapper[data-v-46fee9ac] {
  margin-inline-end: calc(var(--default-grid-baseline) * 2);
  display: flex;
  align-items: center;
  flex: 0 1 auto;
}
.app-navigation-entry__utils .action-item.app-navigation-entry__actions[data-v-46fee9ac] {
  display: none;
}
/* editing state */
.app-navigation-entry--editing .app-navigation-entry-edit[data-v-46fee9ac] {
  z-index: 250;
  opacity: 1;
}
/* deleted state */
.app-navigation-entry--deleted .app-navigation-entry-deleted[data-v-46fee9ac] {
  z-index: 250;
  transform: translateX(0);
}
/* pinned state */
.app-navigation-entry--pinned[data-v-46fee9ac] {
  order: 2;
  margin-top: auto;
}
.app-navigation-entry--pinned ~ .app-navigation-entry--pinned[data-v-46fee9ac] {
  margin-top: 0;
}
[data-themes*=highcontrast] .app-navigation-entry[data-v-46fee9ac]:active {
  background-color: var(--color-primary-element-light-hover) !important;
}
.app-navigation-new-item__name[data-v-46fee9ac] {
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-inline-start: 7px;
  font-size: 14px;
}
.newItemContainer[data-v-46fee9ac] {
  width: calc(100% - var(--default-clickable-area));
  margin: auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationSettings-vd47rlNY.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcAppNavigationSettings-vd47rlNY.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-d278a327] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
#app-settings[data-v-d278a327] {
  margin-top: auto;
  padding: 3px;
}
#app-settings__header[data-v-d278a327] {
  box-sizing: border-box;
  margin: 0 3px 3px 3px;
}
#app-settings__header .settings-button[data-v-d278a327] {
  display: flex;
  flex: 1 1 0;
  height: var(--default-clickable-area);
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
  box-shadow: none;
  border: 0;
  border-radius: var(--body-container-radius);
  text-align: start;
  font-weight: normal;
  font-size: 100%;
  color: var(--color-main-text);
  padding-inline-end: 14px;
  line-height: var(--default-clickable-area);
}
#app-settings__header .settings-button[data-v-d278a327]:hover, #app-settings__header .settings-button[data-v-d278a327]:focus {
  background-color: var(--color-background-hover);
}
#app-settings__header .settings-button__icon[data-v-d278a327] {
  width: var(--default-clickable-area);
  height: var(--default-clickable-area);
  min-width: var(--default-clickable-area);
}
#app-settings__header .settings-button__label[data-v-d278a327] {
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#app-settings__content[data-v-d278a327] {
  display: block;
  padding: 10px;
  /* prevent scrolled contents from stopping too early */
  margin-bottom: -3px;
  /* restrict height of settings and make scrollable */
  max-height: 300px;
  overflow-y: auto;
  box-sizing: border-box;
}
.slide-up-leave-active[data-v-d278a327],
.slide-up-enter-active[data-v-d278a327] {
  transition-duration: var(--animation-slow);
  transition-property: max-height, padding;
  overflow-y: hidden !important;
}
.slide-up-enter[data-v-d278a327],
.slide-up-leave-to[data-v-d278a327] {
  max-height: 0 !important;
  padding: 0 10px !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcCollectionList-yjTCAR46.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcCollectionList-yjTCAR46.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-878b819f] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.fade-enter-active[data-v-878b819f], .fade-leave-active[data-v-878b819f] {
  transition: opacity 0.3s ease;
}
.fade-enter[data-v-878b819f], .fade-leave-to[data-v-878b819f] {
  opacity: 0;
}
.linked-icons[data-v-878b819f] {
  display: flex;
}
.linked-icons img[data-v-878b819f] {
  padding: 12px;
  height: 44px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
}
.linked-icons img[data-v-878b819f]:hover {
  opacity: 1;
}
.popovermenu[data-v-878b819f] {
  display: none;
}
.popovermenu.open[data-v-878b819f] {
  display: block;
}
li.collection-list-item[data-v-878b819f] {
  flex-wrap: wrap;
  height: auto;
  cursor: pointer;
  margin-bottom: 0 !important;
}
li.collection-list-item .collection-avatar[data-v-878b819f] {
  margin-top: 0;
}
li.collection-list-item form[data-v-878b819f], li.collection-list-item .collection-item-name[data-v-878b819f] {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
}
li.collection-list-item .collection-item-name[data-v-878b819f] {
  padding: 12px 9px;
}
li.collection-list-item input[data-v-878b819f] {
  margin-top: 4px;
  border-color: var(--color-border-maxcontrast);
}
li.collection-list-item input[type=text][data-v-878b819f] {
  flex-grow: 1;
}
li.collection-list-item .error[data-v-878b819f] {
  flex-basis: 100%;
  width: 100%;
}
li.collection-list-item .resource-list-details[data-v-878b819f] {
  flex-basis: 100%;
  width: 100%;
}
li.collection-list-item .resource-list-details li[data-v-878b819f] {
  display: flex;
  margin-left: 44px;
  border-radius: 3px;
  cursor: pointer;
}
li.collection-list-item .resource-list-details li[data-v-878b819f]:hover {
  background-color: var(--color-background-dark);
}
li.collection-list-item .resource-list-details li a[data-v-878b819f] {
  flex-grow: 1;
  padding: 3px;
  max-width: calc(100% - 30px);
  display: flex;
}
li.collection-list-item .resource-list-details span[data-v-878b819f] {
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
}
li.collection-list-item .resource-list-details span.resource-name[data-v-878b819f] {
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  white-space: nowrap;
  flex-grow: 1;
  padding: 4px;
}
li.collection-list-item .resource-list-details img[data-v-878b819f] {
  width: 24px;
  height: 24px;
}
li.collection-list-item .resource-list-details .icon-close[data-v-878b819f] {
  opacity: 0.7;
}
li.collection-list-item .resource-list-details .icon-close[data-v-878b819f]:hover, li.collection-list-item .resource-list-details .icon-close[data-v-878b819f]:focus {
  opacity: 1;
}
.should-shake[data-v-878b819f] {
  animation: shake-878b819f 0.6s 1 linear;
}
@keyframes shake-878b819f {
0% {
    transform: translate(15px);
}
20% {
    transform: translate(-15px);
}
40% {
    transform: translate(7px);
}
60% {
    transform: translate(-7px);
}
80% {
    transform: translate(3px);
}
100% {
    transform: translate(0px);
}
}/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-efe8beb8] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.collection-list *[data-v-efe8beb8] {
  box-sizing: border-box;
}
.collection-list > li[data-v-efe8beb8] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.collection-list > li > .avatar[data-v-efe8beb8] {
  margin-top: 0;
}
#collection-select-container[data-v-efe8beb8] {
  display: flex;
  flex-direction: column;
}
.v-select span.avatar[data-v-efe8beb8] {
  display: block;
  padding: 16px;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-position: center;
}
.v-select span.avatar[data-v-efe8beb8]:hover {
  opacity: 1;
}
p.hint[data-v-efe8beb8] {
  z-index: 1;
  margin-top: -16px;
  padding: 8px 8px;
  color: var(--color-text-maxcontrast);
  line-height: normal;
}
div.avatar[data-v-efe8beb8] {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 8px;
  background-color: var(--color-background-dark);
  margin-top: 30px;
}

/** TODO provide white icon in core */
.icon-projects[data-v-efe8beb8] {
  display: block;
  padding: 8px;
  background-repeat: no-repeat;
  background-position: center;
}
.option__wrapper[data-v-efe8beb8] {
  display: flex;
}
.option__wrapper .avatar[data-v-efe8beb8] {
  display: block;
  width: 32px;
  height: 32px;
  background-color: var(--color-background-darker) !important;
}
.option__wrapper .option__title[data-v-efe8beb8] {
  padding: 4px;
}
.fade-enter-active[data-v-efe8beb8], .fade-leave-active[data-v-efe8beb8] {
  transition: opacity 0.5s;
}
.fade-enter[data-v-efe8beb8], .fade-leave-to[data-v-efe8beb8] {
  opacity: 0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcGuestContent-B0ivUQHg.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcGuestContent-B0ivUQHg.css ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-cbad78fb] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
#guest-content-vue[data-v-cbad78fb] {
  color: var(--color-main-text);
  background-color: var(--color-main-background);
  min-width: 0;
  border-radius: var(--border-radius-large);
  box-shadow: 0 0 10px var(--color-box-shadow);
  height: fit-content;
  padding: 15px;
  margin: 20px auto;
}/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
#content.nc-guest-content {
  overflow: auto;
  margin-bottom: 0;
  height: calc(var(--body-height) + var(--body-container-margin));
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcHeaderButton-BPkJ5wxD.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcHeaderButton-BPkJ5wxD.css ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-6be13bb0] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.header-menu[data-v-6be13bb0] {
  position: relative;
  width: var(--header-height);
  height: var(--header-height);
}
.header-menu .header-menu__trigger[data-v-6be13bb0] {
  --button-size: var(--header-height) !important;
  height: var(--header-height);
  opacity: 0.85;
  filter: none !important;
  color: var(--color-background-plain-text, var(--color-primary-text)) !important;
}
.header-menu .header-menu__trigger[data-v-6be13bb0]:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}
.header-menu--opened .header-menu__trigger[data-v-6be13bb0], .header-menu__trigger[data-v-6be13bb0]:hover, .header-menu__trigger[data-v-6be13bb0]:focus, .header-menu__trigger[data-v-6be13bb0]:active {
  opacity: 1;
}
@media only screen and (max-width: 512px) {
.header-menu[data-v-6be13bb0] {
    width: var(--default-clickable-area);
}
.header-menu .header-menu__trigger[data-v-6be13bb0] {
    --button-size: var(--default-clickable-area) !important;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcRelatedResourcesPanel-DSf7TVcC.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcRelatedResourcesPanel-DSf7TVcC.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-799fdf5d] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.team-resources__header[data-v-799fdf5d] {
  font-weight: bold;
  margin-bottom: 6px;
}
.related-team[data-v-799fdf5d] {
  border-radius: var(--border-radius-rounded);
  border: 2px solid var(--color-border-dark);
  margin-bottom: 6px;
}
.related-team__open[data-v-799fdf5d] {
  border-color: var(--color-primary-element);
}
.related-team__header[data-v-799fdf5d] {
  padding: 6px;
  padding-right: 24px;
  display: flex;
  gap: 12px;
}
.related-team__name[data-v-799fdf5d] {
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  font-weight: bold;
  margin: 0;
}
.related-team .related-team-provider[data-v-799fdf5d] {
  padding: 6px 12px;
}
.related-team .related-team-provider__name[data-v-799fdf5d] {
  font-weight: bold;
  margin-bottom: 3px;
}
.related-team .related-team-provider__link[data-v-799fdf5d] {
  display: flex;
  gap: 12px;
  padding: 6px 12px;
  font-weight: bold;
}
.related-team .related-team-resource__link[data-v-799fdf5d] {
  display: flex;
  gap: 12px;
  height: var(--default-clickable-area);
  align-items: center;
  border-radius: var(--border-radius-large);
}
.related-team .related-team-resource__link[data-v-799fdf5d]:hover {
  background-color: var(--color-background-hover);
}
.related-team .related-team-resource__link[data-v-799fdf5d]:focus {
  background-color: var(--color-background-hover);
  outline: 2px solid var(--color-primary-element);
}
.related-team .related-team-resource .resource__icon[data-v-799fdf5d] {
  width: var(--default-clickable-area);
  height: var(--default-clickable-area);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.related-team .related-team-resource .resource__icon > img[data-v-799fdf5d] {
  border-radius: var(--border-radius-pill);
  overflow: hidden;
  width: 32px;
  height: 32px;
}/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-ac1115a7] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.resource[data-v-ac1115a7] {
  display: flex;
  align-items: center;
  height: var(--default-clickable-area);
}
.resource__button[data-v-ac1115a7] {
  width: 100% !important;
  justify-content: flex-start !important;
  padding: 0 !important;
}
.resource__button[data-v-ac1115a7] .button-vue__wrapper {
  justify-content: flex-start !important;
}
.resource__button[data-v-ac1115a7] .button-vue__wrapper .button-vue__text {
  font-weight: normal !important;
  margin-left: 2px !important;
}
.resource__icon[data-v-ac1115a7] {
  width: 32px;
  height: 32px;
  background-color: var(--color-text-maxcontrast);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.resource__icon img[data-v-ac1115a7] {
  width: 16px;
  height: 16px;
  filter: var(--background-invert-if-dark);
}/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-badd46a9] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.related-resources__header h5[data-v-badd46a9] {
  font-weight: bold;
  margin-bottom: 6px;
}
.related-resources__header p[data-v-badd46a9] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcSettingsInputText-Bsp_6DjJ.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/vue/dist/assets/NcSettingsInputText-Bsp_6DjJ.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-0907eb0a] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.input-wrapper[data-v-0907eb0a] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
}
.input-wrapper .action-input__label[data-v-0907eb0a] {
  margin-right: 12px;
}
.input-wrapper[data-v-0907eb0a]:disabled {
  cursor: default;
}
.input-wrapper .hint[data-v-0907eb0a] {
  color: var(--color-text-maxcontrast);
  margin-left: 8px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e";

/***/ })

}]);
//# sourceMappingURL=data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Google_20Inc_20-_20SPDX-Lice-4c340f-data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Google_20Inc_20-_20SPDX-Lice-4c340f.js.map?v=2eddb4f5722e194258dc