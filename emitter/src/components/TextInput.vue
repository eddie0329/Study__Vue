<template>
  <div>
    <input type="text" @focus="onFocus" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  methods: {
    onFocus() {
      const name = 'eddie';
      this.$emit('focus', name);
    },
  },
};
</script>
