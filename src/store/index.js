import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products: [
            {
                Name: "Test Product",
                Price: 50
            },
            {
                Name: "Test Product 2",
                Price: 60
            }
        ]
    },
    getters: {
        saleProducts: function (state){
            var saleProducts = state.products.map(function(product){
                return {
                    Name: '**'+product.Name+'**',
                    Price: product.Price/2
                }
            })

            return saleProducts
        },
        buyProducts: function(state){
            var buyProducts = state.products.map(function(product){
                return {
                    Name: '##'+product.Name+'##',
                    Price: product.Price * 2
                }
            })
            return buyProducts
        }
    },
    mutations: {
        reducePrice(state, payload){
            return state.products.forEach(element => {
                element.Price -= payload
            });
        },
        increasePrice(state, payload){
            return state.products.forEach(element => {
                element.Price += payload
            })
        }
    },

    actions:{
        reducePrice: (context, payload) =>{
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 3000)
        },
        increasePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('increasePrice', payload)
            }, 2000)
        }
    }
})