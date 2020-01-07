export default {
    updateProducts (state, payload = []) {
        state.products = payload.slice(0);
    },
    updateProduct (state, payload = {}) {
        state.product = JSON.parse(JSON.stringify(payload))
    }
}