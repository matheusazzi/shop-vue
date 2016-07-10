import Vue from 'vue'
import Vuex from 'vuex'
import products from './shop/modules/products'
import profile from './shop/modules/profile'
import promotions from './shop/modules/promotions'
import shoppingCart from './shop/modules/shopping-cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    profile,
    promotions,
    shoppingCart
  }
})
