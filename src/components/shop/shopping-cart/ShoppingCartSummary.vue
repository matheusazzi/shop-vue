<template>
  <div>
    Subtotal ({{itemsQuantity}} {{itemsQuantity | pluralize 'item'}}): {{subtotal | currency}}
    <em v-if="productDiscount"><b> (30% OFF applied)</b></em>
  </div>

  <div>
    Shipping:
    <span v-if="!freeShipping"> {{shipping | currency}}</span>
    <em v-if="freeShipping"> Free Shipping</em>
  </div>

  <div>Taxes: {{taxes | currency}}</div>

  <div>
    <strong>Total:</strong>
    <strong v-if="!totalDiscount"> {{total | currency}}</strong>
    <span v-if="totalDiscount">
      <strike> {{total | currency}}</strike>
      <strong> {{totalWithDiscount | currency}}</strong>
    </span>
  </div>
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
      productDiscount: ({ shoppingCart }) => shoppingCart.productDiscount,
      freeShipping: ({ shoppingCart }) => shoppingCart.freeShipping,
      totalDiscount: ({ shoppingCart }) => shoppingCart.totalDiscount,
      itemsQuantity,
      subtotal,
      taxes,
      shipping,
      total
    }
  },
  computed: {
    totalWithDiscount () {
      const withDiscout = this.total - 100
      return withDiscout > 0 ? withDiscout : 0
    }
  }
}
</script>
