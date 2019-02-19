<template>
  <div>
    <h1>Product List Two</h1>
    <ul>
      <li v-for="product of products" :key="product.key">
        <span>{{product.name}}</span> -
        <span>${{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "productListTwo",
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

