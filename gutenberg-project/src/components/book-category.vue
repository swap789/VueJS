<template>
  <div>
    <h1>Book Categories</h1>
    <ul v-for="category of categories" :key="category.id">
      <li @click="onClickCategory(category.type)">
        <p>{{category.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bookCategory",
  data() {
    return {
      categories: [
        { id: 1, name: "FICTION", type: "fiction" },
        { id: 2, name: "DRAMA", type: "drama" },
        { id: 3, name: "HUMOR", type: "humor" },
        { id: 4, name: "PLOTICS", type: "politics" },
        { id: 5, name: "PHILOSOPHY", type: "philosophy" },
        { id: 6, name: "ADVENTURE", type: "adventure" }
      ]
    };
  },
  methods: {
    onClickCategory(type) {
      this.$router.push({ name: "bookList", params: { topic: type } });
    }
  }
};
</script>
<style>
h1 {
  text-align: centre;
}

ul {
  list-style-type: none;
}
li {
  border: 1px solid green;
  width: 200px;
  padding: 5px;
  height: 50px;
  cursor: pointer;
  text-align: center;
}
</style>

