exports.ids = [29,14];
exports.modules = {

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/header/headerCartComponent.vue?vue&type=template&id=8ccf6d24&scoped=true


var headerCartComponentvue_type_template_id_8ccf6d24_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cart-page__header"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("سبد خرید")]), _vm._ssrNode(" "), _c(VIcon["a" /* default */], [_vm._v("mdi-chevron-left")]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/cart/checkout"
    }
  }, [_vm._v(" جزییات پرداخت")]), _vm._ssrNode(" "), _c(VIcon["a" /* default */], [_vm._v("mdi-chevron-left")]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/cc"
    }
  }, [_vm._v("تکمیل سفارش")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/header/headerCartComponent.vue?vue&type=template&id=8ccf6d24&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/header/headerCartComponent.vue?vue&type=script&lang=js
/* harmony default export */ var headerCartComponentvue_type_script_lang_js = ({
  name: "headerCartComponent"
});
// CONCATENATED MODULE: ./components/global/header/headerCartComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var header_headerCartComponentvue_type_script_lang_js = (headerCartComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/global/header/headerCartComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_headerCartComponentvue_type_script_lang_js,
  headerCartComponentvue_type_template_id_8ccf6d24_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "8ccf6d24",
  "3c384d77"
  
)

/* harmony default export */ var headerCartComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(205);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/index.vue?vue&type=template&id=a5ae6f26&scoped=true



var cartvue_type_template_id_a5ae6f26_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cart-page"
  }, [_c('header-cart-component'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-page__body\" data-v-a5ae6f26>", "</div>", [_vm._ssrNode("<div class=\"cart-page__body-message\" data-v-a5ae6f26><span class=\"alert-color\" data-v-a5ae6f26>مبلغ سفارش شما</span> <span data-v-a5ae6f26>۴۰,۰۰۰ تومان</span> <span class=\"alert-color\" data-v-a5ae6f26>می باشد، حداقل مبلغ جهت ثبت سفارش</span> <span data-v-a5ae6f26>۲۰۰,۰۰۰ تومان</span> <span class=\"alert-color\" data-v-a5ae6f26>است.</span></div> "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "md": "9"
    }
  }, [_c('div', {}, [_c('table', {
    staticClass: "shop_table shop_table_responsive cart woocommerce-cart-form__contents",
    attrs: {
      "cellspacing": "0"
    }
  }, [_c('thead', [_c('tr', [_c('th', {
    staticClass: "product-name",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("محصول")]), _vm._v(" "), _c('th', {
    staticClass: "product-price"
  }, [_vm._v("قیمت")]), _vm._v(" "), _c('th', {
    staticClass: "product-quantity"
  }, [_vm._v("تعداد")]), _vm._v(" "), _c('th', {
    staticClass: "product-subtotal"
  }, [_vm._v("جمع جزء")])])]), _vm._v(" "), _c('tbody', [_c('tr', {
    staticClass: "woocommerce-cart-form__cart-item cart_item"
  }, [_c('td', {
    staticClass: "product-remove"
  }, [_c('a', {
    staticClass: "remove",
    attrs: {
      "href": "#",
      "aria-label": "پاک کردن این آیتم",
      "data-product_id": "6156",
      "data-product_sku": "26653"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('td', {
    staticClass: "product-thumbnail"
  }, [_c('a', {
    attrs: {
      "href": "https://shahrsofal.com/product/%d8%aa%d8%b1%d8%b4%db%8c-%d8%ae%d9%88%d8%b1%db%8c-%d8%b3%d8%b1%d8%a7%d9%85%db%8c%da%a9%db%8c/"
    }
  }, [_c('img', {
    staticClass: "attachment-woocommerce_thumbnail size-woocommerce_thumbnail",
    attrs: {
      "fetchpriority": "high",
      "decoding": "async",
      "width": "27",
      "height": "27",
      "src": "https://shahrsofal.com/wp-content/uploads/2023/06/ترشی-خوری-سرامیکی-رنگین-کمان-247x247.jpg",
      "alt": "ترشی خوری سرامیکی رنگین کمان"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "product-name",
    attrs: {
      "data-title": "محصول"
    }
  }, [_c('a', {
    attrs: {
      "href": "https://shahrsofal.com/product/%d8%aa%d8%b1%d8%b4%db%8c-%d8%ae%d9%88%d8%b1%db%8c-%d8%b3%d8%b1%d8%a7%d9%85%db%8c%da%a9%db%8c/"
    }
  }, [_vm._v("\n                  ترشی\n                خوری سرامیکی طرح رنگین کمان")]), _vm._v(" "), _c('div', {
    staticClass: "show-for-small mobile-product-price"
  }, [_c('span', {
    staticClass: "mobile-product-price__qty"
  }, [_vm._v("2 x ")]), _c('span', {
    staticClass: "woocommerce-Price-amount amount"
  }, [_c('bdi', [_vm._v("۴۰,۰۰۰ "), _c('span', {
    staticClass: "woocommerce-Price-currencySymbol"
  }, [_vm._v("تومان")])])])])]), _vm._v(" "), _c('td', {
    staticClass: "product-price",
    attrs: {
      "data-title": "قیمت"
    }
  }, [_c('span', {
    staticClass: "woocommerce-Price-amount amount"
  }, [_c('bdi', [_vm._v("۴۰,۰۰۰ "), _c('span', {
    staticClass: "woocommerce-Price-currencySymbol"
  }, [_vm._v("تومان")])])])]), _vm._v(" "), _c('td', {
    staticClass: "product-quantity",
    attrs: {
      "data-title": "تعداد"
    }
  }, [_c('div', {
    staticClass: "quantity buttons_added"
  }, [_c('input', {
    staticClass: "minus button is-form",
    attrs: {
      "type": "button",
      "value": "-"
    }
  }), _c('label', {
    staticClass: "screen-reader-text",
    attrs: {
      "for": "quantity_66b723997fb53"
    }
  }, [_vm._v("ترشی خوری سرامیکی طرح رنگین کمان\n                  عدد")]), _c('input', {
    staticClass: "input-text qty text",
    attrs: {
      "type": "number",
      "id": "quantity_66b723997fb53",
      "step": "1",
      "min": "0",
      "max": "",
      "name": "cart[2eacc82231f2e62f9acb38bece54635e][qty]",
      "value": "2",
      "title": "تعداد",
      "size": "4",
      "placeholder": "",
      "inputmode": "numeric"
    }
  }), _c('input', {
    staticClass: "plus button is-form",
    attrs: {
      "type": "button",
      "value": "+"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "product-subtotal",
    attrs: {
      "data-title": "جمع جزء"
    }
  }, [_c('span', {
    staticClass: "woocommerce-Price-amount amount"
  }, [_c('bdi', [_vm._v("۸۰,۰۰۰ "), _c('span', {
    staticClass: "woocommerce-Price-currencySymbol"
  }, [_vm._v("تومان")])])])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "actions clear",
    attrs: {
      "colspan": "6"
    }
  }, [_c('div', {
    staticClass: "continue-shopping pull-left text-left"
  }, [_c('a', {
    staticClass: "button-continue-shopping button primary is-outline",
    attrs: {
      "href": "https://shahrsofal.com/shop/"
    }
  }, [_vm._v("→ ادامه\n                  خرید")])]), _vm._v(" "), _c('button', {
    staticClass: "button primary mt-0 pull-left small",
    attrs: {
      "type": "submit",
      "name": "update_cart",
      "value": "بروزرسانی سبد خرید",
      "disabled": ""
    }
  }, [_vm._v("بروزرسانی سبد خرید\n                ")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "hidden",
      "id": "woocommerce-cart-nonce",
      "name": "woocommerce-cart-nonce",
      "value": "9ee78a22e9"
    }
  }), _c('input', {
    attrs: {
      "type": "hidden",
      "name": "_wp_http_referer",
      "value": "/cart/"
    }
  })])])])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "md": "3"
    }
  })], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart/index.vue?vue&type=template&id=a5ae6f26&scoped=true

// EXTERNAL MODULE: ./components/global/header/headerCartComponent.vue + 4 modules
var headerCartComponent = __webpack_require__(235);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/index.vue?vue&type=script&lang=js

/* harmony default export */ var cartvue_type_script_lang_js = ({
  components: {
    HeaderCartComponent: headerCartComponent["default"]
  },
  data() {
    return {
      headers: [{
        text: 'محصول',
        align: 'start',
        value: 'name'
      }, {
        text: 'قیمت',
        value: 'calories'
      }, {
        text: 'تعداد',
        value: 'fat'
      }, {
        text: 'جمع جزء',
        value: 'carbs'
      }]
      // desserts: [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: 1,
      //   },
      // ],
    };
  }
});
// CONCATENATED MODULE: ./pages/cart/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_cartvue_type_script_lang_js = (cartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/cart/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js,
  cartvue_type_template_id_a5ae6f26_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "a5ae6f26",
  "d77f839e"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderCartComponent: __webpack_require__(235).default})


/***/ })

};;
//# sourceMappingURL=index.js.map