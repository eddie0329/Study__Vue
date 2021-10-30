<template>
  <div><slot /></div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'AbstractProvider',
  provide() {
    return {
      state: this.$data,
      dispatch: this.dispatch,
      getters: { ...Object.keys((this.$options?.computed ?? {})).reduce((acc, cu) => {
        acc[cu] = Vue.observable(this[cu]);
        return acc;
      }, {}) }
    }
  },
  methods: {
    /** @typedef Action {{ type: string, payload: * }} */
    /**
     * @param {Action} action
     */
    // eslint-disable-next-line no-unused-vars
    dispatch(action) {
      throw new Error('Need to Overide dispatch - Provider');
    },
  },
}
</script>
