<template>
  <div class="main-info-container">
    <ul>
      <li class="main">Trade Cryptocurrencies</li>
      <li>You may buy stocks in the 'Stocks' page</li>
      <li>You may view your portfolio and sell in the 'Portfolio' page</li>
      <li>Use load to load in dummy data live (save currently disabled)</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.main-info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.main{
  font-size:35px; 
}
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 20px;
  flex-direction: column;
  padding: 20p;
  line-height: 81px;
  font-size: 25px;
  margin: auto;
}
</style>