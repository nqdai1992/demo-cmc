import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Products = () => import('@/modules/products/components/Products.vue')
const About = () => import('@/modules/About/components/About.vue')

const routes = [
    {
        path: '/',
        name: 'prodcuts',
        component: Products,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
]

const navigation = [
    {
        type: 'group',
        text: 'Catalog',
        icon: 'home',
        children: [
            {
                path: '/',
                text: 'Product',
                type: 'item',
                icon: 'loyalty',
            }
        ]
    },
    {
        path: '/about',
        icon: 'info',
        text: 'About us',
        type: 'item'
    }
]
export {
    navigation
}
export default new VueRouter({
    routes,
    mode: 'history'    
})