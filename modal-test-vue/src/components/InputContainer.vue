<template>
  <div>
    <input type="text" :value="name" />
    <button @click="onClick">CLICK ME!!!</button>
  </div>
</template>

<script>
import HelloModal from './HelloModal';

export default {
  data: () => ({
    name: '',
  }),
  methods: {
    async onClick() {
      this.name = await this.$modal(HelloModal);
    },
  },
};
</script>

<style>
</style>