import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/shares/SignIn/SignIn-component.vue';
import SignUp from '../components/shares/SignUp/SignUp-component.vue';
import ProductCard from '../components/shares/product-card/Product-Cart.vue';
import Home from '../components/shop/Home/Home-component.vue';
import ListProducts from '../components/shop/ListProducts/List-products.vue';
import HeaderList from '../components/shares/header/Header-list.vue';
import Product from '../components/shop/product/Product-component.vue';
import Cart from '../components/shop/cart/Cart-component.vue';
import User from '../components/shop/user/User-component.vue';
import Pay from '../components/shop/pay/Pay-component.vue';
import Swiper from '../components/shares/swiper/Swiper-component.vue';

// --------------admin-------------------------------
import SignInAdmin from '../components/admin/sign-in/SignIn-Admin.vue';
import Admin from '../components/admin/Admin-component.vue';
import AddProduct from '../components/admin/share/AddProduct-component.vue';


// ---------------------------------------------
import Fancybox from '../components/shop/product/fancybox-product/FancyboxProduct-component.vue';
import LightBox from '../components/shop/product/fancybox-product/LightBox-component.vue';


const routes = [
    //------------------User------------------------------------
    { path: '/', name: 'Home', component: Home },
    { path: '/SignIn', name: 'SignIn', component: SignIn },
    { path: '/SignUp', name: 'SignUp', component: SignUp },
    { path: '/ListProducts', name: 'ListProducts', component: ListProducts },
    { path: '/Product', name: 'Product', component: Product },
    { path: '/Cart', name: 'Cart', component: Cart },
    { path: '/User', name: 'User', component: User },
    { path: '/Pay', name: 'Pay', component: Pay },

    //------------------Admin------------------------------------
    { path: '/LoginAdmin', name: 'LoginAdmin', component: SignInAdmin },
    { path: '/Admin', name: 'Admin', component: Admin },
    { path: '/Admin/AddProduct', name: 'AddProduct', component: AddProduct },


    // ------------------------------------------------------
    { path: '/HeaderList', name: 'HeaderList', component: HeaderList },
    { path: '/Swiper', name: 'Swiper', component: Swiper },
    { path: '/ProductCard', name: 'ProductCard', component: ProductCard },
    { path: '/Fancybox', name: 'Fancybox', component: Fancybox },
    { path: '/LightBox', name: 'LightBox', component: LightBox },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router