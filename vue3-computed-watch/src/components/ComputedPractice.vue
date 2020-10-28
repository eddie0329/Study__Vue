<template>
  <hr />
  <h1>ComputedPractice</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(1);

    const plustTwo = computed({
      get: () => count.value + 2,
      set: val => {
        count.value = val;
      }
    });

    const onClick = () => {
      console.log('count', count.value); // 1
      console.log('plusTwo', plustTwo.value); // 3;
      plustTwo.value = 0;
      console.log('plusTwo', plustTwo.value); // 2
    };

    return {
      onClick
    };
  }
};
</script>

<style></style>
