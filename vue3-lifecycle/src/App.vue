<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { onMounted, nextTick, onUpdated } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    console.log('before created');
    console.log('created');
    nextTick(() => {
      console.log('nextTick');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('update');
    });

    // RESULT:
    // before created
    // created
    // onMounted
    // nextTick
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
