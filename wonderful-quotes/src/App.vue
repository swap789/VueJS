<template>
  <div id="app">
    <add-quotes></add-quotes>
    <progress-bar></progress-bar>
    <show-quotes></show-quotes>
  </div>
</template>

<script>
import AddQuotes from "./components/AddQuotes.vue";
import ProgressBar from "./components/ProgressBar.vue";
import ShowQuotes from "./components/ShowQuotes.vue";

export default {
  name: "app",
  components: {
    "add-quotes": AddQuotes,
    "progress-bar": ProgressBar,
    "show-quotes": ShowQuotes
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>

</style>
