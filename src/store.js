import Vue from 'vue'
import Vuex from 'vuex'

import AboutStore from './modules/About/store'
import ProductStore from './modules/products/store'
import CategoryStore from './modules/categories/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requestState: 'done',
    requestMethod: 'get',
  },
  mutations: {
    SET_REQUEST_STATE (state, payload) {
      state.requestState = payload
    },
    SET_REQUEST_METHOD (state, payload) {
      state.requestMethod = payload
    }
  },
  modules: {
    AboutStore,
    ProductStore,
    CategoryStore
  }
})