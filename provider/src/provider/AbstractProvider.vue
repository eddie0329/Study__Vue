<template>
  <div><slot /></div>
</template>

<script>
export default {
  name: 'AbstractProvider',
  provide() {
    return {
      state: this.$data,
      dispatch: this.dispatch
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
