<template>
  <div class="stock-list">
    <div class="stocks" v-for="stock in stocks" :key="stock.id">
      <div class="currency">
        <p class="currency-name">{{stock.stockName}}</p>
        <p class="current-price">Current price: ${{stock.price}}</p>
      </div>
      <div class="middle">
        <input type="number" v-model="count">
        <button @click="buyShare(stock)">Buy</button>
      </div>
      <div class="paying-price">{{stock.pusrchasedAmt}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      isActive: false
    };
  },
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    }
  },

  methods: {
    buyShare(stock) {
      const newStock = this.stocks.find(item => {
        return item.id === stock.id;
      });
      if (this.count > 0) {
        newStock.count = Number(this.count);
        newStock.pusrchasedAmt = stock.price * newStock.count;
        let index = this.stocks.indexOf(newStock);
        this.$store.state.stocks[index] = newStock;
        this.$store.state.purchasedStocks.push(newStock);
        this.count = 0;
        console.log(this.$store.state.stocks[index]);
      } else {
        alert("Enter Valid stock count");
      }
    }
  }
};
</script>


<style scoped>
.stock-list {
  width: 60%;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
}
.stocks {
  width: 300px;
  height: 162px;
  border: 1px solid #337ab7;
  border-radius: 3px;
  margin: 10px;
}
.currency {
  height: 40px;
  background-color: #337ab7;
  display: flex;
  color: white;
}
.currency-name {
  font-size: 20px;
  margin: 13px 12px 9px 5px;
}
.middle {
  height: 60px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 0px 10px;
}
input {
  height: 25px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100px;
}
.paying-price {
  height: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  text-align: center;
}
button {
  padding: 8px;
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  width: 60px;
}
</style>