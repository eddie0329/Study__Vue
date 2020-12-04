<template>
  <div id="app">
    <MyNavigation />
    <Depth1 />
    <test-comp-1></test-comp-1>
  </div>
</template>

<script>
import Depth1 from './components/Depth1';
import MyNavigation from './components/MyNavigation';
import TestComp1 from './components/TestComp1.vue';

export default {
  name: 'App',
  components: {
    Depth1,
    MyNavigation,
    TestComp1,
  },
};
</script>

<style></style>
