<template>
  <button @click="removeFromCart(product)">x</button>
</template>

<script>
import { removeFromCart } from 'src/vuex/shop/actions'

export default {
  props: {
    product: Object
  },
  vuex: {
    actions: { removeFromCart }
  }
}
</script>
