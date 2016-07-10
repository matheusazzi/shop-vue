<template>
  <page-header></page-header>
  <coupons></coupons>
  <product-list></product-list>
  <shopping-cart></shopping-cart>
</template>

<script>
import PageHeader from './../shared/PageHeader'
import Coupons from './Coupons'
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'

export default {
  components: {
    PageHeader,
    Coupons,
    ProductList,
    ShoppingCart
  }
}
</script>
