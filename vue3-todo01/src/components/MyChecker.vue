<template>
  <input type="checkbox" @input="onInput" v-model="isChecked" />
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const isChecked = ref(props.modelValue);
    const onInput = () => {
      context.emit('update:modelValue', !isChecked.value);
    };
    return {
      isChecked,
      onInput
    };
  }
};
</script>
