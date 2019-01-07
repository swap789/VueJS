<template>
  <div>
    <div class="add-quote">
      <label for>
        <b>Quote</b>
      </label>
      <input type="text" placeholder="quote" v-model="quote">
      <br>
      <label for>
        <b>Author</b>
      </label>
      <input type="text" placeholder="author" v-model="author">
      <button @click="addQuote">Add Quote</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "",
      author: ""
    };
  },
  methods: {
    addQuote() {
      let quoteData = {
        quote: this.quote,
        author: this.author
      };
      this.$store.commit("addQuotes", quoteData);
      this.quote = "";
      this.author = "";
    }
  }
};
</script>

<style scoped>
.add-quote {
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  /* width: 329px; */
  max-width: 350px;
}
input {
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid blueviolet;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
}
button {
  width: 100px;
  padding: 10px;
  margin-left: 246px;
  border-radius: 3px;
  border: 1px solid blueviolet;
  cursor: pointer;
  background-color: Cyan;
}
</style>