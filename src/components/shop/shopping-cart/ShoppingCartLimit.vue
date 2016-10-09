<template>
  <strong>{{limit | formatMoney}}</strong>
</template>

<script>
export default {
  props: {
    limit: Number
  }
}
</script>
