import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import bookCategories from './components/book-category.vue';
import bookList from './components/book-list.vue';

Vue.use(VueRouter);

export const routes = [
  { name: 'categories', path: '/categories', component: bookCategories },
  { name: 'bookList', path: '/book-list/:topic', component: bookList },
  { path: '/', redirect: '/categories' },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
