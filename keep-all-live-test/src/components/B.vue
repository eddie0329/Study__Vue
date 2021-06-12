<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="onClick">CLick</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'b',
  }),
  methods: {
    onClick() {
      this.title = 'bb';
    }
  },
};
</script>

<style></style>
