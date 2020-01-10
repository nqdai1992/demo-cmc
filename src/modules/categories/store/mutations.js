export default {
    SET_TREE_CATEGORIES (state, payload) {
        state.treeView = payload[0]
    },
    SET_CATEGORIES (state, payload) {
        state.categories = payload
    },
    SET_CATEGORY (state, payload) {
        state.category = payload
    }
}