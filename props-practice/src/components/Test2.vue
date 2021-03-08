<template>
  <div>
    <h1>TEST2</h1>
    <h2>name: {{ name }}</h2>
    <h2>gender: {{ gender }}</h2>
    <h2>value: {{ value }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: 'HELLO',
    },
  },
};
</script>

<style>
</style>