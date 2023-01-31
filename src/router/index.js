import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/shares/SignIn/SignIn-component.vue';
import ProductCard from '../components/shares/product-card/Product-Cart.vue';
import Home from '../components/shop/Home/Home-component.vue';

const routes = [
    { path: '', name: 'Home', component: Home },
    { path: '/sign-in', name: 'signIn', component: SignIn },
    { path: '/ProductCard', name: 'ProductCard', component: ProductCard },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router