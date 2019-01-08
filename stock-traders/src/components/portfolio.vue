<template>
  <div class="stock-list">
    <div class="stocks" v-for="stock in purchasedStocks" :key="stock.id">
      <div class="currency">
        <p class="currency-name">{{stock.stockName}}</p>
        <p class="current-price">Current price: ${{stock.price}}</p>
        <p>Amount: {{stock.count}}</p>
      </div>
      <div class="middle">
        <input type="number" v-model="purchasedCount">
        <button @click="sellStock(stock)">Sell</button>
      </div>
      <div class="paying-price">{{stock.pusrchasedAmt}}</div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    purchasedStocks() {
      return this.$store.getters.getPusrchasedStocks;
    }
  },
  data() {
    return {
      purchasedCount: 0
    };
  },
  methods: {
    sellStock(stock) {
      if (this.purchasedCount > 0) {
        const newStock = this.purchasedStocks.find(item => {
          return stock.id === stock.id;
        });
        if (newStock.count >= this.purchasedCount) {
          newStock.count = Number(this.purchasedCount);
          newStock.purchasedCount = Number(newStock.purchasedCount);
          newStock.count = newStock.count - newStock.purchasedCount;

          let sellingAmount = stock.price * newStock.purchasedCount;
          newStock.pusrchasedAmt = newStock.pusrchasedAmt - sellingAmount;
          let index = this.purchasedStocks.indexOf(newStock);
          this.$store.state.purchasedStocks.splice(index, newStock);
        } else {
          alert("You dont have enough stocks to sell");
        }
      } else {
        alert("Enetr Valid amount of stocks");
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
  background-color: #d9534f;
  border-color: #d43f3a;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  width: 60px;
}
</style>

