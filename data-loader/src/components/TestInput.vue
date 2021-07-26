<template>
  <div>
    <h6>{{ title }}</h6>
    <input type="text" v-model="value.v">
  </div>
</template>

<script>
import _get from 'lodash/get';

export default {
  name: 'TestInput',
  props: {
    value: { type: Object, default: () => ({})},
  },
  computed: {
    title() { return _get(this.value, 'title', ''); },
  },
}
</script>

<style>
h6 { color: red; }
</style>
