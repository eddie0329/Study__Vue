<template>
  <div id="app">
    <InputProvider>
      <Child1 />
    </InputProvider>
  </div>
</template>

<script>
import InputProvider from './provider/InputsProvider.vue';
import Child1 from './components/Child1.vue';

export default {
  name: 'App',
  components: { InputProvider, Child1 },
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
