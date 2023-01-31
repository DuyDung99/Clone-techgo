<template >
    <div class="product">
        <div class="producCard" v-for="(data, index) in data" :key="index">
            <div class="producCard-detail">
                <img :src="data.url" alt="">
                <div>
                    <p style="color: #b2bec3">{{ data.brand }}</p>
                    <h4>{{ data.productName }}</h4>
                    <div class="detail-price">
                        <p :class="{ detailText: priceSale(data) }">{{ formatPrice(data) }}</p>
                        <p v-if="priceSale(data)" style="color : red  ">{{ formatDiscount(data) }}</p>
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

        </div>
    </div>
</template>

<script>
import { ProductCard } from '../Data/Data'
export default {
    data() {
        return {
            data: ProductCard
        }
    },

    computed: {

    },

    methods: {
        // click(data) {
        //     let number = data.price * data.sale;
        //     console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number));
        // },
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
        }


    }
}
</script>

<style scoped>
.product {
    display: flex;
}

.producCard {
    width: 20%;
    border: 1px solid #ccc;
    box-shadow: 0 5px 10px #ccc;
    margin-top: 12px;
    margin-left: 34px;
    margin-bottom: 12px;
    border-radius: 8px;
    background-color: white;
}

.producCard:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 0.3s ease;
}

.producCard img {
    width: 100%;
    margin-bottom: 12px;
    height: 150px;
}

.producCard-detail {
    padding: 24px;
    position: relative;
}


.producCard-detail p {
    padding: 6px 0;
    margin: 6px;
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
    margin: 6px;
    font-size: 14px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.producCard-detail-rate {
    position: absolute;
    top: 0;
    right: 2%;
    background-color: red;
    color: white;
    font-size: 12px !important;
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
}
</style>