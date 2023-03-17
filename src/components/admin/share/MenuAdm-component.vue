<template>
    <div class="MenuAdmin">
        <div class="admin-content">
            <div class="admin-box admin-left">
                <div class="techgo-header">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <span>TechGo Shop</span>
                </div>
                <ul class="menu-list">
                    <li @click="selected = 'UserManagement'" :class="[selected == 'UserManagement' ? 'color-grenn' : '']">
                        <i class="fa-solid fa-id-card"></i>
                        <span>User Management</span>
                    </li>
                    <li @click="selected = 'ProductManagement'"
                        :class="[selected == 'ProductManagement' ? 'color-grenn' : '']">
                        <i class="fa-solid fa-list-check"></i>
                        <span>Products Management</span>
                    </li>
                    <li @click="selected = 'OderManagement'" :class="[selected == 'OderManagement' ? 'color-grenn' : '']">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>Oder Management</span>
                    </li>
                </ul>
                <router-link to="/LoginAdmin"><button class="btn">Đăng Xuất</button></router-link>
            </div>
            <div class="admin-right">
                <component :is="selected"></component>
            </div>
        </div>
    </div>
</template>

<script>
import UserManagement from '../../admin/management/UserManagement.vue';
import ProductManagement from '../../admin/management/ProductManagement.vue';
import OderManagement from '../../admin/management/OderManagement.vue';

export default {
    components: {
        UserManagement,
        ProductManagement,
        OderManagement,
    },
    data() {
        return {
            selected: 'UserManagement',
        }
    },
    methods: {
        UserManagement() {
            this.selected = 'UserManagement'
        }
    }
}
</script>

<style scoped>
.admin-content {
    color: white;
    display: flex;
}

.admin-box {
    min-height: 90vh;
}

.techgo-header {
    border-bottom: 1px solid #b2bec3;
    padding: 12px 24px;
}

.techgo-header span {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.techgo-header i {
    font-size: 1.5rem;
    margin-right: 12px;
}

.menu-list {
    padding: 12px;
}

.menu-list li {
    list-style: none;
    padding: 18px 24px;
    cursor: pointer;
    display: flex;
}

.menu-list li i {
    margin-right: 12px;
    font-size: 1.2rem;
}

.menu-list li span {
    font-size: 0.9rem;
    font-weight: 600;
}

.admin-right {
    width: 80%;
}

.admin-left {
    width: 20%;
    background-color: #2d3436;
    border-radius: 12px;
    margin-right: 24px;
    position: relative;
}

.color-grenn {
    background-color: #487eb0;
    border-radius: 16px;
}

.btn {
    width: 92%;
    background-color: #487eb0;
    padding: 18px 24px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    margin: 0 12px;
    position: absolute;
    bottom: 2%;
}

.btn:hover {
    background-color: #0c2461;
    transition: 0.2s linear;

}

.admin-left a {
    text-decoration: none;
    color: white;
}
</style>