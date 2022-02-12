<template>
  <div>{{props}}</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({ 
  name: { type: String, default: '' },
  age: { type: Number, default: 0 },
});
</script>
