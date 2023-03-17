<template>
    <div class="user">
        <div>
            <Header></Header>
            <HeaderList></HeaderList>
        </div>
        <div class="user-info">
            <div class="user-info-block">
                <div class="user-info-left">
                    <h4>Tài khoản</h4>
                    <ul>
                        <li @click="selected = 'Acount'" :class="selected == 'Acount' ? 'info-color' : ''">Thông tin tài
                            khoản
                        </li>
                        <li @click="selected = 'ListAdress'" :class="selected == 'ListAdress' ? 'info-color' : ''">Danh sách
                            địa
                            chỉ</li>
                        <li @click="selected = 'OderDetail'" :class="selected == 'OderDetail' ? 'info-color' : ''">Chi tiết
                            đơn
                            hàng</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
                <div class="user-info-right">
                    <component :is="selected" :userData="userData"></component>
                </div>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from '../../shares/header/Header-component.vue';
import HeaderList from '../../shares/header/Header-list.vue';
import Acount from '../user/Account-component.vue';
import ListAdress from '../user/Lits-address-component.vue';
import Footer from '../../shares/footer/Footer-component.vue'
import OderDetail from '../../shop/user/OderDetail-component.vue'

export default {
    components: {
        Header,
        HeaderList,
        Acount,
        ListAdress,
        Footer,
        OderDetail,
    },

    data() {
        return {
            selected: 'Acount',
            userData: {
                email: '',
                address: '',
                firstname: '',
                lastname: '',
                phone_number: '',
            },
        }
    },

    // async created() {
    //     const token = localStorage.getItem('access_token');
    //     console.log(token);
    //     const res = await api.getProfile(token);
    //     if (res.status == 200) {
    //         this.userData = res.data;
    //         console.log(this.userData);
    //     }
    // },
}
</script>

<style scoped>
.info-color {
    background-color: #95959585;
}

.user-info {
    background-color: #e7e6e685;
    padding: 60px 0;
    margin-bottom: 50px;
    border-top: 1px solid #eae4e8;

}

.user-info-block {
    display: flex;

}

.user-info-left {
    padding: 60px 50px;
    width: 25%;
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
    width: 75%;
    border-left: 1px solid #eae4e8;
}

::v-deep .header-left a {
    text-decoration: none;
    color: white;
}
</style>