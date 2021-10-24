<template>
  <div>
    <h1>COUNT: {{ count }}</h1>
    <h2>DOUBLE: {{ double }}</h2>
    <button @click="inc(2)">+</button>
    <button @click="dec(2)">-</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from '../utils/providerMixin';

export default {
  mixins: [
    mapState({ count: 'count' }),
    mapGetters({ double: 'double' }),
    mapMutations({ inc: 'increment', dec: 'decrement' })
  ]
};
</script>

<style></style>
