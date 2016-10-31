<template>
  <button type="button" class="btn btn-primary"
    :disabled="!product.inventory"
    @click="addToCart(product)">
    Add to cart
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: Object
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>
