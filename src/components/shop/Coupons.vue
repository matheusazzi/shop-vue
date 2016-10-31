<template>
  <div class="mt-2">
    <h3>Promotions</h3>

    <toggle
      :data="coupon"
      :action="toggleCoupon"
      v-for="coupon in promotions"
      :key="coupon.id">
    </toggle>
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
