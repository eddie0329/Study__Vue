<template>
  <hr />
  <div>{{ count }}</div>
  <button @click="onClickPlus">+</button>
  <button @click="onClickMinus">-</button>
  <hr />
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';

interface Data {
  [key: string]: unknown;
}

export default defineComponent({
  setup(props: Data, context: SetupContext): Data {
    const count = ref<number>(0);
    const onClickPlus = () => {
      count.value++;
    };
    const onClickMinus = () => {
      count.value--;
    };

    

    return {
      count,
      onClickPlus,
      onClickMinus
    };
  }
});
</script>

<style></style>
