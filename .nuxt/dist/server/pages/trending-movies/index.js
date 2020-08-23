exports.ids = [4];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7dc46934", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearchForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "form#yts-client-search-form{background:#171717}form#yts-client-search-form .form-wrapper{padding:3rem 10rem;font-size:1.2rem;color:#5a5a5a}form#yts-client-search-form .form-wrapper>label{display:block;font-size:1.5rem;font-weight:700}form#yts-client-search-form .form-wrapper [role=group]{border:0;padding:0}form#yts-client-search-form .form-wrapper [role=group].search_query_main{display:flex}form#yts-client-search-form .form-wrapper [role=group].search_query_main [type=text]{flex-basis:85%}form#yts-client-search-form .form-wrapper [role=group].search_query_main [type=submit]{flex-basis:15%}form#yts-client-search-form .form-wrapper [role=group].search_query_options{display:flex}form#yts-client-search-form .form-wrapper [role=group].search_query_options .field-wrapper{float:left;flex:1;margin-right:.625rem}form#yts-client-search-form .form-wrapper [role=group].search_query_options .field-wrapper label{font-size:.826rem;font-weight:700}form#yts-client-search-form .form-wrapper [role=group].search_query_options .field-wrapper>*{display:block}form#yts-client-search-form .form-wrapper input[type=text],form#yts-client-search-form .form-wrapper select{background:#282828;color:#7493a2;border:none;padding:.625rem;border-radius:.526rem;margin-top:.125rem}form#yts-client-search-form .form-wrapper select{width:100%;padding:.526rem;-moz-appearance:none;-webkit-appearance:none}form#yts-client-search-form .form-wrapper select::-ms-expand{display:none}form#yts-client-search-form .form-wrapper [type=submit]{background:#6ac045;color:#fff;font-weight:700;margin:0 .75rem;border-radius:.526rem;border:none}form#yts-client-search-form .form-wrapper>*{padding-bottom:1rem!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6e400a9f", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppSearchForm.vue?vue&type=template&id=823845ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"id":"yts-client-search-form","autocomplete":"off"},on:{"submit":function($event){$event.preventDefault();return _vm.search($event)}}},[_vm._ssrNode("<div class=\"form-wrapper\">","</div>",[_vm._ssrNode("<label for=\"search_keyword\">\n      Search Term:\n    </label> <div role=\"group\" class=\"search_query_main\"><input type=\"text\" id=\"search_keyword\" name=\"keyword\" placeholder=\"Search movies\""+(_vm._ssrAttr("value",(_vm.query_term)))+"> <input type=\"submit\" value=\"Search\"></div> "),_vm._ssrNode("<div role=\"group\" class=\"search_query_options\">","</div>",[_vm._ssrNode("<div id=\"movie_quality\" class=\"field-wrapper\">","</div>",[_vm._ssrNode("<label for=\"movie_quality_select\">Quality:</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query_options.quality),expression:"query_options.quality"}],attrs:{"id":"movie_quality_select","name":"quality"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query_options, "quality", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"all"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"720p"}},[_vm._v("720p")]),_vm._v(" "),_c('option',{attrs:{"value":"1080p"}},[_vm._v("1080p")]),_vm._v(" "),_c('option',{attrs:{"value":"2160p"}},[_vm._v("2160p")]),_vm._v(" "),_c('option',{attrs:{"value":"3D"}},[_vm._v("3D")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"movie_genre\" class=\"field-wrapper\">","</div>",[_vm._ssrNode("<label for=\"movie_genre_select\">Genre:</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query_options.genre),expression:"query_options.genre"}],attrs:{"id":"movie_genre_select","name":"genre"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query_options, "genre", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"all"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"action"}},[_vm._v("Action")]),_vm._v(" "),_c('option',{attrs:{"value":"adventure"}},[_vm._v("Adventure")]),_vm._v(" "),_c('option',{attrs:{"value":"animation"}},[_vm._v("Animation")]),_vm._v(" "),_c('option',{attrs:{"value":"biography"}},[_vm._v("Biography")]),_vm._v(" "),_c('option',{attrs:{"value":"comedy"}},[_vm._v("Comedy")]),_vm._v(" "),_c('option',{attrs:{"value":"crime"}},[_vm._v("Crime")]),_vm._v(" "),_c('option',{attrs:{"value":"documentary"}},[_vm._v("Documentary")]),_vm._v(" "),_c('option',{attrs:{"value":"drama"}},[_vm._v("Drama")]),_vm._v(" "),_c('option',{attrs:{"value":"family"}},[_vm._v("Family")]),_vm._v(" "),_c('option',{attrs:{"value":"fantasy"}},[_vm._v("Fantasy")]),_vm._v(" "),_c('option',{attrs:{"value":"film-noir"}},[_vm._v("Film-Noir")]),_vm._v(" "),_c('option',{attrs:{"value":"game-show"}},[_vm._v("Game-Show")]),_vm._v(" "),_c('option',{attrs:{"value":"history"}},[_vm._v("History")]),_vm._v(" "),_c('option',{attrs:{"value":"horror"}},[_vm._v("Horror")]),_vm._v(" "),_c('option',{attrs:{"value":"music"}},[_vm._v("Music")]),_vm._v(" "),_c('option',{attrs:{"value":"musical"}},[_vm._v("Musical")]),_vm._v(" "),_c('option',{attrs:{"value":"mystery"}},[_vm._v("Mystery")]),_vm._v(" "),_c('option',{attrs:{"value":"news"}},[_vm._v("News")]),_vm._v(" "),_c('option',{attrs:{"value":"reality-tv"}},[_vm._v("Reality-TV")]),_vm._v(" "),_c('option',{attrs:{"value":"romance"}},[_vm._v("Romance")]),_vm._v(" "),_c('option',{attrs:{"value":"sci-fi"}},[_vm._v("Sci-Fi")]),_vm._v(" "),_c('option',{attrs:{"value":"sport"}},[_vm._v("Sport")]),_vm._v(" "),_c('option',{attrs:{"value":"talk-show"}},[_vm._v("Talk-Show")]),_vm._v(" "),_c('option',{attrs:{"value":"thriller"}},[_vm._v("Thriller")]),_vm._v(" "),_c('option',{attrs:{"value":"war"}},[_vm._v("War")]),_vm._v(" "),_c('option',{attrs:{"value":"western"}},[_vm._v("Western")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"movie_rating\" class=\"field-wrapper\">","</div>",[_vm._ssrNode("<label for=\"movie_rating_select\">Rating:</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query_options.rating),expression:"query_options.rating"}],attrs:{"id":"movie_rating_select","name":"rating"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query_options, "rating", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"9"}},[_vm._v("9+")]),_vm._v(" "),_c('option',{attrs:{"value":"8"}},[_vm._v("8+")]),_vm._v(" "),_c('option',{attrs:{"value":"7"}},[_vm._v("7+")]),_vm._v(" "),_c('option',{attrs:{"value":"6"}},[_vm._v("6+")]),_vm._v(" "),_c('option',{attrs:{"value":"5"}},[_vm._v("5+")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("4+")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("3+")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("2+")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("1+")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"movie_year\" class=\"field-wrapper\">","</div>",[_vm._ssrNode("<label for=\"movie_year_select\">Year:</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query_options.year),expression:"query_options.year"}],attrs:{"id":"movie_year_select","name":"year"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query_options, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"2020"}},[_vm._v("2020")]),_vm._v(" "),_c('option',{attrs:{"value":"2019"}},[_vm._v("2019")]),_vm._v(" "),_c('option',{attrs:{"value":"2015-2018"}},[_vm._v("2015-2018")]),_vm._v(" "),_c('option',{attrs:{"value":"2010-2014"}},[_vm._v("2010-2014")]),_vm._v(" "),_c('option',{attrs:{"value":"2000-2009"}},[_vm._v("2000-2009")]),_vm._v(" "),_c('option',{attrs:{"value":"1990-1999"}},[_vm._v("1990-1999")]),_vm._v(" "),_c('option',{attrs:{"value":"1980-1989"}},[_vm._v("1980-1989")]),_vm._v(" "),_c('option',{attrs:{"value":"1970-1979"}},[_vm._v("1970-1979")]),_vm._v(" "),_c('option',{attrs:{"value":"1900-1969"}},[_vm._v("1900-1969")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"movie_language\" class=\"field-wrapper\">","</div>",[_vm._ssrNode("<label for=\"movie_lang_select\">Language:</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query_options.language),expression:"query_options.language"}],attrs:{"id":"movie_lang_select","name":"language"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query_options, "language", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"all","selected":"selected"}},[_vm._v("All")]),_vm._v(" "),_c('option',{attrs:{"value":"en"}},[_vm._v("English")]),_vm._v(" "),_c('option',{attrs:{"value":"foreign"}},[_vm._v("Foreign")]),_vm._v(" "),_c('option',{attrs:{"value":"ja"}},[_vm._v("Japanese")]),_vm._v(" "),_c('option',{attrs:{"value":"fr"}},[_vm._v("French")]),_vm._v(" "),_c('option',{attrs:{"value":"de"}},[_vm._v("German")]),_vm._v(" "),_c('option',{attrs:{"value":"zh"}},[_vm._v("Chinese")]),_vm._v(" "),_c('option',{attrs:{"value":"it"}},[_vm._v("Italian")]),_vm._v(" "),_c('option',{attrs:{"value":"es"}},[_vm._v("Spanish")]),_vm._v(" "),_c('option',{attrs:{"value":"cn"}},[_vm._v("Cantonese")]),_vm._v(" "),_c('option',{attrs:{"value":"ko"}},[_vm._v("Korean")]),_vm._v(" "),_c('option',{attrs:{"value":"hi"}},[_vm._v("Hindi")]),_vm._v(" "),_c('option',{attrs:{"value":"sv"}},[_vm._v("Swedish")]),_vm._v(" "),_c('option',{attrs:{"value":"ru"}},[_vm._v("Russian")]),_vm._v(" "),_c('option',{attrs:{"value":"pl"}},[_vm._v("Polish")]),_vm._v(" "),_c('option',{attrs:{"value":"pt"}},[_vm._v("Portuguese")]),_vm._v(" "),_c('option',{attrs:{"value":"da"}},[_vm._v("Danish")]),_vm._v(" "),_c('option',{attrs:{"value":"no"}},[_vm._v("Norwegian")]),_vm._v(" "),_c('option',{attrs:{"value":"nl"}},[_vm._v("Dutch")]),_vm._v(" "),_c('option',{attrs:{"value":"cs"}},[_vm._v("Czech")]),_vm._v(" "),_c('option',{attrs:{"value":"fi"}},[_vm._v("Finnish")]),_vm._v(" "),_c('option',{attrs:{"value":"th"}},[_vm._v("Thai")]),_vm._v(" "),_c('option',{attrs:{"value":"tr"}},[_vm._v("Turkish")]),_vm._v(" "),_c('option',{attrs:{"value":"fa"}},[_vm._v("Persian")]),_vm._v(" "),_c('option',{attrs:{"value":"el"}},[_vm._v("Greek")]),_vm._v(" "),_c('option',{attrs:{"value":"id"}},[_vm._v("Indonesian")]),_vm._v(" "),_c('option',{attrs:{"value":"ar"}},[_vm._v("Arabic")]),_vm._v(" "),_c('option',{attrs:{"value":"he"}},[_vm._v("Hebrew")]),_vm._v(" "),_c('option',{attrs:{"value":"hu"}},[_vm._v("Hungarian")]),_vm._v(" "),_c('option',{attrs:{"value":"tl"}},[_vm._v("Tagalog")]),_vm._v(" "),_c('option',{attrs:{"value":"te"}},[_vm._v("Telugu")]),_vm._v(" "),_c('option',{attrs:{"value":"ta"}},[_vm._v("Tamil")]),_vm._v(" "),_c('option',{attrs:{"value":"ro"}},[_vm._v("Romanian")]),_vm._v(" "),_c('option',{attrs:{"value":"is"}},[_vm._v("Icelandic")]),_vm._v(" "),_c('option',{attrs:{"value":"sr"}},[_vm._v("Serbian")]),_vm._v(" "),_c('option',{attrs:{"value":"bn"}},[_vm._v("Bangla")]),_vm._v(" "),_c('option',{attrs:{"value":"et"}},[_vm._v("Estonian")]),_vm._v(" "),_c('option',{attrs:{"value":"ms"}},[_vm._v("Malay")]),_vm._v(" "),_c('option',{attrs:{"value":"ur"}},[_vm._v("Urdu")]),_vm._v(" "),_c('option',{attrs:{"value":"vi"}},[_vm._v("Vietnamese")]),_vm._v(" "),_c('option',{attrs:{"value":"ca"}},[_vm._v("Catalan")]),_vm._v(" "),_c('option',{attrs:{"value":"xx"}},[_vm._v("xx")]),_vm._v(" "),_c('option',{attrs:{"value":"eu"}},[_vm._v("Basque")]),_vm._v(" "),_c('option',{attrs:{"value":"uk"}},[_vm._v("Ukrainian")]),_vm._v(" "),_c('option',{attrs:{"value":"af"}},[_vm._v("Afrikaans")]),_vm._v(" "),_c('option',{attrs:{"value":"la"}},[_vm._v("Latin")]),_vm._v(" "),_c('option',{attrs:{"value":"yi"}},[_vm._v("Yiddish")]),_vm._v(" "),_c('option',{attrs:{"value":"aa"}},[_vm._v("Afar")]),_vm._v(" "),_c('option',{attrs:{"value":"mi"}},[_vm._v("Maori")]),_vm._v(" "),_c('option',{attrs:{"value":"kn"}},[_vm._v("Kannada")]),_vm._v(" "),_c('option',{attrs:{"value":"ka"}},[_vm._v("Georgian")]),_vm._v(" "),_c('option',{attrs:{"value":"ab"}},[_vm._v("Abkhazian")]),_vm._v(" "),_c('option',{attrs:{"value":"ml"}},[_vm._v("Malayalam")]),_vm._v(" "),_c('option',{attrs:{"value":"sw"}},[_vm._v("Swahili")]),_vm._v(" "),_c('option',{attrs:{"value":"sk"}},[_vm._v("Slovak")]),_vm._v(" "),_c('option',{attrs:{"value":"os"}},[_vm._v("Ossetic")]),_vm._v(" "),_c('option',{attrs:{"value":"nb"}},[_vm._v("Norwegian Bokmål")]),_vm._v(" "),_c('option',{attrs:{"value":"mr"}},[_vm._v("Marathi")]),_vm._v(" "),_c('option',{attrs:{"value":"mn"}},[_vm._v("Mongolian")]),_vm._v(" "),_c('option',{attrs:{"value":"mk"}},[_vm._v("Macedonian")]),_vm._v(" "),_c('option',{attrs:{"value":"lv"}},[_vm._v("Latvian")]),_vm._v(" "),_c('option',{attrs:{"value":"km"}},[_vm._v("Khmer")]),_vm._v(" "),_c('option',{attrs:{"value":"ga"}},[_vm._v("Irish")]),_vm._v(" "),_c('option',{attrs:{"value":"bs"}},[_vm._v("Bosnian")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"movie_orderby\" class=\"field-wrapper\">","</div>",[_vm._ssrNode("<label for=\"movie_orderby_select\">Order By:</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.query_options.order_by),expression:"query_options.order_by"}],attrs:{"id":"movie_orderby_select","name":"orderby"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.query_options, "order_by", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"latest"}},[_vm._v("Latest")]),_vm._v(" "),_c('option',{attrs:{"value":"oldest"}},[_vm._v("Oldest")]),_vm._v(" "),_c('option',{attrs:{"value":"featured"}},[_vm._v("Featured")]),_vm._v(" "),_c('option',{attrs:{"value":"seeds"}},[_vm._v("Seeds")]),_vm._v(" "),_c('option',{attrs:{"value":"peers"}},[_vm._v("Peers")]),_vm._v(" "),_c('option',{attrs:{"value":"year"}},[_vm._v("Year")]),_vm._v(" "),_c('option',{attrs:{"value":"rating"}},[_vm._v("Rating")]),_vm._v(" "),_c('option',{attrs:{"value":"likes"}},[_vm._v("Likes")]),_vm._v(" "),_c('option',{attrs:{"value":"alphabetical"}},[_vm._v("Alphabetical")]),_vm._v(" "),_c('option',{attrs:{"value":"downloads"}},[_vm._v("Downloads")])])],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppSearchForm.vue?vue&type=template&id=823845ea&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppSearchForm.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppSearchFormvue_type_script_lang_js_ = ({
  name: 'AppSearchForm',

  data() {
    return {
      query_term: '',
      query_options: {
        quality: 'all' || false,
        genre: 'all',
        minimum_rating: 0,
        year: 0,
        rating: 0,
        language: 'all',
        order_by: 'latest',
        with_rt_ratings: true
      }
    };
  },

  methods: {
    async search() {
      const api = this.$config.YTS_API;
      const query_term = this.query_term;
      const query_opt = this.query_options;
      const vm = this;
      const param = new this.$search_param({
        query_term,
        quality: query_opt.quality,
        genre: query_opt.genre,
        minimum_rating: query_opt.rating
      });
      const query_string = param.gen_params('list_movies.json');
      const yts = await external_axios_default.a.get(api.replace(/endpoint/, query_string));
      this.$emit('search-result', {
        result: yts.data.data,
        queryString: query_string
      });
    }

  },
  computed: {},
  watch: {}
});
// CONCATENATED MODULE: ./src/components/AppSearchForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppSearchFormvue_type_script_lang_js_ = (AppSearchFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/AppSearchForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppSearchFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "422d7ab8"
  
)

/* harmony default export */ var AppSearchForm = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "main#yts-client-trending-movies h3{text-align:center;margin-bottom:0}main#yts-client-trending-movies section#search_result ul{display:flex;list-style-type:none;flex-wrap:wrap;max-width:100%;padding:0;margin:auto 4rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card{flex-basis:20%;padding:1.5rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content{margin:0 0 -1rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content div{border:.3125rem solid #fff;border-radius:.375rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content img{max-width:100%;vertical-align:middle;-o-object-fit:contain;object-fit:contain}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content p{margin:0;padding:.125rem .125rem 0 0;font-size:.875rem;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:10.5rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content time{font-size:.825rem;color:#839191}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/trending-movies/index.vue?vue&type=template&id=11bf5522&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{attrs:{"id":"yts-client-trending-movies"}},[_vm._ssrNode("<h3><a href=\"#\">24h YIFY Trending Movies</a></h3> "),_vm._ssrNode("<section id=\"search_result\" class=\"browse-movies movies\">","</section>",[_vm._ssrNode("<ul id=\"movie-list-result\">","</ul>",_vm._l((_vm.yts.data.movies),function(movie){return _vm._ssrNode("<li class=\"movie-result-list movie-cover-card\">","</li>",[_c('nuxt-link',{staticClass:"movie-cover-wrapper",attrs:{"to":_vm.create_link(movie),"title":movie.title}},[_c('figure',{staticClass:"movie-cover-content"},[_c('div',{staticClass:"wrapper"},[_c('img',{attrs:{"alt":movie.title_long,"srcset":_vm.cover.srcset(movie),"sizes":"(max-width: 600px) 480px 800px 1280px","src":movie.medium_cover_image},on:{"error":function($event){return _vm.cover.rerender(movie, $event)}}})]),_vm._v(" "),_c('figcaption',[_c('p',[_vm._v(_vm._s(movie.title))]),_vm._v(" "),_c('time',{attrs:{"datetime":movie.year}},[_vm._v(_vm._s(movie.year))])])])])],1)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/trending-movies/index.vue?vue&type=template&id=11bf5522&

// EXTERNAL MODULE: ./src/components/AppSearchForm.vue + 4 modules
var AppSearchForm = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/trending-movies/index.vue?vue&type=script&lang=js&
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

const nuxtFunctions = {
  async asyncData(context) {
    const api = context.$config.YTS_API;
    const yts = await context.$axios.get(api.replace(/endpoint/, "list_movies.json?sort_by=download_count"));
    return {
      yts: yts.data
    };
  }

};
/* harmony default export */ var trending_moviesvue_type_script_lang_js_ = ({ ...nuxtFunctions,
  components: {
    AppSearchForm: AppSearchForm["a" /* default */]
  },

  data() {
    return {
      cover: {
        srcset(movie) {
          const tstr = "small 480w medium 800w large 1280w";
          return tstr.replace(/small/g, movie.small_cover_image).replace(/medium/g, movie.medium_cover_image).replace(/large/g, movie.large_cover_image);
        },

        rerender(movie, event) {
          const img = event.target;
          setTimeout(() => {
            img.src = movie.medium_cover_image;
          }, 1000);
        }

      }
    };
  },

  methods: {
    create_link(movie) {
      return {
        name: 'movies-id-name',
        params: {
          id: movie.id,
          name: movie.slug
        }
      };
    }

  },
  computed: {},
  watch: {}
});
// CONCATENATED MODULE: ./src/pages/trending-movies/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_trending_moviesvue_type_script_lang_js_ = (trending_moviesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/trending-movies/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_trending_moviesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ab456362"
  
)

/* harmony default export */ var trending_movies = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map