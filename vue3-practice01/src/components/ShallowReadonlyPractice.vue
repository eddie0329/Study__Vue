<template>
  <hr />
  <h1>ShallowReadonly Practice</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { shallowReadonly, isReadonly } from 'vue';

export default {
  setup() {
    const state = shallowReadonly({ foo: 1, nested: { bar: 2 } });

    const onClick = () => {
      console.log('isReadonly(state)', isReadonly(state)); // true
      console.log('isReadonly(state.foo)', isReadonly(state.foo)); // false
      console.log('isReadonly(state.foo.nested)', isReadonly(state.foo.nested)); // false
    };

    return {
      onClick
    };
  }
};
</script>

<style></style>
