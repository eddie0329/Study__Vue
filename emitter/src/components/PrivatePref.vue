<template>
  <div>
    <TextInput @focus="onFocus" />
  </div>
</template>

<script>
import TextInput from './TextInput';

export default {
  name: 'PrviatePref',
  components: { TextInput },
  methods: {
    onFocus(name) {
      this.$emit('focus', name);
    }
  },
};
</script>

<style>
</style>