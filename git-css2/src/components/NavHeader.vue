<template>
  <header nav-header>
    <h1 class="logo">GIT</h1>
    <ul>
      <li>Pulls</li>
      <li>Issues</li>
      <li>Marketplace</li>
      <li>Explore</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'NavHeader'
};
</script>

<style lang="less" scoped>
@import '~@/less/proj.less';
[nav-header] {
  .flex();
  .flex-ai();
  .p(16px);
  .bgc(#24292e);
  .h(62px);
  .-box();
  .logo {
    .color(white);
  }
  ul li {
    .inline-flex();
    .color(white);
    .semi-bold();
    .mr(16px);
  }

  @media (max-width: @screen-md-min) {
    .logo {
      order: 1;
    }
    ul {
      .contain('@{img}/ico_hamberger.svg');
    }
  }
}
</style>
