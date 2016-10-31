<template>
  <label class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" @change="action(data)">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">{{data.title}}</span>
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
