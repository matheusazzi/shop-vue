<template>
  <div>
    <h3>Products</h3>

    <ul v-if="products.length">
      <product
        v-for="product in products"
        :product="product"
        track-by="id">
      </product>
    </ul>
  </div>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>
