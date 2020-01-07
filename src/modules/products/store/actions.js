import {
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
} from '@/api/products.api'

import {
    formatDataAllProducts,
    formatDataProduct
} from '../helpers'

export default {
    async fetchProducts ({ commit }) {
        try {
            const response = await getAllProducts();
            commit('SET_PRODUCTS', formatDataAllProducts(response.data))
        } catch (err) {
            throw new Error(err)
        }
    },

    async fetchProduct ({ commit }, { productId = '' }) {
        try {
            if (!productId) throw new Error('Product id is undefined') 
            const response = await getProduct(productId);
            commit('SET_PRODUCT', formatDataProduct(response.data))
        } catch (err) {
            throw new Error(err)
        }
    },

    async removeProduct (context, { productId = '' }) {
        try {
            if (!productId) throw new Error('Product id is undefined') 
            await deleteProduct(productId);
        } catch (err) {
            throw new Error(err)
        }
    },

    async modifyProduct (context, { productId = '', payload }) {
        try {
            if (!productId) throw new Error('Product id is undefined')
            await updateProduct(productId, payload);
        } catch (err) {
            throw new Error(err)
        }
    },

    async addProdut (context, { payload }) {
        try {
            if (!payload || !(typeof payload === 'object')) throw new Error('Content of product must be object')
            await createProduct(payload);
        } catch (err) {
            throw new Error(err)
        }
    }
}