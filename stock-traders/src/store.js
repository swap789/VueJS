import Vue from "vue";
import Vuex from "vuex";

import { stocks } from "./data";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    purchasedStocks: [],
    stocks: stocks
  },
  getters: {
    getStocks(state) {
      return state.stocks;
    },
    getFunds(state) {
      return state.funds;
    },
    getPusrchasedStocks(state) {
      return state.purchasedStocks;
    }
  }
});
