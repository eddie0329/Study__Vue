<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  setup(props, context) {
    const onClick = () => {
      context.emit('click');
    };
    return {
      onClick
    };
  }
};
</script>

<style></style>
