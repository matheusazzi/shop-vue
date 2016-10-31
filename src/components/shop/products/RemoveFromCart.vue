<template>
  <button type="button" class="close"
    @click="removeFromCart(product)">
    &times;
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: Object
  },
  methods: mapActions([
    'removeFromCart'
  ])
}
</script>
