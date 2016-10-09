<template>
  <header v-if="profile.limit">
    Hello <strong>{{fullName}}</strong>, your credit limit is <shopping-cart-limit :limit="profile.limit"></shopping-cart-limit>
  </header>
</template>

<script>
import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      profile: state => state.profile.data
    }),
    fullName () {
      return `${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  methods: mapActions([
    'getProfile'
  ]),
  components: { ShoppingCartLimit },
  created () {
    this.getProfile()
  }
}
</script>
