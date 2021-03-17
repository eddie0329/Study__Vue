<template>
  <div>
    <Child v-model="value.baseList" />
  </div>
</template>


<script>
import Child from './Child';

export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { Child },
};
</script>

<style>
</style>