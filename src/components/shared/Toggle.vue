<template>
  <label class="custom-control custom-control-inline custom-checkbox">
    <input type="checkbox" class="custom-control-input" @change="action(data)">
    <span class="custom-control-label">{{data.title}}</span>
  </label>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    data: Object,
    action: Function
  }
}
</script>
