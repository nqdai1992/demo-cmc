import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const defaultState = {
    treeView: {},
    category: {},
    categories: []
}

export default {
    namespaced: true,
    state: defaultState,
    mutations,
    actions,
    getters
}