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
import { itemsQuantity } from 'src/vuex/shop/getters'

export default {
  props: {
    items: Array
  },
  vuex: {
    getters: {
      freeShipping: ({ shoppingCart }) => shoppingCart.freeShipping,
      itemsQuantity
    }
  },
  computed: {
    subtotal () {
      return this.items.reduce((subtotal, item) => {
        return subtotal + item.price * item.quantity
      }, 0)
    },
    taxes () {
      return this.subtotal * 0.005
    },
    shipping () {
      const shippings = this.items.map(item => item.shipping)

      if (this.freeShipping || !shippings.length) {
        return 0
      } else {
        return Math.max(...shippings)
      }
    },
    total () {
      return this.subtotal + this.taxes + this.shipping
    }
  }
}
</script>
