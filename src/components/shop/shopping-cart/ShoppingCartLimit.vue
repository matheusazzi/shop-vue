<template>
  <strong>{{limit | formatMoney}}</strong>
</template>

<script>
export default {
  name: 'ShoppingCartLimit',
  props: {
    limit: Number
  }
}
</script>
