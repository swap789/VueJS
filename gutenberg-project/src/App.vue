<template>
  <div id="app">
    <!-- <book-category></book-category> -->
    <router-view></router-view>
  </div>
</template>

<script>
import bookCategory from "./components/book-category.vue";

export default {
  name: "app",
  // components: {
  //   "book-category": bookCategory
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
