<template>
  <div id="app">
    <context-provider>
      <Child1 />
    </context-provider>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue';
import {ContextProvider} from './provider/counterProvider';

export default {
  name: 'App',
  provide() {
    return {
      count: 0,
      double: 2,
    }
  },
  components: { Child1 , ContextProvider },
  created() {
    console.log(ContextProvider);
  }
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
