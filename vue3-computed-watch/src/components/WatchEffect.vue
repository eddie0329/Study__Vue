<template>
  <hr />
  <h1>WatchEffect test</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { watchEffect, ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => console.log(count.value)); // when created log 0;

    let timeout;
    const onClick = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        count.value++; // console.log(1) by watchEffect
      }, 1000);
    };

    return {
      onClick
    };
  }
};
</script>

<style></style>
