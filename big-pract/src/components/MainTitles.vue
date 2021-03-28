<template>
  <div main-titles>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "MainTitles",
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="less" scoped>
@import '~@/less/proj';

[main-titles] {
  .flex;
  .flex-ai;
  h1 {
    .fs(32);
    .color(#191919);
    .mr(8);
  }
  h2 {
    .fs(16);
    .color(#a4a3ae);
  }
}
</style>
