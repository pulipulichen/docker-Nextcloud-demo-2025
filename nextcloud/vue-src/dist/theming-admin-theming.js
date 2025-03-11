/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/theming/src/admin-settings.js":
/*!********************************************!*\
  !*** ./apps/theming/src/admin-settings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _AdminTheming_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTheming.vue */ "./apps/theming/src/AdminTheming.vue");
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




// eslint-disable-next-line camelcase
__webpack_require__.nc = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCSPNonce)();
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_AdminTheming_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
const theming = new View();
theming.$mount('#admin-theming');

/***/ }),

/***/ "./apps/theming/src/helpers/refreshStyles.js":
/*!***************************************************!*\
  !*** ./apps/theming/src/helpers/refreshStyles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshStyles: () => (/* binding */ refreshStyles)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Refresh server-side generated theming CSS
 * This resolves when all themes are reloaded
 */
async function refreshStyles() {
  const themes = [...document.head.querySelectorAll('link.theme')];
  const promises = themes.map(theme => new Promise(resolve => {
    const url = new URL(theme.href);
    url.searchParams.set('v', Date.now());
    const newTheme = theme.cloneNode();
    newTheme.href = url.toString();
    newTheme.onload = () => {
      theme.remove();
      resolve();
    };
    document.head.append(newTheme);
  }));

  // Wait until all themes are loaded
  await Promise.allSettled(promises);
}

/***/ }),

/***/ "./apps/theming/src/mixins/admin/FieldMixin.js":
/*!*****************************************************!*\
  !*** ./apps/theming/src/mixins/admin/FieldMixin.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const styleRefreshFields = ['color', 'logo', 'background', 'logoheader', 'favicon', 'disable-user-theming'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ['update:theming'],
  data() {
    return {
      showSuccess: false,
      errorMessage: ''
    };
  },
  computed: {
    id() {
      return `admin-theming-${this.name}`;
    }
  },
  methods: {
    reset() {
      this.showSuccess = false;
      this.errorMessage = '';
    },
    handleSuccess() {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 2000);
      if (styleRefreshFields.includes(this.name)) {
        this.$emit('update:theming');
      }
    }
  }
});

/***/ }),

/***/ "./apps/theming/src/mixins/admin/TextValueMixin.js":
/*!*********************************************************!*\
  !*** ./apps/theming/src/mixins/admin/TextValueMixin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _FieldMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldMixin.js */ "./apps/theming/src/mixins/admin/FieldMixin.js");
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_FieldMixin_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  watch: {
    value(value) {
      this.localValue = value;
    }
  },
  data() {
    return {
      /** @type {string|boolean} */
      localValue: this.value
    };
  },
  computed: {
    valueToPost() {
      if (this.type === 'url') {
        // if this is already encoded just make sure there is no doublequote (HTML XSS)
        // otherwise simply URL encode
        return this.isUrlEncoded(this.localValue) ? this.localValue.replaceAll('"', '%22') : encodeURI(this.localValue);
      }
      // Convert boolean to string as server expects string value
      if (typeof this.localValue === 'boolean') {
        return this.localValue ? 'yes' : 'no';
      }
      return this.localValue;
    }
  },
  methods: {
    /**
     * Check if URL is percent-encoded
     * @param {string} url The URL to check
     * @return {boolean}
     */
    isUrlEncoded(url) {
      try {
        return decodeURI(url) !== url;
      } catch {
        return false;
      }
    },
    async save() {
      this.reset();
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/updateStylesheet');
      try {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          setting: this.name,
          value: this.valueToPost
        });
        this.$emit('update:value', this.localValue);
        this.handleSuccess();
      } catch (e) {
        console.error('Failed to save changes', e);
        this.errorMessage = e.response?.data.data?.message;
      }
    },
    async undo() {
      this.reset();
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/undoChanges');
      try {
        const {
          data
        } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          setting: this.name
        });
        if (data.data.value) {
          this.$emit('update:defaultValue', data.data.value);
        }
        this.$emit('update:value', data.data.value || this.defaultValue);
        this.handleSuccess();
      } catch (e) {
        this.errorMessage = e.response.data.data?.message;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _vueuse_integrations_useSortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueuse/integrations/useSortable */ "./node_modules/@vueuse/integrations/useSortable.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _AppOrderSelectorElement_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppOrderSelectorElement.vue */ "./apps/theming/src/components/AppOrderSelectorElement.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  name: 'AppOrderSelector',
  components: {
    AppOrderSelectorElement: _AppOrderSelectorElement_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_1__.Fragment
  },
  props: {
    /**
     * Details like status information that need to be forwarded to the interactive elements
     */
    ariaDetails: {
      type: String,
      default: null
    },
    /**
     * List of apps to reorder
     */
    value: {
      type: Array,
      required: true
    }
  },
  emits: {
    /**
     * Update the apps list on reorder
     * @param value The new value of the app list
     */
    'update:value': value => Array.isArray(value)
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    /**
     * The Element that contains the app list
     */
    const listElement = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    /**
     * The app list with setter that will ement the `update:value` event
     */
    const appList = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)({
      get: () => props.value,
      // Ensure the sortable.js does not mess with the default attribute
      set: list => {
        const newValue = [...list].sort((a, b) => (b.default ? 1 : 0) - (a.default ? 1 : 0) || list.indexOf(a) - list.indexOf(b));
        if (newValue.some((_ref2, index) => {
          let {
            id
          } = _ref2;
          return id !== props.value[index].id;
        })) {
          emit('update:value', newValue);
        } else {
          // forceUpdate as the DOM has changed because of a drag event, but the reactive state has not -> wrong state
          renderCount.value += 1;
        }
      }
    });
    /**
     * Helper to force rerender the list in case of a invalid drag event
     */
    const renderCount = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);
    /**
     * Handle drag & drop sorting
     */
    (0,_vueuse_integrations_useSortable__WEBPACK_IMPORTED_MODULE_4__.useSortable)(listElement, appList, {
      filter: '.order-selector-element--disabled'
    });
    /**
     * Array of all AppOrderSelectorElement components used to for keeping the focus after button click
     */
    const selectorElements = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    /**
     * We use the updated hook here to verify all selector elements keep the focus on the last pressed button
     * This is needed to be done in this component to make sure Sortable.JS has finished sorting the elements before focussing an element
     */
    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onUpdated)(() => {
      selectorElements.value.forEach(element => element.keepFocus());
    });
    /**
     * Handle element is moved up
     * @param index The index of the element that is moved
     */
    const moveUp = index => {
      const before = index > 1 ? props.value.slice(0, index - 1) : [];
      // skip if not possible, because of default default app
      if (props.value[index - 1]?.default) {
        return;
      }
      const after = [props.value[index - 1]];
      if (index < props.value.length - 1) {
        after.push(...props.value.slice(index + 1));
      }
      emit('update:value', [...before, props.value[index], ...after]);
    };
    /**
     * Handle element is moved down
     * @param index The index of the element that is moved
     */
    const moveDown = index => {
      const before = index > 0 ? props.value.slice(0, index) : [];
      before.push(props.value[index + 1]);
      const after = index < props.value.length - 2 ? props.value.slice(index + 2) : [];
      emit('update:value', [...before, props.value[index], ...after]);
    };
    /**
     * Additional status information to show to screen reader users for accessibility
     */
    const statusInfo = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)('');
    /**
     * ID to be used on the status info element
     */
    const statusInfoId = `sorting-status-info-${(Math.random() + 1).toString(36).substring(7)}`;
    /**
     * Update the status information for the currently selected app
     * @param index Index of the app that is currently selected
     */
    const updateStatusInfo = index => {
      statusInfo.value = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('theming', 'Current selected app: {app}, position {position} of {total}', {
        app: props.value[index].label,
        position: index + 1,
        total: props.value.length
      });
    };
    return {
      appList,
      listElement,
      moveDown,
      moveUp,
      statusInfoId,
      statusInfo,
      updateStatusInfo,
      renderCount,
      selectorElements
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_material_design_icons_ArrowDown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/ArrowDown.vue */ "./node_modules/vue-material-design-icons/ArrowDown.vue");
/* harmony import */ var vue_material_design_icons_ArrowUp_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/ArrowUp.vue */ "./node_modules/vue-material-design-icons/ArrowUp.vue");
/* harmony import */ var _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/components/NcButton */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  name: 'AppOrderSelectorElement',
  components: {
    IconArrowDown: vue_material_design_icons_ArrowDown_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconArrowUp: vue_material_design_icons_ArrowUp_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcButton: _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    /**
     * Needs to be forwarded to the buttons (as interactive elements)
     */
    ariaDescribedby: {
      type: String,
      default: null
    },
    ariaDetails: {
      type: String,
      default: null
    },
    app: {
      type: Object,
      required: true
    },
    isFirst: {
      type: Boolean,
      default: false
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'move:up': () => true,
    'move:down': () => true,
    /**
     * We need this as Sortable.js removes all native focus event listeners
     */
    'update:focus': () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const buttonUp = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)();
    const buttonDown = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)();
    /**
     * Used to decide if we need to trigger focus() an a button on update
     */
    let needsFocus = 0;
    /**
     * Handle move up, ensure focus is kept on the button
     */
    const moveUp = () => {
      emit('move:up');
      needsFocus = 1; // request focus on buttonUp
    };
    /**
     * Handle move down, ensure focus is kept on the button
     */
    const moveDown = () => {
      emit('move:down');
      needsFocus = -1; // request focus on buttonDown
    };
    /**
     * Reset the focus on the last used button.
     * If the button is now visible anymore (because this element is the first/last) then the opposite button is focussed
     *
     * This function is exposed to the "AppOrderSelector" component which triggers this when the list was successfully rerendered
     */
    const keepFocus = () => {
      if (needsFocus !== 0) {
        // focus requested
        if ((needsFocus === 1 || props.isLast) && !props.isFirst) {
          // either requested to btn up and it is not the first, or it was requested to btn down but it is the last
          (0,vue__WEBPACK_IMPORTED_MODULE_4__.nextTick)(() => buttonUp.value.$el.focus());
        } else {
          (0,vue__WEBPACK_IMPORTED_MODULE_4__.nextTick)(() => buttonDown.value.$el.focus());
        }
      }
      needsFocus = 0;
    };
    return {
      buttonUp,
      buttonDown,
      moveUp,
      moveDown,
      keepFocus,
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/components/NcCheckboxRadioSwitch */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.mjs");
/* harmony import */ var _nextcloud_vue_components_NcSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/components/NcSelect */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _nextcloud_vue_components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/components/NcSettingsSection */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.mjs");
/* harmony import */ var _AppOrderSelector_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AppOrderSelector.vue */ "./apps/theming/src/components/AppOrderSelector.vue");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_9__.defineComponent)({
  name: 'AppMenuSection',
  components: {
    AppOrderSelector: _AppOrderSelector_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    NcCheckboxRadioSwitch: _nextcloud_vue_components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcSelect: _nextcloud_vue_components_NcSelect__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcSettingsSection: _nextcloud_vue_components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    defaultApps: {
      type: Array,
      required: true
    }
  },
  emits: {
    'update:defaultApps': value => Array.isArray(value) && value.every(id => typeof id === 'string')
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const hasCustomDefaultApp = (0,vue__WEBPACK_IMPORTED_MODULE_9__.computed)({
      get: () => props.defaultApps.length > 0,
      set: checked => {
        if (checked) {
          emit('update:defaultApps', ['dashboard', 'files']);
        } else {
          selectedApps.value = [];
        }
      }
    });
    /**
     * All enabled apps which can be navigated
     */
    const allApps = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('core', 'apps').map(_ref2 => {
      let {
        id,
        name,
        icon
      } = _ref2;
      return {
        label: name,
        id,
        icon
      };
    });
    /**
     * Currently selected app, wrapps the setter
     */
    const selectedApps = (0,vue__WEBPACK_IMPORTED_MODULE_9__.computed)({
      get: () => props.defaultApps.map(id => allApps.filter(app => app.id === id)[0]),
      set(value) {
        saveSetting('defaultApps', value.map(app => app.id)).then(() => emit('update:defaultApps', value.map(app => app.id))).catch(() => (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('theming', 'Could not set global default apps')));
      }
    });
    const saveSetting = async (key, value) => {
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateUrl)('/apps/theming/ajax/updateAppMenu');
      return await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(url, {
        setting: key,
        value
      });
    };
    return {
      allApps,
      selectedApps,
      hasCustomDefaultApp,
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _helpers_refreshStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/refreshStyles.js */ "./apps/theming/src/helpers/refreshStyles.js");
/* harmony import */ var _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/components/NcNoteCard */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var _nextcloud_vue_components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/components/NcSettingsSection */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.mjs");
/* harmony import */ var _components_admin_CheckboxField_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/CheckboxField.vue */ "./apps/theming/src/components/admin/CheckboxField.vue");
/* harmony import */ var _components_admin_ColorPickerField_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/ColorPickerField.vue */ "./apps/theming/src/components/admin/ColorPickerField.vue");
/* harmony import */ var _components_admin_FileInputField_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/FileInputField.vue */ "./apps/theming/src/components/admin/FileInputField.vue");
/* harmony import */ var _components_admin_TextField_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/TextField.vue */ "./apps/theming/src/components/admin/TextField.vue");
/* harmony import */ var _components_admin_AppMenuSection_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/AppMenuSection.vue */ "./apps/theming/src/components/admin/AppMenuSection.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");









const {
  defaultBackgroundURL,
  backgroundMime,
  backgroundURL,
  backgroundColor,
  canThemeIcons,
  docUrl,
  docUrlIcons,
  faviconMime,
  isThemable,
  legalNoticeUrl,
  logoheaderMime,
  logoMime,
  name,
  notThemableErrorMessage,
  primaryColor,
  privacyPolicyUrl,
  slogan,
  url,
  userThemingDisabled,
  defaultApps
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('theming', 'adminThemingParameters');
const textFields = [{
  name: 'name',
  value: name,
  defaultValue: 'Nextcloud',
  type: 'text',
  displayName: t('theming', 'Name'),
  placeholder: t('theming', 'Name'),
  maxlength: 250
}, {
  name: 'url',
  value: url,
  defaultValue: 'https://nextcloud.com',
  type: 'url',
  displayName: t('theming', 'Web link'),
  placeholder: 'https://…',
  maxlength: 500
}, {
  name: 'slogan',
  value: slogan,
  defaultValue: t('theming', 'a safe home for all your data'),
  type: 'text',
  displayName: t('theming', 'Slogan'),
  placeholder: t('theming', 'Slogan'),
  maxlength: 500
}];
const primaryColorPickerField = {
  name: 'primary_color',
  value: primaryColor,
  defaultValue: '#0082c9',
  displayName: t('theming', 'Primary color'),
  description: t('theming', 'The primary color is used for highlighting elements like important buttons. It might get slightly adjusted depending on the current color schema.')
};
const advancedTextFields = [{
  name: 'imprintUrl',
  value: legalNoticeUrl,
  defaultValue: '',
  type: 'url',
  displayName: t('theming', 'Legal notice link'),
  placeholder: 'https://…',
  maxlength: 500
}, {
  name: 'privacyUrl',
  value: privacyPolicyUrl,
  defaultValue: '',
  type: 'url',
  displayName: t('theming', 'Privacy policy link'),
  placeholder: 'https://…',
  maxlength: 500
}];
const advancedFileInputFields = [{
  name: 'logoheader',
  mimeName: 'logoheaderMime',
  mimeValue: logoheaderMime,
  defaultMimeValue: '',
  displayName: t('theming', 'Header logo'),
  ariaLabel: t('theming', 'Upload new header logo')
}, {
  name: 'favicon',
  mimeName: 'faviconMime',
  mimeValue: faviconMime,
  defaultMimeValue: '',
  displayName: t('theming', 'Favicon'),
  ariaLabel: t('theming', 'Upload new favicon')
}];
const userThemingField = {
  name: 'disable-user-theming',
  value: userThemingDisabled,
  defaultValue: false,
  displayName: t('theming', 'User settings'),
  label: t('theming', 'Disable user theming'),
  description: t('theming', 'Although you can select and customize your instance, users can change their background and colors. If you want to enforce your customization, you can toggle this on.')
};
const __default__ = {
  name: 'AdminTheming',
  components: {
    AppMenuSection: _components_admin_AppMenuSection_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    CheckboxField: _components_admin_CheckboxField_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ColorPickerField: _components_admin_ColorPickerField_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FileInputField: _components_admin_FileInputField_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcNoteCard: _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcSettingsSection: _nextcloud_vue_components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_3__["default"],
    TextField: _components_admin_TextField_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data() {
    return {
      backgroundMime,
      backgroundURL,
      backgroundColor,
      defaultBackgroundColor: '#0069c3',
      logoMime,
      textFields,
      primaryColorPickerField,
      advancedTextFields,
      advancedFileInputFields,
      userThemingField,
      defaultApps,
      canThemeIcons,
      docUrl,
      docUrlIcons,
      isThemable,
      notThemableErrorMessage
    };
  },
  computed: {
    cssBackgroundImage() {
      if (this.backgroundURL) {
        return `url('${this.backgroundURL}')`;
      }
      return 'unset';
    }
  },
  watch: {
    backgroundMime() {
      if (this.backgroundMime === '') {
        // Reset URL to default value for preview
        this.backgroundURL = defaultBackgroundURL;
      } else if (this.backgroundMime === 'backgroundColor') {
        // Reset URL to empty image when only color is configured
        this.backgroundURL = '';
      }
    },
    async backgroundURL() {
      // When the background is changed we need to emulate the background color change
      if (this.backgroundURL !== '') {
        const color = await this.calculateDefaultBackground();
        this.defaultBackgroundColor = color;
        this.backgroundColor = color;
      }
    }
  },
  async mounted() {
    if (this.backgroundURL) {
      this.defaultBackgroundColor = await this.calculateDefaultBackground();
    }
  },
  methods: {
    refreshStyles: _helpers_refreshStyles_js__WEBPACK_IMPORTED_MODULE_1__.refreshStyles,
    /**
     * Same as on server - if a user uploads an image the mean color will be set as the background color
     */
    calculateDefaultBackground() {
      const toHex = num => `00${num.toString(16)}`.slice(-2);
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = this.backgroundURL;
        img.onload = () => {
          const context = document.createElement('canvas').getContext('2d');
          context.imageSmoothingEnabled = true;
          context.drawImage(img, 0, 0, 1, 1);
          resolve('#' + [...context.getImageData(0, 0, 1, 1).data.slice(0, 3)].map(toHex).join(''));
        };
        img.onerror = reject;
      });
    }
  }
};

const __injectCSSVars__ = () => {
  (0,vue__WEBPACK_IMPORTED_MODULE_9__.useCssVars)((_vm, _setup) => ({
    "c42c152c-backgroundColor": _vm.backgroundColor,
    "c42c152c-cssBackgroundImage": _vm.cssBackgroundImage
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/components/NcCheckboxRadioSwitch */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.mjs");
/* harmony import */ var _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/components/NcNoteCard */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var _mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/admin/TextValueMixin.js */ "./apps/theming/src/mixins/admin/TextValueMixin.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CheckboxField',
  components: {
    NcCheckboxRadioSwitch: _nextcloud_vue_components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcNoteCard: _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    defaultValue: {
      type: Boolean,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/components/NcButton */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_components_NcColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/components/NcColorPicker */ "./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.mjs");
/* harmony import */ var _nextcloud_vue_components_NcLoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/components/NcLoadingIcon */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/components/NcNoteCard */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/UndoVariant.vue */ "./node_modules/vue-material-design-icons/UndoVariant.vue");
/* harmony import */ var vue_material_design_icons_Palette_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/Palette.vue */ "./node_modules/vue-material-design-icons/Palette.vue");
/* harmony import */ var _mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/admin/TextValueMixin.js */ "./apps/theming/src/mixins/admin/TextValueMixin.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");









const __default__ = {
  name: 'ColorPickerField',
  components: {
    NcButton: _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcColorPicker: _nextcloud_vue_components_NcColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcLoadingIcon: _nextcloud_vue_components_NcLoadingIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcNoteCard: _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_3__["default"],
    Undo: vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Palette: vue_material_design_icons_Palette_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      default: null
    },
    defaultValue: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    }
  },
  emits: ['update:theming'],
  data() {
    return {
      loading: false
    };
  },
  computed: {
    calculatedTextColor() {
      const color = (0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(this.value);
      return color.isLight() ? '#000000' : '#ffffff';
    },
    usedTextColor() {
      if (this.textColor) {
        return this.textColor;
      }
      return this.calculatedTextColor;
    }
  },
  methods: {
    debounceSave: debounce__WEBPACK_IMPORTED_MODULE_8___default()(async function () {
      this.loading = true;
      await this.save();
      this.$emit('update:theming');
      this.loading = false;
    }, 200)
  }
};

const __injectCSSVars__ = () => {
  (0,vue__WEBPACK_IMPORTED_MODULE_9__.useCssVars)((_vm, _setup) => ({
    "041d23df-value": _vm.value,
    "041d23df-usedTextColor": _vm.usedTextColor
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/components/NcButton */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_components_NcLoadingIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/components/NcLoadingIcon */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/components/NcNoteCard */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/UndoVariant.vue */ "./node_modules/vue-material-design-icons/UndoVariant.vue");
/* harmony import */ var vue_material_design_icons_Upload_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/Upload.vue */ "./node_modules/vue-material-design-icons/Upload.vue");
/* harmony import */ var _mixins_admin_FieldMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/admin/FieldMixin.js */ "./apps/theming/src/mixins/admin/FieldMixin.js");










const {
  allowedMimeTypes
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('theming', 'adminThemingParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FileInputField',
  components: {
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcButton: _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcLoadingIcon: _nextcloud_vue_components_NcLoadingIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcNoteCard: _nextcloud_vue_components_NcNoteCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    Undo: vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Upload: vue_material_design_icons_Upload_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_mixins_admin_FieldMixin_js__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    mimeName: {
      type: String,
      required: true
    },
    mimeValue: {
      type: String,
      required: true
    },
    defaultMimeValue: {
      type: String,
      default: ''
    },
    displayName: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showLoading: false,
      acceptMime: (allowedMimeTypes[this.name] || ['image/jpeg', 'image/png', 'image/gif', 'image/webp']).join(',')
    };
  },
  computed: {
    showReset() {
      return this.mimeValue !== this.defaultMimeValue;
    },
    showRemove() {
      if (this.name === 'background') {
        if (this.mimeValue.startsWith('image/')) {
          return true;
        }
        if (this.mimeValue === this.defaultMimeValue) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    activateLocalFilePicker() {
      this.reset();
      // Set to null so that selecting the same file will trigger the change event
      this.$refs.input.value = null;
      this.$refs.input.click();
    },
    async onChange(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('key', this.name);
      formData.append('image', file);
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/uploadImage');
      try {
        this.showLoading = true;
        const {
          data
        } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formData);
        this.showLoading = false;
        this.$emit('update:mime-value', file.type);
        this.$emit('uploaded', data.data.url);
        this.handleSuccess();
      } catch (e) {
        this.showLoading = false;
        this.errorMessage = e.response.data.data?.message;
      }
    },
    async undo() {
      this.reset();
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/undoChanges');
      try {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          setting: this.mimeName
        });
        this.$emit('update:mime-value', this.defaultMimeValue);
        this.handleSuccess();
      } catch (e) {
        this.errorMessage = e.response.data.data?.message;
      }
    },
    async removeBackground() {
      this.reset();
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/updateStylesheet');
      try {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          setting: this.mimeName,
          value: 'backgroundColor'
        });
        this.$emit('update:mime-value', 'backgroundColor');
        this.handleSuccess();
      } catch (e) {
        this.errorMessage = e.response.data.data?.message;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_components_NcTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/components/NcTextField */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.mjs");
/* harmony import */ var _mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/admin/TextValueMixin.js */ "./apps/theming/src/mixins/admin/TextValueMixin.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TextField',
  components: {
    NcTextField: _nextcloud_vue_components_NcTextField__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    maxlength: {
      type: Number,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", [_c("NcSettingsSection", {
    attrs: {
      name: _vm.t("theming", "Theming"),
      description: _vm.t("theming", "Theming makes it possible to easily customize the look and feel of your instance and supported clients. This will be visible for all users."),
      "doc-url": _vm.docUrl,
      "data-admin-theming-settings": ""
    }
  }, [_c("div", {
    staticClass: "admin-theming"
  }, [!_vm.isThemable ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.notThemableErrorMessage))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.textFields, function (field) {
    return _c("TextField", {
      key: field.name,
      attrs: {
        "data-admin-theming-setting-field": field.name,
        "default-value": field.defaultValue,
        "display-name": field.displayName,
        maxlength: field.maxlength,
        name: field.name,
        placeholder: field.placeholder,
        type: field.type,
        value: field.value
      },
      on: {
        "update:value": function ($event) {
          return _vm.$set(field, "value", $event);
        },
        "update:theming": _vm.refreshStyles
      }
    });
  }), _vm._v(" "), _c("ColorPickerField", {
    attrs: {
      name: _vm.primaryColorPickerField.name,
      description: _vm.primaryColorPickerField.description,
      "default-value": _vm.primaryColorPickerField.defaultValue,
      "display-name": _vm.primaryColorPickerField.displayName,
      value: _vm.primaryColorPickerField.value,
      "data-admin-theming-setting-primary-color": ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.primaryColorPickerField, "value", $event);
      },
      "update:theming": _vm.refreshStyles
    }
  }), _vm._v(" "), _c("ColorPickerField", {
    attrs: {
      name: "background_color",
      description: _vm.t("theming", "Instead of a background image you can also configure a plain background color. If you use a background image changing this color will influence the color of the app menu icons."),
      "default-value": _vm.defaultBackgroundColor,
      "display-name": _vm.t("theming", "Background color"),
      value: _vm.backgroundColor,
      "data-admin-theming-setting-background-color": ""
    },
    on: {
      "update:defaultValue": function ($event) {
        _vm.defaultBackgroundColor = $event;
      },
      "update:default-value": function ($event) {
        _vm.defaultBackgroundColor = $event;
      },
      "update:value": function ($event) {
        _vm.backgroundColor = $event;
      },
      "update:theming": _vm.refreshStyles
    }
  }), _vm._v(" "), _c("FileInputField", {
    attrs: {
      "aria-label": _vm.t("theming", "Upload new logo"),
      "data-admin-theming-setting-file": "logo",
      "display-name": _vm.t("theming", "Logo"),
      "mime-name": "logoMime",
      "mime-value": _vm.logoMime,
      name: "logo"
    },
    on: {
      "update:mimeValue": function ($event) {
        _vm.logoMime = $event;
      },
      "update:mime-value": function ($event) {
        _vm.logoMime = $event;
      },
      "update:theming": _vm.refreshStyles
    }
  }), _vm._v(" "), _c("FileInputField", {
    attrs: {
      "aria-label": _vm.t("theming", "Upload new background and login image"),
      "data-admin-theming-setting-file": "background",
      "display-name": _vm.t("theming", "Background and login image"),
      "mime-name": "backgroundMime",
      "mime-value": _vm.backgroundMime,
      name: "background"
    },
    on: {
      "update:mimeValue": function ($event) {
        _vm.backgroundMime = $event;
      },
      "update:mime-value": function ($event) {
        _vm.backgroundMime = $event;
      },
      uploaded: function ($event) {
        _vm.backgroundURL = $event;
      },
      "update:theming": _vm.refreshStyles
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "admin-theming__preview",
    attrs: {
      "data-admin-theming-preview": ""
    }
  }, [_c("div", {
    staticClass: "admin-theming__preview-logo",
    attrs: {
      "data-admin-theming-preview-logo": ""
    }
  })])], 2)]), _vm._v(" "), _c("NcSettingsSection", {
    attrs: {
      name: _vm.t("theming", "Advanced options")
    }
  }, [_c("div", {
    staticClass: "admin-theming-advanced"
  }, [_vm._l(_vm.advancedTextFields, function (field) {
    return _c("TextField", {
      key: field.name,
      attrs: {
        name: field.name,
        value: field.value,
        "default-value": field.defaultValue,
        type: field.type,
        "display-name": field.displayName,
        placeholder: field.placeholder,
        maxlength: field.maxlength
      },
      on: {
        "update:value": function ($event) {
          return _vm.$set(field, "value", $event);
        },
        "update:theming": _vm.refreshStyles
      }
    });
  }), _vm._v(" "), _vm._l(_vm.advancedFileInputFields, function (field) {
    return _c("FileInputField", {
      key: field.name,
      attrs: {
        name: field.name,
        "mime-name": field.mimeName,
        "mime-value": field.mimeValue,
        "default-mime-value": field.defaultMimeValue,
        "display-name": field.displayName,
        "aria-label": field.ariaLabel
      },
      on: {
        "update:mimeValue": function ($event) {
          return _vm.$set(field, "mimeValue", $event);
        },
        "update:mime-value": function ($event) {
          return _vm.$set(field, "mimeValue", $event);
        },
        "update:theming": _vm.refreshStyles
      }
    });
  }), _vm._v(" "), _c("CheckboxField", {
    attrs: {
      name: _vm.userThemingField.name,
      value: _vm.userThemingField.value,
      "default-value": _vm.userThemingField.defaultValue,
      "display-name": _vm.userThemingField.displayName,
      label: _vm.userThemingField.label,
      description: _vm.userThemingField.description,
      "data-admin-theming-setting-disable-user-theming": ""
    },
    on: {
      "update:theming": _vm.refreshStyles
    }
  }), _vm._v(" "), !_vm.canThemeIcons ? _c("a", {
    attrs: {
      href: _vm.docUrlIcons,
      rel: "noreferrer noopener"
    }
  }, [_c("em", [_vm._v(_vm._s(_vm.t("theming", "Install the ImageMagick PHP extension with support for SVG images to automatically generate favicons based on the uploaded logo and color.")))])]) : _vm._e()], 2)]), _vm._v(" "), _c("AppMenuSection", {
    attrs: {
      "default-apps": _vm.defaultApps
    },
    on: {
      "update:defaultApps": function ($event) {
        _vm.defaultApps = $event;
      },
      "update:default-apps": function ($event) {
        _vm.defaultApps = $event;
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("Fragment", [_c("div", {
    staticClass: "hidden-visually",
    attrs: {
      id: _vm.statusInfoId,
      "aria-live": "polite",
      role: "status"
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.statusInfo) + "\n\t")]), _vm._v(" "), _c("ol", {
    ref: "listElement",
    staticClass: "order-selector",
    attrs: {
      "data-cy-app-order": ""
    }
  }, _vm._l(_vm.appList, function (app, index) {
    return _c("AppOrderSelectorElement", _vm._g({
      key: `${app.id}${_vm.renderCount}`,
      ref: "selectorElements",
      refInFor: true,
      attrs: {
        app: app,
        "aria-details": _vm.ariaDetails,
        "aria-describedby": _vm.statusInfoId,
        "is-first": index === 0 || !!_vm.appList[index - 1].default,
        "is-last": index === _vm.value.length - 1
      }
    }, app.default ? {} : {
      "move:up": () => _vm.moveUp(index),
      "move:down": () => _vm.moveDown(index),
      "update:focus": () => _vm.updateStatusInfo(index)
    }));
  }), 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("li", {
    class: {
      "order-selector-element": true,
      "order-selector-element--disabled": _vm.app.default
    },
    attrs: {
      "data-cy-app-order-element": _vm.app.id
    },
    on: {
      focusin: function ($event) {
        return _vm.$emit("update:focus");
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      role: "presentation"
    }
  }, [_c("image", {
    staticClass: "order-selector-element__icon",
    attrs: {
      preserveAspectRatio: "xMinYMin meet",
      x: "0",
      y: "0",
      width: "20",
      height: "20",
      "xlink:href": _vm.app.icon
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "order-selector-element__label"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.app.label ?? _vm.app.id) + "\n\t")]), _vm._v(" "), _c("div", {
    staticClass: "order-selector-element__actions"
  }, [_c("NcButton", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isFirst && !_vm.app.default,
      expression: "!isFirst && !app.default"
    }],
    ref: "buttonUp",
    attrs: {
      "aria-label": _vm.t("settings", "Move up"),
      "aria-describedby": _vm.ariaDescribedby,
      "aria-details": _vm.ariaDetails,
      "data-cy-app-order-button": "up",
      type: "tertiary-no-background"
    },
    on: {
      click: _vm.moveUp
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconArrowUp", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isFirst || !!_vm.app.default,
      expression: "isFirst || !!app.default"
    }],
    staticClass: "order-selector-element__placeholder",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("NcButton", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isLast && !_vm.app.default,
      expression: "!isLast && !app.default"
    }],
    ref: "buttonDown",
    attrs: {
      "aria-label": _vm.t("settings", "Move down"),
      "aria-describedby": _vm.ariaDescribedby,
      "aria-details": _vm.ariaDetails,
      "data-cy-app-order-button": "down",
      type: "tertiary-no-background"
    },
    on: {
      click: _vm.moveDown
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconArrowDown", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isLast || !!_vm.app.default,
      expression: "isLast || !!app.default"
    }],
    staticClass: "order-selector-element__placeholder",
    attrs: {
      "aria-hidden": "true"
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcSettingsSection", {
    attrs: {
      name: _vm.t("theming", "Navigation bar settings")
    }
  }, [_c("h3", [_vm._v(_vm._s(_vm.t("theming", "Default app")))]), _vm._v(" "), _c("p", {
    staticClass: "info-note"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("theming", "The default app is the app that is e.g. opened after login or when the logo in the menu is clicked.")) + "\n\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      checked: _vm.hasCustomDefaultApp,
      type: "switch",
      "data-cy-switch-default-app": ""
    },
    on: {
      "update:checked": function ($event) {
        _vm.hasCustomDefaultApp = $event;
      }
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("theming", "Use custom default app")) + "\n\t")]), _vm._v(" "), _vm.hasCustomDefaultApp ? [_c("h4", [_vm._v(_vm._s(_vm.t("theming", "Global default app")))]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "close-on-select": false,
      placeholder: _vm.t("theming", "Global default apps"),
      options: _vm.allApps,
      multiple: true
    },
    model: {
      value: _vm.selectedApps,
      callback: function ($$v) {
        _vm.selectedApps = $$v;
      },
      expression: "selectedApps"
    }
  }), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.t("theming", "Default app priority")))]), _vm._v(" "), _c("p", {
    staticClass: "info-note"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("theming", "If an app is not enabled for a user, the next app with lower priority is used.")) + "\n\t\t")]), _vm._v(" "), _c("AppOrderSelector", {
    attrs: {
      value: _vm.selectedApps
    },
    on: {
      "update:value": function ($event) {
        _vm.selectedApps = $event;
      }
    }
  })] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("label", {
    attrs: {
      for: _vm.id
    }
  }, [_vm._v(_vm._s(_vm.displayName))]), _vm._v(" "), _c("div", {
    staticClass: "field__row"
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      id: _vm.id,
      type: "switch",
      checked: _vm.localValue
    },
    on: {
      "update:checked": [function ($event) {
        _vm.localValue = $event;
      }, _vm.save]
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.label) + "\n\t\t")])], 1), _vm._v(" "), _c("p", {
    staticClass: "field__description"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.description) + "\n\t")]), _vm._v(" "), _vm.errorMessage ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("label", {
    attrs: {
      for: _vm.id
    }
  }, [_vm._v(_vm._s(_vm.displayName))]), _vm._v(" "), _c("div", {
    staticClass: "field__row"
  }, [_c("NcColorPicker", {
    attrs: {
      value: _vm.localValue,
      "advanced-fields": true
    },
    on: {
      "update:value": [function ($event) {
        _vm.localValue = $event;
      }, _vm.debounceSave]
    }
  }, [_c("NcButton", {
    staticClass: "field__button",
    attrs: {
      id: _vm.id,
      type: "primary",
      "aria-label": _vm.t("theming", "Select a custom color"),
      "data-admin-theming-setting-color-picker": ""
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.loading ? _c("NcLoadingIcon", {
          attrs: {
            appearance: _vm.calculatedTextColor === "#ffffff" ? "light" : "dark",
            size: 20
          }
        }) : _c("Palette", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.value) + "\n\t\t\t")])], 1), _vm._v(" "), _c("div", {
    staticClass: "field__color-preview",
    attrs: {
      "data-admin-theming-setting-color": ""
    }
  }), _vm._v(" "), _vm.value !== _vm.defaultValue ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("theming", "Reset to default"),
      "data-admin-theming-setting-color-reset": ""
    },
    on: {
      click: _vm.undo
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Undo", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 33666776)
  }) : _vm._e()], 1), _vm._v(" "), _vm.description ? _c("div", {
    staticClass: "description"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.description) + "\n\t")]) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("label", {
    attrs: {
      for: _vm.id
    }
  }, [_vm._v(_vm._s(_vm.displayName))]), _vm._v(" "), _c("div", {
    staticClass: "field__row"
  }, [_c("NcButton", {
    attrs: {
      id: _vm.id,
      type: "secondary",
      "aria-label": _vm.ariaLabel,
      "data-admin-theming-setting-file-picker": ""
    },
    on: {
      click: _vm.activateLocalFilePicker
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Upload", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("theming", "Upload")) + "\n\t\t")]), _vm._v(" "), _vm.showReset ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("theming", "Reset to default"),
      "data-admin-theming-setting-file-reset": ""
    },
    on: {
      click: _vm.undo
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Undo", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 33666776)
  }) : _vm._e(), _vm._v(" "), _vm.showRemove ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("theming", "Remove background image"),
      "data-admin-theming-setting-file-remove": ""
    },
    on: {
      click: _vm.removeBackground
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Delete", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 2705356561)
  }) : _vm._e(), _vm._v(" "), _vm.showLoading ? _c("NcLoadingIcon", {
    staticClass: "field__loading-icon",
    attrs: {
      size: 20
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.name === "logoheader" || _vm.name === "favicon") && _vm.mimeValue !== _vm.defaultMimeValue ? _c("div", {
    staticClass: "field__preview",
    class: {
      "field__preview--logoheader": _vm.name === "logoheader",
      "field__preview--favicon": _vm.name === "favicon"
    }
  }) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "input",
    attrs: {
      accept: _vm.acceptMime,
      type: "file"
    },
    on: {
      change: _vm.onChange
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("NcTextField", {
    attrs: {
      value: _vm.localValue,
      label: _vm.displayName,
      placeholder: _vm.placeholder,
      type: _vm.type,
      maxlength: _vm.maxlength,
      spellcheck: false,
      success: _vm.showSuccess,
      error: Boolean(_vm.errorMessage),
      "helper-text": _vm.errorMessage,
      "show-trailing-button": _vm.value !== _vm.defaultValue,
      "trailing-button-icon": "undo"
    },
    on: {
      "update:value": function ($event) {
        _vm.localValue = $event;
      },
      "trailing-button-click": _vm.undo,
      keydown: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.save.apply(null, arguments);
      },
      blur: _vm.save
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../core/img/logo/logo.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.admin-theming[data-v-c42c152c],
.admin-theming-advanced[data-v-c42c152c] {
  display: flex;
  flex-direction: column;
  gap: 8px 0;
}
.admin-theming__preview[data-v-c42c152c] {
  width: 230px;
  height: 140px;
  background-size: cover;
  background-position: center;
  text-align: center;
  margin-top: 10px;
  background-color: var(--c42c152c-backgroundColor);
  background-image: var(--c42c152c-cssBackgroundImage);
}
.admin-theming__preview-logo[data-v-c42c152c] {
  width: 20%;
  height: 20%;
  margin-top: 20px;
  display: inline-block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--image-logo, url(${___CSS_LOADER_URL_REPLACEMENT_0___}));
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.order-selector[data-v-bc6b1dbc] {
  width: max-content;
  min-width: 260px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.order-selector-element[data-v-49204daa] {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding-inline: 12px;
}
.order-selector-element[data-v-49204daa]:hover {
  background-color: var(--color-background-hover);
  border-radius: var(--border-radius-large);
}
.order-selector-element--disabled[data-v-49204daa] {
  border-color: var(--color-text-maxcontrast);
  color: var(--color-text-maxcontrast);
}
.order-selector-element--disabled .order-selector-element__icon[data-v-49204daa] {
  opacity: 75%;
}
.order-selector-element__actions[data-v-49204daa] {
  flex: 0 0;
  display: flex;
  flex-direction: row;
  gap: 6px;
}
.order-selector-element__label[data-v-49204daa] {
  flex: 1 1;
  text-overflow: ellipsis;
  overflow: hidden;
}
.order-selector-element__placeholder[data-v-49204daa] {
  height: 44px;
  width: 44px;
}
.order-selector-element__icon[data-v-49204daa] {
  filter: var(--background-invert-if-bright);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h3[data-v-4b149f5b], h4[data-v-4b149f5b] {
  font-weight: bold;
}
h4[data-v-4b149f5b], h5[data-v-4b149f5b] {
  margin-block-start: 12px;
}
.info-note[data-v-4b149f5b] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.field[data-v-2f632a9e] {
  display: flex;
  flex-direction: column;
  gap: 4px 0;
}
.field__row[data-v-2f632a9e] {
  display: flex;
  gap: 0 4px;
}
.field__description[data-v-2f632a9e] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.field[data-v-041d23df] {
  display: flex;
  flex-direction: column;
  gap: 4px 0;
}
.field__row[data-v-041d23df] {
  display: flex;
  gap: 0 4px;
}
.description[data-v-041d23df] {
  color: var(--color-text-maxcontrast);
}
.field__button[data-v-041d23df] {
  background-color: var(--041d23df-value) !important;
  color: var(--041d23df-usedTextColor) !important;
}
.field__color-preview[data-v-041d23df] {
  width: var(--default-clickable-area);
  border-radius: var(--border-radius-large);
  background-color: var(--041d23df-value);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.field[data-v-1856abbc] {
  display: flex;
  flex-direction: column;
  gap: 4px 0;
}
.field__row[data-v-1856abbc] {
  display: flex;
  gap: 0 4px;
}
.field__loading-icon[data-v-1856abbc] {
  width: 44px;
  height: 44px;
}
.field__preview[data-v-1856abbc] {
  width: 70px;
  height: 70px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 10px 0;
}
.field__preview--logoheader[data-v-1856abbc] {
  background-image: var(--image-logoheader);
}
.field__preview--favicon[data-v-1856abbc] {
  background-image: var(--image-favicon);
}
input[type=file][data-v-1856abbc] {
  display: none;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.field[data-v-495c4cf2] {
  max-width: 400px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue":
/*!*******************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true */ "./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true");
/* harmony import */ var _AdminTheming_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTheming.vue?vue&type=script&lang=js */ "./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js");
/* harmony import */ var _AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true */ "./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminTheming_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c42c152c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/AdminTheming.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelector.vue":
/*!**********************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelector.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppOrderSelector_vue_vue_type_template_id_bc6b1dbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true */ "./apps/theming/src/components/AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true");
/* harmony import */ var _AppOrderSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppOrderSelector.vue?vue&type=script&lang=ts */ "./apps/theming/src/components/AppOrderSelector.vue?vue&type=script&lang=ts");
/* harmony import */ var _AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss */ "./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppOrderSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppOrderSelector_vue_vue_type_template_id_bc6b1dbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AppOrderSelector_vue_vue_type_template_id_bc6b1dbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bc6b1dbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/AppOrderSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelectorElement.vue":
/*!*****************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelectorElement.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppOrderSelectorElement_vue_vue_type_template_id_49204daa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true */ "./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true");
/* harmony import */ var _AppOrderSelectorElement_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppOrderSelectorElement.vue?vue&type=script&lang=ts */ "./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=script&lang=ts");
/* harmony import */ var _AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true */ "./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppOrderSelectorElement_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppOrderSelectorElement_vue_vue_type_template_id_49204daa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AppOrderSelectorElement_vue_vue_type_template_id_49204daa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "49204daa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/AppOrderSelectorElement.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/AppMenuSection.vue":
/*!**************************************************************!*\
  !*** ./apps/theming/src/components/admin/AppMenuSection.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppMenuSection_vue_vue_type_template_id_4b149f5b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true */ "./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true");
/* harmony import */ var _AppMenuSection_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppMenuSection.vue?vue&type=script&lang=ts */ "./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=script&lang=ts");
/* harmony import */ var _AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss */ "./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppMenuSection_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppMenuSection_vue_vue_type_template_id_4b149f5b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AppMenuSection_vue_vue_type_template_id_4b149f5b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b149f5b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/AppMenuSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue":
/*!*************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true */ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true");
/* harmony import */ var _CheckboxField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=script&lang=js */ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js");
/* harmony import */ var _CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true */ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckboxField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f632a9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/CheckboxField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue":
/*!****************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true */ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true");
/* harmony import */ var _ColorPickerField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPickerField.vue?vue&type=script&lang=js */ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js");
/* harmony import */ var _ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true */ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ColorPickerField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "041d23df",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/ColorPickerField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue":
/*!**************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileInputField_vue_vue_type_template_id_1856abbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInputField.vue?vue&type=template&id=1856abbc&scoped=true */ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true");
/* harmony import */ var _FileInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInputField.vue?vue&type=script&lang=js */ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js");
/* harmony import */ var _FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true */ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileInputField_vue_vue_type_template_id_1856abbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FileInputField_vue_vue_type_template_id_1856abbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1856abbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/FileInputField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue":
/*!*********************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextField_vue_vue_type_template_id_495c4cf2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField.vue?vue&type=template&id=495c4cf2&scoped=true */ "./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true");
/* harmony import */ var _TextField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextField.vue?vue&type=script&lang=js */ "./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js");
/* harmony import */ var _TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true */ "./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextField_vue_vue_type_template_id_495c4cf2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TextField_vue_vue_type_template_id_495c4cf2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "495c4cf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/TextField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Palette.vue":
/*!************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Palette.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Palette_vue_vue_type_template_id_4b2c277f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Palette.vue?vue&type=template&id=4b2c277f */ "./node_modules/vue-material-design-icons/Palette.vue?vue&type=template&id=4b2c277f");
/* harmony import */ var _Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Palette.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/Palette.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Palette_vue_vue_type_template_id_4b2c277f__WEBPACK_IMPORTED_MODULE_0__.render,
  _Palette_vue_vue_type_template_id_4b2c277f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Palette.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Palette.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Palette.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PaletteIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/UndoVariant.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/UndoVariant.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UndoVariant_vue_vue_type_template_id_d35261f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UndoVariant.vue?vue&type=template&id=d35261f6 */ "./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=template&id=d35261f6");
/* harmony import */ var _UndoVariant_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoVariant.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UndoVariant_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UndoVariant_vue_vue_type_template_id_d35261f6__WEBPACK_IMPORTED_MODULE_0__.render,
  _UndoVariant_vue_vue_type_template_id_d35261f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/UndoVariant.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UndoVariantIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelector.vue?vue&type=script&lang=ts":
/*!**********************************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelector.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelector.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelectorElement.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=script&lang=ts":
/*!**************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppMenuSection.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true":
/*!*************************************************************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_template_id_bc6b1dbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_template_id_bc6b1dbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_template_id_bc6b1dbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=template&id=bc6b1dbc&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_template_id_49204daa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_template_id_49204daa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_template_id_49204daa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=template&id=49204daa&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_template_id_4b149f5b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_template_id_4b149f5b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_template_id_4b149f5b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=template&id=4b149f5b&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_template_id_1856abbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_template_id_1856abbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_template_id_1856abbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=template&id=1856abbc&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_495c4cf2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_495c4cf2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_495c4cf2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=template&id=495c4cf2&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true");


/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss":
/*!*******************************************************************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelector_vue_vue_type_style_index_0_id_bc6b1dbc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelector.vue?vue&type=style&index=0&id=bc6b1dbc&scoped=true&lang=scss");


/***/ }),

/***/ "./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppOrderSelectorElement_vue_vue_type_style_index_0_id_49204daa_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/AppOrderSelectorElement.vue?vue&type=style&index=0&id=49204daa&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss":
/*!***********************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuSection_vue_vue_type_style_index_0_id_4b149f5b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/AppMenuSection.vue?vue&type=style&index=0&id=4b149f5b&scoped=true&lang=scss");


/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Palette.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Palette.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Palette.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Palette.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_UndoVariant_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./UndoVariant.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_UndoVariant_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Palette.vue?vue&type=template&id=4b2c277f":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Palette.vue?vue&type=template&id=4b2c277f ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Palette_vue_vue_type_template_id_4b2c277f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Palette_vue_vue_type_template_id_4b2c277f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Palette_vue_vue_type_template_id_4b2c277f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Palette.vue?vue&type=template&id=4b2c277f */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Palette.vue?vue&type=template&id=4b2c277f");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=template&id=d35261f6":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=template&id=d35261f6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_UndoVariant_vue_vue_type_template_id_d35261f6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_UndoVariant_vue_vue_type_template_id_d35261f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_UndoVariant_vue_vue_type_template_id_d35261f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./UndoVariant.vue?vue&type=template&id=d35261f6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=template&id=d35261f6");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Palette.vue?vue&type=template&id=4b2c277f":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Palette.vue?vue&type=template&id=4b2c277f ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon palette-icon",
        attrs: {
          "aria-hidden": _vm.title ? null : "true",
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=template&id=d35261f6":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/UndoVariant.vue?vue&type=template&id=d35261f6 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon undo-variant-icon",
        attrs: {
          "aria-hidden": _vm.title ? null : "true",
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@vueuse/integrations/node_modules/@vueuse/core/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vueuse/integrations/node_modules/@vueuse/core/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMagicKeysAliasMap: () => (/* binding */ DefaultMagicKeysAliasMap),
/* harmony export */   StorageSerializers: () => (/* binding */ StorageSerializers),
/* harmony export */   TransitionPresets: () => (/* binding */ TransitionPresets),
/* harmony export */   assert: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   asyncComputed: () => (/* binding */ computedAsync),
/* harmony export */   autoResetRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.autoResetRef),
/* harmony export */   breakpointsAntDesign: () => (/* binding */ breakpointsAntDesign),
/* harmony export */   breakpointsBootstrapV5: () => (/* binding */ breakpointsBootstrapV5),
/* harmony export */   breakpointsElement: () => (/* binding */ breakpointsElement),
/* harmony export */   breakpointsMasterCss: () => (/* binding */ breakpointsMasterCss),
/* harmony export */   breakpointsPrimeFlex: () => (/* binding */ breakpointsPrimeFlex),
/* harmony export */   breakpointsQuasar: () => (/* binding */ breakpointsQuasar),
/* harmony export */   breakpointsSematic: () => (/* binding */ breakpointsSematic),
/* harmony export */   breakpointsTailwind: () => (/* binding */ breakpointsTailwind),
/* harmony export */   breakpointsVuetify: () => (/* binding */ breakpointsVuetify),
/* harmony export */   breakpointsVuetifyV2: () => (/* binding */ breakpointsVuetifyV2),
/* harmony export */   breakpointsVuetifyV3: () => (/* binding */ breakpointsVuetifyV3),
/* harmony export */   bypassFilter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.bypassFilter),
/* harmony export */   camelize: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   clamp: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   cloneFnJSON: () => (/* binding */ cloneFnJSON),
/* harmony export */   computedAsync: () => (/* binding */ computedAsync),
/* harmony export */   computedEager: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.computedEager),
/* harmony export */   computedInject: () => (/* binding */ computedInject),
/* harmony export */   computedWithControl: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.computedWithControl),
/* harmony export */   containsProp: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.containsProp),
/* harmony export */   controlledComputed: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.controlledComputed),
/* harmony export */   controlledRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.controlledRef),
/* harmony export */   createEventHook: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook),
/* harmony export */   createFetch: () => (/* binding */ createFetch),
/* harmony export */   createFilterWrapper: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper),
/* harmony export */   createGlobalState: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState),
/* harmony export */   createInjectionState: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createInjectionState),
/* harmony export */   createReactiveFn: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createReactiveFn),
/* harmony export */   createReusableTemplate: () => (/* binding */ createReusableTemplate),
/* harmony export */   createSharedComposable: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSharedComposable),
/* harmony export */   createSingletonPromise: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSingletonPromise),
/* harmony export */   createTemplatePromise: () => (/* binding */ createTemplatePromise),
/* harmony export */   createUnrefFn: () => (/* binding */ createUnrefFn),
/* harmony export */   customStorageEventName: () => (/* binding */ customStorageEventName),
/* harmony export */   debounceFilter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debounceFilter),
/* harmony export */   debouncedRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debouncedRef),
/* harmony export */   debouncedWatch: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debouncedWatch),
/* harmony export */   defaultDocument: () => (/* binding */ defaultDocument),
/* harmony export */   defaultLocation: () => (/* binding */ defaultLocation),
/* harmony export */   defaultNavigator: () => (/* binding */ defaultNavigator),
/* harmony export */   defaultWindow: () => (/* binding */ defaultWindow),
/* harmony export */   directiveHooks: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.directiveHooks),
/* harmony export */   eagerComputed: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.eagerComputed),
/* harmony export */   executeTransition: () => (/* binding */ executeTransition),
/* harmony export */   extendRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.extendRef),
/* harmony export */   formatDate: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.formatDate),
/* harmony export */   formatTimeAgo: () => (/* binding */ formatTimeAgo),
/* harmony export */   get: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.get),
/* harmony export */   getLifeCycleTarget: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.getLifeCycleTarget),
/* harmony export */   getSSRHandler: () => (/* binding */ getSSRHandler),
/* harmony export */   hasOwn: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn),
/* harmony export */   hyphenate: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate),
/* harmony export */   identity: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity),
/* harmony export */   ignorableWatch: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch),
/* harmony export */   increaseWithUnit: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.increaseWithUnit),
/* harmony export */   injectLocal: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.injectLocal),
/* harmony export */   invoke: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.invoke),
/* harmony export */   isClient: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient),
/* harmony export */   isDef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDef),
/* harmony export */   isDefined: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDefined),
/* harmony export */   isIOS: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isIOS),
/* harmony export */   isObject: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   isWorker: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isWorker),
/* harmony export */   makeDestructurable: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.makeDestructurable),
/* harmony export */   mapGamepadToXbox360Controller: () => (/* binding */ mapGamepadToXbox360Controller),
/* harmony export */   noop: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   normalizeDate: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.normalizeDate),
/* harmony export */   notNullish: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.notNullish),
/* harmony export */   now: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.now),
/* harmony export */   objectEntries: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectEntries),
/* harmony export */   objectOmit: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectOmit),
/* harmony export */   objectPick: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectPick),
/* harmony export */   onClickOutside: () => (/* binding */ onClickOutside),
/* harmony export */   onKeyDown: () => (/* binding */ onKeyDown),
/* harmony export */   onKeyPressed: () => (/* binding */ onKeyPressed),
/* harmony export */   onKeyStroke: () => (/* binding */ onKeyStroke),
/* harmony export */   onKeyUp: () => (/* binding */ onKeyUp),
/* harmony export */   onLongPress: () => (/* binding */ onLongPress),
/* harmony export */   onStartTyping: () => (/* binding */ onStartTyping),
/* harmony export */   pausableFilter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableFilter),
/* harmony export */   pausableWatch: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch),
/* harmony export */   promiseTimeout: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout),
/* harmony export */   provideLocal: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.provideLocal),
/* harmony export */   rand: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.rand),
/* harmony export */   reactify: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactify),
/* harmony export */   reactifyObject: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactifyObject),
/* harmony export */   reactiveComputed: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactiveComputed),
/* harmony export */   reactiveOmit: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactiveOmit),
/* harmony export */   reactivePick: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactivePick),
/* harmony export */   refAutoReset: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refAutoReset),
/* harmony export */   refDebounced: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refDebounced),
/* harmony export */   refDefault: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refDefault),
/* harmony export */   refThrottled: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refThrottled),
/* harmony export */   refWithControl: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refWithControl),
/* harmony export */   resolveRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.resolveRef),
/* harmony export */   resolveUnref: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.resolveUnref),
/* harmony export */   set: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.set),
/* harmony export */   setSSRHandler: () => (/* binding */ setSSRHandler),
/* harmony export */   syncRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.syncRef),
/* harmony export */   syncRefs: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.syncRefs),
/* harmony export */   templateRef: () => (/* binding */ templateRef),
/* harmony export */   throttleFilter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter),
/* harmony export */   throttledRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttledRef),
/* harmony export */   throttledWatch: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttledWatch),
/* harmony export */   timestamp: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp),
/* harmony export */   toReactive: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toReactive),
/* harmony export */   toRef: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   tryOnBeforeMount: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnBeforeMount),
/* harmony export */   tryOnBeforeUnmount: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnBeforeUnmount),
/* harmony export */   tryOnMounted: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted),
/* harmony export */   tryOnScopeDispose: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose),
/* harmony export */   tryOnUnmounted: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted),
/* harmony export */   unrefElement: () => (/* binding */ unrefElement),
/* harmony export */   until: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until),
/* harmony export */   useActiveElement: () => (/* binding */ useActiveElement),
/* harmony export */   useAnimate: () => (/* binding */ useAnimate),
/* harmony export */   useArrayDifference: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayDifference),
/* harmony export */   useArrayEvery: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayEvery),
/* harmony export */   useArrayFilter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayFilter),
/* harmony export */   useArrayFind: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayFind),
/* harmony export */   useArrayFindIndex: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayFindIndex),
/* harmony export */   useArrayFindLast: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayFindLast),
/* harmony export */   useArrayIncludes: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayIncludes),
/* harmony export */   useArrayJoin: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayJoin),
/* harmony export */   useArrayMap: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayMap),
/* harmony export */   useArrayReduce: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayReduce),
/* harmony export */   useArraySome: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArraySome),
/* harmony export */   useArrayUnique: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useArrayUnique),
/* harmony export */   useAsyncQueue: () => (/* binding */ useAsyncQueue),
/* harmony export */   useAsyncState: () => (/* binding */ useAsyncState),
/* harmony export */   useBase64: () => (/* binding */ useBase64),
/* harmony export */   useBattery: () => (/* binding */ useBattery),
/* harmony export */   useBluetooth: () => (/* binding */ useBluetooth),
/* harmony export */   useBreakpoints: () => (/* binding */ useBreakpoints),
/* harmony export */   useBroadcastChannel: () => (/* binding */ useBroadcastChannel),
/* harmony export */   useBrowserLocation: () => (/* binding */ useBrowserLocation),
/* harmony export */   useCached: () => (/* binding */ useCached),
/* harmony export */   useClipboard: () => (/* binding */ useClipboard),
/* harmony export */   useClipboardItems: () => (/* binding */ useClipboardItems),
/* harmony export */   useCloned: () => (/* binding */ useCloned),
/* harmony export */   useColorMode: () => (/* binding */ useColorMode),
/* harmony export */   useConfirmDialog: () => (/* binding */ useConfirmDialog),
/* harmony export */   useCounter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useCounter),
/* harmony export */   useCssVar: () => (/* binding */ useCssVar),
/* harmony export */   useCurrentElement: () => (/* binding */ useCurrentElement),
/* harmony export */   useCycleList: () => (/* binding */ useCycleList),
/* harmony export */   useDark: () => (/* binding */ useDark),
/* harmony export */   useDateFormat: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDateFormat),
/* harmony export */   useDebounce: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounce),
/* harmony export */   useDebounceFn: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn),
/* harmony export */   useDebouncedRefHistory: () => (/* binding */ useDebouncedRefHistory),
/* harmony export */   useDeviceMotion: () => (/* binding */ useDeviceMotion),
/* harmony export */   useDeviceOrientation: () => (/* binding */ useDeviceOrientation),
/* harmony export */   useDevicePixelRatio: () => (/* binding */ useDevicePixelRatio),
/* harmony export */   useDevicesList: () => (/* binding */ useDevicesList),
/* harmony export */   useDisplayMedia: () => (/* binding */ useDisplayMedia),
/* harmony export */   useDocumentVisibility: () => (/* binding */ useDocumentVisibility),
/* harmony export */   useDraggable: () => (/* binding */ useDraggable),
/* harmony export */   useDropZone: () => (/* binding */ useDropZone),
/* harmony export */   useElementBounding: () => (/* binding */ useElementBounding),
/* harmony export */   useElementByPoint: () => (/* binding */ useElementByPoint),
/* harmony export */   useElementHover: () => (/* binding */ useElementHover),
/* harmony export */   useElementSize: () => (/* binding */ useElementSize),
/* harmony export */   useElementVisibility: () => (/* binding */ useElementVisibility),
/* harmony export */   useEventBus: () => (/* binding */ useEventBus),
/* harmony export */   useEventListener: () => (/* binding */ useEventListener),
/* harmony export */   useEventSource: () => (/* binding */ useEventSource),
/* harmony export */   useEyeDropper: () => (/* binding */ useEyeDropper),
/* harmony export */   useFavicon: () => (/* binding */ useFavicon),
/* harmony export */   useFetch: () => (/* binding */ useFetch),
/* harmony export */   useFileDialog: () => (/* binding */ useFileDialog),
/* harmony export */   useFileSystemAccess: () => (/* binding */ useFileSystemAccess),
/* harmony export */   useFocus: () => (/* binding */ useFocus),
/* harmony export */   useFocusWithin: () => (/* binding */ useFocusWithin),
/* harmony export */   useFps: () => (/* binding */ useFps),
/* harmony export */   useFullscreen: () => (/* binding */ useFullscreen),
/* harmony export */   useGamepad: () => (/* binding */ useGamepad),
/* harmony export */   useGeolocation: () => (/* binding */ useGeolocation),
/* harmony export */   useIdle: () => (/* binding */ useIdle),
/* harmony export */   useImage: () => (/* binding */ useImage),
/* harmony export */   useInfiniteScroll: () => (/* binding */ useInfiniteScroll),
/* harmony export */   useIntersectionObserver: () => (/* binding */ useIntersectionObserver),
/* harmony export */   useInterval: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useInterval),
/* harmony export */   useIntervalFn: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn),
/* harmony export */   useKeyModifier: () => (/* binding */ useKeyModifier),
/* harmony export */   useLastChanged: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useLastChanged),
/* harmony export */   useLocalStorage: () => (/* binding */ useLocalStorage),
/* harmony export */   useMagicKeys: () => (/* binding */ useMagicKeys),
/* harmony export */   useManualRefHistory: () => (/* binding */ useManualRefHistory),
/* harmony export */   useMediaControls: () => (/* binding */ useMediaControls),
/* harmony export */   useMediaQuery: () => (/* binding */ useMediaQuery),
/* harmony export */   useMemoize: () => (/* binding */ useMemoize),
/* harmony export */   useMemory: () => (/* binding */ useMemory),
/* harmony export */   useMounted: () => (/* binding */ useMounted),
/* harmony export */   useMouse: () => (/* binding */ useMouse),
/* harmony export */   useMouseInElement: () => (/* binding */ useMouseInElement),
/* harmony export */   useMousePressed: () => (/* binding */ useMousePressed),
/* harmony export */   useMutationObserver: () => (/* binding */ useMutationObserver),
/* harmony export */   useNavigatorLanguage: () => (/* binding */ useNavigatorLanguage),
/* harmony export */   useNetwork: () => (/* binding */ useNetwork),
/* harmony export */   useNow: () => (/* binding */ useNow),
/* harmony export */   useObjectUrl: () => (/* binding */ useObjectUrl),
/* harmony export */   useOffsetPagination: () => (/* binding */ useOffsetPagination),
/* harmony export */   useOnline: () => (/* binding */ useOnline),
/* harmony export */   usePageLeave: () => (/* binding */ usePageLeave),
/* harmony export */   useParallax: () => (/* binding */ useParallax),
/* harmony export */   useParentElement: () => (/* binding */ useParentElement),
/* harmony export */   usePerformanceObserver: () => (/* binding */ usePerformanceObserver),
/* harmony export */   usePermission: () => (/* binding */ usePermission),
/* harmony export */   usePointer: () => (/* binding */ usePointer),
/* harmony export */   usePointerLock: () => (/* binding */ usePointerLock),
/* harmony export */   usePointerSwipe: () => (/* binding */ usePointerSwipe),
/* harmony export */   usePreferredColorScheme: () => (/* binding */ usePreferredColorScheme),
/* harmony export */   usePreferredContrast: () => (/* binding */ usePreferredContrast),
/* harmony export */   usePreferredDark: () => (/* binding */ usePreferredDark),
/* harmony export */   usePreferredLanguages: () => (/* binding */ usePreferredLanguages),
/* harmony export */   usePreferredReducedMotion: () => (/* binding */ usePreferredReducedMotion),
/* harmony export */   usePrevious: () => (/* binding */ usePrevious),
/* harmony export */   useRafFn: () => (/* binding */ useRafFn),
/* harmony export */   useRefHistory: () => (/* binding */ useRefHistory),
/* harmony export */   useResizeObserver: () => (/* binding */ useResizeObserver),
/* harmony export */   useScreenOrientation: () => (/* binding */ useScreenOrientation),
/* harmony export */   useScreenSafeArea: () => (/* binding */ useScreenSafeArea),
/* harmony export */   useScriptTag: () => (/* binding */ useScriptTag),
/* harmony export */   useScroll: () => (/* binding */ useScroll),
/* harmony export */   useScrollLock: () => (/* binding */ useScrollLock),
/* harmony export */   useSessionStorage: () => (/* binding */ useSessionStorage),
/* harmony export */   useShare: () => (/* binding */ useShare),
/* harmony export */   useSorted: () => (/* binding */ useSorted),
/* harmony export */   useSpeechRecognition: () => (/* binding */ useSpeechRecognition),
/* harmony export */   useSpeechSynthesis: () => (/* binding */ useSpeechSynthesis),
/* harmony export */   useStepper: () => (/* binding */ useStepper),
/* harmony export */   useStorage: () => (/* binding */ useStorage),
/* harmony export */   useStorageAsync: () => (/* binding */ useStorageAsync),
/* harmony export */   useStyleTag: () => (/* binding */ useStyleTag),
/* harmony export */   useSupported: () => (/* binding */ useSupported),
/* harmony export */   useSwipe: () => (/* binding */ useSwipe),
/* harmony export */   useTemplateRefsList: () => (/* binding */ useTemplateRefsList),
/* harmony export */   useTextDirection: () => (/* binding */ useTextDirection),
/* harmony export */   useTextSelection: () => (/* binding */ useTextSelection),
/* harmony export */   useTextareaAutosize: () => (/* binding */ useTextareaAutosize),
/* harmony export */   useThrottle: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottle),
/* harmony export */   useThrottleFn: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottleFn),
/* harmony export */   useThrottledRefHistory: () => (/* binding */ useThrottledRefHistory),
/* harmony export */   useTimeAgo: () => (/* binding */ useTimeAgo),
/* harmony export */   useTimeout: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeout),
/* harmony export */   useTimeoutFn: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn),
/* harmony export */   useTimeoutPoll: () => (/* binding */ useTimeoutPoll),
/* harmony export */   useTimestamp: () => (/* binding */ useTimestamp),
/* harmony export */   useTitle: () => (/* binding */ useTitle),
/* harmony export */   useToNumber: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useToNumber),
/* harmony export */   useToString: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useToString),
/* harmony export */   useToggle: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useToggle),
/* harmony export */   useTransition: () => (/* binding */ useTransition),
/* harmony export */   useUrlSearchParams: () => (/* binding */ useUrlSearchParams),
/* harmony export */   useUserMedia: () => (/* binding */ useUserMedia),
/* harmony export */   useVModel: () => (/* binding */ useVModel),
/* harmony export */   useVModels: () => (/* binding */ useVModels),
/* harmony export */   useVibrate: () => (/* binding */ useVibrate),
/* harmony export */   useVirtualList: () => (/* binding */ useVirtualList),
/* harmony export */   useWakeLock: () => (/* binding */ useWakeLock),
/* harmony export */   useWebNotification: () => (/* binding */ useWebNotification),
/* harmony export */   useWebSocket: () => (/* binding */ useWebSocket),
/* harmony export */   useWebWorker: () => (/* binding */ useWebWorker),
/* harmony export */   useWebWorkerFn: () => (/* binding */ useWebWorkerFn),
/* harmony export */   useWindowFocus: () => (/* binding */ useWindowFocus),
/* harmony export */   useWindowScroll: () => (/* binding */ useWindowScroll),
/* harmony export */   useWindowSize: () => (/* binding */ useWindowSize),
/* harmony export */   watchArray: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchArray),
/* harmony export */   watchAtMost: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchAtMost),
/* harmony export */   watchDebounced: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchDebounced),
/* harmony export */   watchDeep: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchDeep),
/* harmony export */   watchIgnorable: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchIgnorable),
/* harmony export */   watchImmediate: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchImmediate),
/* harmony export */   watchOnce: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchOnce),
/* harmony export */   watchPausable: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchPausable),
/* harmony export */   watchThrottled: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchThrottled),
/* harmony export */   watchTriggerable: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchTriggerable),
/* harmony export */   watchWithFilter: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter),
/* harmony export */   whenever: () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.whenever)
/* harmony export */ });
/* harmony import */ var _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueuse/shared */ "./node_modules/@vueuse/integrations/node_modules/@vueuse/shared/index.mjs");
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/integrations/node_modules/vue-demi/lib/index.mjs");




function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    shallow = true,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const started = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(!lazy);
  const current = shallow ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialState) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  let counter = 0;
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key);
  if (defaultSource)
    source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key, defaultSource);
  if (treatDefaultAsFactory)
    source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)((ctx) => options(source, ctx));
  } else {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

function createReusableTemplate(options = {}) {
  if (!vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue3 && !vue_demi__WEBPACK_IMPORTED_MODULE_1__.version.startsWith("2.7.")) {
    if (true)
      throw new Error("[VueUse] createReusableTemplate only works in Vue 2.7 or above.");
    return;
  }
  const {
    inheritAttrs = true
  } = options;
  const render = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const define = /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
    setup(_, { slots }) {
      return () => {
        render.value = slots.default;
      };
    }
  });
  const reuse = /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
    inheritAttrs,
    setup(_, { attrs, slots }) {
      return () => {
        var _a;
        if (!render.value && "development" !== "production")
          throw new Error("[VueUse] Failed to find the definition of reusable template");
        const vnode = (_a = render.value) == null ? void 0 : _a.call(render, { ...keysToCamelKebabCase(attrs), $slots: slots });
        return inheritAttrs && (vnode == null ? void 0 : vnode.length) === 1 ? vnode[0] : vnode;
      };
    }
  });
  return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.makeDestructurable)(
    { define, reuse },
    [define, reuse]
  );
}
function keysToCamelKebabCase(obj) {
  const newObj = {};
  for (const key in obj)
    newObj[(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(key)] = obj[key];
  return newObj;
}

function createTemplatePromise(options = {}) {
  if (!vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue3) {
    if (true)
      throw new Error("[VueUse] createTemplatePromise only works in Vue 3 or above.");
    return;
  }
  let index = 0;
  const instances = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  function create(...args) {
    const props = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowReactive)({
      key: index++,
      args,
      promise: void 0,
      resolve: () => {
      },
      reject: () => {
      },
      isResolving: false,
      options
    });
    instances.value.push(props);
    props.promise = new Promise((_resolve, _reject) => {
      props.resolve = (v) => {
        props.isResolving = true;
        return _resolve(v);
      };
      props.reject = _reject;
    }).finally(() => {
      props.promise = void 0;
      const index2 = instances.value.indexOf(props);
      if (index2 !== -1)
        instances.value.splice(index2, 1);
    });
    return props.promise;
  }
  function start(...args) {
    if (options.singleton && instances.value.length > 0)
      return instances.value[0].promise;
    return create(...args);
  }
  const component = /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.defineComponent)((_, { slots }) => {
    const renderList = () => instances.value.map((props) => {
      var _a;
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.h)(vue_demi__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: props.key }, (_a = slots.default) == null ? void 0 : _a.call(slots, props));
    });
    if (options.transition)
      return () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.h)(vue_demi__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup, options.transition, renderList);
    return renderList;
  });
  component.start = start;
  return component;
}

function createUnrefFn(fn) {
  return function(...args) {
    return fn.apply(this, args.map((i) => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(i)));
  };
}

const defaultWindow = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window : void 0;
const defaultDocument = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.document : void 0;
const defaultNavigator = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.navigator : void 0;
const defaultLocation = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.location : void 0;

function unrefElement(elRef) {
  var _a;
  const plain = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => [unrefElement(target), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return stop;
}

let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop));
    window.document.documentElement.addEventListener("click", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) {
          handler(event);
        }
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, { ...options, eventName: "keydown" });
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, { ...options, eventName: "keypress" });
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, { ...options, eventName: "keyup" });
}

const DEFAULT_DELAY = 500;
const DEFAULT_THRESHOLD = 10;
function onLongPress(target, handler, options) {
  var _a, _b;
  const elementRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(target));
  let timeout;
  let posStart;
  let startTimestamp;
  let hasLongPressed = false;
  function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    posStart = void 0;
    startTimestamp = void 0;
    hasLongPressed = false;
  }
  function onRelease(ev) {
    var _a2, _b2, _c;
    const [_startTimestamp, _posStart, _hasLongPressed] = [startTimestamp, posStart, hasLongPressed];
    clear();
    if (!(options == null ? void 0 : options.onMouseUp) || !_posStart || !_startTimestamp)
      return;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    const dx = ev.x - _posStart.x;
    const dy = ev.y - _posStart.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    options.onMouseUp(ev.timeStamp - _startTimestamp, distance, _hasLongPressed);
  }
  function onDown(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    clear();
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    posStart = {
      x: ev.x,
      y: ev.y
    };
    startTimestamp = ev.timeStamp;
    timeout = setTimeout(
      () => {
        hasLongPressed = true;
        handler(ev);
      },
      (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY
    );
  }
  function onMove(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    if (!posStart || (options == null ? void 0 : options.distanceThreshold) === false)
      return;
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    const dx = ev.x - posStart.x;
    const dy = ev.y - posStart.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance >= ((_d = options == null ? void 0 : options.distanceThreshold) != null ? _d : DEFAULT_THRESHOLD))
      clear();
  }
  const listenerOptions = {
    capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
    once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
  };
  const cleanup = [
    useEventListener(elementRef, "pointerdown", onDown, listenerOptions),
    useEventListener(elementRef, "pointermove", onMove, listenerOptions),
    useEventListener(elementRef, ["pointerup", "pointerleave"], onRelease, listenerOptions)
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

function isFocusedElementEditable() {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
}
function isTypedCharValid({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  if (keyCode >= 97 && keyCode <= 122)
    return true;
  return false;
}
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    if (!isFocusedElementEditable() && isTypedCharValid(event)) {
      callback(event);
    }
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  let _trigger = () => {
  };
  const element = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.customRef)((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(_trigger);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onUpdated)(_trigger);
  return element;
}

function useMounted() {
  const isMounted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const instance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  if (instance) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onMounted)(() => {
      isMounted.value = true;
    }, vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue2 ? void 0 : instance);
  }
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useMutationObserver(target, callback, options = {}) {
  const { window = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window && "MutationObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.notNullish);
    return new Set(items);
  });
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}

function useActiveElement(options = {}) {
  var _a;
  const {
    window = defaultWindow,
    deep = true,
    triggerOnRemoval = false
  } = options;
  const document = (_a = options.document) != null ? _a : window == null ? void 0 : window.document;
  const getDeepActiveElement = () => {
    var _a2;
    let element = document == null ? void 0 : document.activeElement;
    if (deep) {
      while (element == null ? void 0 : element.shadowRoot)
        element = (_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement;
    }
    return element;
  };
  const activeElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const trigger = () => {
    activeElement.value = getDeepActiveElement();
  };
  if (window) {
    useEventListener(window, "blur", (event) => {
      if (event.relatedTarget !== null)
        return;
      trigger();
    }, true);
    useEventListener(window, "focus", trigger, true);
  }
  if (triggerOnRemoval) {
    useMutationObserver(document, (mutations) => {
      mutations.filter((m) => m.removedNodes.length).map((n) => Array.from(n.removedNodes)).flat().forEach((node) => {
        if (node === activeElement.value)
          trigger();
      });
    }, {
      childList: true,
      subtree: true
    });
  }
  trigger();
  return activeElement;
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window = defaultWindow
  } = options;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp) {
    if (!isActive.value || !window)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp;
    const delta = timestamp - previousFrameTimestamp;
    if (intervalLimit && delta < intervalLimit) {
      rafId = window.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp;
    fn({ delta, timestamp });
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(pause);
  return {
    isActive: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isActive),
    pause,
    resume
  };
}

function useAnimate(target, keyframes, options) {
  let config;
  let animateOptions;
  if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) {
    config = options;
    animateOptions = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectOmit)(options, ["window", "immediate", "commitStyles", "persist", "onReady", "onError"]);
  } else {
    config = { duration: options };
    animateOptions = options;
  }
  const {
    window = defaultWindow,
    immediate = true,
    commitStyles,
    persist,
    playbackRate: _playbackRate = 1,
    onReady,
    onError = (e) => {
      console.error(e);
    }
  } = config;
  const isSupported = useSupported(() => window && HTMLElement && "animate" in HTMLElement.prototype);
  const animate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const store = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowReactive)({
    startTime: null,
    currentTime: null,
    timeline: null,
    playbackRate: _playbackRate,
    pending: false,
    playState: immediate ? "idle" : "paused",
    replaceState: "active"
  });
  const pending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => store.pending);
  const playState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => store.playState);
  const replaceState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => store.replaceState);
  const startTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return store.startTime;
    },
    set(value) {
      store.startTime = value;
      if (animate.value)
        animate.value.startTime = value;
    }
  });
  const currentTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return store.currentTime;
    },
    set(value) {
      store.currentTime = value;
      if (animate.value) {
        animate.value.currentTime = value;
        syncResume();
      }
    }
  });
  const timeline = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return store.timeline;
    },
    set(value) {
      store.timeline = value;
      if (animate.value)
        animate.value.timeline = value;
    }
  });
  const playbackRate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return store.playbackRate;
    },
    set(value) {
      store.playbackRate = value;
      if (animate.value)
        animate.value.playbackRate = value;
    }
  });
  const play = () => {
    if (animate.value) {
      try {
        animate.value.play();
        syncResume();
      } catch (e) {
        syncPause();
        onError(e);
      }
    } else {
      update();
    }
  };
  const pause = () => {
    var _a;
    try {
      (_a = animate.value) == null ? void 0 : _a.pause();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  const reverse = () => {
    var _a;
    if (!animate.value)
      update();
    try {
      (_a = animate.value) == null ? void 0 : _a.reverse();
      syncResume();
    } catch (e) {
      syncPause();
      onError(e);
    }
  };
  const finish = () => {
    var _a;
    try {
      (_a = animate.value) == null ? void 0 : _a.finish();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  const cancel = () => {
    var _a;
    try {
      (_a = animate.value) == null ? void 0 : _a.cancel();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => unrefElement(target), (el) => {
    if (el)
      update();
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => keyframes, (value) => {
    if (animate.value)
      update();
    if (!unrefElement(target) && animate.value) {
      animate.value.effect = new KeyframeEffect(
        unrefElement(target),
        (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(value),
        animateOptions
      );
    }
  }, { deep: true });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => update(true), false);
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(cancel);
  function update(init) {
    const el = unrefElement(target);
    if (!isSupported.value || !el)
      return;
    if (!animate.value)
      animate.value = el.animate((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(keyframes), animateOptions);
    if (persist)
      animate.value.persist();
    if (_playbackRate !== 1)
      animate.value.playbackRate = _playbackRate;
    if (init && !immediate)
      animate.value.pause();
    else
      syncResume();
    onReady == null ? void 0 : onReady(animate.value);
  }
  useEventListener(animate, ["cancel", "finish", "remove"], syncPause);
  useEventListener(animate, "finish", () => {
    var _a;
    if (commitStyles)
      (_a = animate.value) == null ? void 0 : _a.commitStyles();
  });
  const { resume: resumeRef, pause: pauseRef } = useRafFn(() => {
    if (!animate.value)
      return;
    store.pending = animate.value.pending;
    store.playState = animate.value.playState;
    store.replaceState = animate.value.replaceState;
    store.startTime = animate.value.startTime;
    store.currentTime = animate.value.currentTime;
    store.timeline = animate.value.timeline;
    store.playbackRate = animate.value.playbackRate;
  }, { immediate: false });
  function syncResume() {
    if (isSupported.value)
      resumeRef();
  }
  function syncPause() {
    if (isSupported.value && window)
      window.requestAnimationFrame(pauseRef);
  }
  return {
    isSupported,
    animate,
    // actions
    play,
    pause,
    reverse,
    finish,
    cancel,
    // state
    pending,
    playState,
    replaceState,
    startTime,
    currentTime,
    timeline,
    playbackRate
  };
}

function useAsyncQueue(tasks, options) {
  const {
    interrupt = true,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onFinished = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    signal
  } = options || {};
  const promiseState = {
    aborted: "aborted",
    fulfilled: "fulfilled",
    pending: "pending",
    rejected: "rejected"
  };
  const initialResult = Array.from(Array.from({ length: tasks.length }), () => ({ state: promiseState.pending, data: null }));
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialResult);
  const activeIndex = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (signal == null ? void 0 : signal.aborted) {
        updateResult(promiseState.aborted, new Error("aborted"));
        return;
      }
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      const done = curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        if (activeIndex.value === tasks.length - 1)
          onFinished();
        return currentRes;
      });
      if (!signal)
        return done;
      return Promise.race([done, whenAborted(signal)]);
    }).catch((e) => {
      if (signal == null ? void 0 : signal.aborted) {
        updateResult(promiseState.aborted, e);
        return e;
      }
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}
function whenAborted(signal) {
  return new Promise((resolve, reject) => {
    const error = new Error("aborted");
    if (signal.aborted)
      reject(error);
    else
      signal.addEventListener("abort", () => reject(error), { once: true });
  });
}

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onSuccess = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options != null ? options : {};
  const state = shallow ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialState) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  const isReady = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isLoading = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout)(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
      onSuccess(data);
    } catch (e) {
      error.value = e;
      onError(e);
      if (throwError)
        throw e;
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  const shell = {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
  function waitUntilIsLoaded() {
    return new Promise((resolve, reject) => {
      (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until)(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
    });
  }
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded().then(onFulfilled, onRejected);
    }
  };
}

const defaults = {
  array: (v) => JSON.stringify(v),
  object: (v) => JSON.stringify(v),
  set: (v) => JSON.stringify(Array.from(v)),
  map: (v) => JSON.stringify(Object.fromEntries(v)),
  null: () => ""
};
function getDefaultSerialization(target) {
  if (!target)
    return defaults.null;
  if (target instanceof Map)
    return defaults.map;
  else if (target instanceof Set)
    return defaults.set;
  else if (Array.isArray(target))
    return defaults.array;
  else
    return defaults.object;
}

function useBase64(target, options) {
  const base64 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  function execute() {
    if (!_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
        if (_target == null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else if (typeof _target === "object") {
          const _serializeFn = (options == null ? void 0 : options.serializer) || getDefaultSerialization(_target);
          const serialized = _serializeFn(_target);
          return resolve(blobToBase64(new Blob([serialized], { type: "application/json" })));
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(target) || typeof target === "function")
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(target, execute, { immediate: true });
  else
    execute();
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery(options = {}) {
  const { navigator = defaultNavigator } = options;
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = useSupported(() => navigator && "getBattery" in navigator && typeof navigator.getBattery === "function");
  const charging = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const chargingTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const dischargingTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const level = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported.value) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      useEventListener(battery, events, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useBluetooth(options) {
  let {
    acceptAllDevices = false
  } = options || {};
  const {
    filters = void 0,
    optionalServices = void 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = useSupported(() => navigator && "bluetooth" in navigator);
  const device = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(device, () => {
    connectToBluetoothGATTServer();
  });
  async function requestDevice() {
    if (!isSupported.value)
      return;
    error.value = null;
    if (filters && filters.length > 0)
      acceptAllDevices = false;
    try {
      device.value = await (navigator == null ? void 0 : navigator.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices
      }));
    } catch (err) {
      error.value = err;
    }
  }
  const server = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const isConnected = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a;
    return ((_a = server.value) == null ? void 0 : _a.connected) || false;
  });
  async function connectToBluetoothGATTServer() {
    error.value = null;
    if (device.value && device.value.gatt) {
      device.value.addEventListener("gattserverdisconnected", () => {
      });
      try {
        server.value = await device.value.gatt.connect();
      } catch (err) {
        error.value = err;
      }
    }
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.connect();
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.disconnect();
  });
  return {
    isSupported,
    isConnected,
    // Device:
    device,
    requestDevice,
    // Server:
    server,
    // Errors:
    error
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
  let mediaQuery;
  const matches = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetifyV2 = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904
};
const breakpointsVuetifyV3 = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
const breakpointsVuetify = breakpointsVuetifyV2;
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};
const breakpointsMasterCss = {
  "3xs": 360,
  "2xs": 480,
  "xs": 600,
  "sm": 768,
  "md": 1024,
  "lg": 1280,
  "xl": 1440,
  "2xl": 1600,
  "3xl": 1920,
  "4xl": 2560
};
const breakpointsPrimeFlex = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
const breakpointsElement = {
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920
};

function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(breakpoints[(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(k)]);
    if (delta != null)
      v = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.increaseWithUnit)(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow, strategy = "min-width" } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(() => `(min-width: ${getValue(k)})`, options);
  };
  const smallerOrEqual = (k) => {
    return useMediaQuery(() => `(max-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  function current() {
    const points = Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i)]);
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => points.filter(([, v]) => v.value).map(([k]) => k));
  }
  return Object.assign(shortcutMethods, {
    greaterOrEqual,
    smallerOrEqual,
    greater(k) {
      return useMediaQuery(() => `(min-width: ${getValue(k, 0.1)})`, options);
    },
    smaller(k) {
      return useMediaQuery(() => `(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(() => `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k, 0.1)})`);
    },
    isGreaterOrEqual(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isSmallerOrEqual(k) {
      return match(`(max-width: ${getValue(k)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    },
    current,
    active() {
      const bps = current();
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => bps.value.length === 0 ? "" : bps.value.at(-1));
    }
  });
}

function useBroadcastChannel(options) {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "BroadcastChannel" in window);
  const isClosed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const channel = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported.value) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
}

const WRITABLE_PROPERTIES = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function useBrowserLocation(options = {}) {
  const { window = defaultWindow } = options;
  const refs = Object.fromEntries(
    WRITABLE_PROPERTIES.map((key) => [key, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)()])
  );
  for (const [key, ref2] of (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectEntries)(refs)) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(ref2, (value) => {
      if (!(window == null ? void 0 : window.location) || window.location[key] === value)
        return;
      window.location[key] = value;
    });
  }
  const buildState = (trigger) => {
    var _a;
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { origin } = (window == null ? void 0 : window.location) || {};
    for (const key of WRITABLE_PROPERTIES)
      refs[key].value = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a[key];
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      trigger,
      state: state2,
      length,
      origin,
      ...refs
    });
  };
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useCached(refValue, comparator = (a, b) => a === b, watchOptions) {
  const cachedValue = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(refValue.value);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  const permissionStatus = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const update = () => {
    var _a, _b;
    state.value = (_b = (_a = permissionStatus.value) == null ? void 0 : _a.state) != null ? _b : "prompt";
  };
  useEventListener(permissionStatus, "change", update);
  const query = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSingletonPromise)(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus.value) {
      try {
        permissionStatus.value = await navigator.permissions.query(desc);
      } catch (e) {
        permissionStatus.value = void 0;
      } finally {
        update();
      }
    }
    if (controls)
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.toRaw)(permissionStatus.value);
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => isClipboardApiSupported.value || legacy);
  const text = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const copied = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const timeout = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value && isAllowed(permissionWrite.value))
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

function useClipboardItems(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500
  } = options;
  const isSupported = useSupported(() => navigator && "clipboard" in navigator);
  const content = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const copied = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const timeout = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(() => copied.value = false, copiedDuring);
  function updateContent() {
    if (isSupported.value) {
      navigator.clipboard.read().then((items) => {
        content.value = items;
      });
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateContent);
  async function copy(value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source)) {
    if (isSupported.value && value != null) {
      await navigator.clipboard.write(value);
      content.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    content,
    copied,
    copy
  };
}

function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useCloned(source, options = {}) {
  const cloned = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({});
  const {
    manual,
    clone = cloneFnJSON,
    // watch options
    deep = true,
    immediate = true
  } = options;
  function sync() {
    cloned.value = clone((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source));
  }
  if (!manual && ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(source) || typeof source === "function")) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(source, sync, {
      ...options,
      deep,
      immediate
    });
  } else {
    sync();
  }
  return { cloned, sync };
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef : vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch)(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window && listenToStorageChanges) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
      if (storage instanceof Storage)
        useEventListener(window, "storage", update);
      else
        useEventListener(window, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window) {
      const payload = {
        key,
        oldValue,
        newValue,
        storageArea: storage
      };
      window.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(key);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.nextTick)(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}

const CSS_DISABLE_TRANS = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window });
  const system = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(initialValue) : useStorage(storageKey, initialValue, storage, { window, listenToStorageChanges }));
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window == null ? void 0 : window.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      const classesToAdd = /* @__PURE__ */ new Set();
      const classesToRemove = /* @__PURE__ */ new Set();
      let attributeToChange = null;
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            classesToAdd.add(v);
          else
            classesToRemove.add(v);
        });
      } else {
        attributeToChange = { key: attribute2, value };
      }
      if (classesToAdd.size === 0 && classesToRemove.size === 0 && attributeToChange === null)
        return;
      let style;
      if (disableTransition) {
        style = window.document.createElement("style");
        style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
        window.document.head.appendChild(style);
      }
      for (const c of classesToAdd) {
        el.classList.add(c);
      }
      for (const c of classesToRemove) {
        el.classList.remove(c);
      }
      if (attributeToChange) {
        el.setAttribute(attributeToChange.key, attributeToChange.value);
      }
      if (disableTransition) {
        window.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(state, onChanged, { flush: "post", immediate: true });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => onChanged(state.value));
  const auto = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e) {
    return auto;
  }
}

function useConfirmDialog(revealed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false)) {
  const confirmHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const cancelHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const revealHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  let _resolve = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, options = {}) {
  const { window = defaultWindow, initialValue, observe = false } = options;
  const variable = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const elRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  function updateCssVar() {
    var _a;
    const key = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(prop);
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(elRef);
    if (el && window && key) {
      const value = (_a = window.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim();
      variable.value = value || initialValue;
    }
  }
  if (observe) {
    useMutationObserver(elRef, updateCssVar, {
      attributeFilter: ["style", "class"],
      window
    });
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    [elRef, () => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(prop)],
    (_, old) => {
      if (old[0] && old[1])
        old[0].style.removeProperty(old[1]);
      updateCssVar();
    },
    { immediate: true }
  );
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    variable,
    (val) => {
      var _a;
      const raw_prop = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(prop);
      if (((_a = elRef.value) == null ? void 0 : _a.style) && raw_prop) {
        if (val == null)
          elRef.value.style.removeProperty(raw_prop);
        else
          elRef.value.style.setProperty(raw_prop, val);
      }
    }
  );
  return variable;
}

function useCurrentElement(rootComponent) {
  const vm = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  const currentElement = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.computedWithControl)(
    () => null,
    () => rootComponent ? unrefElement(rootComponent) : vm.proxy.$el
  );
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onUpdated)(currentElement.trigger);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onMounted)(currentElement.trigger);
  return currentElement;
}

function useCycleList(list, options) {
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(getInitialValue());
  const listRef = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(list);
  const index = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      var _a;
      const targetList = listRef.value;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, targetList) : targetList.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a = options == null ? void 0 : options.fallbackIndex) != null ? _a : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const targetList = listRef.value;
    const length = targetList.length;
    const index2 = (i % length + length) % length;
    const value = targetList[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  function getInitialValue() {
    var _a, _b;
    return (_b = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)((_a = options == null ? void 0 : options.initialValue) != null ? _a : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(list)[0])) != null ? _b : void 0;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(listRef, () => set(index.value));
  return {
    state,
    index,
    next,
    prev,
    go: set
  };
}

function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (mode.system) {
      return mode.system.value;
    } else {
      const preferredDark = usePreferredDark({ window });
      return preferredDark.value ? "dark" : "light";
    }
  });
  const isDark = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark;
}

function fnBypass(v) {
  return v;
}
function fnSetSource(source, value) {
  return source.value = value;
}
function defaultDump(clone) {
  return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function defaultParse(clone) {
  return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.markRaw)({
      snapshot: dump(source.value),
      timestamp: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)()
    });
  }
  const last = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(_createHistoryRecord());
  const undoStack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const redoStack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Number.POSITIVE_INFINITY);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => [last.value, ...undoStack.value]);
  const canUndo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => undoStack.value.length > 0);
  const canRedo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableFilter)(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchIgnorable)(
    source,
    commit,
    { deep, flush, eventFilter: composedFilter }
  );
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, { ...options, clone: options.clone || deep, setSource });
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return {
    ...manualHistory,
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  };
}

function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debounceFilter)(options.debounce) : void 0;
  const history = useRefHistory(source, { ...options, eventFilter: filter });
  return {
    ...history
  };
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.bypassFilter
  } = options;
  const acceleration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ x: null, y: null, z: null });
  const rotationRate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ alpha: null, beta: null, gamma: null });
  const interval = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const accelerationIncludingGravity = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper)(
      eventFilter,
      (event) => {
        acceleration.value = event.acceleration;
        accelerationIncludingGravity.value = event.accelerationIncludingGravity;
        rotationRate.value = event.rotationRate;
        interval.value = event.interval;
      }
    );
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "DeviceOrientationEvent" in window);
  const isAbsolute = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const alpha = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const beta = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const gamma = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  if (window && isSupported.value) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

function useDevicePixelRatio(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const pixelRatio = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  if (window) {
    let observe2 = function() {
      pixelRatio.value = window.devicePixelRatio;
      cleanup2();
      media = window.matchMedia(`(resolution: ${pixelRatio.value}dppx)`);
      media.addEventListener("change", observe2, { once: true });
    }, cleanup2 = function() {
      media == null ? void 0 : media.removeEventListener("change", observe2);
    };
    let media;
    observe2();
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(cleanup2);
  }
  return { pixelRatio };
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const videoInputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "audiooutput"));
  const isSupported = useSupported(() => navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
  const permissionGranted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  let stream;
  async function update() {
    if (!isSupported.value)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    }
  }
  async function ensurePermissions() {
    if (!isSupported.value)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      let granted = true;
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (e) {
        stream = null;
        granted = false;
      }
      update();
      permissionGranted.value = granted;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (isSupported.value) {
    if (requestPermissions)
      ensurePermissions();
    useEventListener(navigator.mediaDevices, "devicechange", update);
    update();
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a;
  const enabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _a2;
    return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getDisplayMedia;
  });
  const constraint = { audio, video };
  const stream = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  async function _start() {
    var _a2;
    if (!isSupported.value || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.addEventListener("ended", stop));
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    enabled,
    (v) => {
      if (v)
        _start();
      else
        _stop();
    },
    { immediate: true }
  );
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility(options = {}) {
  const { document = defaultDocument } = options;
  if (!document)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("visible");
  const visibility = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

function useDraggable(target, options = {}) {
  var _a, _b;
  const {
    pointerTypes,
    preventDefault,
    stopPropagation,
    exact,
    onMove,
    onEnd,
    onStart,
    initialValue,
    axis = "both",
    draggingElement = defaultWindow,
    containerElement,
    handle: draggingHandle = target,
    buttons = [0]
  } = options;
  const position = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(
    (_a = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(initialValue)) != null ? _a : { x: 0, y: 0 }
  );
  const pressedDelta = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const filterEvent = (e) => {
    if (pointerTypes)
      return pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(preventDefault))
      e.preventDefault();
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    var _a2;
    if (!(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(buttons).includes(e.button))
      return;
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.disabled) || !filterEvent(e))
      return;
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(exact) && e.target !== (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target))
      return;
    const container = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(containerElement);
    const containerRect = (_a2 = container == null ? void 0 : container.getBoundingClientRect) == null ? void 0 : _a2.call(container);
    const targetRect = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target).getBoundingClientRect();
    const pos = {
      x: e.clientX - (container ? targetRect.left - containerRect.left + container.scrollLeft : targetRect.left),
      y: e.clientY - (container ? targetRect.top - containerRect.top + container.scrollTop : targetRect.top)
    };
    if ((onStart == null ? void 0 : onStart(pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.disabled) || !filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    const container = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(containerElement);
    const targetRect = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target).getBoundingClientRect();
    let { x, y } = position.value;
    if (axis === "x" || axis === "both") {
      x = e.clientX - pressedDelta.value.x;
      if (container)
        x = Math.min(Math.max(0, x), container.scrollWidth - targetRect.width);
    }
    if (axis === "y" || axis === "both") {
      y = e.clientY - pressedDelta.value.y;
      if (container)
        y = Math.min(Math.max(0, y), container.scrollHeight - targetRect.height);
    }
    position.value = {
      x,
      y
    };
    onMove == null ? void 0 : onMove(position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.disabled) || !filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    onEnd == null ? void 0 : onEnd(position.value, e);
    handleEvent(e);
  };
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient) {
    const config = { capture: (_b = options.capture) != null ? _b : true };
    useEventListener(draggingHandle, "pointerdown", start, config);
    useEventListener(draggingElement, "pointermove", move, config);
    useEventListener(draggingElement, "pointerup", end, config);
  }
  return {
    ...(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs)(position),
    position,
    isDragging: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !!pressedDelta.value),
    style: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(
      () => `left:${position.value.x}px;top:${position.value.y}px;`
    )
  };
}

function useDropZone(target, options = {}) {
  var _a, _b;
  const isOverDropZone = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const files = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  let counter = 0;
  let isValid = true;
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient) {
    const _options = typeof options === "function" ? { onDrop: options } : options;
    const multiple = (_a = _options.multiple) != null ? _a : true;
    const preventDefaultForUnhandled = (_b = _options.preventDefaultForUnhandled) != null ? _b : false;
    const getFiles = (event) => {
      var _a2, _b2;
      const list = Array.from((_b2 = (_a2 = event.dataTransfer) == null ? void 0 : _a2.files) != null ? _b2 : []);
      return list.length === 0 ? null : multiple ? list : [list[0]];
    };
    const checkDataTypes = (types) => {
      if (_options.dataTypes) {
        const dataTypes = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(_options.dataTypes);
        return typeof dataTypes === "function" ? dataTypes(types) : dataTypes ? dataTypes.some((item) => types.includes(item)) : true;
      }
      return true;
    };
    const checkValidity = (event) => {
      var _a2, _b2;
      const items = Array.from((_b2 = (_a2 = event.dataTransfer) == null ? void 0 : _a2.items) != null ? _b2 : []);
      const types = items.map((item) => item.type);
      const dataTypesValid = checkDataTypes(types);
      const multipleFilesValid = multiple || items.length <= 1;
      return dataTypesValid && multipleFilesValid;
    };
    const handleDragEvent = (event, eventType) => {
      var _a2, _b2, _c, _d;
      isValid = checkValidity(event);
      if (!isValid) {
        if (preventDefaultForUnhandled) {
          event.preventDefault();
        }
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = "none";
        }
        return;
      }
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "copy";
      }
      const currentFiles = getFiles(event);
      switch (eventType) {
        case "enter":
          counter += 1;
          isOverDropZone.value = true;
          (_a2 = _options.onEnter) == null ? void 0 : _a2.call(_options, null, event);
          break;
        case "over":
          (_b2 = _options.onOver) == null ? void 0 : _b2.call(_options, null, event);
          break;
        case "leave":
          counter -= 1;
          if (counter === 0)
            isOverDropZone.value = false;
          (_c = _options.onLeave) == null ? void 0 : _c.call(_options, null, event);
          break;
        case "drop":
          counter = 0;
          isOverDropZone.value = false;
          if (isValid) {
            files.value = currentFiles;
            (_d = _options.onDrop) == null ? void 0 : _d.call(_options, currentFiles, event);
          }
          break;
      }
    };
    useEventListener(target, "dragenter", (event) => handleDragEvent(event, "enter"));
    useEventListener(target, "dragover", (event) => handleDragEvent(event, "over"));
    useEventListener(target, "dragleave", (event) => handleDragEvent(event, "leave"));
    useEventListener(target, "drop", (event) => handleDragEvent(event, "drop"));
  }
  return {
    files,
    isOverDropZone
  };
}

function useResizeObserver(target, callback, options = {}) {
  const { window = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const _targets = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  });
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window) {
        observer = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el)
            observer.observe(_el, observerOptions);
        }
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true,
    updateTiming = "sync"
  } = options;
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const bottom = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const left = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const right = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const top = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  function recalculate() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  function update() {
    if (updateTiming === "sync")
      recalculate();
    else if (updateTiming === "next-frame")
      requestAnimationFrame(() => recalculate());
  }
  useResizeObserver(target, update);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => unrefElement(target), (ele) => !ele && update());
  useMutationObserver(target, update, {
    attributeFilter: ["style", "class"]
  });
  if (windowScroll)
    useEventListener("scroll", update, { capture: true, passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useElementByPoint(options) {
  const {
    x,
    y,
    document = defaultDocument,
    multiple,
    interval = "requestAnimationFrame",
    immediate = true
  } = options;
  const isSupported = useSupported(() => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(multiple))
      return document && "elementsFromPoint" in document;
    return document && "elementFromPoint" in document;
  });
  const element = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const cb = () => {
    var _a, _b;
    element.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(multiple) ? (_a = document == null ? void 0 : document.elementsFromPoint((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(x), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(y))) != null ? _a : [] : (_b = document == null ? void 0 : document.elementFromPoint((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(x), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(y))) != null ? _b : null;
  };
  const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(cb, interval, { immediate });
  return {
    isSupported,
    element,
    ...controls
  };
}

function useElementHover(el, options = {}) {
  const {
    delayEnter = 0,
    delayLeave = 0,
    window = defaultWindow
  } = options;
  const isHovered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    if (delay)
      timer = setTimeout(() => isHovered.value = entering, delay);
    else
      isHovered.value = entering;
  };
  if (!window)
    return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window = defaultWindow, box = "content-box" } = options;
  const isSVG = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a, _b;
    return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialSize.width);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const rect = $elem.getBoundingClientRect();
          width.value = rect.width;
          height.value = rect.height;
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0,
    window = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  const targets = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const _target = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.notNullish);
  });
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(immediate);
  const stopWatch = isSupported.value ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
      };
    },
    { immediate, flush: "post" }
  ) : _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}

function useElementVisibility(element, options = {}) {
  const { window = defaultWindow, scrollTarget, threshold = 0 } = options;
  const elementIsVisible = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  useIntersectionObserver(
    element,
    (intersectionObserverEntries) => {
      let isIntersecting = elementIsVisible.value;
      let latestTime = 0;
      for (const entry of intersectionObserverEntries) {
        if (entry.time >= latestTime) {
          latestTime = entry.time;
          isIntersecting = entry.isIntersecting;
        }
      }
      elementIsVisible.value = isIntersecting;
    },
    {
      root: scrollTarget,
      window,
      threshold
    }
  );
  return elementIsVisible;
}

const events = /* @__PURE__ */ new Map();

function useEventBus(key) {
  const scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentScope)();
  function on(listener) {
    var _a;
    const listeners = events.get(key) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a = scope == null ? void 0 : scope.cleanups) == null ? void 0 : _a.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    listeners.delete(listener);
    if (!listeners.size)
      reset();
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function resolveNestedOptions$1(options) {
  if (options === true)
    return {};
  return options;
}
function useEventSource(url, events = [], options = {}) {
  const event = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("CONNECTING");
  const eventSource = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const urlRef = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(url);
  const lastEventId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  let explicitlyClosed = false;
  let retried = 0;
  const {
    withCredentials = false,
    immediate = true
  } = options;
  const close = () => {
    if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient && eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
      explicitlyClosed = true;
    }
  };
  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === "undefined")
      return;
    const es = new EventSource(urlRef.value, { withCredentials });
    status.value = "CONNECTING";
    eventSource.value = es;
    es.onopen = () => {
      status.value = "OPEN";
      error.value = null;
    };
    es.onerror = (e) => {
      status.value = "CLOSED";
      error.value = e;
      if (es.readyState === 2 && !explicitlyClosed && options.autoReconnect) {
        es.close();
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions$1(options.autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries))
          setTimeout(_init, delay);
        else if (typeof retries === "function" && retries())
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    es.onmessage = (e) => {
      event.value = null;
      data.value = e.data;
      lastEventId.value = e.lastEventId;
    };
    for (const event_name of events) {
      useEventListener(es, event_name, (e) => {
        event.value = event_name;
        data.value = e.data || null;
      });
    }
  };
  const open = () => {
    if (!_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient)
      return;
    close();
    explicitlyClosed = false;
    retried = 0;
    _init();
  };
  if (immediate)
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(urlRef, open, { immediate: true });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(close);
  return {
    eventSource,
    event,
    data,
    status,
    error,
    open,
    close,
    lastEventId
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = useSupported(() => typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  async function open(openOptions) {
    if (!isSupported.value)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(newIcon);
  const applyIcon = (icon) => {
    const elements = document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`);
    if (!elements || elements.length === 0) {
      const link = document == null ? void 0 : document.createElement("link");
      if (link) {
        link.rel = rel;
        link.href = `${baseUrl}${icon}`;
        link.type = `image/${icon.split(".").pop()}`;
        document == null ? void 0 : document.head.append(link);
      }
      return;
    }
    elements == null ? void 0 : elements.forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    favicon,
    (i, o) => {
      if (typeof i === "string" && i !== o)
        applyIcon(i);
    },
    { immediate: true }
  );
  return favicon;
}

const payloadMapping = {
  json: "application/json",
  text: "text/plain"
};
function isFetchOptions(obj) {
  return obj && (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.containsProp)(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
const reAbsolute = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;
function isAbsoluteURL(url) {
  return reAbsolute.test(url);
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers)
    return Object.fromEntries(headers.entries());
  return headers;
}
function combineCallbacks(combination, ...callbacks) {
  if (combination === "overwrite") {
    return async (ctx) => {
      const callback = callbacks[callbacks.length - 1];
      if (callback)
        return { ...ctx, ...await callback(ctx) };
      return ctx;
    };
  } else {
    return async (ctx) => {
      for (const callback of callbacks) {
        if (callback)
          ctx = { ...ctx, ...await callback(ctx) };
      }
      return ctx;
    };
  }
}
function createFetch(config = {}) {
  const _combination = config.combination || "chain";
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const baseUrl = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(config.baseUrl);
      const targetUrl = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(url);
      return baseUrl && !isAbsoluteURL(targetUrl) ? joinPaths(baseUrl, targetUrl) : targetUrl;
    });
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = {
          ...options,
          ...args[0],
          beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[0].beforeFetch),
          afterFetch: combineCallbacks(_combination, _options.afterFetch, args[0].afterFetch),
          onFetchError: combineCallbacks(_combination, _options.onFetchError, args[0].onFetchError)
        };
      } else {
        fetchOptions = {
          ...fetchOptions,
          ...args[0],
          headers: {
            ...headersToObject(fetchOptions.headers) || {},
            ...headersToObject(args[0].headers) || {}
          }
        };
      }
    }
    if (args.length > 1 && isFetchOptions(args[1])) {
      options = {
        ...options,
        ...args[1],
        beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[1].beforeFetch),
        afterFetch: combineCallbacks(_combination, _options.afterFetch, args[1].afterFetch),
        onFetchError: combineCallbacks(_combination, _options.onFetchError, args[1].onFetchError)
      };
    }
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = {
    immediate: true,
    refetch: false,
    timeout: 0,
    updateDataOnError: false
  };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = { ...options, ...args[0] };
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = { ...options, ...args[1] };
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const errorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const finallyEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const isFinished = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isFetching = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const aborted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const statusCode = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const response = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialData || null);
  const canAbort = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort) {
      controller == null ? void 0 : controller.abort();
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = {
        ...fetchOptions,
        signal: controller.signal
      };
    }
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(abort, timeout, { immediate: false });
  let executeCounter = 0;
  const execute = async (throwOnFailed = false) => {
    var _a2, _b;
    abort();
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    executeCounter += 1;
    const currentExecuteCounter = executeCounter;
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      const payload = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(config.payload);
      const proto = Object.getPrototypeOf(payload);
      if (!config.payloadType && payload && (proto === Object.prototype || Array.isArray(proto)) && !(payload instanceof FormData))
        config.payloadType = "json";
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(payload) : payload;
    }
    let isCanceled = false;
    const context = {
      url: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(url),
      options: {
        ...defaultFetchOptions,
        ...fetchOptions
      },
      cancel: () => {
        isCanceled = true;
      }
    };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return fetch(
      context.url,
      {
        ...defaultFetchOptions,
        ...context.options,
        headers: {
          ...headersToObject(defaultFetchOptions.headers),
          ...headersToObject((_b = context.options) == null ? void 0 : _b.headers)
        }
      }
    ).then(async (fetchResponse) => {
      response.value = fetchResponse;
      statusCode.value = fetchResponse.status;
      responseData = await fetchResponse.clone()[config.type]();
      if (!fetchResponse.ok) {
        data.value = initialData || null;
        throw new Error(fetchResponse.statusText);
      }
      if (options.afterFetch) {
        ({ data: responseData } = await options.afterFetch({
          data: responseData,
          response: fetchResponse
        }));
      }
      data.value = responseData;
      responseEvent.trigger(fetchResponse);
      return fetchResponse;
    }).catch(async (fetchError) => {
      let errorData = fetchError.message || fetchError.name;
      if (options.onFetchError) {
        ({ error: errorData, data: responseData } = await options.onFetchError({
          data: responseData,
          error: fetchError,
          response: response.value
        }));
      }
      error.value = errorData;
      if (options.updateDataOnError)
        data.value = responseData;
      errorEvent.trigger(fetchError);
      if (throwOnFailed)
        throw fetchError;
      return null;
    }).finally(() => {
      if (currentExecuteCounter === executeCounter)
        loading(false);
      if (timer)
        timer.stop();
      finallyEvent.trigger(null);
    });
  };
  const refetch = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(options.refetch);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    [
      refetch,
      (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(url)
    ],
    ([refetch2]) => refetch2 && execute(),
    { deep: true }
  );
  const shell = {
    isFinished: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isFinished),
    isFetching: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isFetching),
    statusCode,
    response,
    error,
    data,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    // method
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    // type
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(config.payload)) {
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
            [
              refetch,
              (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(config.payload)
            ],
            ([refetch2]) => refetch2 && execute(),
            { deep: true }
          );
        }
        return {
          ...shell,
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        };
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until)(isFinished).toBe(true).then(() => resolve(shell)).catch(reject);
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return {
          ...shell,
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        };
      }
      return void 0;
    };
  }
  if (options.immediate)
    Promise.resolve().then(() => execute());
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  };
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/")) {
    return `${start}/${end}`;
  }
  if (start.endsWith("/") && end.startsWith("/")) {
    return `${start.slice(0, -1)}${end}`;
  }
  return `${start}${end}`;
}

const DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*",
  reset: false,
  directory: false
};
function useFileDialog(options = {}) {
  const {
    document = defaultDocument
  } = options;
  const files = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const { on: onChange, trigger: changeTrigger } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const { on: onCancel, trigger: cancelTrigger } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  let input;
  if (document) {
    input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const result = event.target;
      files.value = result.files;
      changeTrigger(files.value);
    };
    input.oncancel = () => {
      cancelTrigger();
    };
  }
  const reset = () => {
    files.value = null;
    if (input && input.value) {
      input.value = "";
      changeTrigger(null);
    }
  };
  const open = (localOptions) => {
    if (!input)
      return;
    const _options = {
      ...DEFAULT_OPTIONS,
      ...options,
      ...localOptions
    };
    input.multiple = _options.multiple;
    input.accept = _options.accept;
    input.webkitdirectory = _options.directory;
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(_options, "capture"))
      input.capture = _options.capture;
    if (_options.reset)
      reset();
    input.click();
  };
  return {
    files: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(files),
    open,
    reset,
    onCancel,
    onChange
  };
}

function useFileSystemAccess(options = {}) {
  const {
    window: _window = defaultWindow,
    dataType = "Text"
  } = options;
  const window = _window;
  const isSupported = useSupported(() => window && "showSaveFilePicker" in window && "showOpenFilePicker" in window);
  const fileHandle = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const file = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const fileName = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
  });
  const fileMIME = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
  });
  const fileSize = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
  });
  const fileLastModified = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
  });
  async function open(_options = {}) {
    if (!isSupported.value)
      return;
    const [handle] = await window.showOpenFilePicker({ ...(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options), ..._options });
    fileHandle.value = handle;
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported.value)
      return;
    fileHandle.value = await window.showSaveFilePicker({ ...options, ..._options });
    data.value = void 0;
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported.value)
      return;
    if (!fileHandle.value)
      return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported.value)
      return;
    fileHandle.value = await window.showSaveFilePicker({ ...options, ..._options });
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _a;
    file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
  }
  async function updateData() {
    var _a, _b;
    await updateFile();
    const type = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(dataType);
    if (type === "Text")
      data.value = await ((_a = file.value) == null ? void 0 : _a.text());
    else if (type === "ArrayBuffer")
      data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
    else if (type === "Blob")
      data.value = file.value;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}

function useFocus(target, options = {}) {
  const { initialValue = false, focusVisible = false, preventScroll = false } = options;
  const innerFocused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const targetElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(target));
  useEventListener(targetElement, "focus", (event) => {
    var _a, _b;
    if (!focusVisible || ((_b = (_a = event.target).matches) == null ? void 0 : _b.call(_a, ":focus-visible")))
      innerFocused.value = true;
  });
  useEventListener(targetElement, "blur", () => innerFocused.value = false);
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get: () => innerFocused.value,
    set(value) {
      var _a, _b;
      if (!value && innerFocused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      else if (value && !innerFocused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus({ preventScroll });
    }
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    targetElement,
    () => {
      focused.value = initialValue;
    },
    { immediate: true, flush: "post" }
  );
  return { focused };
}

const EVENT_FOCUS_IN = "focusin";
const EVENT_FOCUS_OUT = "focusout";
function useFocusWithin(target, options = {}) {
  const { window = defaultWindow } = options;
  const targetElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(target));
  const _focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => _focused.value);
  const activeElement = useActiveElement(options);
  if (!window || !activeElement.value) {
    return { focused };
  }
  useEventListener(targetElement, EVENT_FOCUS_IN, () => _focused.value = true);
  useEventListener(targetElement, EVENT_FOCUS_OUT, () => _focused.value = false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
  const {
    document = defaultDocument,
    autoExit = false
  } = options;
  const targetRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a;
    return (_a = unrefElement(target)) != null ? _a : document == null ? void 0 : document.querySelector("html");
  });
  const isFullscreen = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const requestMethod = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m) => document && m in document || targetRef.value && m in targetRef.value);
  });
  const exitMethod = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m) => document && m in document || targetRef.value && m in targetRef.value);
  });
  const fullscreenEnabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m) => document && m in document || targetRef.value && m in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m) => document && m in document);
  const isSupported = useSupported(() => targetRef.value && document && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod)
      return (document == null ? void 0 : document[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) {
      if (document && document[fullscreenEnabled.value] != null) {
        return document[fullscreenEnabled.value];
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
          return Boolean(target2[fullscreenEnabled.value]);
        }
      }
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value)
      return;
    if (exitMethod.value) {
      if ((document == null ? void 0 : document[exitMethod.value]) != null) {
        await document[exitMethod.value]();
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
          await target2[exitMethod.value]();
      }
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value)
      return;
    if (isElementFullScreen())
      await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
      isFullscreen.value = isElementFullScreenValue;
  };
  useEventListener(document, eventHandlers, handlerCallback, false);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
  if (autoExit)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function mapGamepadToXbox360Controller(gamepad) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (gamepad.value) {
      return {
        buttons: {
          a: gamepad.value.buttons[0],
          b: gamepad.value.buttons[1],
          x: gamepad.value.buttons[2],
          y: gamepad.value.buttons[3]
        },
        bumper: {
          left: gamepad.value.buttons[4],
          right: gamepad.value.buttons[5]
        },
        triggers: {
          left: gamepad.value.buttons[6],
          right: gamepad.value.buttons[7]
        },
        stick: {
          left: {
            horizontal: gamepad.value.axes[0],
            vertical: gamepad.value.axes[1],
            button: gamepad.value.buttons[10]
          },
          right: {
            horizontal: gamepad.value.axes[2],
            vertical: gamepad.value.axes[3],
            button: gamepad.value.buttons[11]
          }
        },
        dpad: {
          up: gamepad.value.buttons[12],
          down: gamepad.value.buttons[13],
          left: gamepad.value.buttons[14],
          right: gamepad.value.buttons[15]
        },
        back: gamepad.value.buttons[8],
        start: gamepad.value.buttons[9]
      };
    }
    return null;
  });
}
function useGamepad(options = {}) {
  const {
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "getGamepads" in navigator);
  const gamepads = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const onConnectedHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const onDisconnectedHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator)
      hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators)
      hapticActuators.push(...gamepad.hapticActuators);
    return {
      id: gamepad.id,
      index: gamepad.index,
      connected: gamepad.connected,
      mapping: gamepad.mapping,
      timestamp: gamepad.timestamp,
      vibrationActuator: gamepad.vibrationActuator,
      hapticActuators,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({ pressed: button.pressed, touched: button.touched, value: button.value }))
    };
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (const gamepad of _gamepads) {
      if (gamepad && gamepads.value[gamepad.index])
        gamepads.value[gamepad.index] = stateFromGamepad(gamepad);
    }
  };
  const { isActive, pause, resume } = useRafFn(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  useEventListener("gamepadconnected", (e) => onGamepadConnected(e.gamepad));
  useEventListener("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad));
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (const gamepad of _gamepads) {
      if (gamepad && gamepads.value[gamepad.index])
        onGamepadConnected(gamepad);
    }
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator,
    immediate = true
  } = options;
  const isSupported = useSupported(() => navigator && "geolocation" in navigator);
  const locatedAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const coords = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({
    accuracy: 0,
    latitude: Number.POSITIVE_INFINITY,
    longitude: Number.POSITIVE_INFINITY,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  function resume() {
    if (isSupported.value) {
      watcher = navigator.geolocation.watchPosition(
        updatePosition,
        (err) => error.value = err,
        {
          enableHighAccuracy,
          maximumAge,
          timeout
        }
      );
    }
  }
  if (immediate)
    resume();
  function pause() {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    pause();
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error,
    resume,
    pause
  };
}

const defaultEvents$1 = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter)(50)
  } = options;
  const idle = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  const lastActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)());
  let timer;
  const reset = () => {
    idle.value = false;
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  };
  const onEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper)(
    eventFilter,
    () => {
      lastActive.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)();
      reset();
    }
  );
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
    reset();
  }
  return {
    idle,
    lastActive,
    reset
  };
}

async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy } = options;
    img.src = src;
    if (srcset)
      img.srcset = srcset;
    if (sizes)
      img.sizes = sizes;
    if (clazz)
      img.className = clazz;
    if (loading)
      img.loading = loading;
    if (crossorigin)
      img.crossOrigin = crossorigin;
    if (referrerPolicy)
      img.referrerPolicy = referrerPolicy;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
function useImage(options, asyncStateOptions = {}) {
  const state = useAsyncState(
    () => loadImage((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options)),
    void 0,
    {
      resetOnExecute: true,
      ...asyncStateOptions
    }
  );
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options),
    () => state.execute(asyncStateOptions.delay),
    { deep: true }
  );
  return state;
}

function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}

const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onScroll = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    },
    behavior = "auto",
    window = defaultWindow,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const internalX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const internalY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo(x2, void 0);
    }
  });
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo(void 0, y2);
    }
  });
  function scrollTo(_x, _y) {
    var _a, _b, _c, _d;
    if (!window)
      return;
    const _element = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element);
    if (!_element)
      return;
    (_c = _element instanceof Document ? window.document.body : _element) == null ? void 0 : _c.scrollTo({
      top: (_a = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(_y)) != null ? _a : y.value,
      left: (_b = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(_x)) != null ? _b : x.value,
      behavior: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(behavior)
    });
    const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
    if (x != null)
      internalX.value = scrollContainer.scrollLeft;
    if (y != null)
      internalY.value = scrollContainer.scrollTop;
  }
  const isScrolling = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const arrivedState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value)
      return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn)(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    var _a;
    if (!window)
      return;
    const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
    const { display, flexDirection } = getComputedStyle(el);
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft) <= (offset.left || 0);
    const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window.document && !scrollTop)
      scrollTop = window.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= (offset.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _a;
    if (!window)
      return;
    const eventTarget = (_a = e.target.documentElement) != null ? _a : e.target;
    setArrivedState(eventTarget);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(
    element,
    "scroll",
    throttle ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottleFn)(onScrollHandler, throttle, true, false) : onScrollHandler,
    eventListenerOptions
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    try {
      const _element = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element);
      if (!_element)
        return;
      setArrivedState(_element);
    } catch (e) {
      onError(e);
    }
  });
  useEventListener(
    element,
    "scrollend",
    onScrollEnd,
    eventListenerOptions
  );
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element);
      if (window && _element)
        setArrivedState(_element);
    }
  };
}

function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a;
  const {
    direction = "bottom",
    interval = 100,
    canLoadMore = () => true
  } = options;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(useScroll(
    element,
    {
      ...options,
      offset: {
        [direction]: (_a = options.distance) != null ? _a : 0,
        ...options.offset
      }
    }
  ));
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const isLoading = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !!promise.value);
  const observedElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element));
  });
  const isElementVisible = useElementVisibility(observedElement);
  function checkAndLoad() {
    state.measure();
    if (!observedElement.value || !isElementVisible.value || !canLoadMore(observedElement.value))
      return;
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value;
    const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
    if (state.arrivedState[direction] || isNarrower) {
      if (!promise.value) {
        promise.value = Promise.all([
          onLoadMore(state),
          new Promise((resolve) => setTimeout(resolve, interval))
        ]).finally(() => {
          promise.value = null;
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => checkAndLoad());
        });
      }
    }
  }
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => [state.arrivedState[direction], isElementVisible.value],
    checkAndLoad,
    { immediate: true }
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted)(stop);
  return {
    isLoading,
    reset() {
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => checkAndLoad());
    }
  };
}

const defaultEvents = ["mousedown", "mouseup", "keydown", "keyup"];
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        if (typeof evt.getModifierState === "function")
          state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(/* @__PURE__ */ new Set());
  const obj = {
    toJSON() {
      return {};
    },
    current
  };
  const refs = useReactive ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  const usedKeys = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    current.clear();
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (key) {
      if (value)
        current.add(key);
      else
        current.delete(key);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive: true });
  useEventListener("focus", reset, { passive: true });
  const proxy = new Proxy(
    refs,
    {
      get(target2, prop, rec) {
        if (typeof prop !== "string")
          return Reflect.get(target2, prop, rec);
        prop = prop.toLowerCase();
        if (prop in aliasMap)
          prop = aliasMap[prop];
        if (!(prop in refs)) {
          if (/[+_-]/.test(prop)) {
            const keys = prop.split(/[+_-]/g).map((i) => i.trim());
            refs[prop] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => keys.every((key) => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(proxy[key])));
          } else {
            refs[prop] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
          }
        }
        const r = Reflect.get(target2, prop, rec);
        return useReactive ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(r) : r;
      }
    }
  );
  return proxy;
}

function usingElRef(source, cb) {
  if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source))
    cb((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  target = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(target);
  options = {
    ...defaultOptions,
    ...options
  };
  const {
    document = defaultDocument
  } = options;
  const currentTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const seeking = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const volume = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const waiting = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const ended = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const playing = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const rate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const stalled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const buffered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const tracks = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const selectedTrack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(-1);
  const isPictureInPicture = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const muted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const playbackErrorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = typeof track === "number" ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = typeof track === "number" ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!document)
      return;
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    const src = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.src);
    let sources = [];
    if (!src)
      return;
    if (typeof src === "string")
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([target, volume], () => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    el.volume = volume.value;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([target, muted], () => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    el.muted = muted.value;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([target, rate], () => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    el.playbackRate = rate.value;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!document)
      return;
    const textTracks = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.tracks);
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchIgnorable)(currentTime, (time) => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchIgnorable)(playing, (isPlaying) => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    if (isPlaying) {
      el.play().catch((e) => {
        playbackErrorEvent.trigger(e);
        throw e;
      });
    } else {
      el.pause();
    }
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, ["waiting", "loadstart"], () => {
    waiting.value = true;
    ignorePlayingUpdates(() => playing.value = false);
  });
  useEventListener(target, "loadeddata", () => waiting.value = false);
  useEventListener(target, "playing", () => {
    waiting.value = false;
    ended.value = false;
    ignorePlayingUpdates(() => playing.value = true);
  });
  useEventListener(target, "ratechange", () => rate.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([target], () => {
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    // Volume
    volume,
    muted,
    // Tracks
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    // Picture in Picture
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    // Events
    onSourceError: sourceErrorEvent.on,
    onPlaybackError: playbackErrorEvent.on
  };
}

function getMapVue2Compat() {
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowReactive)({});
  return {
    get: (key) => data[key],
    set: (key, value) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.set)(data, key, value),
    has: (key) => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(data, key),
    delete: (key) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.del)(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.del)(data, key);
      });
    }
  };
}
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowReactive)(options.cache);
    if (vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue2)
      return getMapVue2Compat();
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowReactive)(/* @__PURE__ */ new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const isSupported = useSupported(() => typeof performance !== "undefined" && "memory" in performance);
  if (isSupported.value) {
    const { interval = 1e3 } = options;
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

const UseMouseBuiltinExtractors = {
  page: (event) => [event.pageX, event.pageY],
  client: (event) => [event.clientX, event.clientY],
  screen: (event) => [event.screenX, event.screenY],
  movement: (event) => event instanceof Touch ? null : [event.movementX, event.movementY]
};
function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow,
    target = window,
    scroll = true,
    eventFilter
  } = options;
  let _prevMouseEvent = null;
  let _prevScrollX = 0;
  let _prevScrollY = 0;
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue.x);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue.y);
  const sourceType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const extractor = typeof type === "function" ? type : UseMouseBuiltinExtractors[type];
  const mouseHandler = (event) => {
    const result = extractor(event);
    _prevMouseEvent = event;
    if (result) {
      [x.value, y.value] = result;
      sourceType.value = "mouse";
    }
    if (window) {
      _prevScrollX = window.scrollX;
      _prevScrollY = window.scrollY;
    }
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const result = extractor(event.touches[0]);
      if (result) {
        [x.value, y.value] = result;
        sourceType.value = "touch";
      }
    }
  };
  const scrollHandler = () => {
    if (!_prevMouseEvent || !window)
      return;
    const pos = extractor(_prevMouseEvent);
    if (_prevMouseEvent instanceof MouseEvent && pos) {
      x.value = pos[0] + window.scrollX - _prevScrollX;
      y.value = pos[1] + window.scrollY - _prevScrollY;
    }
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const mouseHandlerWrapper = eventFilter ? (event) => eventFilter(() => mouseHandler(event), {}) : (event) => mouseHandler(event);
  const touchHandlerWrapper = eventFilter ? (event) => eventFilter(() => touchHandler(event), {}) : (event) => touchHandler(event);
  const scrollHandlerWrapper = eventFilter ? () => eventFilter(() => scrollHandler(), {}) : () => scrollHandler();
  if (target) {
    const listenerOptions = { passive: true };
    useEventListener(target, ["mousemove", "dragover"], mouseHandlerWrapper, listenerOptions);
    if (touch && type !== "movement") {
      useEventListener(target, ["touchstart", "touchmove"], touchHandlerWrapper, listenerOptions);
      if (resetOnTouchEnds)
        useEventListener(target, "touchend", reset, listenerOptions);
    }
    if (scroll && type === "page")
      useEventListener(window, "scroll", scrollHandlerWrapper, { passive: true });
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const type = options.type || "page";
  const { x, y, sourceType } = useMouse(options);
  const targetRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementPositionX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementPositionY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementHeight = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementWidth = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const isOutside = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  let stop = () => {
  };
  if (window) {
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
      [targetRef, x, y],
      () => {
        const el = unrefElement(targetRef);
        if (!el || !(el instanceof Element))
          return;
        const {
          left,
          top,
          width,
          height
        } = el.getBoundingClientRect();
        elementPositionX.value = left + (type === "page" ? window.pageXOffset : 0);
        elementPositionY.value = top + (type === "page" ? window.pageYOffset : 0);
        elementHeight.value = height;
        elementWidth.value = width;
        const elX = x.value - elementPositionX.value;
        const elY = y.value - elementPositionY.value;
        isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
        if (handleOutside || !isOutside.value) {
          elementX.value = elX;
          elementY.value = elY;
        }
      },
      { immediate: true }
    );
    useEventListener(document, "mouseleave", () => {
      isOutside.value = true;
    });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    capture = false,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const sourceType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true, capture });
  useEventListener(window, "mouseleave", onReleased, { passive: true, capture });
  useEventListener(window, "mouseup", onReleased, { passive: true, capture });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true, capture });
    useEventListener(window, "drop", onReleased, { passive: true, capture });
    useEventListener(window, "dragend", onReleased, { passive: true, capture });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true, capture });
    useEventListener(window, "touchend", onReleased, { passive: true, capture });
    useEventListener(window, "touchcancel", onReleased, { passive: true, capture });
  }
  return {
    pressed,
    sourceType
  };
}

function useNavigatorLanguage(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "language" in navigator);
  const language = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
}

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "connection" in navigator);
  const isOnline = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  const saveData = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const offlineAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const onlineAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const downlink = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const downlinkMax = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const rtt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const effectiveType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const type = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("unknown");
  const connection = isSupported.value && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isSupported),
    isOnline: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isOnline),
    saveData: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(saveData),
    offlineAt: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(offlineAt),
    onlineAt: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(onlineAt),
    downlink: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(downlink),
    downlinkMax: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(downlinkMax),
    effectiveType: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(effectiveType),
    rtt: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(rtt),
    type: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(type)
  };
}

function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(update, interval, { immediate: true });
  if (exposeControls) {
    return {
      now,
      ...controls
    };
  } else {
    return now;
  }
}

function useObjectUrl(object) {
  const url = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const release = () => {
    if (url.value)
      URL.revokeObjectURL(url.value);
    url.value = void 0;
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    () => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(object),
    (newObject) => {
      release();
      if (newObject)
        url.value = URL.createObjectURL(newObject);
    },
    { immediate: true }
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(release);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(url);
}

function useClamp(value, min, max) {
  if (typeof value === "function" || (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isReadonly)(value))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(value), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(min), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(max)));
  const _value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(value);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return _value.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)(_value.value, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(min), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(max));
    },
    set(value2) {
      _value.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)(value2, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(min), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(max));
    }
  });
}

function useOffsetPagination(options) {
  const {
    total = Number.POSITIVE_INFINITY,
    pageSize = 10,
    page = 1,
    onPageChange = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onPageSizeChange = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onPageCountChange = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const currentPageSize = useClamp(pageSize, 1, Number.POSITIVE_INFINITY);
  const pageCount = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Math.max(
    1,
    Math.ceil((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(total) / (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(currentPageSize))
  ));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => currentPage.value === 1);
  const isLastPage = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => currentPage.value === pageCount.value);
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(page)) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.syncRef)(page, currentPage, {
      direction: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isReadonly)(page) ? "ltr" : "both"
    });
  }
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(pageSize)) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.syncRef)(pageSize, currentPageSize, {
      direction: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isReadonly)(pageSize) ? "ltr" : "both"
    });
  }
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(currentPage, () => {
    onPageChange((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(returnValue));
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(currentPageSize, () => {
    onPageSizeChange((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(returnValue));
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(pageCount, () => {
    onPageCountChange((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(returnValue));
  });
  return returnValue;
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useScreenOrientation(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "screen" in window && "orientation" in window.screen);
  const screenOrientation = isSupported.value ? window.screen.orientation : {};
  const orientation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(screenOrientation.type);
  const angle = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(screenOrientation.angle || 0);
  if (isSupported.value) {
    useEventListener(window, "orientationchange", () => {
      orientation.value = screenOrientation.type;
      angle.value = screenOrientation.angle;
    });
  }
  const lockOrientation = (type) => {
    if (isSupported.value && typeof screenOrientation.lock === "function")
      return screenOrientation.lock(type);
    return Promise.reject(new Error("Not supported"));
  };
  const unlockOrientation = () => {
    if (isSupported.value && typeof screenOrientation.unlock === "function")
      screenOrientation.unlock();
  };
  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  };
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(useDeviceOrientation({ window }));
  const screenOrientation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(useScreenOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0)) {
      return "deviceOrientation";
    }
    return "mouse";
  });
  const roll = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (source.value === "deviceOrientation") {
      let value;
      switch (screenOrientation.orientation) {
        case "landscape-primary":
          value = orientation.gamma / 90;
          break;
        case "landscape-secondary":
          value = -orientation.gamma / 90;
          break;
        case "portrait-primary":
          value = -orientation.beta / 90;
          break;
        case "portrait-secondary":
          value = orientation.beta / 90;
          break;
        default:
          value = -orientation.beta / 90;
      }
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (source.value === "deviceOrientation") {
      let value;
      switch (screenOrientation.orientation) {
        case "landscape-primary":
          value = orientation.beta / 90;
          break;
        case "landscape-secondary":
          value = -orientation.beta / 90;
          break;
        case "portrait-primary":
          value = orientation.gamma / 90;
          break;
        case "portrait-secondary":
          value = -orientation.gamma / 90;
          break;
        default:
          value = orientation.gamma / 90;
      }
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

function useParentElement(element = useCurrentElement()) {
  const parentElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const update = () => {
    const el = unrefElement(element);
    if (el)
      parentElement.value = el.parentElement;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(update);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element), update);
  return parentElement;
}

function usePerformanceObserver(options, callback) {
  const {
    window = defaultWindow,
    immediate = true,
    ...performanceOptions
  } = options;
  const isSupported = useSupported(() => window && "PerformanceObserver" in window);
  let observer;
  const stop = () => {
    observer == null ? void 0 : observer.disconnect();
  };
  const start = () => {
    if (isSupported.value) {
      stop();
      observer = new PerformanceObserver(callback);
      observer.observe(performanceOptions);
    }
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  if (immediate)
    start();
  return {
    isSupported,
    start,
    stop
  };
}

const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectPick)(event, keys, false);
  };
  if (target) {
    const listenerOptions = { passive: true };
    useEventListener(target, ["pointerdown", "pointermove", "pointerup"], handler, listenerOptions);
    useEventListener(target, "pointerleave", () => isInside.value = false, listenerOptions);
  }
  return {
    ...(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state),
    isInside
  };
}

function usePointerLock(target, options = {}) {
  const { document = defaultDocument } = options;
  const isSupported = useSupported(() => document && "pointerLockElement" in document);
  const element = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const triggerElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  let targetElement;
  if (isSupported.value) {
    useEventListener(document, "pointerlockchange", () => {
      var _a;
      const currentElement = (_a = document.pointerLockElement) != null ? _a : element.value;
      if (targetElement && currentElement === targetElement) {
        element.value = document.pointerLockElement;
        if (!element.value)
          targetElement = triggerElement.value = null;
      }
    });
    useEventListener(document, "pointerlockerror", () => {
      var _a;
      const currentElement = (_a = document.pointerLockElement) != null ? _a : element.value;
      if (targetElement && currentElement === targetElement) {
        const action = document.pointerLockElement ? "release" : "acquire";
        throw new Error(`Failed to ${action} pointer lock.`);
      }
    });
  }
  async function lock(e) {
    var _a;
    if (!isSupported.value)
      throw new Error("Pointer Lock API is not supported by your browser.");
    triggerElement.value = e instanceof Event ? e.currentTarget : null;
    targetElement = e instanceof Event ? (_a = unrefElement(target)) != null ? _a : triggerElement.value : unrefElement(e);
    if (!targetElement)
      throw new Error("Target element undefined.");
    targetElement.requestPointerLock();
    return await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until)(element).toBe(targetElement);
  }
  async function unlock() {
    if (!element.value)
      return false;
    document.exitPointerLock();
    await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until)(element).toBeNull();
    return true;
  }
  return {
    isSupported,
    element,
    triggerElement,
    lock,
    unlock
  };
}

function usePointerSwipe(target, options = {}) {
  const targetRef = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    disableTextSelect = false
  } = options;
  const posStart = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => posStart.x - posEnd.x);
  const distanceY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isPointerDown = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const direction = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (!isThresholdExceeded.value)
      return "none";
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? "left" : "right";
    } else {
      return distanceY.value > 0 ? "up" : "down";
    }
  });
  const eventIsAllowed = (e) => {
    var _a, _b, _c;
    const isReleasingButton = e.buttons === 0;
    const isPrimaryButton = e.buttons === 1;
    return (_c = (_b = (_a = options.pointerTypes) == null ? void 0 : _a.includes(e.pointerType)) != null ? _b : isReleasingButton || isPrimaryButton) != null ? _c : true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      if (!eventIsAllowed(e))
        return;
      isPointerDown.value = true;
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!eventIsAllowed(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      if (!eventIsAllowed(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
    })
  ];
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
    if (disableTextSelect) {
      (_d = (_c = targetRef.value) == null ? void 0 : _c.style) == null ? void 0 : _d.setProperty("-webkit-user-select", "none");
      (_f = (_e = targetRef.value) == null ? void 0 : _e.style) == null ? void 0 : _f.setProperty("-ms-user-select", "none");
      (_h = (_g = targetRef.value) == null ? void 0 : _g.style) == null ? void 0 : _h.setProperty("user-select", "none");
    }
  });
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isSwiping),
    direction: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(direction),
    posStart: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(posStart),
    posEnd: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredContrast(options) {
  const isMore = useMediaQuery("(prefers-contrast: more)", options);
  const isLess = useMediaQuery("(prefers-contrast: less)", options);
  const isCustom = useMediaQuery("(prefers-contrast: custom)", options);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (isMore.value)
      return "more";
    if (isLess.value)
      return "less";
    if (isCustom.value)
      return "custom";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(["en"]);
  const navigator = window.navigator;
  const value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

function usePreferredReducedMotion(options) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (isReduced.value)
      return "reduce";
    return "no-preference";
  });
}

function usePrevious(value, initialValue) {
  const previous = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialValue);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(value),
    (_, oldValue) => {
      previous.value = oldValue;
    },
    { flush: "sync" }
  );
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(previous);
}

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const right = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const bottom = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const left = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn)(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(src)}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(src)}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(load);
  if (!manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted)(unload);
  return { scriptTag, load, unload };
}

function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(element), (el) => {
    const target = resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element));
    if (!el || isLocked.value)
      return;
    if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(element));
    if (!el || !isLocked.value)
      return;
    if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isIOS)
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(unlock);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = useSupported(() => _navigator && "canShare" in _navigator);
  const share = async (overrideOptions = {}) => {
    if (isSupported.value) {
      const data = {
        ...(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(shareOptions),
        ...(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(overrideOptions)
      };
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

const defaultSortFn = (source, compareFn) => source.sort(compareFn);
const defaultCompare = (a, b) => a - b;
function useSorted(...args) {
  var _a, _b, _c, _d;
  const [source] = args;
  let compareFn = defaultCompare;
  let options = {};
  if (args.length === 2) {
    if (typeof args[1] === "object") {
      options = args[1];
      compareFn = (_a = options.compareFn) != null ? _a : defaultCompare;
    } else {
      compareFn = (_b = args[1]) != null ? _b : defaultCompare;
    }
  } else if (args.length > 2) {
    compareFn = (_c = args[1]) != null ? _c : defaultCompare;
    options = (_d = args[2]) != null ? _d : {};
  }
  const {
    dirty = false,
    sortFn = defaultSortFn
  } = options;
  if (!dirty)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => sortFn([...(0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source)], compareFn));
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    const result = sortFn((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source), compareFn);
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(source))
      source.value = result;
    else
      source.splice(0, source.length, ...result);
  });
  return source;
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    maxAlternatives = 1,
    window = defaultWindow
  } = options;
  const lang = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(options.lang || "en-US");
  const isListening = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isFinal = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = useSupported(() => SpeechRecognition);
  let recognition;
  if (isSupported.value) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(lang);
    recognition.maxAlternatives = maxAlternatives;
    recognition.onstart = () => {
      isFinal.value = false;
    };
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const currentResult = event.results[event.resultIndex];
      const { transcript } = currentResult[0];
      isFinal.value = currentResult.isFinal;
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(lang);
    };
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = useSupported(() => synth);
  const isPlaying = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("init");
  const spokenText = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(text || "");
  const lang = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(options.lang || "en-US");
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(lang);
    utterance2.voice = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.voice) || null;
    utterance2.pitch = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(pitch);
    utterance2.rate = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(rate);
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
  };
  const utterance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    if (utterance)
      synth.speak(utterance.value);
  };
  const stop = () => {
    synth.cancel();
    isPlaying.value = false;
  };
  if (isSupported.value) {
    bindEventsForUtterance(utterance.value);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    if (options.voice) {
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(options.voice, () => {
        synth.cancel();
      });
    }
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    utterance,
    error,
    stop,
    toggle,
    speak
  };
}

function useStepper(steps, initialStep) {
  const stepsRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(steps);
  const stepNames = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Array.isArray(stepsRef.value) ? stepsRef.value : Object.keys(stepsRef.value));
  const index = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(stepNames.value.indexOf(initialStep != null ? initialStep : stepNames.value[0]));
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => at(index.value));
  const isFirst = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => index.value === 0);
  const isLast = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => index.value === stepNames.value.length - 1);
  const next = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => stepNames.value[index.value + 1]);
  const previous = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => stepNames.value[index.value - 1]);
  function at(index2) {
    if (Array.isArray(stepsRef.value))
      return stepsRef.value[index2];
    return stepsRef.value[stepNames.value[index2]];
  }
  function get(step) {
    if (!stepNames.value.includes(step))
      return;
    return at(stepNames.value.indexOf(step));
  }
  function goTo(step) {
    if (stepNames.value.includes(step))
      index.value = stepNames.value.indexOf(step);
  }
  function goToNext() {
    if (isLast.value)
      return;
    index.value++;
  }
  function goToPrevious() {
    if (isFirst.value)
      return;
    index.value--;
  }
  function goBackTo(step) {
    if (isAfter(step))
      goTo(step);
  }
  function isNext(step) {
    return stepNames.value.indexOf(step) === index.value + 1;
  }
  function isPrevious(step) {
    return stepNames.value.indexOf(step) === index.value - 1;
  }
  function isCurrent(step) {
    return stepNames.value.indexOf(step) === index.value;
  }
  function isBefore(step) {
    return index.value < stepNames.value.indexOf(step);
  }
  function isAfter(step) {
    return index.value > stepNames.value.indexOf(step);
  }
  return {
    steps: stepsRef,
    stepNames,
    index,
    current,
    next,
    previous,
    isFirst,
    isLast,
    at,
    get,
    goTo,
    goToNext,
    goToPrevious,
    goBackTo,
    isNext,
    isPrevious,
    isCurrent,
    isBefore,
    isAfter
  };
}

function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef : vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorageAsync", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else if (mergeDefaults) {
        const value = await serializer.read(rawValue);
        if (typeof mergeDefaults === "function")
          data.value = mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          data.value = { ...rawInit, ...value };
        else data.value = value;
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => Promise.resolve().then(() => read(e)));
  if (storage) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter)(
      data,
      async () => {
        try {
          if (data.value == null)
            await storage.removeItem(key);
          else
            await storage.setItem(key, await serializer.write(data.value));
        } catch (e) {
          onError(e);
        }
      },
      {
        flush,
        deep,
        eventFilter
      }
    );
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    if (!el.isConnected) {
      el.id = id;
      if (options.media)
        el.media = options.media;
      document.head.appendChild(el);
    }
    if (isLoaded.value)
      return;
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
      cssRef,
      (value) => {
        el.textContent = value;
      },
      { immediate: true }
    );
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(load);
  if (!manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isLoaded)
  };
}

function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const coordsEnd = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const diffX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => coordsStart.x - coordsEnd.x);
  const diffY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const direction = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (!isThresholdExceeded.value)
      return "none";
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "left" : "right";
    } else {
      return diffY.value > 0 ? "up" : "down";
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (e.touches.length !== 1)
        return;
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      if (e.touches.length !== 1)
        return;
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (listenerOptions.capture && !listenerOptions.passive && Math.abs(diffX.value) > Math.abs(diffY.value))
        e.preventDefault();
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, ["touchend", "touchcancel"], onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop, optionsBlock);
  document.removeEventListener("x", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop);
  return supportsPassive;
}

function useTemplateRefsList() {
  const refs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onBeforeUpdate)(() => {
    refs.value.length = 0;
  });
  return refs;
}

function useTextDirection(options = {}) {
  const {
    document = defaultDocument,
    selector = "html",
    observe = false,
    initialValue = "ltr"
  } = options;
  function getValue() {
    var _a, _b;
    return (_b = (_a = document == null ? void 0 : document.querySelector(selector)) == null ? void 0 : _a.getAttribute("dir")) != null ? _b : initialValue;
  }
  const dir = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(getValue());
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => dir.value = getValue());
  if (observe && document) {
    useMutationObserver(
      document.querySelector(selector),
      () => dir.value = getValue(),
      { attributes: true }
    );
  }
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return dir.value;
    },
    set(v) {
      var _a, _b;
      dir.value = v;
      if (!document)
        return;
      if (dir.value)
        (_a = document.querySelector(selector)) == null ? void 0 : _a.setAttribute("dir", dir.value);
      else
        (_b = document.querySelector(selector)) == null ? void 0 : _b.removeAttribute("dir");
    }
  });
}

function getRangesFromSelection(selection) {
  var _a;
  const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
  return Array.from({ length: rangeCount }, (_, i) => selection.getRangeAt(i));
}
function useTextSelection(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const selection = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const text = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a, _b;
    return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
  });
  const ranges = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window)
      selection.value = window.getSelection();
  }
  if (window)
    useEventListener(window.document, "selectionchange", onSelectionChange);
  return {
    text,
    rects,
    ranges,
    selection
  };
}

function useTextareaAutosize(options) {
  var _a;
  const textarea = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options == null ? void 0 : options.element);
  const input = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options == null ? void 0 : options.input);
  const styleProp = (_a = options == null ? void 0 : options.styleProp) != null ? _a : "height";
  const textareaScrollHeight = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const textareaOldWidth = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  function triggerResize() {
    var _a2;
    if (!textarea.value)
      return;
    let height = "";
    textarea.value.style[styleProp] = "1px";
    textareaScrollHeight.value = (_a2 = textarea.value) == null ? void 0 : _a2.scrollHeight;
    const _styleTarget = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options == null ? void 0 : options.styleTarget);
    if (_styleTarget)
      _styleTarget.style[styleProp] = `${textareaScrollHeight.value}px`;
    else
      height = `${textareaScrollHeight.value}px`;
    textarea.value.style[styleProp] = height;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([input, textarea], () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.nextTick)(triggerResize), { immediate: true });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(textareaScrollHeight, () => {
    var _a2;
    return (_a2 = options == null ? void 0 : options.onResize) == null ? void 0 : _a2.call(options);
  });
  useResizeObserver(textarea, ([{ contentRect }]) => {
    if (textareaOldWidth.value === contentRect.width)
      return;
    textareaOldWidth.value = contentRect.width;
    triggerResize();
  });
  if (options == null ? void 0 : options.watch)
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(options.watch, triggerResize, { immediate: true, deep: true });
  return {
    textarea,
    input,
    triggerResize
  };
}

function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter)(throttle, trailing);
  const history = useRefHistory(source, { ...options, eventFilter: filter });
  return {
    ...history
  };
}

const DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`,
  invalid: ""
};
function DEFAULT_FORMATTER(date) {
  return date.toISOString().slice(0, 10);
}
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    updateInterval = 3e4
  } = options;
  const { now, ...controls } = useNow({ interval: updateInterval, controls: true });
  const timeAgo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => formatTimeAgo(new Date((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(time)), options, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(now)));
  if (exposeControls) {
    return {
      timeAgo,
      ...controls
    };
  } else {
    return timeAgo;
  }
}
function formatTimeAgo(from, options = {}, now = Date.now()) {
  var _a;
  const {
    max,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER,
    units = DEFAULT_UNITS,
    showSecond = false,
    rounding = "round"
  } = options;
  const roundFn = typeof rounding === "number" ? (n) => +n.toFixed(rounding) : Math[rounding];
  const diff = +now - +from;
  const absDiff = Math.abs(diff);
  function getValue(diff2, unit) {
    return roundFn(Math.abs(diff2) / unit.value);
  }
  function format(diff2, unit) {
    const val = getValue(diff2, unit);
    const past = diff2 > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  if (absDiff < 6e4 && !showSecond)
    return messages.justNow;
  if (typeof max === "number" && absDiff > max)
    return fullDateFormatter(new Date(from));
  if (typeof max === "string") {
    const unitMax = (_a = units.find((i) => i.name === max)) == null ? void 0 : _a.max;
    if (unitMax && absDiff > unitMax)
      return fullDateFormatter(new Date(from));
  }
  for (const [idx, unit] of units.entries()) {
    const val = getValue(diff, unit);
    if (val <= 0 && units[idx - 1])
      return format(diff, units[idx - 1]);
    if (absDiff < unit.max)
      return format(diff, unit);
  }
  return messages.invalid;
}

function useTimeoutPoll(fn, interval, timeoutPollOptions) {
  const { start } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(loop, interval, { immediate: false });
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  async function loop() {
    if (!isActive.value)
      return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate)
    resume();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(pause);
  return {
    isActive,
    pause,
    resume
  };
}

function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame",
    callback
  } = options;
  const ts = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)() + offset);
  const update = () => ts.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)() + offset;
  const cb = callback ? () => {
    update();
    callback(ts.value);
  } : update;
  const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(cb, interval, { immediate });
  if (exposeControls) {
    return {
      timestamp: ts,
      ...controls
    };
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b, _c;
  const {
    document = defaultDocument,
    restoreOnUnmount = (t) => t
  } = options;
  const originalTitle = (_a = document == null ? void 0 : document.title) != null ? _a : "";
  const title = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)((_b = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _b : null);
  const isReadonly = newTitle && typeof newTitle === "function";
  function format(t) {
    if (!("titleTemplate" in options))
      return t;
    const template = options.titleTemplate || "%s";
    return typeof template === "function" ? template(t) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(template).replace(/%s/g, t);
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    title,
    (t, o) => {
      if (t !== o && document)
        document.title = format(typeof t === "string" ? t : "");
    },
    { immediate: true }
  );
  if (options.observe && !options.titleTemplate && document && !isReadonly) {
    useMutationObserver(
      (_c = document.head) == null ? void 0 : _c.querySelector("title"),
      () => {
        if (document && document.title !== title.value)
          title.value = format(document.title);
      },
      { childList: true }
    );
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnBeforeUnmount)(() => {
    if (restoreOnUnmount) {
      const restoredTitle = restoreOnUnmount(originalTitle, title.value || "");
      if (restoredTitle != null && document)
        document.title = restoredTitle;
    }
  });
  return title;
}

const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
const TransitionPresets = /* @__PURE__ */ Object.assign({}, { linear: _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity }, _TransitionPresets);
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}
function toVec(t) {
  return (typeof t === "number" ? [t] : t) || [];
}
function executeTransition(source, from, to, options = {}) {
  var _a, _b;
  const fromVal = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(from);
  const toVal = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(to);
  const v1 = toVec(fromVal);
  const v2 = toVec(toVal);
  const duration = (_a = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.duration)) != null ? _a : 1e3;
  const startedAt = Date.now();
  const endAt = Date.now() + duration;
  const trans = typeof options.transition === "function" ? options.transition : (_b = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.transition)) != null ? _b : _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity;
  const ease = typeof trans === "function" ? trans : createEasingFunction(trans);
  return new Promise((resolve) => {
    source.value = fromVal;
    const tick = () => {
      var _a2;
      if ((_a2 = options.abort) == null ? void 0 : _a2.call(options)) {
        resolve();
        return;
      }
      const now = Date.now();
      const alpha = ease((now - startedAt) / duration);
      const arr = toVec(source.value).map((n, i) => lerp(v1[i], v2[i], alpha));
      if (Array.isArray(source.value))
        source.value = arr.map((n, i) => {
          var _a3, _b2;
          return lerp((_a3 = v1[i]) != null ? _a3 : 0, (_b2 = v2[i]) != null ? _b2 : 0, alpha);
        });
      else if (typeof source.value === "number")
        source.value = arr[0];
      if (now < endAt) {
        requestAnimationFrame(tick);
      } else {
        source.value = toVal;
        resolve();
      }
    };
    tick();
  });
}
function useTransition(source, options = {}) {
  let currentId = 0;
  const sourceVal = () => {
    const v = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(source);
    return typeof v === "number" ? v : v.map(_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue);
  };
  const outputRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(sourceVal());
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(sourceVal, async (to) => {
    var _a, _b;
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.disabled))
      return;
    const id = ++currentId;
    if (options.delay)
      await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.delay));
    if (id !== currentId)
      return;
    const toVal = Array.isArray(to) ? to.map(_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(to);
    (_a = options.onStarted) == null ? void 0 : _a.call(options);
    await executeTransition(outputRef, outputRef.value, toVal, {
      ...options,
      abort: () => {
        var _a2;
        return id !== currentId || ((_a2 = options.abort) == null ? void 0 : _a2.call(options));
      }
    });
    (_b = options.onFinished) == null ? void 0 : _b.call(options);
  }, { deep: true });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.disabled), (disabled) => {
    if (disabled) {
      currentId++;
      outputRef.value = sourceVal();
    }
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    currentId++;
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toValue)(options.disabled) ? sourceVal() : outputRef.value);
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    write: enableWrite = true,
    window = defaultWindow
  } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialValue);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({});
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${window.location.hash || ""}`;
    if (mode === "hash-params")
      return `${window.location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${window.location.search || ""}${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${window.location.search || ""}${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch)(
    state,
    () => {
      const params = new URLSearchParams("");
      Object.keys(state).forEach((key) => {
        const mapEntry = state[key];
        if (Array.isArray(mapEntry))
          mapEntry.forEach((value) => params.append(key, value));
        else if (removeNullishValues && mapEntry == null)
          params.delete(key);
        else if (removeFalsyValues && !mapEntry)
          params.delete(key);
        else
          params.set(key, mapEntry);
      });
      write(params);
    },
    { deep: true }
  );
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState(
      window.history.state,
      window.document.title,
      window.location.pathname + constructQuery(params)
    );
    resume();
  }
  function onChanged() {
    if (!enableWrite)
      return;
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  const initial = read();
  if (initial.keys().next().value)
    updateState(initial);
  else
    Object.assign(state, initialValue);
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b;
  const enabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = options.enabled) != null ? _a : false);
  const autoSwitch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_b = options.autoSwitch) != null ? _b : true);
  const constraints = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.constraints);
  const { navigator = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _a2;
    return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getUserMedia;
  });
  const stream = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  function getDeviceOptions(type) {
    switch (type) {
      case "video": {
        if (constraints.value)
          return constraints.value.video || false;
        break;
      }
      case "audio": {
        if (constraints.value)
          return constraints.value.audio || false;
        break;
      }
    }
  }
  async function _start() {
    if (!isSupported.value || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions("video"),
      audio: getDeviceOptions("audio")
    });
    return stream.value;
  }
  function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    enabled,
    (v) => {
      if (v)
        _start();
      else _stop();
    },
    { immediate: true }
  );
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
    constraints,
    () => {
      if (autoSwitch.value && stream.value)
        restart();
    },
    { immediate: true }
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    stop();
  });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    constraints,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c, _d, _e;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue2) {
      const modelOptions = (_e = (_d = vm == null ? void 0 : vm.proxy) == null ? void 0 : _d.$options) == null ? void 0 : _e.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue = () => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDef)(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue();
    const proxy = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
    let isUpdating = false;
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => isUpdating = false);
        }
      }
    );
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get() {
        return getValue();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props) {
    ret[key] = useVModel(
      props,
      key,
      emit,
      options
    );
  }
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = useSupported(() => typeof navigator !== "undefined" && "vibrate" in navigator);
  const patternRef = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported.value)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported.value)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(
      vibrate,
      interval,
      {
        immediate: false,
        immediateCallback: false
      }
    );
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const { containerStyle, wrapperProps, scrollTo, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}
function useVirtualListResources(list) {
  const containerRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const size = useElementSize(containerRef);
  const currentList = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(list);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ start: 0, end: 10 });
  return { state, source, currentList, size, containerRef };
}
function createGetViewCapacity(state, source, itemSize) {
  return (containerSize) => {
    if (typeof itemSize === "number")
      return Math.ceil(containerSize / itemSize);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      capacity = i;
      if (sum > containerSize)
        break;
    }
    return capacity - start;
  };
}
function createGetOffset(source, itemSize) {
  return (scrollDirection) => {
    if (typeof itemSize === "number")
      return Math.floor(scrollDirection / itemSize) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      if (sum >= scrollDirection) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
  return () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
      const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
}
function createGetDistance(itemSize, source) {
  return (index) => {
    if (typeof itemSize === "number") {
      const size2 = index * itemSize;
      return size2;
    }
    const size = source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
    return size;
  };
}
function useWatchForSizes(size, list, containerRef, calculateRange) {
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([size.width, size.height, list, containerRef], () => {
    calculateRange();
  });
}
function createComputedTotalSize(itemSize, source) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (typeof itemSize === "number")
      return source.value.length * itemSize;
    return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
  });
}
const scrollToDictionaryForElementScrollKey = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
  return (index) => {
    if (containerRef.value) {
      containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
      calculateRange();
    }
  };
}
function useHorizontalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowX: "auto" };
  const { itemWidth, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
  const getOffset = createGetOffset(source, itemWidth);
  const calculateRange = createCalculateRange("horizontal", overscan, getOffset, getViewCapacity, resources);
  const getDistanceLeft = createGetDistance(itemWidth, source);
  const offsetLeft = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getDistanceLeft(state.value.start));
  const totalWidth = createComputedTotalSize(itemWidth, source);
  useWatchForSizes(size, list, containerRef, calculateRange);
  const scrollTo = createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef);
  const wrapperProps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return {
      style: {
        height: "100%",
        width: `${totalWidth.value - offsetLeft.value}px`,
        marginLeft: `${offsetLeft.value}px`,
        display: "flex"
      }
    };
  });
  return {
    scrollTo,
    calculateRange,
    wrapperProps,
    containerStyle,
    currentList,
    containerRef
  };
}
function useVerticalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowY: "auto" };
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
  const getOffset = createGetOffset(source, itemHeight);
  const calculateRange = createCalculateRange("vertical", overscan, getOffset, getViewCapacity, resources);
  const getDistanceTop = createGetDistance(itemHeight, source);
  const offsetTop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getDistanceTop(state.value.start));
  const totalHeight = createComputedTotalSize(itemHeight, source);
  useWatchForSizes(size, list, containerRef, calculateRange);
  const scrollTo = createScrollTo("vertical", calculateRange, getDistanceTop, containerRef);
  const wrapperProps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  return {
    calculateRange,
    scrollTo,
    containerStyle,
    wrapperProps,
    currentList,
    containerRef
  };
}

function useWakeLock(options = {}) {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  const requestedType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const sentinel = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const documentVisibility = useDocumentVisibility({ document });
  const isSupported = useSupported(() => navigator && "wakeLock" in navigator);
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !!sentinel.value && documentVisibility.value === "visible");
  if (isSupported.value) {
    useEventListener(sentinel, "release", () => {
      var _a, _b;
      requestedType.value = (_b = (_a = sentinel.value) == null ? void 0 : _a.type) != null ? _b : false;
    });
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.whenever)(
      () => documentVisibility.value === "visible" && (document == null ? void 0 : document.visibilityState) === "visible" && requestedType.value,
      (type) => {
        requestedType.value = false;
        forceRequest(type);
      }
    );
  }
  async function forceRequest(type) {
    var _a;
    await ((_a = sentinel.value) == null ? void 0 : _a.release());
    sentinel.value = isSupported.value ? await navigator.wakeLock.request(type) : null;
  }
  async function request(type) {
    if (documentVisibility.value === "visible")
      await forceRequest(type);
    else
      requestedType.value = type;
  }
  async function release() {
    requestedType.value = false;
    const s = sentinel.value;
    sentinel.value = null;
    await (s == null ? void 0 : s.release());
  }
  return {
    sentinel,
    isSupported,
    isActive,
    request,
    forceRequest,
    release
  };
}

function useWebNotification(options = {}) {
  const {
    window = defaultWindow,
    requestPermissions: _requestForPermissions = true
  } = options;
  const defaultWebNotificationOptions = options;
  const isSupported = useSupported(() => {
    if (!window || !("Notification" in window))
      return false;
    try {
      new Notification("");
    } catch (e) {
      return false;
    }
    return true;
  });
  const permissionGranted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(isSupported.value && "permission" in Notification && Notification.permission === "granted");
  const notification = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const ensurePermissions = async () => {
    if (!isSupported.value)
      return;
    if (!permissionGranted.value && Notification.permission !== "denied") {
      const result = await Notification.requestPermission();
      if (result === "granted")
        permissionGranted.value = true;
    }
    return permissionGranted.value;
  };
  const { on: onClick, trigger: clickTrigger } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const { on: onShow, trigger: showTrigger } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const { on: onError, trigger: errorTrigger } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const { on: onClose, trigger: closeTrigger } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const show = async (overrides) => {
    if (!isSupported.value || !permissionGranted.value)
      return;
    const options2 = Object.assign({}, defaultWebNotificationOptions, overrides);
    notification.value = new Notification(options2.title || "", options2);
    notification.value.onclick = clickTrigger;
    notification.value.onshow = showTrigger;
    notification.value.onerror = errorTrigger;
    notification.value.onclose = closeTrigger;
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  if (_requestForPermissions)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(ensurePermissions);
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(close);
  if (isSupported.value && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    ensurePermissions,
    permissionGranted,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
}

const DEFAULT_PING_MESSAGE = "ping";
function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("CLOSED");
  const wsRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const urlRef = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRef)(url);
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  let pongTimeoutWait;
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const resetHeartbeat = () => {
    clearTimeout(pongTimeoutWait);
    pongTimeoutWait = void 0;
  };
  const close = (code = 1e3, reason) => {
    if (!_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient || !wsRef.value)
      return;
    explicitlyClosed = true;
    resetHeartbeat();
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
    wsRef.value = void 0;
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === "undefined")
      return;
    const ws = new WebSocket(urlRef.value, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    ws.onopen = () => {
      status.value = "OPEN";
      retried = 0;
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect && (wsRef.value == null || ws === wsRef.value)) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        if (typeof retries === "number" && (retries < 0 || retried < retries)) {
          retried += 1;
          setTimeout(_init, delay);
        } else if (typeof retries === "function" && retries()) {
          setTimeout(_init, delay);
        } else {
          onFailed == null ? void 0 : onFailed();
        }
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      if (options.heartbeat) {
        resetHeartbeat();
        const {
          message = DEFAULT_PING_MESSAGE,
          responseMessage = message
        } = resolveNestedOptions(options.heartbeat);
        if (e.data === responseMessage)
          return;
      }
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = DEFAULT_PING_MESSAGE,
      interval = 1e3,
      pongTimeout = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(
      () => {
        send(message, false);
        if (pongTimeoutWait != null)
          return;
        pongTimeoutWait = setTimeout(() => {
          close();
          explicitlyClosed = false;
        }, pongTimeout);
      },
      interval,
      { immediate: false }
    );
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (autoClose) {
    if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient)
      useEventListener("beforeunload", () => close());
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(close);
  }
  const open = () => {
    if (!_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient && !_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isWorker)
      return;
    close();
    explicitlyClosed = false;
    retried = 0;
    _init();
  };
  if (immediate)
    open();
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(urlRef, open);
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(arg0, workerOptions, options) {
  const {
    window = defaultWindow
  } = options != null ? options : {};
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const worker = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const post = (...args) => {
    if (!worker.value)
      return;
    worker.value.postMessage(...args);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    if (typeof arg0 === "string")
      worker.value = new Worker(arg0, workerOptions);
    else if (typeof arg0 === "function")
      worker.value = arg0();
    else
      worker.value = arg0;
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

function depsParser(deps, localDeps) {
  if (deps.length === 0 && localDeps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  const depsFunctionString = localDeps.filter((dep) => typeof dep === "function").map((fn) => {
    const str = fn.toString();
    if (str.trim().startsWith("function")) {
      return str;
    } else {
      const name = fn.name;
      return `const ${name} = ${str}`;
    }
  }).join(";");
  const importString = `importScripts(${depsString});`;
  return `${depsString.trim() === "" ? "" : importString} ${depsFunctionString}`;
}

function jobRunner(userFunc) {
  return (e) => {
    const userFuncArgs = e.data[0];
    return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
      postMessage(["SUCCESS", result]);
    }).catch((error) => {
      postMessage(["ERROR", error]);
    });
  };
}

function createWorkerBlobUrl(fn, deps, localDeps) {
  const blobCode = `${depsParser(deps, localDeps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
}

function useWebWorkerFn(fn, options = {}) {
  const {
    dependencies = [],
    localDependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const workerStatus = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("PENDING");
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({});
  const timeoutId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies, localDependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      e.preventDefault();
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(
        () => workerTerminate("TIMEOUT_EXPIRED"),
        timeout
      );
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    var _a;
    promise.value = {
      resolve,
      reject
    };
    (_a = worker.value) == null ? void 0 : _a.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error(
        "[useWebWorkerFn] You can only run one instance of the worker at a time."
      );
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
}

function useWindowFocus(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll(options = {}) {
  const { window = defaultWindow, behavior = "auto" } = options;
  if (!window) {
    return {
      x: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0),
      y: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0)
    };
  }
  const internalX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.scrollX);
  const internalY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.scrollY);
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo({ left: x2, behavior });
    }
  });
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo({ top: y2, behavior });
    }
  });
  useEventListener(
    window,
    "scroll",
    () => {
      internalX.value = window.scrollX;
      internalY.value = window.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}

function useWindowSize(options = {}) {
  const {
    window = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialWidth);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialHeight);
  const update = () => {
    if (window) {
      if (type === "outer") {
        width.value = window.outerWidth;
        height.value = window.outerHeight;
      } else if (includeScrollbar) {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      } else {
        width.value = window.document.documentElement.clientWidth;
        height.value = window.document.documentElement.clientHeight;
      }
    }
  };
  update();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(matches, () => update());
  }
  return { width, height };
}




/***/ }),

/***/ "./node_modules/@vueuse/integrations/node_modules/@vueuse/shared/index.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vueuse/integrations/node_modules/@vueuse/shared/index.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   autoResetRef: () => (/* binding */ refAutoReset),
/* harmony export */   bypassFilter: () => (/* binding */ bypassFilter),
/* harmony export */   camelize: () => (/* binding */ camelize),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   computedEager: () => (/* binding */ computedEager),
/* harmony export */   computedWithControl: () => (/* binding */ computedWithControl),
/* harmony export */   containsProp: () => (/* binding */ containsProp),
/* harmony export */   controlledComputed: () => (/* binding */ computedWithControl),
/* harmony export */   controlledRef: () => (/* binding */ controlledRef),
/* harmony export */   createEventHook: () => (/* binding */ createEventHook),
/* harmony export */   createFilterWrapper: () => (/* binding */ createFilterWrapper),
/* harmony export */   createGlobalState: () => (/* binding */ createGlobalState),
/* harmony export */   createInjectionState: () => (/* binding */ createInjectionState),
/* harmony export */   createReactiveFn: () => (/* binding */ reactify),
/* harmony export */   createSharedComposable: () => (/* binding */ createSharedComposable),
/* harmony export */   createSingletonPromise: () => (/* binding */ createSingletonPromise),
/* harmony export */   debounceFilter: () => (/* binding */ debounceFilter),
/* harmony export */   debouncedRef: () => (/* binding */ refDebounced),
/* harmony export */   debouncedWatch: () => (/* binding */ watchDebounced),
/* harmony export */   directiveHooks: () => (/* binding */ directiveHooks),
/* harmony export */   eagerComputed: () => (/* binding */ computedEager),
/* harmony export */   extendRef: () => (/* binding */ extendRef),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getLifeCycleTarget: () => (/* binding */ getLifeCycleTarget),
/* harmony export */   hasOwn: () => (/* binding */ hasOwn),
/* harmony export */   hyphenate: () => (/* binding */ hyphenate),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   ignorableWatch: () => (/* binding */ watchIgnorable),
/* harmony export */   increaseWithUnit: () => (/* binding */ increaseWithUnit),
/* harmony export */   injectLocal: () => (/* binding */ injectLocal),
/* harmony export */   invoke: () => (/* binding */ invoke),
/* harmony export */   isClient: () => (/* binding */ isClient),
/* harmony export */   isDef: () => (/* binding */ isDef),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isIOS: () => (/* binding */ isIOS),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isWorker: () => (/* binding */ isWorker),
/* harmony export */   makeDestructurable: () => (/* binding */ makeDestructurable),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   normalizeDate: () => (/* binding */ normalizeDate),
/* harmony export */   notNullish: () => (/* binding */ notNullish),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   objectEntries: () => (/* binding */ objectEntries),
/* harmony export */   objectOmit: () => (/* binding */ objectOmit),
/* harmony export */   objectPick: () => (/* binding */ objectPick),
/* harmony export */   pausableFilter: () => (/* binding */ pausableFilter),
/* harmony export */   pausableWatch: () => (/* binding */ watchPausable),
/* harmony export */   promiseTimeout: () => (/* binding */ promiseTimeout),
/* harmony export */   provideLocal: () => (/* binding */ provideLocal),
/* harmony export */   rand: () => (/* binding */ rand),
/* harmony export */   reactify: () => (/* binding */ reactify),
/* harmony export */   reactifyObject: () => (/* binding */ reactifyObject),
/* harmony export */   reactiveComputed: () => (/* binding */ reactiveComputed),
/* harmony export */   reactiveOmit: () => (/* binding */ reactiveOmit),
/* harmony export */   reactivePick: () => (/* binding */ reactivePick),
/* harmony export */   refAutoReset: () => (/* binding */ refAutoReset),
/* harmony export */   refDebounced: () => (/* binding */ refDebounced),
/* harmony export */   refDefault: () => (/* binding */ refDefault),
/* harmony export */   refThrottled: () => (/* binding */ refThrottled),
/* harmony export */   refWithControl: () => (/* binding */ refWithControl),
/* harmony export */   resolveRef: () => (/* binding */ resolveRef),
/* harmony export */   resolveUnref: () => (/* binding */ resolveUnref),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   syncRef: () => (/* binding */ syncRef),
/* harmony export */   syncRefs: () => (/* binding */ syncRefs),
/* harmony export */   throttleFilter: () => (/* binding */ throttleFilter),
/* harmony export */   throttledRef: () => (/* binding */ refThrottled),
/* harmony export */   throttledWatch: () => (/* binding */ watchThrottled),
/* harmony export */   timestamp: () => (/* binding */ timestamp),
/* harmony export */   toReactive: () => (/* binding */ toReactive),
/* harmony export */   toRef: () => (/* binding */ toRef),
/* harmony export */   toRefs: () => (/* binding */ toRefs),
/* harmony export */   toValue: () => (/* binding */ toValue),
/* harmony export */   tryOnBeforeMount: () => (/* binding */ tryOnBeforeMount),
/* harmony export */   tryOnBeforeUnmount: () => (/* binding */ tryOnBeforeUnmount),
/* harmony export */   tryOnMounted: () => (/* binding */ tryOnMounted),
/* harmony export */   tryOnScopeDispose: () => (/* binding */ tryOnScopeDispose),
/* harmony export */   tryOnUnmounted: () => (/* binding */ tryOnUnmounted),
/* harmony export */   until: () => (/* binding */ until),
/* harmony export */   useArrayDifference: () => (/* binding */ useArrayDifference),
/* harmony export */   useArrayEvery: () => (/* binding */ useArrayEvery),
/* harmony export */   useArrayFilter: () => (/* binding */ useArrayFilter),
/* harmony export */   useArrayFind: () => (/* binding */ useArrayFind),
/* harmony export */   useArrayFindIndex: () => (/* binding */ useArrayFindIndex),
/* harmony export */   useArrayFindLast: () => (/* binding */ useArrayFindLast),
/* harmony export */   useArrayIncludes: () => (/* binding */ useArrayIncludes),
/* harmony export */   useArrayJoin: () => (/* binding */ useArrayJoin),
/* harmony export */   useArrayMap: () => (/* binding */ useArrayMap),
/* harmony export */   useArrayReduce: () => (/* binding */ useArrayReduce),
/* harmony export */   useArraySome: () => (/* binding */ useArraySome),
/* harmony export */   useArrayUnique: () => (/* binding */ useArrayUnique),
/* harmony export */   useCounter: () => (/* binding */ useCounter),
/* harmony export */   useDateFormat: () => (/* binding */ useDateFormat),
/* harmony export */   useDebounce: () => (/* binding */ refDebounced),
/* harmony export */   useDebounceFn: () => (/* binding */ useDebounceFn),
/* harmony export */   useInterval: () => (/* binding */ useInterval),
/* harmony export */   useIntervalFn: () => (/* binding */ useIntervalFn),
/* harmony export */   useLastChanged: () => (/* binding */ useLastChanged),
/* harmony export */   useThrottle: () => (/* binding */ refThrottled),
/* harmony export */   useThrottleFn: () => (/* binding */ useThrottleFn),
/* harmony export */   useTimeout: () => (/* binding */ useTimeout),
/* harmony export */   useTimeoutFn: () => (/* binding */ useTimeoutFn),
/* harmony export */   useToNumber: () => (/* binding */ useToNumber),
/* harmony export */   useToString: () => (/* binding */ useToString),
/* harmony export */   useToggle: () => (/* binding */ useToggle),
/* harmony export */   watchArray: () => (/* binding */ watchArray),
/* harmony export */   watchAtMost: () => (/* binding */ watchAtMost),
/* harmony export */   watchDebounced: () => (/* binding */ watchDebounced),
/* harmony export */   watchDeep: () => (/* binding */ watchDeep),
/* harmony export */   watchIgnorable: () => (/* binding */ watchIgnorable),
/* harmony export */   watchImmediate: () => (/* binding */ watchImmediate),
/* harmony export */   watchOnce: () => (/* binding */ watchOnce),
/* harmony export */   watchPausable: () => (/* binding */ watchPausable),
/* harmony export */   watchThrottled: () => (/* binding */ watchThrottled),
/* harmony export */   watchTriggerable: () => (/* binding */ watchTriggerable),
/* harmony export */   watchWithFilter: () => (/* binding */ watchWithFilter),
/* harmony export */   whenever: () => (/* binding */ whenever)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/integrations/node_modules/vue-demi/lib/index.mjs");


function computedEager(fn, options) {
  var _a;
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.shallowRef)();
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
    result.value = fn();
  }, {
    ...options,
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.readonly)(result);
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, update, { flush: "sync" });
  const get = typeof fn === "function" ? fn : fn.get;
  const set = typeof fn === "function" ? void 0 : fn.set;
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get(v);
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set == null ? void 0 : set(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}

function tryOnScopeDispose(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)()) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn) => fn(...args)));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);
  return (...args) => {
    if (!initialized) {
      state = scope.run(() => stateFactory(...args));
      initialized = true;
    }
    return state;
  };
}

const localProvidedStateMap = /* @__PURE__ */ new WeakMap();

const injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) == null ? void 0 : _a.proxy;
  if (instance == null)
    throw new Error("injectLocal must be called in setup");
  if (localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)(...args);
};

const provideLocal = (key, value) => {
  var _a;
  const instance = (_a = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) == null ? void 0 : _a.proxy;
  if (instance == null)
    throw new Error("provideLocal must be called in setup");
  if (!localProvidedStateMap.has(instance))
    localProvidedStateMap.set(instance, /* @__PURE__ */ Object.create(null));
  const localProvidedState = localProvidedStateMap.get(instance);
  localProvidedState[key] = value;
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)(key, value);
};

function createInjectionState(composable, options) {
  const key = (options == null ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
  const defaultValue = options == null ? void 0 : options.defaultValue;
  const useProvidingState = (...args) => {
    const state = composable(...args);
    provideLocal(key, state);
    return state;
  };
  const useInjectedState = () => injectLocal(key, defaultValue);
  return [useProvidingState, useInjectedState];
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!scope) {
      scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  if (!vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 && !vue_demi__WEBPACK_IMPORTED_MODULE_0__.version.startsWith("2.7.")) {
    if (true)
      throw new Error("[VueUse] extendRef only works in Vue 2.7 or above.");
    return;
  }
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function get(obj, key) {
  if (key == null)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj)[key];
}

function isDefined(v) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(v) != null;
}

function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = { ...obj };
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function toValue(r) {
  return typeof r === "function" ? r() : (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(r);
}
const resolveUnref = toValue;

function reactify(fn, options) {
  const unrefFn = (options == null ? void 0 : options.computedGetter) === false ? vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref : toValue;
  return function(...args) {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  let options;
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    options = optionsOrKeys;
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(
    keys.map((key) => {
      const value = obj[key];
      return [
        key,
        typeof value === "function" ? reactify(value.bind(obj), options) : value
      ];
    })
  );
}

function toReactive(objectRef) {
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef.value[p]) && !(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(proxy);
}

function reactiveComputed(fn) {
  return toReactive((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(fn));
}

function reactiveOmit(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(obj)).filter(([k, v]) => !predicate(toValue(v), k))) : Object.fromEntries(Object.entries((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(obj)).filter((e) => !flatKeys.includes(e[0]))));
}

const directiveHooks = {
  mounted: vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? "mounted" : "inserted",
  updated: vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? "updated" : "componentUpdated",
  unmounted: vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? "unmounted" : "unbind"
};

const isClient = typeof window !== "undefined" && typeof document !== "undefined";
const isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const isDef = (val) => typeof val !== "undefined";
const notNullish = (val) => val != null;
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.readonly)(isActive), pause, resume, eventFilter };
}

function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?\d+\.?\d*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}
function objectOmit(obj, keys, omitUndefined = false) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
    return (!omitUndefined || value !== void 0) && !keys.includes(key);
  }));
}
function objectEntries(obj) {
  return Object.entries(obj);
}
function getLifeCycleTarget(target) {
  return target || (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
}

function toRef(...args) {
  if (args.length !== 1)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRef)(...args);
  const r = args[0];
  return typeof r === "function" ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.readonly)((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)(() => ({ get: r, set: noop }))) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(r);
}
const resolveRef = toRef;

function reactivePick(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}

function refAutoReset(defaultValue, afterMs = 1e4) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((track, trigger) => {
    let value = toValue(defaultValue);
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = toValue(defaultValue);
      trigger();
    }, toValue(afterMs));
    tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}

function refDebounced(value, ms = 200, options = {}) {
  const debounced = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => updater());
  return debounced;
}

function refDefault(source, defaultValue) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}

function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(value.value);
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => updater());
  return throttled;
}

function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(
    ref,
    {
      get,
      set,
      untrackedGet,
      silentSet,
      peek,
      lay
    },
    { enumerable: true }
  );
}
const controlledRef = refWithControl;

function set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2) {
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.set)(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}

function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}

function syncRef(left, right, ...[options]) {
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both",
    transform = {}
  } = options || {};
  const watchers = [];
  const transformLTR = "ltr" in transform && transform.ltr || ((v) => v);
  const transformRTL = "rtl" in transform && transform.rtl || ((v) => v);
  if (direction === "both" || direction === "ltr") {
    watchers.push(watchPausable(
      left,
      (newValue) => {
        watchers.forEach((w) => w.pause());
        right.value = transformLTR(newValue);
        watchers.forEach((w) => w.resume());
      },
      { flush, deep, immediate }
    ));
  }
  if (direction === "both" || direction === "rtl") {
    watchers.push(watchPausable(
      right,
      (newValue) => {
        watchers.forEach((w) => w.pause());
        left.value = transformRTL(newValue);
        watchers.forEach((w) => w.resume());
      },
      { flush, deep, immediate }
    ));
  }
  const stop = () => {
    watchers.forEach((w) => w.stop());
  };
  return stop;
}

function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  if (!Array.isArray(targets))
    targets = [targets];
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    source,
    (newValue) => targets.forEach((target) => target.value = newValue),
    { flush, deep, immediate }
  );
}

function toRefs(objectRef, options = {}) {
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        var _a;
        const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeMount(fn, sync = true, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(fn, target);
  else if (sync)
    fn();
  else
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(fn);
}

function tryOnBeforeUnmount(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(fn, target);
}

function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(fn, target);
  else if (sync)
    fn();
  else
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(fn);
}

function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(fn, target);
}

function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            if (stop)
              stop();
            else
              (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop == null ? void 0 : stop());
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            if (stop)
              stop();
            else
              (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop == null ? void 0 : stop());
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}

function defaultComparator(value, othVal) {
  return value === othVal;
}
function useArrayDifference(...args) {
  var _a;
  const list = args[0];
  const values = args[1];
  let compareFn = (_a = args[2]) != null ? _a : defaultComparator;
  if (typeof compareFn === "string") {
    const key = compareFn;
    compareFn = (value, othVal) => value[key] === othVal[key];
  }
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).filter((x) => toValue(values).findIndex((y) => compareFn(x, y)) === -1));
}

function useArrayEvery(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).every((element, index, array) => fn(toValue(element), index, array)));
}

function useArrayFilter(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).map((i) => toValue(i)).filter(fn));
}

function useArrayFind(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(
    toValue(list).find((element, index, array) => fn(toValue(element), index, array))
  ));
}

function useArrayFindIndex(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).findIndex((element, index, array) => fn(toValue(element), index, array)));
}

function findLast(arr, cb) {
  let index = arr.length;
  while (index-- > 0) {
    if (cb(arr[index], index, arr))
      return arr[index];
  }
  return void 0;
}
function useArrayFindLast(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(
    !Array.prototype.findLast ? findLast(toValue(list), (element, index, array) => fn(toValue(element), index, array)) : toValue(list).findLast((element, index, array) => fn(toValue(element), index, array))
  ));
}

function isArrayIncludesOptions(obj) {
  return isObject(obj) && containsProp(obj, "formIndex", "comparator");
}
function useArrayIncludes(...args) {
  var _a;
  const list = args[0];
  const value = args[1];
  let comparator = args[2];
  let formIndex = 0;
  if (isArrayIncludesOptions(comparator)) {
    formIndex = (_a = comparator.fromIndex) != null ? _a : 0;
    comparator = comparator.comparator;
  }
  if (typeof comparator === "string") {
    const key = comparator;
    comparator = (element, value2) => element[key] === toValue(value2);
  }
  comparator = comparator != null ? comparator : (element, value2) => element === toValue(value2);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).slice(formIndex).some((element, index, array) => comparator(
    toValue(element),
    toValue(value),
    index,
    toValue(array)
  )));
}

function useArrayJoin(list, separator) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).map((i) => toValue(i)).join(toValue(separator)));
}

function useArrayMap(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).map((i) => toValue(i)).map(fn));
}

function useArrayReduce(list, reducer, ...args) {
  const reduceCallback = (sum, value, index) => reducer(toValue(sum), toValue(value), index);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const resolved = toValue(list);
    return args.length ? resolved.reduce(reduceCallback, typeof args[0] === "function" ? toValue(args[0]()) : toValue(args[0])) : resolved.reduce(reduceCallback);
  });
}

function useArraySome(list, fn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => toValue(list).some((element, index, array) => fn(toValue(element), index, array)));
}

function uniq(array) {
  return Array.from(new Set(array));
}
function uniqueElementsBy(array, fn) {
  return array.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x, array)))
      acc.push(v);
    return acc;
  }, []);
}
function useArrayUnique(list, compareFn) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const resolvedList = toValue(list).map((element) => toValue(element));
    return compareFn ? uniqueElementsBy(resolvedList, compareFn) : uniq(resolvedList);
  });
}

function useCounter(initialValue = 0, options = {}) {
  let _initialValue = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue);
  const count = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
  const {
    max = Number.POSITIVE_INFINITY,
    min = Number.NEGATIVE_INFINITY
  } = options;
  const inc = (delta = 1) => count.value = Math.max(Math.min(max, count.value + delta), min);
  const dec = (delta = 1) => count.value = Math.min(Math.max(min, count.value - delta), max);
  const get = () => count.value;
  const set = (val) => count.value = Math.max(min, Math.min(max, val));
  const reset = (val = _initialValue) => {
    _initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i;
const REGEX_FORMAT = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
function defaultMeridiem(hours, minutes, isLowercase, hasPeriod) {
  let m = hours < 12 ? "AM" : "PM";
  if (hasPeriod)
    m = m.split("").reduce((acc, curr) => acc += `${curr}.`, "");
  return isLowercase ? m.toLowerCase() : m;
}
function formatOrdinal(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
function formatDate(date, formatStr, options = {}) {
  var _a;
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const meridiem = (_a = options.customMeridiem) != null ? _a : defaultMeridiem;
  const matches = {
    Yo: () => formatOrdinal(years),
    YY: () => String(years).slice(-2),
    YYYY: () => years,
    M: () => month + 1,
    Mo: () => formatOrdinal(month + 1),
    MM: () => `${month + 1}`.padStart(2, "0"),
    MMM: () => date.toLocaleDateString(toValue(options.locales), { month: "short" }),
    MMMM: () => date.toLocaleDateString(toValue(options.locales), { month: "long" }),
    D: () => String(days),
    Do: () => formatOrdinal(days),
    DD: () => `${days}`.padStart(2, "0"),
    H: () => String(hours),
    Ho: () => formatOrdinal(hours),
    HH: () => `${hours}`.padStart(2, "0"),
    h: () => `${hours % 12 || 12}`.padStart(1, "0"),
    ho: () => formatOrdinal(hours % 12 || 12),
    hh: () => `${hours % 12 || 12}`.padStart(2, "0"),
    m: () => String(minutes),
    mo: () => formatOrdinal(minutes),
    mm: () => `${minutes}`.padStart(2, "0"),
    s: () => String(seconds),
    so: () => formatOrdinal(seconds),
    ss: () => `${seconds}`.padStart(2, "0"),
    SSS: () => `${milliseconds}`.padStart(3, "0"),
    d: () => day,
    dd: () => date.toLocaleDateString(toValue(options.locales), { weekday: "narrow" }),
    ddd: () => date.toLocaleDateString(toValue(options.locales), { weekday: "short" }),
    dddd: () => date.toLocaleDateString(toValue(options.locales), { weekday: "long" }),
    A: () => meridiem(hours, minutes),
    AA: () => meridiem(hours, minutes, false, true),
    a: () => meridiem(hours, minutes, true),
    aa: () => meridiem(hours, minutes, true, true)
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => {
    var _a2, _b;
    return (_b = $1 != null ? $1 : (_a2 = matches[match]) == null ? void 0 : _a2.call(matches)) != null ? _b : match;
  });
}
function normalizeDate(date) {
  if (date === null)
    return new Date(Number.NaN);
  if (date === void 0)
    return /* @__PURE__ */ new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
}
function useDateFormat(date, formatStr = "HH:mm:ss", options = {}) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => formatDate(normalizeDate(toValue(date)), toValue(formatStr), options));
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    if (isActive.value)
      timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(interval) || typeof interval === "function") {
    const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true,
    callback
  } = options;
  const counter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const update = () => counter.value += 1;
  const reset = () => {
    counter.value = 0;
  };
  const controls = useIntervalFn(
    callback ? () => {
      update();
      callback(counter.value);
    } : update,
    interval,
    { immediate }
  );
  if (exposeControls) {
    return {
      counter,
      reset,
      ...controls
    };
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = options.initialValue) != null ? _a : null);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    source,
    () => ms.value = timestamp(),
    options
  );
  return ms;
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.readonly)(isPending),
    start,
    stop
  };
}

function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    callback
  } = options;
  const controls = useTimeoutFn(
    callback != null ? callback : noop,
    interval,
    options
  );
  const ready = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !controls.isPending.value);
  if (exposeControls) {
    return {
      ready,
      ...controls
    };
  } else {
    return ready;
  }
}

function useToNumber(value, options = {}) {
  const {
    method = "parseFloat",
    radix,
    nanToZero
  } = options;
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let resolved = toValue(value);
    if (typeof resolved === "string")
      resolved = Number[method](resolved, radix);
    if (nanToZero && Number.isNaN(resolved))
      resolved = 0;
    return resolved;
  });
}

function useToString(value) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => `${toValue(value)}`);
}

function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(initialValue);
  const _value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}

function watchArray(source, cb, options) {
  let oldList = (options == null ? void 0 : options.immediate) ? [] : [...source instanceof Function ? source() : Array.isArray(source) ? source : toValue(source)];
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (newList, _, onCleanup) => {
    const oldListRemains = Array.from({ length: oldList.length });
    const added = [];
    for (const obj of newList) {
      let found = false;
      for (let i = 0; i < oldList.length; i++) {
        if (!oldListRemains[i] && obj === oldList[i]) {
          oldListRemains[i] = true;
          found = true;
          break;
        }
      }
      if (!found)
        added.push(obj);
    }
    const removed = oldList.filter((_2, i) => !oldListRemains[i]);
    cb(newList, oldList, added, removed, onCleanup);
    oldList = [...newList];
  }, options);
}

function watchAtMost(source, cb, options) {
  const {
    count,
    ...watchOptions
  } = options;
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const stop = watchWithFilter(
    source,
    (...args) => {
      current.value += 1;
      if (current.value >= toValue(count))
        (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop());
      cb(...args);
    },
    watchOptions
  );
  return { count: current, stop };
}

function watchDebounced(source, cb, options = {}) {
  const {
    debounce = 0,
    maxWait = void 0,
    ...watchOptions
  } = options;
  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: debounceFilter(debounce, { maxWait })
    }
  );
}

function watchDeep(source, cb, options) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    source,
    cb,
    {
      ...options,
      deep: true
    }
  );
}

function watchIgnorable(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  const filteredCb = createFilterWrapper(
    eventFilter,
    cb
  );
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
      source,
      (...args) => {
        if (!ignore.value)
          filteredCb(...args);
      },
      watchOptions
    );
  } else {
    const disposables = [];
    const ignoreCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const syncCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
        source,
        () => {
          syncCounter.value++;
        },
        { ...watchOptions, flush: "sync" }
      )
    );
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
        source,
        (...args) => {
          const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
          ignoreCounter.value = 0;
          syncCounter.value = 0;
          if (ignore)
            return;
          filteredCb(...args);
        },
        watchOptions
      )
    );
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function watchImmediate(source, cb, options) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

function watchOnce(source, cb, options) {
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop());
    return cb(...args);
  }, options);
  return stop;
}

function watchThrottled(source, cb, options = {}) {
  const {
    throttle = 0,
    trailing = true,
    leading = true,
    ...watchOptions
  } = options;
  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: throttleFilter(throttle, trailing, leading)
    }
  );
}

function watchTriggerable(source, cb, options = {}) {
  let cleanupFn;
  function onEffect() {
    if (!cleanupFn)
      return;
    const fn = cleanupFn;
    cleanupFn = void 0;
    fn();
  }
  function onCleanup(callback) {
    cleanupFn = callback;
  }
  const _cb = (value, oldValue) => {
    onEffect();
    return cb(value, oldValue, onCleanup);
  };
  const res = watchIgnorable(source, _cb, options);
  const { ignoreUpdates } = res;
  const trigger = () => {
    let res2;
    ignoreUpdates(() => {
      res2 = _cb(getWatchSources(source), getOldValue(source));
    });
    return res2;
  };
  return {
    ...res,
    trigger
  };
}
function getWatchSources(sources) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isReactive)(sources))
    return sources;
  if (Array.isArray(sources))
    return sources.map((item) => toValue(item));
  return toValue(sources);
}
function getOldValue(source) {
  return Array.isArray(source) ? source.map(() => void 0) : void 0;
}

function whenever(source, cb, options) {
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    source,
    (v, ov, onInvalidate) => {
      if (v) {
        if (options == null ? void 0 : options.once)
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => stop());
        cb(v, ov, onInvalidate);
      }
    },
    {
      ...options,
      once: false
    }
  );
  return stop;
}




/***/ }),

/***/ "./node_modules/@vueuse/integrations/node_modules/vue-demi/lib/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vueuse/integrations/node_modules/vue-demi/lib/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   KeepAlive: () => (/* binding */ KeepAlive),
/* harmony export */   Suspense: () => (/* binding */ Suspense),
/* harmony export */   Teleport: () => (/* binding */ Teleport),
/* harmony export */   Transition: () => (/* binding */ Transition),
/* harmony export */   TransitionGroup: () => (/* binding */ TransitionGroup),
/* harmony export */   Vue: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Vue2: () => (/* binding */ Vue2),
/* harmony export */   computed: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   createApp: () => (/* binding */ createApp),
/* harmony export */   customRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   del: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.del),
/* harmony export */   effectScope: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   h: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   hasInjectionContext: () => (/* binding */ hasInjectionContext),
/* harmony export */   inject: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   install: () => (/* binding */ install),
/* harmony export */   isProxy: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isShallow: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVue2: () => (/* binding */ isVue2),
/* harmony export */   isVue3: () => (/* binding */ isVue3),
/* harmony export */   markRaw: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   nextTick: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   onActivated: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   onBeforeMount: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   onMounted: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   onRenderTracked: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   onUpdated: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   provide: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   reactive: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   set: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.set),
/* harmony export */   shallowReactive: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   toRaw: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   triggerRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   useCssModule: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   useCssVars: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   useListeners: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useListeners),
/* harmony export */   useSlots: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   version: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   watch: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   watchEffect: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   watchPostEffect: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");



var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__["default"]
var warn = vue__WEBPACK_IMPORTED_MODULE_0__["default"].util.warn

function install() {}

// createApp polyfill
function createApp(rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: vue__WEBPACK_IMPORTED_MODULE_0__["default"].config,
    use: vue__WEBPACK_IMPORTED_MODULE_0__["default"].use.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mixin: vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    component: vue__WEBPACK_IMPORTED_MODULE_0__["default"].component.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name, dir)
        return app
      } else {
        return vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}



// Vue 3 components mock
function createMockComponent(name) {
  return {
    setup() {
      throw new Error('[vue-demi] ' + name + ' is not supported in Vue 2. It\'s provided to avoid compiler errors.')
    }
  }
}
var Fragment = /*#__PURE__*/ createMockComponent('Fragment')
var Transition = /*#__PURE__*/ createMockComponent('Transition')
var TransitionGroup = /*#__PURE__*/ createMockComponent('TransitionGroup')
var Teleport = /*#__PURE__*/ createMockComponent('Teleport')
var Suspense = /*#__PURE__*/ createMockComponent('Suspense')
var KeepAlive = /*#__PURE__*/ createMockComponent('KeepAlive')



// Not implemented https://github.com/vuejs/core/pull/8111, falls back to getCurrentInstance()
function hasInjectionContext() {
  return !!(0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()
}


/***/ }),

/***/ "./node_modules/@vueuse/integrations/useSortable.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@vueuse/integrations/useSortable.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertNodeAt: () => (/* binding */ insertNodeAt),
/* harmony export */   moveArrayElement: () => (/* binding */ moveArrayElement),
/* harmony export */   removeNode: () => (/* binding */ removeNode),
/* harmony export */   useSortable: () => (/* binding */ useSortable)
/* harmony export */ });
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/integrations/node_modules/@vueuse/core/index.mjs");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/integrations/node_modules/@vueuse/shared/index.mjs");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/integrations/node_modules/vue-demi/lib/index.mjs");




function useSortable(el, list, options = {}) {
  let sortable;
  const { document = _vueuse_core__WEBPACK_IMPORTED_MODULE_2__.defaultDocument, ...resetOptions } = options;
  const defaultOptions = {
    onUpdate: (e) => {
      moveArrayElement(list, e.oldIndex, e.newIndex, e);
    }
  };
  const start = () => {
    const target = typeof el === "string" ? document == null ? void 0 : document.querySelector(el) : (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_2__.unrefElement)(el);
    if (!target || sortable !== void 0)
      return;
    sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](target, { ...defaultOptions, ...resetOptions });
  };
  const stop = () => {
    sortable == null ? void 0 : sortable.destroy();
    sortable = void 0;
  };
  const option = (name, value) => {
    if (value !== void 0)
      sortable == null ? void 0 : sortable.option(name, value);
    else
      return sortable == null ? void 0 : sortable.option(name);
  };
  (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_3__.tryOnMounted)(start);
  (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_3__.tryOnScopeDispose)(stop);
  return {
    stop,
    start,
    option
  };
}
function insertNodeAt(parentElement, element, index) {
  const refElement = parentElement.children[index];
  parentElement.insertBefore(element, refElement);
}
function removeNode(node) {
  if (node.parentNode)
    node.parentNode.removeChild(node);
}
function moveArrayElement(list, from, to, e = null) {
  if (e != null) {
    removeNode(e.item);
    insertNodeAt(e.from, e.item, from);
  }
  const _valueIsRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(list);
  const array = _valueIsRef ? [...(0,_vueuse_core__WEBPACK_IMPORTED_MODULE_3__.toValue)(list)] : (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_3__.toValue)(list);
  if (to >= 0 && to < array.length) {
    const element = array.splice(from, 1)[0];
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
      array.splice(to, 0, element);
      if (_valueIsRef)
        list.value = array;
    });
  }
}




/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colord: () => (/* binding */ j),
/* harmony export */   colord: () => (/* binding */ w),
/* harmony export */   extend: () => (/* binding */ k),
/* harmony export */   getFormat: () => (/* binding */ I),
/* harmony export */   random: () => (/* binding */ E)
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + {"node_modules_nextcloud_dialogs_dist_chunks_index-Ly0obkwS_mjs":"859391c9af31fafd5b72","data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Google_20Inc_20-_20SPDX-Lice-4c340f":"4b81180b90077e8c0e7e","node_modules_nextcloud_dialogs_dist_chunks_FilePicker-CSmrMOEO_mjs":"24473ba072d3a3e5fb03","node_modules_rehype-highlight_index_js":"3c5c32c691780bf457a0"}[chunkId] + "";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nextcloud:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 			"theming-admin-theming": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/theming/src/admin-settings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=theming-admin-theming.js.map?v=239421608aced5975b1b