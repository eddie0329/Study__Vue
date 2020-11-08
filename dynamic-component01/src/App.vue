<template>
  <div id="app">
    <div>
      <button @click="onClickMyButton">MyButton</button>
      <button @click="onClickMyDiv">MyDiv</button>
    </div>
    <div v-for="(a, index) of arr" :key="index">
      <component :is="a"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    current: 'MyButton',
    arr: ['MyButton'],
  }),
  components: {
    MyButton: () => import('./components/MyButton'),
    MyDiv: () => import('./components/MyDiv')
  },
  methods: {
    onClickMyButton() {
      this.arr = ['MyButton'];
    },
    onClickMyDiv() {
      setTimeout(() => {
        this.arr = ['MyButton', 'MyDiv'];
      }, 1000);
    }
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
