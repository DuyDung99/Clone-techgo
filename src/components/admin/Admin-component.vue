<template>
    <div class="admin">
        <div class="admin-box">
            <MenuAdm></MenuAdm>
        </div>
    </div>
</template>

<script>
import MenuAdm from '../admin/share/MenuAdm-component.vue'
export default {
    components: {
        MenuAdm
    }
}
</script>

<style scoped>
.admin {
    background-color: #ecf0f1;
    min-height: 100vh;
}

.admin-box {
    padding: 16px;
}
</style>