<template>
  <div>
    <h2 v-bind="attrs">1</h2>
    <h2>2</h2>
    <h2>3</h2>
    <h2>4</h2>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>

<style scoped>
.emphasis {
  color: red;
}
</style>

