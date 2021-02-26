<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ i18n.MY_ARENA }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  inject: ['i18n'],
  created() {
    console.log(this.i18n);
  }
};
</script>
