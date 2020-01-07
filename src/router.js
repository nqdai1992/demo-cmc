import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/modules/Home/components/Home.vue')
const About = () => import('@/modules/About/components/About.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

export default new VueRouter({
    routes,
    mode: 'history'    
})