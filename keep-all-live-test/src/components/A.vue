<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="onClick">CLick</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'a'
  }),
  methods: {
    onClick() {
      this.title = 'aa';
    }
  }
};
</script>

<style></style>
