<template>
  <header v-if="profile.limit">
    Hello <strong>{{fullName}}</strong>, your credit limit is <shopping-cart-limit :limit="profile.limit"></shopping-cart-limit>
  </header>
</template>

<script>
import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
import { getProfile } from 'src/vuex/shop/actions'

export default {
  vuex: {
    getters: {
      profile: ({ profile }) => profile.data
    },
    actions: {
      getProfile
    }
  },
  computed: {
    fullName () {
      return `${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  components: { ShoppingCartLimit },
  created () {
    this.getProfile()
  }
}
</script>
