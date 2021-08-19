<template>
  <div>
    <input v-model="temp" @input="$emit('input', temp)" />
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: ''},
  },
  data: () => ({
    temp: '',
  }),
  created() {
    this.temp = this.value;
  }
}
</script>

<style>

</style>