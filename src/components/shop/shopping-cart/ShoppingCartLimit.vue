<template>
  <strong>{{limit | currency}}</strong>
</template>

<script>
export default {
  props: {
    limit: String
  }
}
</script>
