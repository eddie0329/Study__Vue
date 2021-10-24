<template>
  <div>
    <h1>COUNT: {{ count }}</h1>
    <h2>DOUBLE: {{ double }}</h2>
    <button @click="inc(2)">+</button>
    <button @click="dec(2)">-</button>
  </div>
</template>

<script>
import { mapContextState, mapContextGetters, mapConetextMutations } from '../utils/providerMixin';

export default {
  mixins: [
    mapContextState(['count']),
    mapContextGetters({ double: 'double' }),
    mapConetextMutations({ inc: 'increment', dec: 'decrement' })
  ]
};
</script>

<style></style>
