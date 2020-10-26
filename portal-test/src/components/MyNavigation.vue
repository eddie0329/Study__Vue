<template>
  <div class="my-nav">
    <portal-target name="logo"></portal-target>
    <portal-target name="title"></portal-target>
    <button>LOGIN</button>
  </div>
</template>

<script>
import { PortalTarget } from 'portal-vue';

export default {
  components: {
    PortalTarget,
  },
};
</script>

<style scoped>
.my-nav {
  width: 100%;
  height: auto;
  background: red;
}
</style>