<template>
    <div class="setting-adm">
        <input type="text" placeholder="Search...">
        <i class="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-bell"></i>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.setting-adm {
    display: flex;
}

input {
    padding: 4px 12px;
    border: 1px solid gray;
    border-radius: 8px;
    color: #34495e;
}

input:focus {
    outline: 1px solid #487eb0;
}

i {
    margin-left: 6px;
    padding: 6px;
    font-size: 1.3rem;
}
</style>