<template>
    <div class="body-header">
        <div class="header">
            <div class="header-left">
                <router-link to="/">
                    <h3>TechGo Shop</h3>
                </router-link>
            </div>
            <!-- ---------------------------search------------------------------------- -->

            <div class="header-center">
                <div class="Search" v-click-outside="onClickOutside">
                    <input @click="onClickSearch" type="text" placeholder="Tìm kiếm sản phẩm...">
                    <div class="header-center-button">
                        <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div v-if="showSearches" class="header-search">
                        <p>Gợi ý cho bạn:</p>
                        <ul>
                            <li v-for="(searchItems, i) in searchItems" :key="i">{{ searchItems }}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- ---------------------------------------------------------------- -->
            <div class="header-right">
                <div class="header-right-address">
                    <button class="header-right-address-btn">
                        <span style="position: absolute; top: 15%; left: 0;"><i
                                class="fa-sharp fa-solid fa-map-pin"></i></span>
                        <div class="container">
                            <div class="header-right-address-Ripple">
                                <span style="--i:1 "></span>
                                <span style="--i:2 "></span>
                                <span style="--i:3 "></span>
                            </div>
                        </div>
                        <span class="header-right-address-span">
                            <span>Địa chỉ cửa hàng</span>
                            <span class="header-adress">Roman-Tố hữu-Nam Từ Liêm-Hà Nội</span>
                        </span>
                        <div class="header-right-address-hover">
                            <p>Tầng 25,Toà B2 - Roman -Tố hữu - Nam Từ Liêm - Hà Nội</p>
                        </div>
                    </button>
                </div>
                <div class="header-right-account" v-if="showUser">
                    <button class="header-right-account-btn">
                        <span><i class="fa-regular fa-circle-user"></i></span>
                        <span class="header-right-span">
                            <span><router-link to="/SignIn">Đăng nhập / Đăng ký</router-link></span>
                        </span>
                    </button>
                </div>
                <!-- ------------------------------show khi user đã đăng nhập---------------------------------- -->
                <div class="header-right-account" v-else>
                    <button class="header-right-account-btn user-login">
                        <span><i class="fa-regular fa-circle-user"></i></span>
                        <span class="header-right-span user-span">
                            <span>
                                <router-link to="/User">
                                    Tài khoản của <i class="fa-solid fa-chevron-down "></i>
                                    <p class="text-user">{{ userName.firstname }} {{ userName.lastname }}</p>
                                </router-link>
                            </span>
                        </span>
                    </button>
                    <div class="log-out">
                        <ul>
                            <li>
                                <router-link to="/User">
                                    Thông tin tài khoản
                                </router-link>
                            </li>
                            <li @click="handleLogOut()">
                                Đăng xuất
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header-right-cart">
                    <router-link to="/cart">
                        <button class="header-right-cart-btn">
                            <span><i class="fa-solid fa-cart-shopping"></i></span>
                            <span class="header-right-span">
                                <span>Giỏ hàng</span>

                                <span class="coutCart">{{ this.numberCart }}</span>
                            </span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { api } from '../../../api';

export default {
    data() {
        return {
            isShow: false,
            showSearches: false,
            searchItems: ['điện thoại', 'pc-máy tính đồng bộ', 'laptop & macbook', 'đồng hồ thông minh', 'linh kiện máy tính'],
            numberCart: 0,
            showUser: true,
            userName: {},
        }
    },
    methods: {
        reload() {
            location.reload();
        },

        onClickSearch() {
            this.showSearches = !this.showSearches;
        },

        onClickOutside() {
            this.showSearches = false;
        },

        handleLogOut() {
            localStorage.removeItem('access_token');
            this.reload()
        }
    },

    async created() {
        const token = localStorage.getItem('access_token');
        console.log(token);
        const res = await api.getProfile(token);
        if (res.status == 200) {
            this.userName = res.data;
            this.showUser = false
            console.log(this.userName);
        }
    },

}
</script>

<style scoped>
.body-header {
    background-color: #2c3e50;
}

.header {
    display: flex;
    color: white;
    width: 100%;
}

.header-search {
    background-color: white;
    color: black;
    position: absolute;
    top: 101%;
    width: 90%;
    margin-bottom: 16px;
    z-index: 1;
}

.header-search p {
    padding: 8px 24px;
    font-size: 0.9rem;
    color: #767575fb;
}

.header-search li {
    list-style: none;
    text-transform: capitalize;
    padding: 6px 32px;
    font-size: 0.9rem;
}

.header-left {
    width: 20%;
    display: flex;
    align-items: center;
    padding-left: 56px;

}

.header-left h3 {
    width: 100%;
    /* text-align: center; */
}

.header-left h3:hover {
    cursor: pointer;
    transition: color 300ms ease;
    color: #95afc0;
}

/* --------  */
.header-center {
    width: 44%;
    position: relative;
}

.header-center input {
    background-color: white;
    padding: 4px 12px;
    color: black;
    width: 90%;
    outline: none;
    border-radius: 10px;
}

.header-center input:focus {
    outline: 1px solid #f1c40f;
}

.header-center-button {
    position: absolute;
    right: 10%;
    bottom: 0;
    color: white;
    background-color: #f39c12;
    padding: 4px 12px;
    border-radius: 10px;

}

/* --------  */
.header-right {
    display: flex;
    width: 36%;
    align-items: center;
    font-size: 13px;
}


.header-right-address {
    display: flex;
    width: 39.3%;
}

.header-right-account {
    width: 33.3%;
}

.header-right-cart {
    width: 27.3%;
}

.header-right-address-span {
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
}

.header-right-address-btn {
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
}

.header-right-address-btn:hover .header-right-address-hover {
    display: block;
}

.header-right-span {
    margin-left: 8px;

}

.header-right-address,
.header-right-account,
.header-right-cart {
    border-left: 1px solid #ccc;
    padding: 6px 14px;
}

.header-right-cart-btn {
    position: relative;
}

.coutCart {
    border-radius: 50%;
    background-color: red;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 12px;
    right: 50px;
    font-size: 11px;
}

.header-adress {
    width: 156px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
}

.fa-solid {
    font-size: 15px;
}

.fa-regular {
    font-size: 0.9rem;
}

.Search {
    margin-top: 12px;
    position: relative;
}

.header-right-address-hover {
    position: absolute;
    background-color: #243346e5;
    top: 119%;
    display: flex;
    width: 200px;
    left: -8%;
    display: none;

}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .header-right-address-Ripple {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4px;
    left: 5.3px;
}

.container .header-right-address-Ripple span {
    position: absolute;
    border-radius: 50%;
    animation: animate 1s linear infinite;
    transform: rotateX(55deg);
    animation-delay: calc(0.5s * var(--i));
    box-shadow: 0 1px 5px #ffffff
}


a {
    text-decoration: none;
    color: white;
}

@keyframes animate {
    0% {
        width: 0;
        height: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        width: 30px;
        height: 30px;
    }
}

.user-login {
    display: flex;
    justify-content: center;
    align-items: center;
}

.user-login .fa-regular {
    font-size: 1.5rem;
}

.user-span {
    margin-left: 16px;
}

.text-user {
    text-align: start;
}

.fa-chevron-down {
    margin-left: 6px;
    padding-top: 6px;
}

.log-out {
    position: absolute;
    right: 10%;
    top: 100%;
    width: 11.5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #2c3e50;
    background: white;
    display: none;
}

.log-out li {
    list-style: none;
    padding: 8px;
    width: 100%;
    text-align: center;
    cursor: pointer;
}

.log-out li:hover {
    background-color: #2c3e50;
    color: white;
    transition: 0.3s;
}

.log-out a {
    color: #2c3e50;
}

.log-out a:hover {
    color: white;
}

.header-right-account:hover .log-out {
    display: inline-block;
}
</style>