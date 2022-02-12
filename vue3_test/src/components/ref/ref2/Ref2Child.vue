<template>
  <div>
    <input type="text" :value="info.name" @input="e => onInput(e)" />
  </div>
  <div>
    <button @click="onChange">CHANGE!</button>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue';

const props = defineProps({
  info: { type: Object, default: () => ({}) },
});

const info = toRef(props, 'info');

const onChange = () => {
  if (info.value.name === 'eddie') info.value.name = 'sam';
  else info.value.name = 'eddie';
};
const onInput = (e) => info.value.name = e.target.value;
</script>

<style>

</style>