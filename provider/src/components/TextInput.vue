<template>
  <ValidationProvider :rules="validation" v-slot="{ errors }">
    <label v-if="title" :for="title">{{ title }}</label>
    <input :name="title" v-model="temp" @input="$emit('input', temp)" :type="type" />
    <span>{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: { type: String, default: 'text' },
    value: { required: true },
    title: { type: String, default: '' },
    validation: { type: String, default: '' },
  },
  data: () => ({
    temp: null,
  }),
  created() {
    this.temp = this.value;
  },
}
</script>

<style>

</style>