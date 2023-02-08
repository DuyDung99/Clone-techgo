import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/shares/SignIn/SignIn-component.vue';
import ProductCard from '../components/shares/product-card/Product-Cart.vue';
import Home from '../components/shop/Home/Home-component.vue';
import ListProducts from '../components/shop/ListProducts/List-products.vue';
import HeaderList from '../components/shares/header/Header-list.vue';
import Product from '../components/shop/product/Product-component.vue';
import Cart from '../components/shop/cart/Cart-component.vue';
import User from '../components/shop/user/User-component.vue';

const routes = [
    { path: '', name: 'Home', component: Home },
    { path: '/sign-in', name: 'signIn', component: SignIn },
    { path: '/ListProducts', name: 'ListProducts', component: ListProducts },
    { path: '/HeaderList', name: 'HeaderList', component: HeaderList },
    { path: '/Product', name: 'Product', component: Product },
    { path: '/Cart', name: 'Cart', component: Cart },
    { path: '/User', name: 'User', component: User },
    { path: '/ProductCard', name: 'ProductCard', component: ProductCard },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router