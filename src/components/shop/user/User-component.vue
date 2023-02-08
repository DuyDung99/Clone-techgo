<template>
    <div class="user">
        <div>
            <Header></Header>
            <HeaderList></HeaderList>
        </div>
        <div class="user-info">
            <div class="user-h2">
                <h2>Tài khoản của bạn</h2>
            </div>
            <div class="user-info-block">
                <div class="user-info-left">
                    <h4>Tài khoản</h4>
                    <ul>
                        <li @click="selected = 'Acount'">Thông tin tài khoản</li>
                        <li @click="selected = 'ListAdress'">Danh sách địa chỉ</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
                <div class="user-info-right">
                    <component :is="selected"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../shares/header/Header-component.vue';
import HeaderList from '../../shares/header/Header-list.vue';
import Acount from '../user/Account-component.vue';
import ListAdress from '../user/Lits-address-component.vue';
export default {
    components: {
        Header,
        HeaderList,
        Acount,
        ListAdress,
    },

    data() {
        return {
            selected: 'Acount',
        }
    }
}
</script>

<style scoped>
.user-info {
    background-color: #e7e6e685;
    padding: 60px 0;
    margin-bottom: 50px;
    border-top: 1px solid #eae4e8;

}

.user-info-block {
    display: flex;

}

.user-h2 {
    margin-bottom: 24px;
}

.user-h2 h2 {
    display: flex;
    justify-content: center;
    position: relative;
    font-weight: 600;
}

.user-h2::after {
    content: '';
    width: 80px;
    height: 2px;
    background-color: black;
    position: absolute;
    right: 48%;
    top: 43%;
}

.user-info-left {
    padding: 50px;
    width: 30%;
}

.user-info-left h4 {
    padding: 6px;
    border-bottom: 1px solid #eae4e8;
}

.user-info-left li {
    list-style: none;
    padding: 6px;
    font-size: 0.9rem;
    cursor: pointer;
}

.user-info-left li:hover {
    color: #2980b9;
    transition: 0.5s;
}

.user-info-right {
    width: 70%;
}
</style>