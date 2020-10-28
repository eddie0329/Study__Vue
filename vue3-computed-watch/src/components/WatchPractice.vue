<template>
  <hr />
  <h1>Watch Practice 1</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { watch, ref } from 'vue';

export default {
  setup() {
    const count1 = ref(0);
    const count2 = ref(0);

    watch([count1, count2], ([count1, count2], [prevCount1, prevCount2]) => {
      console.log('count1', count1);
      console.log('prevCount1', prevCount1);
      console.log('count2', count2);
      console.log('prevCount2', prevCount2);
    });

    const onClick = () => {
      count1.value++; // count1 1 prevCount1 2 count2 0 prevCount2 0
    };

    return {
      onClick
    };
  }
};
</script>

<style></style>
