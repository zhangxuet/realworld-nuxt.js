exports.ids = [6];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=template&id=d8afd370&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"select\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.article.tagList)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> <button class=\"btn btn-lg pull-xs-right btn-primary\">\n                Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=template&id=d8afd370&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/edit.js

const createArticle = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};
const updateArticle = slug => {
  return Object(request["b" /* request */])({
    method: 'PUT',
    url: `/api/articles/${slug}`
  });
};
const deleteArticle = slug => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'Edit',

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: ''
      }
    };
  },

  methods: {
    async onSubmit() {
      await createArticle({
        article: this.article
      });
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/edit/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c9432b8"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map