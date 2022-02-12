<template>
  <div>
    <input
      type="text"
      :value="info.name"
      @input="(e) => onInput(e)"
    />
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue';

const props = defineProps({
  info: { type: Object, default: () => ({}) },
});

const info = toRef(props, 'info');

const onInput = (e) => info.value.name = e.target.value;
</script>

<style>

</style>