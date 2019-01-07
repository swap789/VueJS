<template>
  <div>
    <h1>The Super Quiz</h1>
    <hr>
    <div class="quiz-box">
      <div class="quetion">
        <div class="quetion-text">{{currentQuetion.quetion}}</div>
      </div>
      <ul class="options-main">
        <li
          class="options"
          v-for="(option,index) in currentQuetion.options"
          :key="index"
          @click="checkAnswer(option)"
        >{{option}}</li>
      </ul>
      <button class="next-btn" @click="nextQuetion">Next Quetion</button>
    </div>
  </div>
</template>

<script>
import { DATA } from "../Data/data.js";

export default {
  data() {
    console.log(this.currentQuetion);
    return {
      currentQuetion: null
    };
  },
  created() {
    let index = this.getRandom(8);
    let newData = DATA;
    this.currentQuetion = newData[index];
  },

  methods: {
    getRandom(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },

    checkAnswer(selctedOption) {
      let result = this.currentQuetion.options.find(option => {
        return selctedOption === option;
      });
      if (result === this.currentQuetion.answer) {
        alert("Correct Answer");
      } else {
        alert("Wrong Answer");
      }
    },

    nextQuetion() {
      let index = this.getRandom(8);
      let newData = DATA;
      this.currentQuetion = Object.assign(newData[index]);
      console.log(this.currentQuetion);
    }
  }
};
</script>

<style scoped>
.quiz-box {
  width: 500px;
  height: 185px;
  border: 1px solid black;
  margin: auto;
}
.quetion {
  background-color: #f5f5f5;
  border-color: #ddd;
  height: 55px;
  border-bottom: 1px solid #ddd;
}
.options {
  width: 40px;
  height: 20px;
  border: 1px solid blue;
  border-radius: 3px;
  background-color: cyan;
  color: black;
  text-align: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
.options-main {
  display: flex;
  margin: auto;
  justify-content: space-evenly;
}
.quetion-text {
  text-align: center;
  padding: 10px;
  padding-top: 17px;
}
.next-btn {
  padding: 15px;
  margin: 10px;
  background-color: aquamarine;
  border-radius: 3px;
  border: 1px solid aqua;
  cursor: pointer;
}
</style>