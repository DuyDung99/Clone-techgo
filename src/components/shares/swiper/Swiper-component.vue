<template>
    <swiper :slides-per-view="6" :space-between="40" navigation :pagination="{ clickable: true }" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide v-for="(data, index) in Product" :key="index">
            <div class="product">
                <div class="producCard">
                    <router-link to='/product'>
                        <div class="producCard-detail">
                            <div class="producCard-detail-img">
                                <img :src="data.image_link[0]" alt="">
                            </div>
                            <div>
                                <p style="color: #b2bec3">{{ data.vendor }}</p>
                                <h4>{{ data.name }}</h4>
                                <div class="detail-price">
                                    <!-- <p :class="{ detailText: priceSale(data) }">{{ formatPrice(data) }}</p>
                                        <p v-if="priceSale(data)" style="color : red  ">{{ formatDiscount(data) }}</p> -->
                                    <p :class="{ detailText: priceSale(data) }">{{ data.price }}</p>
                                    <p v-if="priceSale(data)" style="color : red  ">{{ data.old_price }}</p>
                                </div>
                            </div>
                            <v-btn @click="click(data)">
                                <span> <i class="fa-solid fa-cart-shopping"></i></span>
                                <span>Thêm vào giỏ</span>
                            </v-btn>
                            <span v-if="priceSale(data)" style="width: 35px; padding:5px" class="producCard-detail-rate">
                                -{{ data.sale * 100 }}%
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import Product from '../../shares/products.json'
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';


SwiperCore.use([Navigation, Pagination, A11y]);

export default {
    components: {
        Swiper,
        SwiperSlide,

    },

    data() {
        return {
            Product: Product,
        }
    },


    methods: {
        onSwiper(swiper) {
            console.log(swiper)
        },
        onSlideChange() {
            console.log('slide change')
        },
        // simple_toggle(default_limit, filters_length) {
        //     this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
        // },
        click() {
            // let number = data.price * data.sale;
            // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number));
            console.log(this.data);
        },
        formatPrice(data) {
            let number = data.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);

        },

        formatDiscount(data) {
            let number = data.price - data.price * data.sale
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },

        priceSale(data) {
            let priceSale = data.sale > 0
            return priceSale
        },


    },
};
</script>
<style scoped>
.product {
    display: flex;
    justify-content: center;
}

.producCard {
    width: 100%;
    border: 1px solid #ccc;
    margin-bottom: 12px;
    border-radius: 8px;
    background-color: white;
}

.producCard a {
    color: black;
    text-decoration: none;
}

.producCard:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 0.3s ease;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.producCard img {
    width: 100%;
}

.producCard-detail {
    padding: 12px;
    position: relative;
}


.producCard-detail p {
    /* padding: 6px 0; */
    margin: 0 6px;
}

.producCard-detail span {
    padding: 6px 0;
    font-size: 12px;
}

.producCard-detail button {
    text-transform: capitalize;
    margin-top: 6px;
}

.producCard-detail h4 {
    padding: 6px 0;
    margin: 0 6px;
    font-size: 14px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 16px;
}

.producCard-detail-rate {
    position: absolute;
    top: 0;
    right: 2%;
    background-color: red;
    color: white;
    font-size: 12px !important;
}

.producCard-detail-img {
    height: 30%;
    width: 100%;
}

.Price {
    color: #b2bec3;
    text-decoration: line-through;
}

.detailText {
    text-decoration: line-through;
    margin-right: 8px;
}

.detail-price {
    display: flex;
    font-size: 0.9rem;
    padding-bottom: 3px;
}


/* ::v-deep .swiper-slide {
    margin-right: 0 !important;
} */

/* ::v-deep .swiper-wrapper {
    margin-left: 10px;
} */
.swiper {
    padding: 12px 38px;
}

::v-deep .swiper-button-next:after,
::v-deep .swiper-button-prev:after {
    font-size: 1.2rem;
    ;
}
</style>