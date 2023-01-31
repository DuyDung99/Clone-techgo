<template>
    <div class="body-header">
        <div class="header">
            <div class="header-left">
                <h3>TechGo Shop</h3>
            </div>
            <!-- ---------------------------search------------------------------------- -->

            <div class="header-center">
                <div class="Search">
                    <input type="text" placeholder="Tìm kiếm sản phẩm...">
                    <div class="header-center-button">
                        <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
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
                <div class="header-right-account">
                    <button class="header-right-account-btn">
                        <span><i class="fa-regular fa-circle-user"></i></span>
                        <span class="header-right-span">
                            <span>Đăng ký / Đăng nhập</span>
                        </span>
                    </button>
                </div>
                <div class="header-right-cart">
                    <button class="header-right-cart-btn">
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                        <span class="header-right-span">
                            <span>Giỏ hàng</span>
                            <span class="coutCart">0</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
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
    color: #33d9b2;
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

.header-center-button {
    position: absolute;
    right: 10%;
    bottom: 17%;
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
    margin-top: 9px;
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
</style>