<template>
  <li>
    <strong>{{product.title}}</strong>
    <span>{{product.price | currency}}</span>
    <span>Stock: {{product.inventory}}</span>
    <button :disabled="!product.inventory"
      @click="addToCart(product)">
      Add to cart
    </button>
  </li>
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
