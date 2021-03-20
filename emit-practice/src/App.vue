<template>
  <div id="app">
    <Child @click="onClick" />
  </div>
</template>

<script>
import Child from './components/Child';

export default {
  name: 'App',
  components: { Child },
  methods: {
    async onClick(childResolve) {
      console.log('HELLO');
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      childResolve();
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
