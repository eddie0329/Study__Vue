<template>
  <div id="app">
    <div class="holder" v-for="(els, index) in map" :key="index">
      <component v-for="(el, index2) in els" :key="`${index}-${index2}`" :is="el.compName" v-model="el.props" />
    </div>
  </div>
</template>

<script>
import dataLoader from './service/dataLoader';
import UserDataMapper from './data/UserDataMapper';
import TestInput from './components/TestInput';

export default {
  name: 'App',
  components: { TestInput },
  data: () => ({
    map: null,
  }),
  async created() {
    this.map = await dataLoader(UserDataMapper, this.$services.user.getUsers());
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
.holder {
  box-sizing: border-box;
  border: 1px solid black;
  padding: 5px;
}
.holder + .holder {
  margin-top: 10px;
}
</style>
