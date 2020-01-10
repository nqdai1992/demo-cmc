import httpClient from './httpClient'

const END_POINT = '/tree-category'

const getTreeCategory = () => httpClient.get(END_POINT)
const updateTreeCategory = (payload) => httpClient.put(`${END_POINT}/1`, payload)

export {
    getTreeCategory,
    updateTreeCategory,
}