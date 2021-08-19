<template>
  <div><slot /></div>
</template>

<script>
export default {
  name: 'Provider',
  props: {
    initialState: { type: Object, default: () => ({}) },
  },
  data() {
    return this.initialState;
  },
  provide() {
    return {
      state: this.$data,
      dispatch: this.dispatch,
    };
  },
  methods: {
    /** @typeDef Action {{ type: string, payload: any }} */
    /** 
     * @param {Action} action
     */
    dispatch(action) {
      switch(action.type) {
        case 'changeTitle': 
          this.title = action.payload;
          break;
        case 'changeTemp':
          this.temp = 'this';
          break;
        case 'changeCompleted':
          this.completed = action.payload;
          break;
        default:
          throw new Error('No Type Matched');
      }
    },
  },
};
</script>
