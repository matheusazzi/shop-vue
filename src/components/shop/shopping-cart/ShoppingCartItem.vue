<template>
  <li>
    <thumb></thumb>
    <strong>{{item.title}}</strong>
    <span>{{item.price | currency}}</span>
    <span>- {{item.quantity}} {{item.quantity | pluralize 'item'}}</span>
    <button @click="removeFromCart(item, index)">x</button>
  </li>
</template>

<script>
import Thumb from './../../shared/thumb'
import { removeFromCart } from 'src/vuex/shop/actions'

export default {
  props: {
    item: Object,
    index: Number
  },
  vuex: {
    actions: { removeFromCart }
  },
  components: { Thumb }
}
</script>
