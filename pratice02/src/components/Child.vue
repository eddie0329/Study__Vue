<template>
  <div>
    <div v-for="base in value" :key="base.id">
      <h1>{{ base.title }}</h1>
      <component :is="base.type" v-model="base.kv"></component>
    </div>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep';
import TextInput from './TextInput';

export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: { TextInput },
  methods: {
    onInput(newValue, index) {
      const clonedBaseList = _cloneDeep(this.value);
      clonedBaseList[index].kv = newValue;
      this.$emit('input', clonedBaseList);
    },
  },
};
</script>

<style>
</style>