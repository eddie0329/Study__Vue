<template>
  <div arena-container>
    <h1>HELLO</h1>
    <ArenaCard class="arena-card" v-for="num in 10" :key="num" />
  </div>
</template>

<script>
import ArenaCard from '../ArenaCard.vue';

export default {
  name: 'ArenaContainer',
  components: { ArenaCard }
};
</script>

<style lang="less">
@import '~@/less/proj.less';

[arena-container] {
  .p(60, 58, 0);
  .arena-card {
    .fl;
    width: calc((100% - 32px) / 3);
    .mr(16);
    .mb(20);
    &:nth-of-type(3n) {
      .mr(0);
    }
  }

  @media (max-width: @screen-lg-min) {
    .p(0, 20);
    h1 {
      .color(red);
    }
    .arena-card {
      width: calc((100% - 32px) / 2);
      &:nth-of-type(3n) {
        .mr(16);
      }
      &:nth-of-type(2n) {
        .mr(0);
      }
    }
  }
  @media (max-width: @screen-md-min) {
    .p(0, 20);
    h1 {
      .color(blue);
    }
    .arena-card {
      .w(100%);
    }
  }
}
</style>
