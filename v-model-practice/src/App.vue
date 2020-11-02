<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyInput v-model="temp" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyInput from './components/MyInput';

export default {
  name: 'App',
  data: () => ({
    temp: 'HELLO'
  }),
  components: {
    HelloWorld,
    MyInput
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
