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
                                                <h4>Nhà Cung cấp</h4>
                                            </div>
                                            <ul v-for="(manufacture, i) in manufacture" :key="i">
                                                <li>
                                                    <input type="checkbox" :value="manufacture[i]">
                                                    <span> {{ manufacture }}</span>
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
                                                    <input type="checkbox"> <span>{{ price }}</span>
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
                                        <span style="font-weight: bold;">46</span>
                                        <span style="font-size: 14px"> sản phẩm</span>
                                    </span>
                                    <div class="products-content">
                                        <p>
                                            <span><i class="fa-solid fa-arrow-down-a-z"></i></span>
                                            <span>Sắp xếp</span>
                                            <span><i class="fa-solid fa-sort-down"></i></span>
                                        </p>
                                        <ul class="products-filter">
                                            <li v-for="(items, i) in items" :key="i">{{ items.title }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------------------------>

                                <div class="products-cart">
                                    <div class="aaa">
                                        <ProductCart></ProductCart>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
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
</template>

<script>
import Header from '../../shares/header/Header-component.vue';
import HeaderList from '../../shares/header/Header-list.vue';
import ProductCart from '../../shares/product-card/Product-Cart.vue'
import Footer from '../../shares/footer/Footer-component.vue'
export default {
    components: {
        Header,
        HeaderList,
        ProductCart,
        Footer,
    },

    data() {
        return {
            page: 1,
            panel: [0, 1],
            readonly: false,
            manufacture: ['Apple', 'Oppo', 'LG', 'Xiaomi', 'Sam sung',],
            price: ['Dưới 1.000.000đ', '1.000.000đ - 2.000.000đ', '2.000.000đ - 3.000.000đ', '3.000.000đ - 4.000.000đ', 'Trên 4.000.000đ'],
            ex4: ['orange'],
            items: [
                { title: 'Sản phẩm nổi bật' },
                { title: 'Giá Tăng Dần' },
                { title: 'Giá Giảm Dần' },
                { title: 'Tên A - Z' },
                { title: 'Tên Z - A' },
            ],
        }
    },
    methods: {
        // formatPrice(price) {
        //     console.log(price);
        //     return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
        // },
    }

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
    margin-right: 24px;
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

::v-deep .product {
    flex-wrap: wrap;
}

::v-deep .v-checkbox .v-selection-control {
    min-height: 0 !important;
}

::v-deep .v-pagination__list {
    justify-content: right;
}
</style>