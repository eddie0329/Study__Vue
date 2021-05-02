<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'About',
  data: () => ({
    popEvent: false,
  }),
  mounted() {
    window.addEventListener('popstate', () => {
      this.popEvent = true;
    });
    this.$router.beforeEach((to, from , next) => {
      if (window.popEvent) {
        return;
      }
    });
  },
};
</script>