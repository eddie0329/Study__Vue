<template>
  <hr />
  <h1>Shallow Reactive Practice</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { shallowReactive, isReactive } from 'vue';

export default {
  setup() {
    const state = shallowReactive({ foo: 0, nested: { bar: 2 } });

    const onClick = () => {
      console.log('isReactive(state', isReactive(state)); // true
      console.log('isReactive(state.foo)', isReactive(state.foo)); // false
      console.log('isReactive(state.foo.nested)', isReactive(state.foo.nested)); // false
    };

    return {
      onClick
    };
  }
};
</script>

<style></style>
