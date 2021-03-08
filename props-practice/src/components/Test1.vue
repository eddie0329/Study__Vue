<template>
  <div>
    <h1>TEST1</h1>
    <h2>name: {{ name }}</h2>
    <h2>gender: {{ gender }}</h2>
    <h2>value: {{ value }}</h2>
    <input type="text" :value="value" @input="onInput" />
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
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style>
</style>