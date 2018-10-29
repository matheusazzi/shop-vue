<template>
  <div>
    <h3>Products</h3>

    <div class="row" v-for="(row, index) in productRows" :key="index">
      <div class="col-sm-4" v-for="product in row" :key="product.id">
        <Product :product="product" track-by="id" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 3)
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
