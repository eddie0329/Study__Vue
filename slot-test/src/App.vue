<template>
  <div id="app">
    <!-- <tabs v-slot="{ onClick }">
      <tab @click="onClick">HELLO WOLRD1</tab>
      <tab @click="onClick">HELLO WOLRD2</tab>
    </tabs> -->
    <tabs>
      <div>
        <tab>qweqwe</tab>
        <tab>qweqwe</tab>
      </div>
    </tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs';
import Tab from './components/Tab';

export default {
  name: 'App',
  components: {
    Tabs, 
    Tab
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
