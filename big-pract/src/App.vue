<template>
  <div id="app" app>
    <NoticeContainer class="notice-container" />
    <AboutContainer class="about-container" />
    <ArenaContainer />
  </div>
</template>

<script>
import NoticeContainer from './components/container/NoticeContainer';
import AboutContainer from './components/container/AboutContainer';
import ArenaContainer from './components/container/ArenaContainer';

export default {
  name: 'App',
  components: {
    NoticeContainer,
    AboutContainer,
    ArenaContainer
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
    .fr;
    .clear;
    width: calc(100% - 57px - 375px);
    .mr(57);
    .mb(20);
  }
  .notice-container {
    .fr;
    .clear;
    .w(375);
  }

  [arena-container] {
    .fr;
    .clear;
    width: calc(100% - 57px - 300px);
    .mr(57);
  }

  @media (max-width: @screen-xl-min) {
    .p(50, 58);
    .about-container {
      width: calc(100% - 57px - 300px);
    }
    .notice-container {
      .w(300);
    }
  }

  @media (max-width: @screen-lg-min) {
    .p(40, 58);
    .about-container {
      float: none;
      .w(100%);
    }
    .notice-container {
      float: none;
      .w(100%);
    }
    [arena-container] {
      float: none;
      .w(100%);
    }
  }
  @media (max-width: @screen-md-min) {
    .p(20, 40);
  }
}
</style>
