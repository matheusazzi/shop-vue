<template>
  <label>
    <input type="checkbox" @change="action"> {{data.title}}
  </label>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    action () {
      this.$dispatch('toggled', this.data)
    }
  }
}
</script>
