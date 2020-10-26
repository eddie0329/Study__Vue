<template>
  <hr />
  <h1>ReactivePractice</h1>
  <h3>{{ obj.count }}</h3>
  <button @click="onClickPlus">+</button>
  <button @click="onClickMinus">-</button>
  <hr />
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const obj = reactive({ count: 0 });
    const copy = obj.count;

    const onClickPlus = () => {
      obj.count++;
      console.log('obj.count === copy.count', obj.count === copy);
    };
    const onClickMinus = () => {
      obj.count--;
    };
    return {
      obj,
      onClickMinus,
      onClickPlus,
    };
  },
};
</script>

<style>
</style>