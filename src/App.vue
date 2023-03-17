<template>
  <div id="App">
    <router-view></router-view>
  </div>
<!-- <div @wheel="onWheel"></div> --></template>

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
<style></style>