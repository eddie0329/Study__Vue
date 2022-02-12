<template>
  <div class="block">
    <h1>Ref1</h1>
    <h3>Count: {{ count }}</h3>
    <div>
      <button @click="changeCount(1)">PLUS</button>
      <button @click="changeCount(-1)">MINUS</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(1);

const changeCount = (payload) => {
  count.value = count.value + payload;
};
</script>
