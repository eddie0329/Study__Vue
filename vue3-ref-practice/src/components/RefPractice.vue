<template>
  <hr />
  <h1>Ref Practice</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { ref, unref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const onClick = () => {
      console.log(count);
      //  {
      // __v_isRef: true
      // _rawValue: 1
      // _shallow: false
      // _value: 1
      // }
      count.value++;
      console.log(unref(count)); // 1
    };

    return {
      onClick,
    };
  },
};
</script>

<style>
</style>