<template>
  Subtotal ({{itemsQuantity}} {{itemsQuantity | pluralize 'item'}}) - {{subtotal | currency}}
  <br>
  Shipping - {{shipping | currency}}
  <br>
  Taxes - {{taxes | currency}}
  <br>
  <strong>Total - {{total | currency}}</strong>
</template>

<script>
export default {
  props: {
    items: Array
  },
  computed: {
    itemsQuantity () {
      return this.items.reduce((quantity, item) => {
        return quantity + item.quantity
      }, 0)
    },
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
      return shippings.length ? Math.max(...shippings) : 0
    },
    total () {
      return this.subtotal + this.taxes + this.shipping
    }
  }
}
</script>
