<template>
  <div>
    <portal-target name="simple"></portal-target>
    <portal to="simple">HELLO TEST</portal>
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

<style>
</style>