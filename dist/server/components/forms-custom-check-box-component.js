exports.ids = [12];
exports.modules = {

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js + 1 modules
var VCheckbox = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/forms/CustomCheckBoxComponent.vue?vue&type=template&id=d04e1314&scoped=true


var CustomCheckBoxComponentvue_type_template_id_d04e1314_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCheckbox["a" /* default */], {
    attrs: {
      "dir": "rtl",
      "label": _vm.label
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

// CONCATENATED MODULE: ./components/global/forms/CustomCheckBoxComponent.vue?vue&type=template&id=d04e1314&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/forms/CustomCheckBoxComponent.vue?vue&type=script&lang=js
/* harmony default export */ var CustomCheckBoxComponentvue_type_script_lang_js = ({
  name: "CustomCheckBoxComponent",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
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
// CONCATENATED MODULE: ./components/global/forms/CustomCheckBoxComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var forms_CustomCheckBoxComponentvue_type_script_lang_js = (CustomCheckBoxComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/global/forms/CustomCheckBoxComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_CustomCheckBoxComponentvue_type_script_lang_js,
  CustomCheckBoxComponentvue_type_template_id_d04e1314_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "d04e1314",
  "499cf136"
  
)

/* harmony default export */ var CustomCheckBoxComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=forms-custom-check-box-component.js.map