import Vue from 'vue'
import Shop from './components/shop/Shop'
import store from './vuex/store'

Vue.config.debug = true

new Vue({
  el: 'body',
  store,
  components: { Shop }
})
