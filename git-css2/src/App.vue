<template>
  <div id="app">
    <ArenaContainer />
  </div>
</template>

<script>
import ArenaContainer from './components/container/ArenaContainer';

export default {
  name: 'App',
  components: { ArenaContainer }
};
</script>

<style lang="less">
@import '~@/less/proj.less';
* {
  .p(0);
  .m(0);
  letter-spacing: 0;
  word-break: keep-all;
  word-wrap: break-word;
}
</style>
