<template>
  <div id="app">
    <CheckButton :value="isDone" @input="onInput" />
  </div>
</template>

<script>
import CheckButton from './components/CheckButton';

export default {
  name: 'App',
  data: () => ({
    isDone: false
  }),
  components: {
    CheckButton
  },
  methods: {
    onInput(e) {
      console.log("HELLO");
      console.log(e);
    }
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
