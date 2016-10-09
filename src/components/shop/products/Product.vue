<template>
  <li>
    <strong>{{product.title}}</strong>
    <span>{{product.price | formatMoney}}</span>
    <span>Stock: {{product.inventory}}</span>
    <add-to-cart :product="product"></add-to-cart>
  </li>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>
