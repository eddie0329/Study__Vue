<template>
  <div>
    <h1>parent: {{ foo }}</h1>
    <Child />
  </div>
</template>

<script>
import Child from './Child';

export default {
  name: 'Parent',
  components: {
    Child,
  },
  data: () => ({
    name: 'eddie'
  }),
  provide: {
    foo: 'bar',
  },
};
</script>

<style>
</style>