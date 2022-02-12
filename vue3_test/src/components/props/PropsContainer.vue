<template>
  <div class="block">
    <h1>Props Container</h1>
    <props-child :name="name"></props-child>
  </div>
</template>

<script setup>
import PropsChild from './PropsChild.vue';
import { ref } from 'vue';

const name = ref('Eddie');
</script>
