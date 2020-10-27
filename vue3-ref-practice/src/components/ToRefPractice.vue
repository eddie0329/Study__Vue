<template>
  <hr />
  <h1>To Ref Practice</h1>
  <button @click="onClick">CLICK</button>
  <button @click="onClick2">CLICK2</button>
  <hr />
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      foo: 1,
      bar: 2,
    });

    const fooRef = toRef(state, 'foo');

    const onClick = () => {
      console.log(state); // { foo: 1, bar: 2 }
      fooRef.value++;
      console.log(state); // { foo: 2, bar: 2 }
    };

    const stateRef = toRefs(state);

    const onClick2 = () => {
      console.log(state); // { foo: 1, bar: 2 }
      stateRef.foo.value++;
      stateRef.bar.value++;
      console.log(state); // { foo: 2, bar: 3 }
    };

    return {
      onClick,
      onClick2,
    };
  },
};
</script>

<style>
</style>