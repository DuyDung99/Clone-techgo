<template >
    <div class="product">
        <div class="producCard" v-for="(data, index) in products" :key="index">
            <div class="producCard-detail">
                <div class="producCard-detail-img">
                    <img :src="data.product_variants[0].images[0].image_path" alt="">
                </div>
                <div>
                    <p style="color: #b2bec3">{{ data.brand.name }}</p>
                    <h4>{{ data.name }}</h4>
                    <div class="detail-price">
                        <!-- <p :class="{ detailText: priceSale(data) }">{{ formatPrice(data) }}</p>
                        <p v-if="priceSale(data)" style="color : red  ">{{ formatDiscount(data) }}</p> -->
                        <p :class="{ detailText: priceSale(data) }">{{ data.product_variants[0].price }}</p>
                        <p v-if="priceSale(data)" style="color : red  ">{{ data.old_price }}</p>
                    </div>
                </div>
                <v-btn>
                    <span> <i class="fa-solid fa-cart-shopping"></i></span>
                    <span>Thêm vào giỏ</span>
                </v-btn>
                <span v-if="priceSale(data)" style="width: 35px; padding:5px" class="producCard-detail-rate">
                    -{{ data.sale * 100 }}%
                </span>
            </div>
        </div>

    </div>
    <button @click="click()">click</button>
</template>

<script>
export default {
    data() {
        return {
            data: '',
        }
    },
    props: {
        products: {
            type: Array,
        },

        brands: {
            type: Object,
        },

        paginatedItems: {
            paginatedItems: Array,
        }

    },
    computed: {

    },

    methods: {
        // simple_toggle(default_limit, filters_length) {
        //     this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
        // },
        click() {
            // let number = data.price * data.sale;
            // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number));
            console.log(this.computedFiter[0].product_variants[0].images[0].image_path);
            console.log(this.brands);
        },

        priceSale(data) {
            let priceSale = data.sale > 0
            return priceSale
        },

    }
}
</script>

<style scoped>
.product {
    display: flex;
}

.producCard {
    width: 21.96%;
    border: 1px solid #ccc;
    box-shadow: 0 5px 10px #ccc;
    margin-top: 20px;
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
    /* width: 200px; */
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
}
</style>