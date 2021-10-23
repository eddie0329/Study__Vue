<template>
  <div><slot /></div>
</template>

<script>
import { providerFactory } from './provider';

export default {
  name: 'Provider',
  provide() {
    const state = {
      count: 0
    };
    const getters = {
      double: state => state.count * 2
    };
    const mutations = {
      increment(state) {
        state.count += 1;
      },
      decrement(state) {
        state.count -= 1;
      }
    };
    return providerFactory({ state, getters, mutations });
  }
};
</script>
