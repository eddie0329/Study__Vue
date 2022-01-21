<template>
  <div id="app">
    <button @click="onPush">+</button>
    <button @click="onPop">-</button>
    <div v-for="(t, idx) in temp" :key="idx">{{ t }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    temp: [],
    number: 0,
  }),
  methods: {
    onPush() {
      this.temp.push(this.number++);
    },
    onPop() {
      this.temp.pop();
    }
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
