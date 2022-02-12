<template>
  <div class="block">
    <h1>EmitContainer</h1>
    <EmitChild @clicked="onClick" />
  </div>
</template>

<script setup>
import EmitChild from './EmitChild.vue';

const onClick = (payload) => console.log('hello clicked', payload);
</script>
