import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Products = () => import('@/modules/products/components/Products.vue')
const AddProduct = () => import('@/modules/products/components/AddProduct.vue')
const EditProduct = () => import('@/modules/products/components/EditProduct.vue')

const Categories = () => import('@/modules/categories/components/Categories.vue')
const AddCategory = () => import('@/modules/categories/components/AddCategory.vue')
const EditCategory = () => import('@/modules/categories/components/EditCategory.vue')

const About = () => import('@/modules/About/components/About.vue')

const routes = [
    {
        path: '/',
        name: 'prodcuts',
        component: Products,
    },
    {
        path: '/add-product',
        name: 'Add Prodcut',
        component: AddProduct,
    },
    {
        path: '/edit-product/:id',
        name: 'Edit Prodcut',
        component: EditProduct,
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/add-category',
        name: 'Add Category',
        component: AddCategory
    },
    {
        path: '/edit-category/:id',
        name: 'Edit Category',
        component: EditCategory
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
            },
            {
                path: '/categories',
                text: 'Catefories',
                type: 'item',
                icon: 'label',
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