<template>
  <GrandChild />
</template>

<script>
import GrandChild from './GrandChild';

export default {
  name: 'Child',
  components: {
    GrandChild,
  },
};
</script>

<style>
</style>