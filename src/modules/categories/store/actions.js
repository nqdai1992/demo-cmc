import {
    getAllCategories,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory
} from '@/api/categories.api'

import  {
  getTreeCategory,
  updateTreeCategory
} from '@/api/tree-categories.api'

export default {
    async fetchCategories ({ commit }) {
        try {
            const response = await getAllCategories();
            commit('SET_CATEGORIES', response.data)
        } catch (err) {
            throw new Error(err)
        }
    },

    async fetchCategory ({ commit }, { categoryId = '' }) {
        try {
            if (!categoryId) throw new Error('Category id is undefined') 
            const response = await getCategory(categoryId);
            commit('SET_CATEGORY', response.data)
        } catch (err) {
            throw err.response
        }
    },

    async removeCategory (context, { categoryId = '' }) {
        try {
            if (!categoryId) throw new Error('Category id is undefined') 
            return await deleteCategory(categoryId);
        } catch (err) {
            throw new Error(err)
        }
    },

    async modifyCategory (context, { categoryId = '', payload }) {
        try {
            if (!categoryId) throw new Error('Category id is undefined')
            return await updateCategory(categoryId, payload);
        } catch (err) {
            throw new Error(err)
        }
    },

    async addCategory (context, { payload }) {
        try {
            if (!payload || !(typeof payload === 'object')) throw new Error('Content of category must be object')
            return await createCategory(payload);
        } catch (err) {
            throw new Error(err)
        }
    },

    async fetchTreeCategory ({commit}) {
        try {
            const response = await getTreeCategory()
            commit('SET_TREE_CATEGORIES', response.data)
        } catch (err) {
            throw new Error(err)
        }
    },

    async modifyTreeCategories (context, { payload }) {
        try {
            await updateTreeCategory(payload)
        } catch (err) {
            throw new Error(err)
        }
    }
}