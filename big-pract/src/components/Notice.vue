<template>
  <div notice>
    <NoticeHeader />
    <div class="notice-content">
      HELLO MY NAME IS EDIDIEDweklfmskdlmklszdmklsdmfv
      dsfvmdslfkmvklsdfmvlksmdfv sdfklvsm,dflkvmsldkfvmsdf
      vskldfmvklsdfmvklsdv fkamdflkasmdlkasmdlkasmd askldmaslkdmaslkdmak blsmdklas
      kla smdlkasmdlkasmdl kasmdaskmdlkasmd klmqwdklqwmdklqw
      askldmlkqwmdlkqwmdlkqwmdklqwdmqwkmdqw qwdkmqwlkdmkqwd
    </div>
  </div>
</template>

<script>
import NoticeHeader from './NoticeHeader';

export default {
  name: 'Notice',
  components: { NoticeHeader }
};
</script>

<style lang="less" scoped>
@import '~@/less/proj';

[notice] {
  .br(20);
  .bgc(#f5f5f6);

  .notice-content {
    .p(20, 20, 48, 20);
    .fs(14);
    text-overflow: ellipsis;
    white-space: pre-line;
  }
}
</style>
