<template>
  <hr>
  <h1>ToRawPractice</h1>
  <button @click="onClick">CLICK</button>
  <hr>
</template>

<script>
import { reactive, toRaw, readonly } from 'vue';

export default {
  setup() {
    const state = reactive({ count: 0 });
    const readOnly = readonly({ count: 0 });
    const rawState = toRaw(state);
    const copyRawStateCount = rawState.count;
    const rawReadOnly = toRaw(readOnly);
    const copyRawReadOnlyCount = rawReadOnly.count;

    const onClick = () => {
      console.log('rawState.count === copyRawStateCount', rawState.count === copyRawStateCount); // true
      console.log('rawReadOnly.count === copyRawReadOnlyCount', rawReadOnly.count === copyRawReadOnlyCount); // true
    };

    return {
      onClick
    }
  }
}
</script>

<style>

</style>