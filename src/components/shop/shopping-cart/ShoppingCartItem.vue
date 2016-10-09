<template>
  <li>
    <strong>{{item.title}}</strong>
    <span>{{item.price | formatMoney}}</span>
    <span>- {{item.quantity}} {{'item' | pluralize(item.quantity) }}</span>
    <remove-from-cart :product="item"></remove-from-cart>
  </li>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>
