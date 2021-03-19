<template>
  <h1>HELLO {{ value }}</h1>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
</style>