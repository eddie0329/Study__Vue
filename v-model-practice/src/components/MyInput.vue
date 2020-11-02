<template>
  <div>
    <h1>{{ value }}</h1>
    <input type="text" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style></style>
