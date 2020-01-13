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
        let categories = state.categories.map(item => {
            item.pathString = item.path.join('>>')
            return item
        })
        return categories
    },
    processCategory (state) {
        let item = JSON.parse(JSON.stringify(state.category)) || {}
        if (item.path) {
            item.pathString = item.path.join('>>')
        }
        return item
    }
}