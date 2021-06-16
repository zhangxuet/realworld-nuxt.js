import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e2b42224 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _6823ecba = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _9be919b6 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _36220e65 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1f5fcee7 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _6826fa64 = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _1cec51b2 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _e2b42224,
    children: [{
      path: "",
      component: _6823ecba,
      name: "home"
    }, {
      path: "/login",
      component: _9be919b6,
      name: "login"
    }, {
      path: "/register",
      component: _9be919b6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _36220e65,
      name: "profile"
    }, {
      path: "/settings",
      component: _1f5fcee7,
      name: "settings"
    }, {
      path: "/edit",
      component: _6826fa64,
      name: "edit"
    }, {
      path: "/article/:slug",
      component: _1cec51b2,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
