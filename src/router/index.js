import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/shares/SignIn/SignIn-component.vue';
import ProductCard from '../components/shares/product-card/Product-Cart.vue';
import Home from '../components/shop/Home/Home-component.vue';
import ListProducts from '../components/shop/ListProducts/List-products.vue';
import HeaderList from '../components/shares/header/Header-list.vue';

const routes = [
    { path: '', name: 'Home', component: Home },
    { path: '/sign-in', name: 'signIn', component: SignIn },
    { path: '/ProductCard', name: 'ProductCard', component: ProductCard },
    { path: '/ListProducts', name: 'ListProducts', component: ListProducts },
    { path: '/HeaderList', name: 'HeaderList', component: HeaderList },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router