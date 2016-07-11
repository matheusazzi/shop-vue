<template>
  <label>
    <input type="checkbox" @change="action(data)"> {{data.title}}
  </label>
</template>

<script>
export default {
  props: {
    data: Object,
    action: Function
  }
}
</script>
