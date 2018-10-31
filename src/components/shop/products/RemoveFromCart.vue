<template>
  <button
    type="button"
    class="close"
    aria-label="Remove"
    @click="removeFromCart(product)"
  >
    <span aria-hidden="true">&times;</span>
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
