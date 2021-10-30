<template>
  <div>
    <h1>CHILD2: COUNT: {{ count }}</h1>
    <Child3 />
  </div>
</template>

<script>
import { mapContextState } from '../provider/counterProvider';
import Child3 from './Child3.vue';

export default {
  components: { Child3 },
  mixins: [mapContextState(['count'])],
};
</script>

<style></style>
