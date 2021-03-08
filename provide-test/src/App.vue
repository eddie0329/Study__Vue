<template>
  <div id="app">
    <button @click="onClick1">HELLO0</button>
    <button @click="onClick2">HELLO1</button>
    <button @click="onClick3">HELLO2</button>
    <button @click="onClick4">HELLO3</button>
  </div>
</template>

<script>
import { debounceWithId } from './custom-debounce';

export default {
  name: 'App',
  methods: {
    onClick1() {
      const mockFunc = () => console.log('HELLO0');
      debounceWithId(mockFunc, 1000, 'hello0')();
    },
    onClick2() {
      const mockFunc = () => console.log('HELLO1');
      debounceWithId(mockFunc, 1000, 'hello1')();
    },
    onClick3() {
      const mockFunc = () => console.log('HELLO2');
      debounceWithId(mockFunc, 1000, 'hello2')();
    },
    onClick4() {
      const mockFunc = () => console.log('HELLO3');
      debounceWithId(mockFunc, 1000, 'hello3')();
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
