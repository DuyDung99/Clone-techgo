<template>
    <div class="list-products">
        <div class="list-products-header">
            <div>
                <div>
                    <Header></Header>
                </div>
                <div>
                    <HeaderList></HeaderList>
                </div>
            </div>
        </div>
        <!---------------lits product header----------------------------------------------------->
        <div class="list-product-content">
            <div>
                <div class="list-product-content-box">
                    <div class="list-product-adress">
                        <div>
                            <p> Trang chủ / Sản phẩm khuyến mại</p>
                        </div>
                    </div>
                    <div class="list-product-content-block">
                        <div class="block-left">
                            <div class="p-sticky">
                                <div class="list-product-content-left">
                                    <div class="product-box">
                                        <div class="product-portfolio">
                                            <div class="product-h4">
                                                <h4>Danh mục sản phẩm</h4>
                                            </div>
                                            <ul>
                                                <li><a href="">Sản phẩm khuyến mại</a></li>
                                                <li><a href="">Sản phẩm nổi bật</a></li>
                                                <li><a href="">Tất cả sản phẩm</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="list-product-content-left">
                                    <div class="product-box">
                                        <div class="product-portfolio">
                                            <div class="product-h4">
                                                <h4 @click="click">Nhà Cung cấp</h4>
                                            </div>
                                            <ul v-for="(brand, i) in menuBrand" :key="i">
                                                <li>
                                                    <input type="checkbox" :value="brand" v-model="selectedBrand"
                                                        @click="filterBrands(brand.id, $event)">
                                                    <span> {{ brand.name }}</span>

                                                    <!-- <span> {{ brand }}</span> -->

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-product-content-left">
                                    <div class="product-box">
                                        <div class="product-portfolio">
                                            <div class="product-h4">
                                                <h4>Lọc giá</h4>
                                            </div>
                                            <ul v-for="(price, i) in price" :key="i">
                                                <li>
                                                    <input type="checkbox" :value="price">
                                                    <span>{{ price }}</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ------------------------------------------------------------------>

                        <div class="block-right">
                            <div class="list-product-content-right">
                                <div class="products-img">
                                    <img src="https://theme.hstatic.net/200000516791/1000880762/14/collection_banner.jpg?v=2257"
                                        alt="">
                                </div>
                                <div class="products-promotion">
                                    <h3>Tất cả sản phẩm</h3>
                                    <span style="width:60%">
                                        <span style="font-weight: bold;">{{ tatalProducs }}</span>
                                        <span style="font-size: 14px"> sản phẩm</span>
                                    </span>
                                    <div class="products-content">
                                        <p>
                                            <span><i class="fa-solid fa-arrow-down-a-z"></i></span>
                                            <span>Sắp xếp</span>
                                            <span><i class="fa-solid fa-sort-down"></i></span>
                                        </p>
                                        <ul class="products-filter">
                                            <li v-for="(items, i) in items" :key="i" @click="handaleFilterItem()">{{
                                                items.title }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------------------------>

                                <div class="products-cart">
                                    <div>
                                        <ProductCart :products="products" :paginatedItems="paginatedItems">
                                        </ProductCart>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <v-pagination v-model="page" :length="4" rounded="circle"
                                        @update:modelValue="updatePage(page, size)"></v-pagination>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- ------------------------------------------------------------------ -->
        <div>
            <Footer></Footer>
        </div>
    </div>
    <!-- <button @click="overlay = !overlay">click</button> -->
</template>

<script>
import Header from '../../shares/header/Header-component.vue';
import HeaderList from '../../shares/header/Header-list.vue';
import ProductCart from '../../shares/product-card/Product-Cart.vue';
import Footer from '../../shares/footer/Footer-component.vue';
// import Products from '../../shares/products.json'
import { api } from '../../../api';


export default {
    components: {
        Header,
        HeaderList,
        ProductCart,
        Footer,
    },

    data() {
        return {
            // products: Products,
            products: [],
            page: 1,
            size: 3,
            panel: [0, 1],
            readonly: false,
            brands: ['Apple', 'Sam sung', 'Sony', 'LG', 'Oppo', 'Lenovo', 'Nokia', 'Xiaomi'],
            menuBrand: '',
            price: ['Dưới 2.000.000đ', '2.000.000đ - 5.000.000đ', '5.000.000đ - 15.000.000đ', '15.000.000đ - 30.000.000đ', 'Trên 30.000.000đ'],
            ex4: ['orange'],
            items: [
                { title: 'Sản phẩm nổi bật' },
                { title: 'Giá Tăng Dần' },
                { title: 'Giá Giảm Dần' },
                { title: 'Tên A - Z' },
                { title: 'Tên Z - A' },
            ],
            selectedBrand: [],
            selectedPrice: [],
        }
    },
    methods: {
        click() {
            // console.log(this.products, 'product');
            console.log(this.menuBrand);
        },

        //--reload lại component
        reload() {
            location.reload();
        },

        //-------re-render products
        async renderProducts(id, skip, limit) {
            try {
                const token = localStorage.getItem('access_token');
                const res = await api.getProducts(token, id, skip, limit);
                if (res.status == 200) {
                    this.products = res.data
                    console.log(this.products = res.data);
                }
            } catch (error) {
                console.log(error);
            }
        },

        async updatePage(page, size) {
            console.log('page', page);
            const skip = (page - 1) * size;
            const limit = size
            this.renderProducts(null, skip, limit)
        },

        async filterBrands(id, e) {
            const skip = (this.page - 1) * this.size
            const limit = this.size
            console.log(id);
            try {
                if (e.target.checked == true) {
                    this.renderProducts(id, skip, limit)
                }
                if (e.target.checked !== true) {
                    console.log(id);
                    this.renderProducts(null, skip, limit)
                }
            } catch (error) {
                console.log(error);
            }
        },

        // formatPrice(price) {
        //     console.log(price);
        //     return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
        // },

        handaleFilterItem(items) {
            console.log(items);
        },



    },

    computed: {
        tatalProducs() {
            let tatal = this.products
            return tatal.length
        },

        paginatedItems() {
            const startIndex = (this.page - 1) * this.size;
            const endIndex = startIndex + this.size;
            return this.products.slice(startIndex, endIndex);
        },

        totalPages() {
            console.log('totalPages', this.renderProducts.length);
            return this.renderProducts.length;
        }
    },

    async created(id) {

        //------products
        this.renderProducts(id, 0, this.size);

        // ----brands
        const token = localStorage.getItem('access_token');
        const resBrand = await api.getBrand(token);
        if (resBrand.status == 200) {
            this.menuBrand = resBrand.data
        }

        // console.log(this.$store)
    },

    watch: {
        overlay(val) {
            console.log(val);
            val && setTimeout(() => {
                this.overlay = false
            }, 1000)
        },
    },

}
</script>

<style scoped>
.list-products {
    position: relative;
}

.list-product-content {
    background-color: #ececec;
}

.list-product-content-box {
    margin-left: 56px;

}

.list-product-adress p {
    font-size: 0.9em;
    padding: 6px;
}

.list-product-content-left {
    background-color: white;
    border: 0.5px solid #ccc;
    border-radius: 6px;
    margin-top: 12px
}

.product-h4 {
    border-bottom: 0.5px solid #ccc;
    padding: 6px 18px;

}

.product-h4 h4 {
    font-weight: 500;
}


.product-portfolio li {
    list-style: none;
    padding: 6px 18px;
    font-size: 0.9rem;
    display: flex;
}

.product-portfolio li input {
    margin-right: 12px;
    width: 14px;
    accent-color: #fffa65;
}

.product-portfolio li input:hover {
    cursor: pointer;
}

.product-portfolio li a {
    text-decoration: none;
    color: #000;
}

.product-portfolio li a:hover {
    cursor: pointer;
}

.product-portfolio li span:hover {
    cursor: pointer;
}

.list-product-content-block {
    display: flex;
}

.block-left {
    width: 20%;

}

.p-sticky {
    position: sticky;
    top: 0;
}

.block-right {
    width: 80%;
    padding: 12px 32px;
}

.products-img img {
    width: 100%;
}

.products-content {
    position: relative;
    width: 20%;
}

.products-content:hover {
    cursor: pointer;
}

.products-content:hover .products-filter {
    display: block;
    z-index: 1;
}

.products-content p {
    background-color: white;
    width: 140px;
}

.products-content p span {
    display: inline-block;
    padding: 8px;
}

.products-content li {
    list-style: none;
    background-color: white;
    padding: 4px 20px;
    font-size: 0.8rem;
}

.products-content li:hover {
    cursor: pointer;
    background-color: #ececec;
}

.products-promotion {
    display: flex;
}

.products-promotion h3 {
    /* margin-right: 24px; */
    display: flex;
    align-items: center;
    width: 20%;
}

.products-promotion span {
    display: flex;
    align-items: center;
}

.products-promotion span span {
    margin-left: 6px;
}

.products-filter {
    position: absolute;
    width: 64.5%;
    display: none;
}

.fa-sort-down {
    position: absolute;
    top: 22%;
}

.products-cart {
    min-height: 80vh;
}

::v-deep .product {
    flex-wrap: wrap;
}

::v-deep .v-checkbox .v-selection-control {
    min-height: 0 !important;
}

/* ::v-deep .v-pagination__list {
    justify-content: right;
} */

::v-deep .producCard {
    width: 16.9%;
}

::v-deep .header-left a {
    text-decoration: none;
    color: white;
}
</style>