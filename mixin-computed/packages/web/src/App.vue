<template>
  <div id="app">
    <h1>COUNT: {{ count }}</h1>
    <button @click="count += 1">plus</button>
    <button @click="count -= 1">minus</button>
  </div>
</template>

<script>
import mapComputed from './mixins/mapComputed';
import countComputed from './computed/countComputed'

export default {
  name: 'App',
  data: () => ({
    count: 0,
  }),
  mixins: [mapComputed(countComputed, ['double'])],
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
