import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    quotes: [
      { quote: "I have a dream", author: "Martin Luther King" },
      {
        quote: "To be or not to be, that is the question",
        author: "William Shakespeare "
      },
      {
        quote: "You don't understand it fully if you can't explain it simply",
        author: "Albert Einstein"
      }
    ],
    width: 0
  },
  getters: {
    length(state) {
      return state.quotes.length;
    },
    getWidth(state) {
      return state.quotes.length * 10;
    }
  },
  mutations: {
      addQuotes(state, payload) {
      if (state.quotes.length === 10) {
        alert("Maximum number reached, remove one to add another");
        return;
      }
      state.quotes.push(payload);
    },

    removeQuotes(state, index) {
      state.quotes.splice(index, 1);
    },
    calculateWidth(state) {
      return state.width * 10;
    }
  }
});
