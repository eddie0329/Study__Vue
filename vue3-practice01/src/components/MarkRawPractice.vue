<template>
  <hr>
  <h1>Mark Raw Practice</h1>
  <button @click="onClick">CLICK</button>
  <hr>
</template>

<script>
import { reactive, readonly, markRaw, isProxy } from 'vue';

export default {
  setup() {
    const foo = markRaw({});
    const state = reactive(foo);
    const readOnly = readonly(foo);

    const onClick = ()  => {
      console.log('isProxy(state)', isProxy(state)); // false
      console.log('isProxy(readOnly)', isProxy(readOnly)); // false
    };

    return {
      onClick
    }
  }
}
</script>

<style>

</style>