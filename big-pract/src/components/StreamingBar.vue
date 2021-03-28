<template>
  <div streaming-bar :class="[streamingType]">
    <div class="stream-name">JooBori {{ streamingType }}</div>
    <div class="follower">follower 29.2k</div>
  </div>
</template>

<script>
export default {
  name: 'StreamingBar',
  props: {
    streamingType: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/less/proj';

[streaming-bar] {
  .flex;
  .flex-ai;
  .h(84);
  .br(12);
  .color(white);
  .p(20, 14);
  .-box;
  .pointer;

  .stream-name {
    .fs(20);
    .bold;
    .ml(6);
    margin-right: auto;
  }

  .follower {
    .fs(14);
    .o(0.7);
  }
  &.youtube {
    &:before {
      .cnt;
      .w(56);
      .h(56);
      .contain('@{img}/Icon_Youtube.svg');
    }
    .bgc(red);
  }
  &.discord {
    &:before {
      .cnt;
      .w(56);
      .h(56);
      .contain('@{img}/Icon_Discord.svg');
    }
    .bgc(blue);
  }
  &.twitch {
    &:before {
      .cnt;
      .w(56);
      .h(56);
      .contain('@{img}/Icon_Twitch.svg');
    }
    .bgc(purple);
  }
  &.afreeca {
    &:before {
      .cnt;
      .w(56);
      .h(56);
      .contain('@{img}/Icon_Afreeca.svg');
    }
    .bgc(skyblue);
  }
}
</style>
