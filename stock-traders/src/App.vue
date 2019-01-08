<template>
  <div id="app">
    <stock-header></stock-header>
    <router-view></router-view>
  </div>
</template>

<script>
import mainInfo from "./components/main-info.vue";
import portfolio from "./components/portfolio.vue";
import stockHeader from "./components/stock-header.vue";
import stocks from "./components/stocks.vue";

export default {
  components: {
    "main-info": mainInfo,
    'portfolio': portfolio,
    "stock-header": stockHeader,
    'stocks': stocks
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>

</style>
