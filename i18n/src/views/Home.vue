<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ i18n.i18n.HEADER }}</h1>
    <h2>{{ i18n.i18n.GREETING }}</h2>
    <h3>{{ i18n.i18n.MY_ARENA }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log('home i18n', this.i18n);
  },
  inject: ['i18n']
};
</script>
