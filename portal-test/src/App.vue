<template>
  <div id="app">
    <MyNavigation />
    <Depth1 />
  </div>
</template>

<script>
import Depth1 from './components/Depth1';
import MyNavigation from './components/MyNavigation';

export default {
  name: 'App',
  components: {
    Depth1,
    MyNavigation,
  },
};
</script>

<style></style>
