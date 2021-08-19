<template>
  <Child3 :value="value" />
</template>

<script>
import Child3 from './Child3.vue';

export default {
  components: { Child3 },
  props: {
    value: { type: Object, default: () => ({}) },
  },
}
</script>

<style>

</style>