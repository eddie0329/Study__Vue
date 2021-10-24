<template>
  <Child2 />
</template>

<script>
import Child2 from './Child2.vue';

export default {
  components: { Child2 },
  data() {
    return {
      name: 'eddie',
    }
  },
  provide() {
    return {
      name: this.name
    }
  }
}
</script>

<style>

</style>