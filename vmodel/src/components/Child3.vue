<template>
<div>
  <TextInput v-model="value.aaa" />
  <TextInput v-model="value.bbb" />
  <TextInput v-model="value.ccc" />
  <TextInput v-model="value.ddd" />
  <button @click="onClick">onClick</button>
</div>
</template>

<script>
import TextInput from './TextInput.vue';

export default {
  props: {
    value: { type: Object, default: () => ({}) },
  },
  components: {TextInput},
  methods: {
    onClick() {
      this.value.aaa = "test";
    }
  },
}
</script>

<style>

</style>