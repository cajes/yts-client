exports.ids = [3];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("85943c28", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_7ea92905_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_7ea92905_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_7ea92905_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_7ea92905_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_7ea92905_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_7ea92905_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "main#yts-client-movie-details[data-v-7ea92905]{margin:auto 5rem}main#yts-client-movie-details header#md-section-overview[data-v-7ea92905]{margin-top:1.6rem;display:flex}main#yts-client-movie-details header#md-section-overview section#thumbnail_download[data-v-7ea92905]{flex-basis:30%;padding-right:2rem;margin:0 2rem 0 0}main#yts-client-movie-details header#md-section-overview section#thumbnail_download figure.movie-cover[data-v-7ea92905]{margin:0;min-width:100%;border-color:#fff;border-style:solid;border-width:.526rem .3125rem;border-radius:.3125rem}main#yts-client-movie-details header#md-section-overview section#thumbnail_download figure.movie-cover img[data-v-7ea92905]{width:100%;min-width:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}main#yts-client-movie-details header#md-section-overview section#thumbnail_download a#download-modal[data-v-7ea92905]{text-align:center;display:block;color:#fff;background-color:#6ac045;margin-top:.725rem;border-radius:.3125rem;font-weight:700;padding-top:.3125rem;padding-bottom:.625rem}main#yts-client-movie-details header#md-section-overview section#thumbnail_download a#download-modal i[data-v-7ea92905]{color:#428e21;font-size:1.5rem;position:relative;top:5px}main#yts-client-movie-details header#md-section-overview section#description[data-v-7ea92905]{flex-basis:60%;margin:0 2rem}main#yts-client-movie-details header#md-section-overview section#description #movie_title[data-v-7ea92905]:first-child{font-size:1.1rem;text-shadow:0 .245rem .625rem #171717}main#yts-client-movie-details header#md-section-overview section#description .movie-year.movie-genre[data-v-7ea92905]{font-size:.8rem;text-shadow:0 .245rem .625rem #171717}main#yts-client-movie-details header#md-section-overview section#description .movie-year.movie-genre>*[data-v-7ea92905]{margin:0}main#yts-client-movie-details header#md-section-overview section#description #movie_data a[data-v-7ea92905]{color:#fff}main#yts-client-movie-details header#md-section-overview section#description #movie_data a[data-v-7ea92905]:hover{color:#d5d5d5}main#yts-client-movie-details header#md-section-overview section#description #movie_data .mo-available-res[data-v-7ea92905]{display:flex}main#yts-client-movie-details header#md-section-overview section#description #movie_data .mo-available-res>*[data-v-7ea92905]{padding:0}main#yts-client-movie-details header#md-section-overview section#description #movie_data .mo-available-res[data-v-7ea92905]>:first-child{flex:20%;align-self:center}main#yts-client-movie-details header#md-section-overview section#description #movie_data .mo-available-res[data-v-7ea92905]>:last-child{flex:80%;list-style-type:none;display:flex;flex-wrap:wrap;padding-left:.3125rem}main#yts-client-movie-details header#md-section-overview section#description #movie_data .mo-available-res>:last-child li[data-v-7ea92905]{flex-basis:16%;font-size:.9rem;background-color:rgba(37,37,40,.19608);padding:.425rem;margin:.2rem;border:.0625rem solid #48494b;border-radius:.3125rem}main#yts-client-movie-details header#md-section-overview section#description .mo-download-sub[data-v-7ea92905]{font-size:.9rem;color:#fff;background-color:rgba(37,37,40,.19608);padding:.425rem;border:.0625rem solid #48494b;border-radius:.3125rem}main#yts-client-movie-details header#md-section-overview section#description .mo-download-sub i[data-v-7ea92905]{position:relative;top:7px;color:#428e21}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings[data-v-7ea92905]{margin-top:1.5rem}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings ul[data-v-7ea92905]{list-style-type:none;padding:0}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings ul li[data-v-7ea92905]{display:flex;font-size:1.1rem;font-weight:700}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings ul li span[data-v-7ea92905]{color:#6ac045}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings ul li>*[data-v-7ea92905]{flex-basis:20%;align-self:center}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings ul li:last-child img[data-v-7ea92905]{display:block;padding:0;position:relative;top:3.5px}main#yts-client-movie-details header#md-section-overview section#description article#movie_ratings ul li:last-child span[data-v-7ea92905]{position:relative;top:5px}main#yts-client-movie-details section.md-section[data-v-7ea92905]{color:#919191}main#yts-client-movie-details section.md-section>*[data-v-7ea92905]{margin:3rem auto}main#yts-client-movie-details section.md-section div.movie-fancy-description section[data-v-7ea92905]{display:flex}main#yts-client-movie-details section.md-section div.movie-fancy-description section article#synopsis[data-v-7ea92905]{flex-basis:65%}main#yts-client-movie-details section.md-section div.movie-fancy-description section article#synopsis h3[data-v-7ea92905]{color:#fff}main#yts-client-movie-details section.md-section div.movie-fancy-description section aside#director_cast[data-v-7ea92905]{flex-basis:35%}main#yts-client-movie-details section.md-section div.movie-fancy-description a#parental-guide[data-v-7ea92905]{display:block;margin-top:1rem;font-weight:700}main#yts-client-movie-details section.md-section article#uploader-credits blockquote[data-v-7ea92905]{margin:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/movies/_id/_name.vue?vue&type=template&id=7ea92905&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.movie)?_c('main',{staticClass:"movie-details-content",class:_vm.$route.params.slug,attrs:{"id":"yts-client-movie-details"}},[_vm._ssrNode("<header id=\"md-section-overview\" class=\"md-section\" data-v-7ea92905><section id=\"thumbnail_download\" class=\"overview-thumbnail overview-download\" data-v-7ea92905><figure class=\"movie-cover\" data-v-7ea92905><img"+(_vm._ssrAttr("src",_vm.movie.large_cover_image))+(_vm._ssrAttr("alt",_vm.movie.title_long))+(_vm._ssrAttr("srcset",_vm.cover.srcset(_vm.movie)))+" sizes=\"(max-width: 600px) 480px 800px 1280px\" data-v-7ea92905></figure> <a href=\"#\" id=\"download-modal\" data-v-7ea92905><i class=\"material-icons download-icon\" data-v-7ea92905>get_app</i> Download\n      </a></section> <section id=\"description\" class=\"overview-details overview-simple-desc\" data-v-7ea92905><hgroup class=\"overview-headings-wrapper mo-heading\" data-v-7ea92905><div id=\"movie_title\" data-v-7ea92905><h1 data-v-7ea92905>"+_vm._ssrEscape(_vm._s(_vm.movie.title))+"</h1></div> <div id=\"movie_simple_info\" class=\"movie-year movie-genre\" data-v-7ea92905><h2 data-v-7ea92905>"+_vm._ssrEscape(_vm._s(_vm.movie.year))+"</h2> <h2 data-v-7ea92905>"+_vm._ssrEscape(_vm._s(_vm.movie.genres && _vm.movie.genres.join(' / ')))+"</h2></div></hgroup> <article id=\"movie_data\" class=\"mo-data\" data-v-7ea92905><div class=\"mo-available-res\" data-v-7ea92905><em class=\"mo-available-in\" data-v-7ea92905>Available in:</em> <ul class=\"mo-download-links\" data-v-7ea92905>"+(_vm._ssrList((_vm.torrents),function(torrent){return ("<li class=\"mo-download-link\" data-v-7ea92905><a"+(_vm._ssrAttr("id",_vm.movie.slug.concat('-').concat(torrent.quality)))+(_vm._ssrAttr("href",torrent.url))+" data-v-7ea92905>"+_vm._ssrEscape("\n                "+_vm._s(torrent.quality)+"."+_vm._s(torrent.type.toUpperCase())+"\n              ")+"</a></li>")}))+"</ul></div> <a"+(_vm._ssrAttr("href",_vm.yifySubtitles))+" class=\"mo-download-sub\" data-v-7ea92905><i class=\"material-icons download-icon\" data-v-7ea92905>get_app</i> Download Subtitles\n        </a></article> <article id=\"movie_ratings\" class=\"mo-ratings\" data-v-7ea92905><ul id=\"mo-ratings\" data-v-7ea92905>"+((_vm.movie.like_count)?("<li data-v-7ea92905><div class=\"movie-likes\" data-v-7ea92905><span class=\"material-icons\" data-v-7ea92905>favorite</span></div> <data id=\"movie-likes\""+(_vm._ssrAttr("value",_vm.movie.like_count))+" data-v-7ea92905>"+_vm._ssrEscape("\n              "+_vm._s(_vm.movie.like_count)+"\n            ")+"</data></li>"):"<!---->")+" "+((_vm.movie.rating)?("<li data-v-7ea92905><div class=\"movie-likes\" data-v-7ea92905><img src=\"https://yts.mx/assets/images/website/logo-imdb.svg\" data-v-7ea92905></div> <data id=\"movie-likes\""+(_vm._ssrAttr("value",_vm.movie.rating))+" data-v-7ea92905>"+_vm._ssrEscape("\n              "+_vm._s(_vm.movie.rating)+" ")+"<span class=\"material-icons\" data-v-7ea92905>grade</span></data></li>"):"<!---->")+"</ul></article></section> <aside id=\"similar_movies\" class=\"overview-similar-movies overview-suggested-movies\" data-v-7ea92905></aside></header> <section id=\"md-section-details\" class=\"md-section\" data-v-7ea92905><article class=\"movie-details-trailer movie-details-screenshot\" data-v-7ea92905>"+((_vm.movie.yt_trailer_code.length > 0)?("<iframe"+(_vm._ssrAttr("src",("https://www.youtube.com/embed/" + (_vm.movie.yt_trailer_code))))+" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\" data-v-7ea92905></iframe>"):"<!---->")+"</article> <div class=\"movie-details movie-fancy-description\" data-v-7ea92905><section class=\"movie-details-synopsis movie-details-director movie-details-cast\" data-v-7ea92905><article id=\"synopsis\" class=\"details-synopsis\" data-v-7ea92905><h3 class=\"movie-title-synopsis\" data-v-7ea92905>Synopsis</h3> <p data-v-7ea92905>"+_vm._ssrEscape(_vm._s(_vm.movie.description_intro))+"</p></article> <aside id=\"director_cast\" class=\"details-director details-cast\" data-v-7ea92905></aside></section> <a href=\"#\" id=\"parental-guide\" data-v-7ea92905>Parental Guide</a></div> <article id=\"uploader-credits\" class=\"small-desc movie-details-uploader\" data-v-7ea92905><i data-v-7ea92905><blockquote data-v-7ea92905>\n          Uploaded by: <cite data-v-7ea92905><strong data-v-7ea92905>Someone</strong></cite></blockquote> <time"+(_vm._ssrAttr("datetime",_vm.movie.date_uploaded))+" data-v-7ea92905>"+_vm._ssrEscape(_vm._s(_vm.formatted_time))+"</time></i></article> <article id=\"tech_specification\" class=\"movie-details-tech-specs\" data-v-7ea92905></article></section> <footer id=\"md-section-reviews\" class=\"md-section\" data-v-7ea92905><section id=\"movie-send-feedback\" class=\"movie-details-comments\" data-v-7ea92905></section> <section id=\"movie-feedbacks\" class=\"movie-details-reviews\" data-v-7ea92905></section></footer>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/movies/_id/_name.vue?vue&type=template&id=7ea92905&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/movies/_id/_name.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    const {
      route
    } = context;
    const api = context.$config.YTS_API; // const name = route.params.name.replace(/([a-z]+\-)/g, $1 => {
    //   return $1.replace(/\-/, ' ').replace(/^([a-z])/, $1 => $1.toUpperCase())
    // }).replace(/\-/, ' ')

    const id = route.params.id;
    let res = await context.$axios.get(api.replace(/endpoint/, `movie_details.json?movie_id=${id}`));
    let data = {};
    data.movie = res.data.data.movie;
    return data;
  }

};
/* harmony default export */ var _namevue_type_script_lang_js_ = ({ ...nuxtFunctions,

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
    download_dialog() {
      alert("Download!");
    }

  },
  computed: {
    torrents: vm => vm.movie.torrents,
    yifySubtitles: vm => `https://yifysubtitles.org/movie-imdb/${vm.movie.imdb_code}`,
    formatted_time: vm => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const date = new Date(vm.movie.date_uploaded_unix * 1e3);

      const time = () => {
        let h = date.getHours();
        let m = date.getMinutes(); // convert it to 12-hour format

        const p = h < 12 ? 'AM' : 'PM';
        h = h > 12 ? h - 12 : h;
        h = h == 0 ? 12 : h;
        h = h < 10 ? '0'.concat(h) : h;
        m = m < 10 ? '0'.concat(m) : m;
        return `${h}:${m} ${p}`;
      };

      return `month date, year at time`.replace(/month/, months[date.getMonth()]).replace(/date/, date.getDate()).replace(/year/, date.getFullYear()).replace(/time/, time());
    }
  },
  watch: {},

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/movies/_id/_name.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_namevue_type_script_lang_js_ = (_namevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/movies/_id/_name.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ea92905",
  "3b22d778"
  
)

/* harmony default export */ var _name = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_name.js.map