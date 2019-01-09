import mainInfo from "./components/main-info.vue";
import portfolio from "./components/portfolio.vue";
import stocks from "./components/stocks.vue";

export default [
  {
    path: "/stock-trader",
    component: mainInfo
  },
  {
    path: "/portfolio",
    component: portfolio
  },
  {
    path: "/stocks",
    component: stocks
  },
  { path: "", redirect: "/stock-trader" }
];
