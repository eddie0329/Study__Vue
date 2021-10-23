<template>
  <div id="app">
    <provider>
      <Child1 />
    </provider>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue';
import Provider from './utils/Provider.vue';

export default {
  name: 'App',
  components: { Child1, Provider },
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
