<template>
  <h3>Promotions</h3>

  <ul v-if="promotions.length">
    <li v-for="coupon in promotions" track-by="id">
      <toggle :data="coupon" :action="toggleCoupon"></toggle>
    </li>
  </ul>
</template>

<script>
import Toggle from './../shared/Toggle'
import { getPromotions, toggleCoupon } from 'src/vuex/shop/actions'

export default {
  vuex: {
    getters: {
      promotions: ({ promotions }) => promotions.all
    },
    actions: {
      getPromotions,
      toggleCoupon
    }
  },
  components: { Toggle },
  created () {
    this.getPromotions()
  }
}
</script>
