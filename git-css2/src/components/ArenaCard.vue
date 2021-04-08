<template>
  <div arena-card>
    <div class="image-content"></div>
    <ArenaInfo />
  </div>
</template>

<script>
import ArenaInfo from './ArenaInfo.vue';

export default {
  name: 'ArenaCard',
  components: { ArenaInfo }
};
</script>

<style lang="less">
@import '~@/less/proj.less';

[arena-card] {
  .pointer;
  .h(340);

  .image-content {
    .br-t(20);
    .h(233);
    .bgc(black);
  }
}
</style>
