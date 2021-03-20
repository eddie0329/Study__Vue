<template>
  <div>
    <h1 v-if="!isLoaded">LOADING !!!!</h1>
    <button @click="onClick">HELLO CLICK ME</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data: () => ({
    isLoaded: false,
  }),
  methods: {
    emit() {
      return new Promise((resolve) => {
        this.$emit('click', resolve);
      });
    },
    async onClick() {
      await this.emit();
      this.isLoaded = true;
      console.log('BYE');
    },
  },
};
</script>

<style>
</style>