<template>
  <div>
    <header>
      <div class="header-content">
        <ul class="first-options">
          <li class="stock-trader">
            <router-link class to="/stock-trader" exact>Stock Trader</router-link>
          </li>
          <li>
            <router-link class to="/portfolio" exact>Portfolio</router-link>
          </li>
          <li>
            <router-link class to="/stocks" exact>Stocks</router-link>
          </li>
        </ul>
        <ul class="last-options">
          <li>
            <Button>Next Day</Button>
          </li>
          <li>Save & Load</li>
          <li>Funds ${{funds}}</li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.getFunds;
    }
  }
};
</script>

<style scoped>
header {
  width: 60%;
  margin: auto;
  height: 50px;
  background-color: black;
  border-radius: 3px;
  padding: 5px;
}
.header-content {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
ul {
  color: #9d9d9d;
  list-style: none;
  display: flex;
  flex-direction: row;
  padding-left: 5px;
}
li:hover {
  color: white;
}
li {
  padding: 5px;
  margin: -3px 7px 5px 0px;
}
.stock-trader {
  font-size: 20px;
  margin: -7px 10px 6px 2px;
}
button {
  border-radius: 3px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  padding: 10px;
  margin-top: -10px;
  cursor: pointer;
}
.first-options {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #9d9d9d;
}
a:hover {
  color: white;
}
</style>