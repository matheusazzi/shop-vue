import Vue from 'vue'
import accounting from 'accounting'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'

Vue.config.productionTip = false

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

new Vue({
  store,
  render: h => h(Shop)
}).$mount('#shop')
