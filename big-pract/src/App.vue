<template>
  <div id="app" app>
    <AboutContainer class="about-container"/>
    <NoticeContainer class="notice-container" />
  </div>
</template>

<script>
import NoticeContainer from './components/container/NoticeContainer';
import AboutContainer from './components/container/AboutContainer';

export default {
  name: 'App',
  components: {
    NoticeContainer,
    AboutContainer
  }
};
</script>

<style lang="less">
@import '~@/less/proj';

* {
  .p;
  .m;
  letter-spacing: 0;
  word-break: keep-all;
  word-wrap: break-word;
}

[app] {
  .p(64, 320);

  .about-container {
    .fl;
    .clear;
    width: calc(100% - 57px - 375px);
    .mr(57);
  };
  .notice-container {
    .fl;
    .clear;
    .w(375);
  };

  @media (max-width: @screen-lg-min) {
    .p(40, 58);
    .about-container {
      float: none;
      .w(100%);
    };
    .notice-container {
      .w(100%);
    };
  }
  @media (max-width: @screen-md-min) {
    .p(20, 40);
  }
}
</style>
