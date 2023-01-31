<template>
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
</template>

<script>
import { items, item_title, listElectric, listMacbook, listCategory } from '../../shares/Data/Data';
import ListTechGo from '../../shop/Home/Home-List/List-techgo.vue';
import ListElectric from '../../shop/Home/Home-List/List-electric.vue';
import ListMacbook from '../../shop/Home/Home-List/List-macbook.vue';
export default {
    components: {
        ListTechGo,
        ListElectric,
        ListMacbook
    },
    data() {
        return {
            showList: false,
            isShowHomeList: false,
            isShowListElectric: false,
            isShowListMacbook: false,
            items: items,
            item_title: item_title,
            listElectric: listElectric,
            listMacbook: listMacbook,
            listCategory: listCategory,
        }
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
        },

        showMinus() {
            this.isShow = !this.isShow;
        },


    }

}
</script>

<style scoped>
.home-content {
    padding: 0 56px;
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

.content-center-ul {
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
</style>