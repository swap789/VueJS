<template>
  <div>
    <div class="middle-content">
      <h2>Quotes Added : {{quoteLength}} of 10</h2>
      <div class="progress-bar">
        <div class="my-bar" v-bind:style="{ width: width+'%' }"></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      quoteLength: "length",
      width: "getWidth"
    })
  }
};
</script>
<style scoped>
.middle-content {
  margin: 10px;
  margin-bottom: 30px;
}
h2 {
  text-align: center;
}
.progress-bar {
  max-width: 1200px;
  width: 100%;

  border: 1px solid black;
  margin: auto;
  border-radius: 3px;
}
.my-bar {
  height: 50px;
  background-color: forestgreen;
}
</style>