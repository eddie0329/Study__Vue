<template>
  <div id="app">
    <div v-for="(els, index) in map" :key="index">
      <component v-for="(el, index2) in els" :key="index2" :is="el.compName" v-model="el.props" />
    </div>
  </div>
</template>

<script>
import dataLoader from './service/utils';
import UserDataMapper from './data/UserDataMapper';
import TestInput from './components/TestInput';

export default {
  name: 'App',
  components: { TestInput },
  data: () => ({
    map: null,
  }),
  async created() {
    const res = await dataLoader(UserDataMapper, this.$services.user.getUsers());
    console.log(res);
    this.map = res;
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
