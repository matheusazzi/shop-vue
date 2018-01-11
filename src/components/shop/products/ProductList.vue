<template>
  <div>
    <h3>Products</h3>

    <div class="row" v-for="row in productRows">
      <div class="col-sm-4" v-for="product in row">
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
