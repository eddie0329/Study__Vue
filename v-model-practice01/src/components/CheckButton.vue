<template>
  <button @click="onClick">{{ value ? 'V' : ' ' }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClick() {
      this.$emit('input', !this.value);
    }
  }
}
</script>

<style>

</style>