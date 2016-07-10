<template>
  <h3>Promotions</h3>

  <ul>
    <li v-for="coupon in promotions" track-by="id">
      <label><input type="checkbox"> {{coupon.title}}</label>
    </li>
  </ul>
</template>

<script>
import { getPromotions } from 'src/vuex/shop/actions'

export default {
  vuex: {
    getters: {
      promotions: ({ promotions }) => promotions.all
    },
    actions: {
      getPromotions
    }
  },
  created () {
    this.getPromotions()
  }
}
</script>
