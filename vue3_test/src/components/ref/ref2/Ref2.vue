<template>
<div class="block">
  <h1>Ref2</h1>
  <div>{{ info }}</div>
  <Ref2Child :info="info" />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Ref2Child from './Ref2Child.vue';

const info = ref({ name: 'eddie' });
</script>

<style>

</style>