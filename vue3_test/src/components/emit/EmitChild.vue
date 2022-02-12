<template>
  <div>
    <button @click="onClick(true)">emit success</button> | {{' '}}
    <button @click="onClick(false)">emit fail</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['clicked']);
const onClick = (payload) => emit('clicked', payload);
</script>
