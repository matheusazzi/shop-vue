<template>
  <h3>Cart</h3>

  <ul v-if="items">
    <shopping-cart-item
      v-for="item in items"
      :item="item"
      :index="$index"
      track-by="id">
    </shopping-cart-item>
  </ul>

  <shopping-cart-summary :items="items"></shopping-cart-summary>
  <br>
  <button :disabled="orderOnLimit" @click="buy">Checkout</button>
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
    }
  }
}
</script>
