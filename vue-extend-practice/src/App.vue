<template>
  <div id="app">
    <ButtonPrimary />
    <ButtonSecondary />
  </div>
</template>

<script>
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';

export default {
  name: 'App',
  components: {
    ButtonPrimary,
    ButtonSecondary,
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
