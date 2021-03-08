<template>
  <div>
    <h1>Test2</h1>
    <h2>gender: {{ gender }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  props: {
    gender: {
      type: String,
      default: ''
    }
  }
};
</script>
