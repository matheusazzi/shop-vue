<template>
  <h3>Cart</h3>

  <ul v-if="items.length">
    <shopping-cart-item
      v-for="item in items"
      :item="item"
      :index="$index"
      track-by="id">
    </shopping-cart-item>
  </ul>

  <shopping-cart-summary></shopping-cart-summary>

  <p>
    <button :disabled="orderOnLimit" @click="buy">Checkout</button>
    <span v-if="orderOnLimit">Order is over limit.</span>
  </p>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { cartProducts, orderOnLimit } from 'src/vuex/shop/getters'

export default {
  vuex: {
    getters: {
      items: cartProducts,
      orderOnLimit
    }
  },
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
