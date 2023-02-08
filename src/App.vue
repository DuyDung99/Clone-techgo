<template>
  <div id="App" @wheel="onWheel">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',

  components: {

  },

  data: () => ({
  }),
  methods: {
    onWheel: function (e) {
      console.log("wheeling over " + e.currentTarget.id);
    }
  }
}
</script>
<style>

</style>