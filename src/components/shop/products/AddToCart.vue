<template>
  <button :disabled="!product.inventory"
    @click="addToCart(product)">
    Add to cart
  </button>
</template>

<script>
import { addToCart } from 'src/vuex/shop/actions'

export default {
  props: {
    product: Object
  },
  vuex: {
    actions: { addToCart }
  }
}
</script>
