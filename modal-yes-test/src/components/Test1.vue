<template>
  <div>
    <h1>Test1</h1>
    <h2>name: {{ name }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Test1',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>
