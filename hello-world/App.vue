<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import productListOne from "./vuex/productListOne.vue";
import productListTwo from "./vuex/productListTwo.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    "product-list-one": productListOne,
    "product-list-two": productListTwo
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
