<template>
  <Child2 v-model="value" />
</template>

<script>
import Child2 from './Child2.vue';

export default {
  components: {Child2},
  props: {
    value: { type: Object, default: () => ({})}
  },
}
</script>

<style>

</style>