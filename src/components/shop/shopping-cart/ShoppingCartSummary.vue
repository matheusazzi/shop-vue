<template>
  Subtotal ({{itemsQuantity}} {{itemsQuantity | pluralize 'item'}}): {{subtotal | currency}}
  <br>
  Shipping:
  <span v-if="!freeShipping"> {{shipping | currency}}</span>
  <em v-if="freeShipping"> Free Shipping</em>
  <br>
  Taxes: {{taxes | currency}}
  <br>
  <strong>Total: {{total | currency}}</strong>
</template>

<script>
import {
  itemsQuantity,
  subtotal,
  taxes,
  shipping,
  total
} from 'src/vuex/shop/getters'

export default {
  props: {
    items: Array
  },
  vuex: {
    getters: {
      freeShipping: ({ shoppingCart }) => shoppingCart.freeShipping,
      itemsQuantity,
      subtotal,
      taxes,
      shipping,
      total
    }
  }
}
</script>
