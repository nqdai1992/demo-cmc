import Vue from 'vue'
import Vuex from 'vuex'

import AboutStore from './modules/About/store'
import ProductStore from './modules/products/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AboutStore,
        ProductStore
    }
})