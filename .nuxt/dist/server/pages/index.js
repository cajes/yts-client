exports.ids = [2];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3798192c", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "main#yts-client-home .heading-section{text-align:center;margin:auto 10rem;font-size:.925rem}main#yts-client-home .heading-section .heading-content.header{font-size:2.5rem;margin:4rem 1rem 2rem}main#yts-client-home .heading-section .heading-content.welcome{width:680px;margin:auto;color:#c7cccc}main#yts-client-home .heading-section .heading-content.official-note{color:#c7cccc}main#yts-client-home .catalog-section{padding:1rem 4rem}main#yts-client-home .catalog-section .catalog-section-title{font-size:1.2rem;letter-spacing:-.05rem;font-weight:700;margin-top:1rem}main#yts-client-home .catalog-section#popular_downloads_section{margin-top:1.5rem!important}main#yts-client-home .catalog-section#popular_downloads_section .catalog-section-title{font-size:1.3rem;text-align:center;border-bottom:1px solid rgba(80,77,75,.32549);padding-bottom:1.2rem;margin-bottom:1rem}main#yts-client-home .catalog-section#popular_downloads_section .catalog-section-title span{width:24px;position:relative;top:5px;color:#6ac045}main#yts-client-home .catalog-section ul{display:flex;list-style-type:none;flex-wrap:wrap;max-width:100%;padding:0;text-align:center}main#yts-client-home .catalog-section ul li{width:25%;padding:1.5rem}main#yts-client-home .catalog-section ul li .movie-cover-wrapper figure.movie-cover-content{margin:0 0 -1rem}main#yts-client-home .catalog-section ul li .movie-cover-wrapper figure.movie-cover-content div{border:.3125rem solid #fff;border-radius:.375rem}main#yts-client-home .catalog-section ul li .movie-cover-wrapper figure.movie-cover-content img{max-width:100%;width:100%;vertical-align:middle;-o-object-fit:contain;object-fit:contain}main#yts-client-home .catalog-section ul li .movie-cover-wrapper figure.movie-cover-content figcaption{text-align:left;text-align:initial}main#yts-client-home .catalog-section ul li .movie-cover-wrapper figure.movie-cover-content p{margin:0;padding:.125rem .125rem 0 0;font-size:.875rem;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:10.5rem}main#yts-client-home .catalog-section ul li .movie-cover-wrapper figure.movie-cover-content time{font-size:.825rem;color:#839191}main#yts-client-home .catalog-section:nth-child(odd){background:#171717}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=e0d100ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{attrs:{"id":"yts-client-home"}},[_vm._ssrNode("<section id=\"yts-client-heading\" class=\"heading-section\"><h1 class=\"heading-content header\">Download YTS YIFY movies: HD smallest size</h1> <p class=\"heading-content welcome\">\n      Welcome to a YTS clone website. Here you can browse \n      and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D \n      quality, all at the smallest file size. YTS Movies Torrents.\n    </p> <p class=\"heading-content official-note\">\n      IMPORTANT - This is a YTS.MX clone, you can visit their official website <a href=\"https://yts.mx\">here</a>, \n      or you can visit their official blog which list all of the official YTS YIFY domains. NOTE\n      <a href=\"https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies\">\n        YTS.MX is the only new official domain for YIFY Movies\n      </a></p></section> "),_vm._ssrNode("<section id=\"popular_downloads_section\" class=\"catalog-section\">","</section>",[_vm._ssrNode("<h3 class=\"catalog-section-title\"><span class=\"material-icons\">star_rate</span> Popular Downloads\n    </h3> "),_vm._ssrNode("<ul id=\"popular-movies-catalog\">","</ul>",_vm._l((_vm.popular),function(movie){return _vm._ssrNode("<li"+(_vm._ssrAttr("id",movie.slug))+">","</li>",[_c('nuxt-link',{staticClass:"movie-cover-wrapper",attrs:{"to":_vm.create_link(movie),"title":movie.title}},[_c('figure',{staticClass:"movie-cover-content"},[_c('div',{staticClass:"wrapper"},[_c('img',{attrs:{"alt":movie.title_long,"srcset":_vm.cover.srcset(movie),"sizes":"(max-width: 600px) 480px 800px 1280px","src":movie.medium_cover_image},on:{"error":function($event){return _vm.cover.rerender(movie, $event)}}})]),_vm._v(" "),_c('figcaption',[_c('p',[_vm._v(_vm._s(movie.title))]),_vm._v(" "),_c('time',{attrs:{"datetime":movie.year}},[_vm._v(_vm._s(movie.year))])])])])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"latest_yify_torrents\" class=\"catalog-section\">","</section>",[_vm._ssrNode("<h4 class=\"catalog-section-title\">Latest YIFY Movies Torrents</h4> "),_vm._ssrNode("<ul id=\"latest-movies-catalog\">","</ul>",_vm._l((_vm.latest),function(movie){return _vm._ssrNode("<li"+(_vm._ssrAttr("id",movie.slug))+">","</li>",[_c('nuxt-link',{staticClass:"movie-cover-wrapper",attrs:{"to":_vm.create_link(movie),"title":movie.title}},[_c('figure',{staticClass:"movie-cover-content"},[_c('div',{staticClass:"wrapper"},[_c('img',{attrs:{"alt":movie.title_long,"srcset":_vm.cover.srcset(movie),"sizes":"(max-width: 600px) 480px 800px 1280px","src":movie.medium_cover_image},on:{"error":function($event){return _vm.cover.rerender(movie, $event)}}})]),_vm._v(" "),_c('figcaption',[_c('p',[_vm._v(_vm._s(movie.title))]),_vm._v(" "),_c('time',{attrs:{"datetime":movie.year}},[_vm._v(_vm._s(movie.year))])])])])],1)}),0)],2),_vm._ssrNode(" "+((false)?(undefined):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=e0d100ac&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js&
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

const nuxtOptions = {
  async asyncData(context) {
    const api = context.$config.YTS_API;
    const popular_query = new context.$search_param({
      page: 1,
      limit: 4,
      sort_by: 'download_count'
    }).gen_params('list_movies.json');
    const latest_query = new context.$search_param({
      page: 1,
      limit: 8,
      sort_by: 'year',
      order_by: 'desc'
    }).gen_params('list_movies.json');
    const popular = await context.$axios.get(api.replace(/endpoint/, popular_query));
    const latest = await context.$axios.get(api.replace(/endpoint/, latest_query));
    return {
      popular: popular.data.data.movies,
      latest: latest.data.data.movies
    };
  }

};
/* harmony default export */ var pagesvue_type_script_lang_js_ = ({ ...nuxtOptions,

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

  computed: {},
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
  watch: {}
});
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "431be71a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map