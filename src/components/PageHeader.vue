<template>
  <header v-if="profile">
    Hello {{fullName}}, your credit limit is <strong>{{profile.limit}}</strong>
  </header>
</template>

<script>
import { getProfile } from 'src/shop/actions'

export default {
  vuex: {
    getters: {
      profile: (state) => state.profile
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
  created () {
    this.getProfile()
  }
}
</script>
