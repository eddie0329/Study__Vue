<template>
  <div class="block">
    <h1>Reactive1</h1>
    <div>{{ state }}</div>
    <Reactive1Child :info="state.info" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Reactive1Child from './Reactive1Child.vue';

const state = reactive({
  info: {
    name: 'eddie',
  },
});
</script>
