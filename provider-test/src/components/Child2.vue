<template>
  <div>
    <h1>COUNT CHILD2: {{ count }}</h1>
    <h1>DOUBLE CHILD2: {{ double }}</h1>
    <hr />
    <Child3 />
  </div>
</template>

<script>
import Child3 from './Child3.vue';
import { mapState, mapGetters } from '../utils/providerMixin';

export default {
  components: { Child3 },
  mixins: [mapState({ count: 'count' }), mapGetters({ double: 'double' })]
};
</script>

<style></style>
