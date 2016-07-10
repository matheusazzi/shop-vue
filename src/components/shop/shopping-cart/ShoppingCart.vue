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
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import { cartProducts } from 'src/vuex/shop/getters'

export default {
  vuex: {
    getters: {
      items: cartProducts
    }
  },
  components: { ShoppingCartItem }
}
</script>
