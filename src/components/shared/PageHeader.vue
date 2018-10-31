<template>
  <nav class="navbar navbar-light bg-light" v-if="profile.limit">
    <div class="container">
      <a class="navbar-brand" href="/">Shop</a>

      <span class="navbar-text float-right">
        Hello <strong>{{fullName}}</strong>, your credit limit is
         <ShoppingCartLimit :limit="profile.limit" />
      </span>
    </div>
  </nav>
</template>

<script>
import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageHeader',
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
