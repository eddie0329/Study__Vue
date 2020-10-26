<template>
  <div id="app">
    <button @click="onClickHello">HELLO</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('gtm', this.$gtm);
  },
  methods: {
    onClickHello() {
      this.$gtm.trackEvent({
        category: 'testCategory',
        action: 'testClick',
        label: 'testLabel',
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
