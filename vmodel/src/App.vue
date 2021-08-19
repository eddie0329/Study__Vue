<template>
  <div id="app">
    <h1>{{temp}}</h1>
    <Child1 v-model="temp" />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue';

export default {
  name: 'App',
  components: {
    Child1,
  },
  data: () => ({
    temp: {
      aaa: '',
      bbb: '',
      ccc: '',
      ddd: '',
    }
  }),
}
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
