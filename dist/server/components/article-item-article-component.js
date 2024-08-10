exports.ids = [4];
exports.modules = {

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/article/itemArticleComponent.vue?vue&type=template&id=1934b201&scoped=true



var itemArticleComponentvue_type_template_id_1934b201_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "lg": "4",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "article-card",
    attrs: {
      "height": "100%",
      "max-width": "100%"
    }
  }, [_c('div', {
    staticClass: "article-item"
  }, [_c('div', {
    staticClass: "article-item__img"
  }, [_c('img', {
    attrs: {
      "src": _vm.img,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "article-item__img-date"
  }, [_c('span', {
    staticClass: "article-item__img-date-day"
  }, [_vm._v("29")]), _vm._v(" "), _c('span', {
    staticClass: "article-item__img-date-month"
  }, [_vm._v("مهر")])])]), _vm._v(" "), _c('div', {
    staticClass: "article-item__text"
  }, [_c('h5', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "article-item__text-line"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.excerpt) + " ")])])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/article/itemArticleComponent.vue?vue&type=template&id=1934b201&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/article/itemArticleComponent.vue?vue&type=script&lang=js
/* harmony default export */ var itemArticleComponentvue_type_script_lang_js = ({
  name: "itemArticleComponent",
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    excerpt: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/global/article/itemArticleComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var article_itemArticleComponentvue_type_script_lang_js = (itemArticleComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/global/article/itemArticleComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_itemArticleComponentvue_type_script_lang_js,
  itemArticleComponentvue_type_template_id_1934b201_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1934b201",
  "8a6b89d4"
  
)

/* harmony default export */ var itemArticleComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=article-item-article-component.js.map