<template>
  <button type="button" class="close"
    @click="removeFromCart(product)">
    &times;
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RemoveFromCart',
  props: {
    product: Object
  },
  methods: mapActions([
    'removeFromCart'
  ])
}
</script>
