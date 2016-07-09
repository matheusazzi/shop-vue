<template>
  <alert></alert>
  <page-header></page-header>
  <coupons></coupons>
  <product-list></product-list>
  <shopping-cart></shopping-cart>
</template>

<script>
import Alert from 'src/components/Alert'
import PageHeader from 'src/components/PageHeader'
import Coupons from './Coupons'
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'

export default {
  components: {
    PageHeader,
    Alert,
    Coupons,
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
</style>
