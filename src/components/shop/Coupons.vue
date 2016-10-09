<template>
  <div>
    <h3>Promotions</h3>

    <ul v-if="promotions.length">
      <li v-for="coupon in promotions" :key="coupon.id">
        <toggle :data="coupon" :action="toggleCoupon"></toggle>
      </li>
    </ul>
  </div>
</template>

<script>
import Toggle from './../shared/Toggle'
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    promotions: state => state.promotions.all
  }),
  methods: mapActions([
    'getPromotions',
    'toggleCoupon'
  ]),
  components: { Toggle },
  created () {
    this.getPromotions()
  }
}
</script>
