exports.ids = [30,6,13];
exports.modules = {

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed.v-text-field--reverse .v-text-field__slot .v-label{margin-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed.v-text-field--reverse .v-text-field__slot .v-label{margin-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextarea/VTextarea.sass
var VTextarea = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(mixins["a" /* default */])(VTextField["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VTextarea_VTextarea = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ...VTextField["a" /* default */].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = VTextField["a" /* default */].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      VTextField["a" /* default */].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/forms/CustomTextAreaComponent.vue?vue&type=template&id=ee2d0362&scoped=true


var CustomTextAreaComponentvue_type_template_id_ee2d0362_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VTextarea_VTextarea, {
    staticClass: "input-form",
    attrs: {
      "label": _vm.label,
      "placeholder": _vm.placeholder,
      "rules": _vm.rules,
      "dir": _vm.dir,
      "height": _vm.height,
      "outlined": "",
      "variant": "outlined",
      "background-color": " lighten-2"
    },
    model: {
      value: _vm.val,
      callback: function ($$v) {
        _vm.val = $$v;
      },
      expression: "val"
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/forms/CustomTextAreaComponent.vue?vue&type=template&id=ee2d0362&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/forms/CustomTextAreaComponent.vue?vue&type=script&lang=js
/* harmony default export */ var CustomTextAreaComponentvue_type_script_lang_js = ({
  name: 'CustomTextAreaComponent',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    },
    dir: {
      type: String,
      default: 'rtl'
    },
    height: {
      type: String,
      default: '150px'
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/global/forms/CustomTextAreaComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var forms_CustomTextAreaComponentvue_type_script_lang_js = (CustomTextAreaComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/global/forms/CustomTextAreaComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_CustomTextAreaComponentvue_type_script_lang_js,
  CustomTextAreaComponentvue_type_template_id_ee2d0362_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "ee2d0362",
  "079e2a42"
  
)

/* harmony default export */ var CustomTextAreaComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(205);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/contact-us/contactUsComponent.vue?vue&type=template&id=6a2fdf2b&scoped=true






var contactUsComponentvue_type_template_id_6a2fdf2b_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-page contact-us"
  }, [_vm._ssrNode("<div class=\"contact-us__header\" data-v-6a2fdf2b><div class=\"contact-us__bg\" data-v-6a2fdf2b></div> <div class=\"contact-us__bg-overlay\" data-v-6a2fdf2b></div> <div class=\"contact-us__text\" data-v-6a2fdf2b><h1 data-v-6a2fdf2b>تماس با ما</h1> <h3 data-v-6a2fdf2b>شهر سفال</h3></div></div> "), _c(VContainer["a" /* default */], {
    staticClass: "mt-n16"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "lg": "6",
      "md": "6",
      "sm": "6"
    }
  }, [_c(VCard["a" /* default */], [_c('div', {
    staticClass: "contact-us__items"
  }, [_c('h4', [_vm._v("پشتیبانی")]), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-address"
  }, [_c('p', [_c('strong', [_vm._v("آدرس:")]), _vm._v("\n                  همدان، لالجین، خیابان مهدیه، انتهای خیابان شهید پورمختار، جنب کارگاه سفال و سرامیک نصیری\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-btn"
  }, [_c('p', [_vm._v("شماره پشتیبانی:")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "large": "",
      "color": "#00c851"
    }
  }, [_c('span', [_vm._v("09189082388")])])], 1)])])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "lg": "6",
      "md": "6",
      "sm": "6"
    }
  }, [_c(VCard["a" /* default */], [_c('div', {
    staticClass: "contact-us__items"
  }, [_c('h4', [_vm._v("مرکز پخش")]), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-address"
  }, [_c('p', [_c('strong', [_vm._v("آدرس مرکز پخش:")]), _vm._v("\n                  همدان، لالجین، بلوار ۴۵ متری، روبروی فروشگاه کوروش، فروشگاه شهر سفال\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-btn"
  }, [_c('p', [_vm._v(" شماره مرکز پخش:")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "large": "",
      "color": "#00c851"
    }
  }, [_c('span', [_vm._v("08134522709")])])], 1)])])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c('div', {
    staticClass: "contact-us__form"
  }, [_c('p', [_vm._v("همکاران ما در پشتیبانی تلاش می کنند تا با ارائه توضیحات کامل برای هر محصول، پاسخ تمامی سوالات شما را\n                بدهند تافرایند ثبت سفارش شما (چه عمده و چه خرده)، بیش از چند دقیقه طول نکشد.")]), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-form"
  }, [_c('h3', [_vm._v("فرم تماس با شهر سفال")]), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-form-control"
  }, [_c('custom-text-field-component', {
    attrs: {
      "label": "نام شما (الزامی)"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-form-control"
  }, [_c('custom-text-field-component', {
    attrs: {
      "label": "ایمیل شما (الزامی)"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-form-control"
  }, [_c('custom-text-field-component', {
    attrs: {
      "label": "موضوع"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "contact-us__items-form-control"
  }, [_c('custom-text-area-component', {
    attrs: {
      "label": "پیام شما"
    }
  })], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_c('span', [_vm._v("ارسال")])])], 1)])])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/contact-us/contactUsComponent.vue?vue&type=template&id=6a2fdf2b&scoped=true

// EXTERNAL MODULE: ./components/global/forms/CustomTextFieldComponent.vue + 4 modules
var CustomTextFieldComponent = __webpack_require__(22);

// EXTERNAL MODULE: ./components/global/forms/CustomTextAreaComponent.vue + 5 modules
var CustomTextAreaComponent = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/contact-us/contactUsComponent.vue?vue&type=script&lang=js


/* harmony default export */ var contactUsComponentvue_type_script_lang_js = ({
  name: "contactUsComponent",
  components: {
    CustomTextAreaComponent: CustomTextAreaComponent["default"],
    CustomTextFieldComponent: CustomTextFieldComponent["default"]
  }
});
// CONCATENATED MODULE: ./components/global/contact-us/contactUsComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var contact_us_contactUsComponentvue_type_script_lang_js = (contactUsComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/global/contact-us/contactUsComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contact_us_contactUsComponentvue_type_script_lang_js,
  contactUsComponentvue_type_template_id_6a2fdf2b_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "6a2fdf2b",
  "079e7eaa"
  
)

/* harmony default export */ var contactUsComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us/index.vue?vue&type=template&id=003ca6d7&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('contact-us-component');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact-us/index.vue?vue&type=template&id=003ca6d7&scoped=true

// EXTERNAL MODULE: ./components/global/contact-us/contactUsComponent.vue + 4 modules
var contactUsComponent = __webpack_require__(255);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us/index.vue?vue&type=script&lang=js

/* harmony default export */ var contact_usvue_type_script_lang_js = ({
  components: {
    ContactUsComponent: contactUsComponent["default"]
  },
  layout: "DefaultLayout"
});
// CONCATENATED MODULE: ./pages/contact-us/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js = (contact_usvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/contact-us/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "003ca6d7",
  "64ce527c"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ContactUsComponent: __webpack_require__(255).default})


/***/ })

};;
//# sourceMappingURL=index.js.map