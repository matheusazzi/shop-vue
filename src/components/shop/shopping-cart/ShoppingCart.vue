<template>
  <div>
    <h3>Cart</h3>

    <ul v-if="items.length">
      <shopping-cart-item
        v-for="item in items"
        :item="item"
        :key="item.id">
      </shopping-cart-item>
    </ul>

    <shopping-cart-summary></shopping-cart-summary>

    <p>
      <button :disabled="orderOnLimit" @click="buy">Checkout</button>
      <span v-if="orderOnLimit">Order is over limit.</span>
    </p>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    items: 'cartProducts',
    orderOnLimit: 'orderOnLimit'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert('You bought :)')
      window.location.reload()
    }
  }
}
</script>
