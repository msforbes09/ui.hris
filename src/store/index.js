import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import auth from './modules/auth'
import keyword from './modules/keyword'
import applicant from './modules/applicant'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app,
      auth,
      keyword,
      applicant
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
