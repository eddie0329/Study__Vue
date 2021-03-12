<template>
  <div>
    <h1>TEST1</h1>
    <h2>name: {{ name }}</h2>
    <h2>gender: {{ gender }}</h2>
    <h2>value: {{ value }}</h2>
    <input type="text" :value="value.address" @input="onInput" />
    <button @click="$emit('click')">CLICK</button>
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
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onInput(e) {
      const temp = {
        ...this.value,
        address: e.target.value,
      };
      this.$emit('input', temp);
    },
  },
};
</script>

<style>
</style>