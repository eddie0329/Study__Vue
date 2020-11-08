<template>
  <input type="text" :value="modelValue" @input="onInput" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit('update:model-value', e.target.value);
    }
  }
}
</script>
