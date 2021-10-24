<template>
  <div><slot /></div>
</template>

<script>
import { providerFactory } from './provider';

export default {
  name: 'ContextProvider',
  provide() {
    const state = {
      count: 0
    };
    const getters = {
      double: state => state.count * 2
    };
    const mutations = {
      increment(state, payload) {
        state.count += payload;
      },
      decrement(state, payload) {
        state.count -= payload;
      }
    };
    return providerFactory({ state, getters, mutations });
  }
};
</script>
