import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { id: 1, name: "Banana", price: 20 },
            { id: 2, name: "Watermelon", price: 60 },
            { id: 3, name: "Apple", price: 40 },
            { id: 4, name: "Orange", price: 120 }
        ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return {
                    id: product.id,
                    name: "**" + product.name,
                    price: product.price / 2

                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1;
            })
        }
    },
    actions: {
        reducePrice: context => {
            setTimeout(() => {
                context.commit('reducePrice');
            }, 1000);
        }

    }
})