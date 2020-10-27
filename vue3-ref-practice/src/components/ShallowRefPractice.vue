<template>
  <hr />
  <h1>Shallow Ref Practice</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { shallowRef, isRef } from 'vue';

export default {
  setup() {
    const foo = shallowRef({ value: { bar: 2 } });
    const onClick = () => {
      console.log('isRef(foo)', isRef(foo)); // true
      console.log('isRef(foo.value)', isRef(foo.value)); // false
    };

    return {
      onClick
    };
  }
};
</script>

<style></style>
