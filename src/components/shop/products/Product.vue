<template>
  <li>
    <thumb></thumb>
    <strong>{{product.title}}</strong>
    <span>{{product.price | currency}}</span>
    <button :disabled="!product.inventory"
      @click="addToCart(product)">
      Add to cart
    </button>
  </li>
</template>

<script>
import Thumb from './../../shared/thumb'
import { addToCart } from 'src/vuex/shop/actions'

export default {
  props: {
    product: Object
  },
  vuex: {
    actions: { addToCart }
  },
  components: { Thumb }
}
</script>
