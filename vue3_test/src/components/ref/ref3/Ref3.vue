<template>
  <div class="block">
    <h1>Ref3</h1>
    <div>{{ infos }}</div>
    <Ref3Child v-for="(info, index) in infos" :info="info" :key="index" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Ref3Child from './Ref3Child.vue';

const infos = ref([
  { name: 'eddie' },
  { name: 'jack' },
  { name: 'sam' },
  { name: 'claire' },
]);

</script>

<style>

</style>