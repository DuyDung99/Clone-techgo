<template>
    <div class="Home">
        <div class="home-header">
            <div class="home-header-content">
                <Header></Header>
            </div>
        </div>
        <!-- ---------------------------------------------------------------- -->

        <div class="home-content">
            <div class="content-left" v-click-outside="onClickOutside">
                <v-btn @click="showLists">
                    <span><i class="fa-solid fa-list-ul"></i></span>
                    <span style="margin-left:6px">Danh sách sản phẩm</span>
                </v-btn>
                <div class="content-list">
                    <div>
                        <ul v-if="showList" class="content-left-items ">
                            <li class="items-techgo-hover" @click="handleClickTechGo">
                                <a>TechGo </a>
                                <span><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li @click="handleListElectric">
                                <a>Điện máy - Điện gia dụng </a>
                                <span><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li @click="handleListMacbook">
                                <a>Laptop Macbook </a>
                                <span><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li v-for="(items, index) in items" :key="index">{{ items }}</li>
                            <li class="items-plus" v-if="isShow" @click="showPlus">
                                <span>+ Xem thêm</span>
                            </li>
                            <li v-else class="items-minus" @click="showMinus">
                                <span>- Ẩn bớt</span>
                            </li>
                        </ul>
                    </div>
                    <!-- -------------------------ListTechGo--------------------------------------- -->
                    <div v-if="isShowHomeList" class="content-home-list">
                        <ListTechGo :item_title="item_title"></ListTechGo>
                    </div>

                    <!-- ---------------------------ListElectric------------------------------------- -->
                    <div v-if="isShowListElectric" class="content-home-list">
                        <ListElectric :listElectric="listElectric"></ListElectric>
                    </div>

                    <!-- ---------------------------ListMacbook------------------------------------- -->
                    <div v-if="isShowListMacbook" class="content-home-list">
                        <ListMacbook :listMacbook="listMacbook"></ListMacbook>
                    </div>
                </div>
            </div>
            <div class="content-center">
                <ul class="content-center-ul">
                    <li class="content-center-li">
                        <div class="content-center-img">
                            <img src="https://theme.hstatic.net/200000516791/1000880762/14/header_03_policy_1_ico.png?v=2257"
                                alt="">
                        </div>
                        <div class="content-center-text">Đảm bảo chất lượng</div>
                    </li>
                    <li class="content-center-li">
                        <div class="content-center-img">
                            <img src="https://theme.hstatic.net/200000516791/1000880762/14/header_03_policy_2_ico.png?v=2257"
                                alt="">
                        </div>
                        <div class="content-center-text">Miễn phí vận chuyển</div>
                    </li>
                    <li class="content-center-li">
                        <div class="content-center-img">
                            <img src="https://theme.hstatic.net/200000516791/1000880762/14/header_03_policy_3_ico.png?v=2257"
                                alt="">
                        </div>
                        <div class="content-center-text">Mở hộp kiểm tra nhận hàng</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ------------------------- banner--------------------------------------- -->

        <div class="home-banner">
            <div class="baner-up">
                <div class="home-baner-left">
                    <div class="baner-img">
                        <a href="">
                            <img src="https://telecomtalk.info/wp-content/uploads/2022/10/cropped-Apple-iPhone-14-Pro-and-Pro-Max-differences.jpg"
                                alt="">
                        </a>
                        <a href="">
                            <img src="https://bizweb.dktcdn.net/100/176/601/collections/untitled-2-1-ef3e6f0b-cc6b-4d46-bc2f-b4f01071a61b.jpg?v=1663070166100"
                                alt="">
                        </a>
                    </div>
                </div>
                <!-- --------------------------------------------------------------->

                <div class="home-baner-center">
                    <div class="baner-carousel">
                        <v-carousel cycle height="415" hide-delimiter-background show-arrows="hover" interval="3000">
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <v-sheet height="100%">
                                    <div class="fill-height justify-center align-center">
                                        <div class="text-h2">
                                            <img :src="slide.image" alt="">
                                        </div>
                                    </div>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </div>
                <!-- --------------------------------------------------------------->

                <div class="home-baner-right">
                    <div class="home-baner-right-img">
                        <div>
                            <a href="">
                                <img src="https://theme.hstatic.net/200000516791/1000880762/14/banner_top_1_img_large.jpg?v=2257"
                                    alt="">
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="https://theme.hstatic.net/200000516791/1000880762/14/banner_top_2_img_large.jpg?v=2257"
                                    alt="">
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="https://theme.hstatic.net/200000516791/1000880762/14/banner_top_3_img_large.jpg?v=2257"
                                    alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ---------------------------baner down------------------------------------ -->
            <div class="baner-bottom">
                <div class="baner-bottom-img">
                    <a href="">
                        <img src="https://theme.hstatic.net/200000516791/1000880762/14/categorybanner_1_img.jpg?v=2257"
                            alt="">
                    </a>
                </div>
                <div class="baner-bottom-img">
                    <a href="">
                        <img src="https://theme.hstatic.net/200000516791/1000880762/14/categorybanner_2_img.jpg?v=2257"
                            alt="">
                    </a>
                </div>
                <div class="baner-bottom-img">
                    <a href="">
                        <img src="https://theme.hstatic.net/200000516791/1000880762/14/categorybanner_3_img.jpg?v=2257"
                            alt="">
                    </a>
                </div>
                <div class="baner-bottom-img">
                    <a href="">
                        <img src="https://theme.hstatic.net/200000516791/1000880762/14/categorybanner_4_img.jpg?v=2257"
                            alt="">
                    </a>
                </div>
            </div>

            <!-- --------------------------HIGHLIGHTS CATEGORY------------------------------------->
            <div class="highlights-category">
                <h2>Danh mục nổi bật</h2>
                <div class="category-item">
                    <div class="category-box" v-for="(listCategory, index) in listCategory" :key="index">
                        <div class="categoty-img">
                            <img :src="listCategory.thumb" alt="">
                        </div>
                        <div class="category-text">
                            <p>{{ listCategory.title }}</p>
                        </div>
                        <a href=""></a>
                    </div>
                </div>
            </div>
            <!-- --------------------------------------------------------------->

            <div class="top-products">
                <div class="products-box">
                    <div class="products-items">
                        <h3>Top sản phẩm bán chạy</h3>
                        <Product></Product>
                    </div>
                </div>
            </div>
        </div>



        <!-- ---------------------------------------------------------------- -->

        <div class="home-footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from '../../../components/shares/header/Header-component.vue';
import ListTechGo from './Home-List/List-techgo.vue';
import Product from '../../shares/product-card/Product-Cart.vue'
import Footer from '../../shares/footer/Footer-component.vue';
import { items, item_title, listElectric, listMacbook, listCategory } from '../../shares/Data/Data';
import ListElectric from './Home-List/List-electric.vue';
import ListMacbook from './Home-List/List-macbook.vue';

export default {
    components: {
        Header,
        ListTechGo,
        Footer,
        ListElectric,
        ListMacbook,
        Product,
    },

    data() {
        return {
            isShowHomeList: false,
            isShowListElectric: false,
            isShowListMacbook: false,
            isShow: false,
            showList: false,
            items: items,
            item_title: item_title,
            listElectric: listElectric,
            listMacbook: listMacbook,
            listCategory: listCategory,
            slides: [
                { image: 'https://theme.hstatic.net/200000516791/1000880762/14/slide_2_img.jpg?v=2257' },
                { image: 'https://cdn.tgdd.vn/hoi-dap/963888/khuyenmai-800x450.jpg' },
                { image: 'https://inhat.vn/ha-noi/wp-content/uploads/2019/07/sua-macbook-hoan-kiem-11.jpg' },
            ],
        }
    },

    computed: {

    },

    methods: {
        onClickOutside() {
            this.showList = false;
            this.isShowHomeList = false;
            this.isShowListElectric = false;
            this.isShowListMacbook = false;
        },

        showLists() {
            this.showList = !this.showList;
            this.isShowHomeList = false;
            this.isShowListElectric = false;
            this.isShowListMacbook = false;
        },

        showPlus() {
            this.isShow = !this.isShow;
        },

        showMinus() {
            this.isShow = !this.isShow;
        },

        handleClickTechGo() {
            this.isShowHomeList = !this.isShowHomeList;
            this.isShowListElectric = false;
            this.isShowListMacbook = false;

        },

        handleListElectric() {
            this.isShowListElectric = !this.isShowListElectric;
            this.isShowHomeList = false;
            this.isShowListMacbook = false;
        },

        handleListMacbook() {
            this.isShowListMacbook = !this.isShowListMacbook;
            this.isShowHomeList = false;
            this.isShowListElectric = false;
        }
    },

}
</script>

<style scoped>
.home-header {
    position: relative;
}

.home-header-content {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

.home-content {
    padding: 0 56px;
    display: flex;
    margin-top: 50px;
}

.content-center {
    display: flex;
}

.content-center-li {
    display: flex;
    text-align: center;
    font-size: 0.8em;
}

.content-center-li img {
    width: 90%;
    margin-top: 6px;
    margin-left: 42px;
}

.content-center-img {
    width: 10%;
}

.content-center-text {
    padding: 6px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-center-ul {
    display: flex;
}

.content-left {
    position: relative;
}

.content-left-items {
    position: absolute;
    list-style: none;
    left: 0;
    border: 1px solid #ccc;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 4px 4px 2px rgb(60 64 67 / 15%);
    border-radius: 4px;
    background-color: white;
    height: 565px;
    z-index: 1;

}


.content-left-items li:hover {
    background-color: #f3f5fc;
    color: black;
    cursor: pointer;
    border-left: 3px solid #ffc048;
    transition: 0.3s linear;
}


.content-left-items li a:hover {
    color: black;
    transition: 0.3s linear;
}

.content-left-items li {
    padding: 6px 16px;
    width: 234px;
    font-size: 14px;
    color: #3d3d3d;
}

.content-left-items li a {
    text-decoration: none;
    color: #3d3d3d;
}

.content-left-items li i {
    margin-left: 4px;
}

.home-banner {
    background-color: #ecf0f1;
}

.baner-up {
    display: flex;
}

.baner-img {
    margin-left: 50px;
    padding: 12px 6px;

}

.baner-img img {
    width: 100%;
    border-radius: 8px;
    transition: transform .2s;
}

.baner-img img:hover {
    transform: scale(1.03);
}

.content-home-list {
    position: absolute;
    background-color: white;
    left: 100%;
    border-radius: 8px;
    height: 563px;
    top: 103%;
    display: block;
    z-index: 1;
}

.home-baner-left {
    width: 20%;
}

.home-baner-center {
    width: 55%;
}

.baner-carousel {
    padding: 12px 6px;
    color: white;
    border-radius: 50px;
}

.v-carousel__controls {
    display: none !important;
}

.v-carousel--hide-delimiter-background .v-carousel__controls {
    display: none;
}

.text-h2 img {
    width: 100%;
}

.v-btn--icon.v-btn--density-default {
    color: white;
}

.home-baner-right {
    height: 425px;
    width: 25%;
}

.home-baner-right-img {
    padding-left: 6px;
    padding-right: 18px;
    padding-top: 12px;
}

.home-baner-right-img div {
    height: 33%;
}

.home-baner-right-img img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: inline-block;
    margin-top: 0.5px;
    transition: transform 0.2s;
}

.home-baner-right-img img:hover {
    transform: scale(1.03);
}

.baner-bottom {
    margin-left: 50px;
    display: flex;
    padding-right: 12px;
}

.baner-bottom-img {
    width: 25%;
}

.baner-bottom-img img {
    width: 100%;
    padding: 6px;
    border-radius: 20px;
    transition: transform .2s;
}

.baner-bottom-img img:hover {
    transform: scale(1.05);

}

.v-carousel--hide-delimiter-background .v-carousel__controls {
    display: none;
}

.highlights-category {
    background-color: white;
    margin-left: 55px;
    margin-right: 18px;
}

.highlights-category h2 {
    padding: 20px 16px;
    font-weight: 500;
}

.category-box {
    border: 0.5px solid rgba(0, 0, 0, 0.05);
    width: 14.2859%;
    padding: 8px;
}

.category-box:hover {
    box-shadow: 0 0 4px 2px #ccc;
    transition: ease 0.2s;
    cursor: pointer;
}

.category-item {
    display: flex;
    flex-wrap: wrap;
}

.categoty-img img {
    width: 50%;
}

.categoty-img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.category-text p {
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    padding: 6px;
    font-size: 12px;
}

.products-items {
    margin-left: 10px;
    padding: 12px;
}

.products-items h3 {
    margin-left: 16px;
    padding: 12px;
}

.products-box {
    margin-right: 16px;
}
</style>