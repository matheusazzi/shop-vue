<template>
  <ul v-if="products">
    <li v-for="product in products">
      <product></product>
    </li>
  </ul>
</template>

<script>
import { getProducts } from 'src/shop/actions'

export default {
  vuex: {
    getters: {
      products: (state) => state.products
    },
    actions: {
      getProducts
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
