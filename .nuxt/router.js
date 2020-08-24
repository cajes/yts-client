import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _363c2719 = () => interopDefault(import('../src/pages/browse-movies/index.vue' /* webpackChunkName: "pages/browse-movies/index" */))
const _2984c844 = () => interopDefault(import('../src/pages/trending-movies/index.vue' /* webpackChunkName: "pages/trending-movies/index" */))
const _0e03e6ee = () => interopDefault(import('../src/pages/movies/_id/_name.vue' /* webpackChunkName: "pages/movies/_id/_name" */))
const _db354ffc = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/browse-movies",
    component: _363c2719,
    name: "browse-movies"
  }, {
    path: "/trending-movies",
    component: _2984c844,
    name: "trending-movies"
  }, {
    path: "/movies/:id?/:name?",
    component: _0e03e6ee,
    name: "movies-id-name"
  }, {
    path: "/",
    component: _db354ffc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
