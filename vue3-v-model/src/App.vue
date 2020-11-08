<template>
  <h1>{{ name }}</h1>
  <h1>{{ lastName }}</h1>
  <!-- <MyInput v-model="name"/> -->
  <MyName v-model:first-name="name" v-model:last-name="lastName"/>
</template>

<script>
// import MyInput from './components/MyInput';
import MyName from './components/MyName';

export default {
  name: 'App',
  data: () => ({
    name: "eddie",
    lastName: 'choi',
  }),
  components: {
    // MyInput,
    MyName
  },
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
