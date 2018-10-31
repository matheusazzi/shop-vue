<template>
  <div class="card text-center">
    <div class="card-img-top vue-logo"></div>

    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.price | formatMoney}} - Stock: {{product.inventory}}</p>
      <AddToCart :product="product" />
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>

<style scoped>
  .vue-logo {
    padding-bottom: 75%;
    background: url('./../../../assets/logo.png') no-repeat center center #ddd;
    background-size: 40%;
  }
</style>
