export default {
    fullTreeData (state) {
        return state.treeView.root
    },
    treeDataWithoutRoot (state) {
        try {
            return state.treeView.root.children
        } catch (err) {
            return []
        }
        
    },
    processCategories (state) {
        state.categories.forEach(item => {
            item.pathString = item.path.join('>>')
        })
        return state.categories
    },
    processCategory (state) {
        return state.category
    }
}