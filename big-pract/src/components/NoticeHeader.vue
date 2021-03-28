<template>
  <div notice-header>
    <ImgSrc class="user-img" />
    <div class="info-wrapper">
      <h2 class="user-name">JooBori</h2>
      <h3 class="date">2021-03-01</h3>
    </div>
    <button class="more-button">More</button>
  </div>
</template>

<script>
import ImgSrc from './ImgSrc';

export default {
  name: 'NoticeHeader',
  components: { ImgSrc }
};
</script>

<style lang="less" scoped>
@import '~@/less/proj';

[notice-header] {
  .p(20, 20, 0, 20);
  .-box;
  .flex;
  .flex-ai;
  .br(20);
  .bgc(#f5f5f6);

  .info-wrapper {
    margin-right: auto;
  }

  .user-img {
    .w(56);
    .h(56);
    .br(50%);
    .mr(12);
  }

  .user-name {
    .fs(16);
    .color(#191919);
    .mb(9);
  }
  .date {
    .fs(12);
    .color(#a4a3ae);
  }
  .more-button {
    .w(62);
    .h(32);
    .br(29);
    .-a;
  }
}
</style>
