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
      this.name = await this.$modal(HelloModal, { gender: 'male' });
      console.log("HELLO");
    },
  },
};
</script>

<style>
</style>