<template>
  <div id="app">
    <InputContainer />
  </div>
</template>

<script>
import InputContainer from './components/InputContainer';

export default {
  name: 'App',
  components: {
    InputContainer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
