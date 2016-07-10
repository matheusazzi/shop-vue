import Vue from 'vue'
import Shop from './shop/components/Shop'
import store from './store'

Vue.config.debug = true

new Vue({
  el: 'body',
  store,
  components: { Shop }
})
