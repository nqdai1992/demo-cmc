import httpClient from './httpClient'

const END_POINT = '/categories'

const getAllCategories = () => httpClient.get(END_POINT)
const getCategory = (categoryId) => httpClient.get(`${END_POINT}/${categoryId}`)
const createCategory = (payload) => httpClient.post(END_POINT, payload)
const updateCategory = (categoryId, payload) => httpClient.put(`${END_POINT}/${categoryId}`, payload)
const deleteCategory = (categoryId) => httpClient.delete(`${END_POINT}/${categoryId}`)

export {
    getAllCategories,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory
}