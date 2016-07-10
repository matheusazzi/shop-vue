<template>
  <li>
    <strong>{{item.title}}</strong>
    <span>{{item.price | currency}}</span>
    <span>- {{item.quantity}} {{item.quantity | pluralize 'item'}}</span>
    <remove-from-cart :product="item" :index="index"></remove-from-cart>
  </li>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  props: {
    item: Object,
    index: Number
  },
  components: { RemoveFromCart }
}
</script>
