<template>
  <div>
    <h1>Product List One</h1>
    <ul>
      <li v-for="product of saleProducts" :key="product.key">
        <span>{{product.name}}</span> -
        <span>${{product.price}}</span>
      </li>
    </ul>

    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "productListOne",
  computed: {
    products() {
      return this.$store.state.products;
    },

    ...mapGetters(["saleProducts"])
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // }
  },
  methods: {
    ...mapActions(["reducePrice"])
    // reducePrice() {
    //   this.$store.dispatch("reducePrice");
    // }
  }
};
</script>

