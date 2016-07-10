<template>
  <button @click="removeFromCart(product, index)">x</button>
</template>

<script>
import { removeFromCart } from 'src/vuex/shop/actions'

export default {
  props: {
    product: Object,
    index: Number
  },
  vuex: {
    actions: { removeFromCart }
  }
}
</script>
