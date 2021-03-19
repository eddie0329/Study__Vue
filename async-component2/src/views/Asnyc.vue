<template>
  <div>
    <h1>ASYNC</h1>
    <async-component value="eddie"></async-component>
  </div>
</template>

<script>
import Hello from '../components/Hello';
import Loading from '../components/Loading';

const AsyncComponent = () => ({
  component: new Promise((resolve) => {
    setTimeout(() => {
      resolve(Hello);
    }, 1000);
  }),
  loading: Loading,
  delay: 0,
  timeout: 3000,
});

export default {
  components: { AsyncComponent },
};
</script>

<style>
</style>