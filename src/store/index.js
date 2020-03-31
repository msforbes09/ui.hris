import Vue from 'vue'
import Vuex from 'vuex'
import Error from './../helper/Error'

import app from './modules/app'
import auth from './modules/auth'
import keyword from './modules/keyword'
import applicant from './modules/applicant'
import application from './modules/application'
import client from './modules/client'
import requirement_template from './modules/requirement_template'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default new Vuex.Store({
    modules: {
      app,
      auth,
      keyword,
      applicant,
      application,
      client,
      requirement_template
    },
    state: {
      error: new Error()
    },
    actions: {},
    getters: {
      error: state => state.error
    }
})
