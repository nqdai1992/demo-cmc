import httpClient from './httpClient'

const END_POINT = '/products'

const getAllProducts = () => httpClient.get(END_POINT)
const getProduct = (productId) => httpClient.get(`${END_POINT}/${productId}`)
const createProduct = (payload) => httpClient.post(END_POINT, payload)
const updateProduct = (productId, payload) => httpClient.put(`${END_POINT}/${productId}`, payload)
const deleteProduct = (productId) => httpClient.delete(`${END_POINT}/${productId}`)

export {
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}