<template>
  <div id="teleport"></div>
  <MyDiv01 />
  <MyDiv02 />
</template>

<script>
import MyDiv01 from './components/MyDiv01';
import MyDiv02 from './components/MyDiv02';

export default {
  name: 'App',
  components: {
    MyDiv01,
    MyDiv02
  }
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
