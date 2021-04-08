<template>
  <div arena-info>
    <article>
      <div>6월</div>
      <div>28</div>
    </article>
    <div title-wrapper>
      <h3>LUVP Open: League of Legends 2020 Play-off</h3>
      <p><b>24:00 KST &middot; 2v2</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArenaInfo'
};
</script>

<style lang="less">
@import '~@/less/proj.less';
[arena-info] {
  .flex;
  .bgc(#ebebf0);
  .p(17, 16, 14);
  .br-b(20);
  .-box;

  > article {
    .flex;
    .flex-direction(column);
    .flex-jc();
    .flex-ai();
    .bgc(white);
    .wh(52, 75);
    .br(8);
    .mr(12);

    :nth-child(1) {
      .mt(0);
      .fs(14);
      .bold;
      .color(#191919);
      .mb(3);
    }
    :nth-child(2) {
      .mt(0);
      .fs(26);
      .bold;
      .color(#191919);
    }
  }

  [title-wrapper] {
    width: calc(100% - 64px);
    .flex;
    .flex-direction(column);
    .flex-jc;


    > h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: keep-all;
      -webkit-line-clamp: 2;
      .lh(24);
      .mt(0);
      .fs(20);
      .bold;
    }
    > p {
      .color(#a4a3ae);
    }
  }
}
</style>
