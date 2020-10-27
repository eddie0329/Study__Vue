<template>
  <hr />
  <h1>Trigger Ref Practice</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import { shallowRef, triggerRef, watchEffect } from 'vue';

export default {
  setup() {
    const shallow = shallowRef({
      greet: 'HELLO'
    });

    watchEffect(() => {
      console.log(shallow.value.greet); // only log HELLO
    });
    shallow.value.greet = 'HI'; // no log

    const onClick = () => {
      triggerRef(shallow); // log HI
    };
    return {
      onClick
    };
  }
};
</script>

<style></style>
