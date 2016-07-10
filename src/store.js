import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './shop/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
