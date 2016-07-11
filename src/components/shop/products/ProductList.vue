<template>
  <h3>Products</h3>

  <ul v-if="products.length">
    <product
      v-for="product in products"
      :product="product"
      track-by="id">
    </product>
  </ul>
</template>

<script>
import { getProducts } from 'src/vuex/shop/actions'
import Product from './Product'

export default {
  vuex: {
    getters: {
      products: ({ products }) => products.all
    },
    actions: {
      getProducts
    }
  },
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>
