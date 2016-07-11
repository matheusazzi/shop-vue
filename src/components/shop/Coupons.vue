<template>
  <h3>Promotions</h3>

  <ul>
    <li v-for="coupon in promotions" track-by="id">
      <label>
        <input type="checkbox" @change="toggleCoupon(coupon)"> {{coupon.title}}
      </label>
    </li>
  </ul>
</template>

<script>
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
  created () {
    this.getPromotions()
  }
}
</script>
