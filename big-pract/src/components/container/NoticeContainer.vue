<template>
  <section notice-container>
    <MainTitles title="Notice" sub-title="notice" />
    <Notice class="notice" />
    <div class="streaming-wrapper">
      <StreamingBar
        class="streaming-each"
        v-for="link in streamLinks"
        :key="link"
        :streaming-type="link"
      />
    </div>
  </section>
</template>

<script>
import MainTitles from '../MainTitles';
import Notice from '../Notice';
import StreamingBar from '../StreamingBar';

export default {
  name: 'NoticeContainer',
  components: { MainTitles, Notice, StreamingBar },
  data: () => ({
    streamLinks: ['youtube', 'twitch', 'discord', 'afreeca']
  })
};
</script>

<style lang="less" scoped>
@import '~@/less/proj';

[notice-container] {
  .notice {
    .mb(60);
  }
  .streaming-each {
    .mb(16);
  }
  @media (max-width: @screen-lg-min) {
    .notice {
      width: calc(100% - 16px - 446px);
      .fl;
      .clear;
      .mr(16);
    }
    .streaming-wrapper {
      width: 446px;
      .fl();
      .clear;
    }
  }
  @media (max-width: @screen-md-min) {
    .notice {
      float: none;
      .w(100%);
    }
    .streaming-wrapper {
      float: none;
      .w(100%);
    }
  }
}
</style>
