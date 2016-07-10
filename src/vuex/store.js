import Vue from 'vue'
import Vuex from 'vuex'
import products from './shop/mutations/products'
import profile from './shop/mutations/profile'
import shoppingCart from './shop/mutations/shopping-cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    profile,
    shoppingCart
  }
})
