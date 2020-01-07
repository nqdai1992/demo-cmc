import Vue from 'vue'
import Vuex from 'vuex'

import HomeStore from './modules/Home/store'
import AboutStore from './modules/About/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        HomeStore,
        AboutStore
    }
})