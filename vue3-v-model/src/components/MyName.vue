<template>
  <input type="text" :value="firstName" @input="onInputFirstName">
  <input type="text" :value="lastName" @input="onInputLastName">
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInputFirstName(e) {
      this.$emit('update:first-name', e.target.value);
    },
    onInputLastName(e) {
      this.$emit('update:last-name', e.target.value);
    }
  }
}
</script>

<style>

</style>