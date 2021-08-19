<template>
  <div id="app">
    <Provider :initialState="getInputs()">
      <Child1 />
    </Provider>
  </div>
</template>

<script>
import Provider from './components/Provider.vue';
import Child1 from './components/Child1.vue';

export default {
  name: 'App',
  components: { Provider, Child1 },
  methods: {
    getInputs() {
      return {
        test: 'aaa',
        title: '',
        temp: 'helo',
        completed: false,
      };
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
