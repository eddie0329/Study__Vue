<template>
  <div>
    <h1>Depth3</h1>
    <portal to="logo">Hello Logo</portal>
    <portal to="title">Hello title</portal>
  </div>
</template>

<script>
import { Portal } from 'portal-vue';

export default {
  components: {
    Portal,
  },
};
</script>

<style scoped>
.my-nav {
  background: red;
  width: 100%;
  height: auto;
}
</style>