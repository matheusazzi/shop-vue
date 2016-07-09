import Vue from 'vue'
import Shop from './shop/components/Shop'

new Vue({
  el: 'body',
  components: { Shop }
})

// src/
//   api/
//   components/
//     thumb.vue
//     header.vue
//     alert.vue
//     toggle-button.vue
//   shop/
//     components/
//       shopping-cart/
//         shopping-cart.vue
//         shopping-cart-limit.vue
//         shopping-cart-summary.vue
//       products/
//         product-list.vue
//         product.vue
//         add-to-cart.vue
//         remove-from-cart.vue
//       shop.vue
//       coupons.vue
//     mutations.js
//     actions.js
//     getters.js
//     store.js
//   filters/
//     currency.js
//     pluralize.js
// main.js

// Shop
  // Alert
  // Header
    // ShoppingCartLimit
  // Coupons
    // ToggleButton
  // ProductList
    // Product
      // Thumb
      // AddToCart
      // RemoveFromCart
  // ShoppingCart
    // ProductList
      // ..
    // ShoppingCartSummary
