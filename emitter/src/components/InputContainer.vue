<template>
  <div>
    <PrivatePref @focus="onFocus" />
  </div>
</template>

<script>
import PrivatePref from './PrivatePref';

export default {
  name: 'InputContainer',
  components: { PrivatePref },
  methods: {
    onFocus(name) {
      this.$emit('focus', name);
    },
  },
};
</script>

<style>
</style>