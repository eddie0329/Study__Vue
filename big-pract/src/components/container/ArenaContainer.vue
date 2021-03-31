<template>
  <section arena-container>
    <div class="arena-card" v-for="id in 2" :key="`card-${id}`"></div>
  </section>
</template>

<script>
export default {
  name: 'ArenaContainer'
};
</script>

<style lang="less">
@import '~@/less/proj';

[arena-container] {
  .flex;
  .arena-card {
    .wh(500, 300);
    .bgc(red);
    & + .arena-card {
      .ml(10);
    }
  }
  @media (max-width: @screen-lg-min) {
    .arena-card {
      .w(100%);
    }
  }
}
</style>
