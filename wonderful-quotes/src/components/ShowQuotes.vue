<template>
  <div class="container">
    <div class="quote-box" v-for="(item,index) in quotes" :key="index" @click="removeQuote(index)">
      <p class="quote">
        "
        <b>{{item.quote}}</b>"
      </p>
      <p class="author">- {{item.author}}</p>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    quotes() {
      return this.$store.state.quotes;
    }
  },
  methods: {
    removeQuote(index) {
      this.$store.commit("removeQuotes", index);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.quote-box {
  width: 400px;
  height: 200px;
  background-color: azure;
  border: 1px solid black;
  box-shadow: 2px;
  padding: 10px;
  margin: 20px;
  border-radius: 3px;
}
.quote {
  font-size: 24px;
}
.author {
}
</style>