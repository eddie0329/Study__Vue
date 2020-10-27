<template>
  <hr />
  <h1>Custom Ref Practice</h1>
  <input v-model="text" />
  <h2>{{ text }}</h2>
  <hr />
</template>

<script>
import { customRef } from 'vue';

const useDebouncedRef = (value, delay = 200) => {
  let timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
};

export default {
  setup() {
    return {
      text: useDebouncedRef('helllo', 1000)
    };
  }
};
</script>

<style></style>
